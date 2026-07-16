import test from "node:test"
import assert from "node:assert/strict"
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"

import {
  auditCitations,
  findReviewDependants,
  parseReferenceRegistrySource,
  scanTypedReferences,
} from "../lib/reference-scanner.mjs"

/** @param {(root: string) => Promise<void>} callback @returns {Promise<void>} */
async function withTempRoot(callback) {
  const root = await mkdtemp(path.join(os.tmpdir(), "legal-reference-"))
  try {
    return await callback(root)
  } finally {
    await rm(root, { recursive: true, force: true })
  }
}

/** @param {string} root @param {string} relative @param {string} source @returns {Promise<void>} */
async function writeSource(root, relative, source) {
  const file = path.join(root, relative)
  await mkdir(path.dirname(file), { recursive: true })
  await writeFile(file, source, "utf8")
}

test("scans same-file authors and records articleRange endpoints without expanding the range", async () => {
  await withTempRoot(async (root) => {
    await writeSource(root, "app/data/legal-data.ts", [
      'const kpaLaw = createLegalTextAuthor("kpa")',
      'const otherLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")',
      'const content = kpaLaw.text`${kpaLaw.article("10", "Art. 10")}`',
      'const range = otherLaw.text`${otherLaw.articleRange("10", "12")}`',
    ].join("\n"))
    await writeSource(root, "app/data/legal-library/learning/example.ts", "export const example = \"no citation\"\n")

    const result = await scanTypedReferences({ projectRoot: root })
    assert.deepEqual(result.references, {
      "kpa-art-10": [{ file: "app/data/legal-data.ts", line: 3 }],
      "ustawa-o-cudzoziemcach-art-10": [{ file: "app/data/legal-data.ts", line: 4 }],
      "ustawa-o-cudzoziemcach-art-12": [{ file: "app/data/legal-data.ts", line: 4 }],
    })
    assert.deepEqual(result.stats, {
      filesScanned: 2,
      citationCalls: 2,
      provisionReferences: 3,
      provisionsCovered: 3,
    })
    assert.deepEqual(
      findReviewDependants(result.references, ["kpa-art-10", "missing-art-1"]),
      [
        { provisionId: "kpa-art-10", references: [{ file: "app/data/legal-data.ts", line: 3 }] },
        { provisionId: "missing-art-1", references: [] },
      ],
    )
  })
})

test("resolves the createLegalLearningTextAuthor alias in learning files", async () => {
  await withTempRoot(async (root) => {
    await writeSource(root, "app/data/legal-library/learning/example.ts", [
      'const learningLaw = createLegalLearningTextAuthor("kpa")',
      'learningLaw.text`${learningLaw.article("10")}`',
    ].join("\n"))
    const result = await scanTypedReferences({ projectRoot: root })
    assert.deepEqual(result.references, {
      "kpa-art-10": [{ file: "app/data/legal-library/learning/example.ts", line: 2 }],
    })
    assert.equal(result.unsupportedPatterns.length, 0)
  })
})

test("reports unsupported dynamic author and citation patterns instead of guessing", async () => {
  await withTempRoot(async (root) => {
    await writeSource(root, "app/data/legal-data.ts", [
      "const documentId = getDocumentId()",
      "const law = createLegalTextAuthor(documentId)",
      "const number = getArticleNumber()",
      "law.article(number)",
    ].join("\n"))
    const result = await scanTypedReferences({ projectRoot: root })
    assert.equal(result.citations.length, 0)
    assert.ok(result.unsupportedPatterns.length >= 2)
    assert.ok(result.unsupportedPatterns.some((item) => item.pattern.includes("dynamic")))
  })
})

test("attributes ambiguous article numbers from realistic bare and quoted registry keys", async () => {
  await withTempRoot(async (root) => {
    await writeSource(root, "app/data/legal-data.ts", [
      'const kpaLaw = createLegalTextAuthor("kpa")',
      'const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")',
      'kpaLaw.text`${kpaLaw.article("10")}`',
      'foreignersLaw.text`${foreignersLaw.articleRange("10", "12")}`',
    ].join("\n"))
    const registry = [
      "export const legalReferenceRegistry = {",
      "  kpa: {",
      '    currentEditionId: "kpa-2025-1691",',
      '    editionIds: ["kpa-2025-1691"],',
      '    provisionIds: ["kpa-art-10"],',
      "  },",
      '  "ustawa-o-cudzoziemcach": {',
      '    currentEditionId: "ustawa-o-cudzoziemcach-2025-1079",',
      '    editionIds: ["ustawa-o-cudzoziemcach-2025-1079"],',
      '    provisionIds: ["ustawa-o-cudzoziemcach-art-10", "ustawa-o-cudzoziemcach-art-12"],',
      "  },",
      "} as const",
    ].join("\n")
    const registryPath = path.join(root, "reference-registry.generated.ts")
    await writeFile(registryPath, registry, "utf8")

    const parsed = parseReferenceRegistrySource(registry)
    assert.deepEqual([...(parsed.get("10") ?? [])].sort(), ["kpa", "ustawa-o-cudzoziemcach"])
    const result = await auditCitations({ projectRoot: root, registryPath })
    assert.equal(result.stats.ambiguousCitations, 2)
    assert.equal(result.stats.priorityAmbiguousCitations, 2)
    assert.ok(result.packet.includes("`app/data/legal-data.ts` — PRIORITY"))
    assert.ok(result.packet.includes("competing acts: `ustawa-o-cudzoziemcach`"))
    assert.ok(result.packet.includes("chosen act `ustawa-o-cudzoziemcach`; competing acts: `kpa`"))
    assert.ok(result.packet.includes("Files scanned: 1"))
    assert.match(await readFile(registryPath, "utf8"), /kpa:/u)
  })
})
