import fs from "node:fs"
import path from "node:path"
import { createHash } from "node:crypto"
import { generateInventory } from "./ledger.mjs"

const root = process.cwd()
const reviewDirectory = path.join(
  root,
  "docs/content-review/writing-2026-09-05"
)
const output = path.join(reviewDirectory, "inventory.json")
/** @type {{path: string, contentHash: string, evidence: string}[]} */
const reviews = JSON.parse(
  fs.readFileSync(path.join(reviewDirectory, "reviews.json"), "utf8")
)
/** @type {Map<string, string>} */
const files = new Map(
  generateInventory().map((entry) => [entry.path, entry.family])
)
// Include reader-facing copy outside the historical ledger's fixed file lists.
for (const file of fs.readdirSync(path.join(root, "app"), {
  recursive: true,
})) {
  if (
    typeof file !== "string" ||
    !/\.tsx?$/.test(file) ||
    /(?:\.test\.|generated|legal-corpus|route-types)/.test(file)
  )
    continue
  const relative = `app/${file.replaceAll("\\", "/")}`
  if (
    /[\u0400-\u04ff]/u.test(
      fs.readFileSync(path.join(root, relative), "utf8")
    ) &&
    !files.has(relative)
  )
    files.set(
      relative,
      relative.startsWith("app/data/study/topics/")
        ? "study-topic"
        : "supporting-copy"
    )
}
const records = [...files]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([file, family]) => {
    const contentHash = createHash("sha256")
      .update(fs.readFileSync(path.join(root, file)))
      .digest("hex")
    const review = reviews.find(
      (entry) => entry.path === file && entry.contentHash === contentHash
    )
    return {
      path: file,
      family,
      contentHash,
      writing: review ? "reviewed" : "pending",
      evidence: review?.evidence ?? null,
    }
  })
/** @type {Record<string, number>} */
const byFamily = {}
for (const record of records)
  byFamily[record.family] = (byFamily[record.family] ?? 0) + 1
const data = {
  scope:
    "All authored product prose, including explanations, examples, guides, and interface copy. Generated Polish source text is audited separately.",
  skill: "legal-explanatory-writing",
  summary: {
    totalFiles: records.length,
    reviewed: records.filter((record) => record.writing === "reviewed").length,
    byFamily,
  },
  files: records,
}
const serialized = `${JSON.stringify(data, null, 2)}\n`
if (process.argv.includes("--check")) {
  if (fs.readFileSync(output, "utf8") !== serialized)
    throw new Error(
      "Writing inventory is stale. Run node scripts/content-review/writing-inventory.mjs."
    )
} else fs.writeFileSync(output, serialized)
console.log(JSON.stringify(data.summary, null, 2))
