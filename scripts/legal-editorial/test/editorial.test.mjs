import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { test } from "node:test"

import {
  parseEditorialPartSource,
  validateEditorial,
} from "../validate.mjs"

function writeFixture({ partSource, provisions, currentEditions = { alpha: "alpha-1" } }) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "legal-editorial-"))
  const editorialRoot = path.join(root, "editorial")
  const corpusRoot = path.join(root, "corpus")
  const currentEditionsPath = path.join(root, "current-editions.json")
  fs.mkdirSync(path.join(editorialRoot, "alpha"), { recursive: true })
  fs.mkdirSync(path.join(corpusRoot, "alpha-1"), { recursive: true })
  fs.writeFileSync(path.join(editorialRoot, "alpha", "part-00.ts"), partSource)
  fs.writeFileSync(
    path.join(corpusRoot, "alpha-1", "provisions.json"),
    JSON.stringify(provisions),
  )
  fs.writeFileSync(currentEditionsPath, JSON.stringify(currentEditions))
  return { editorialRoot, corpusRoot, currentEditionsPath }
}

const entry = (provisionId, reviewStatus = "reviewed") => `
    {
      provisionId: "${provisionId}",
      reviewStatus: "${reviewStatus}",
      claims: [],
      summary: "summary",
      rules: [],
      legalEffect: "effect",
      foreignersCase: "case"
    }`

const part = ({ documentId = "alpha", editionId = "alpha-1", entries }) => `
import { defineEditorialPart } from "../define-editorial-part"
export const part = defineEditorialPart({
  documentId: "${documentId}",
  editionId: "${editionId}",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [${entries.join(",") }]
})
`

const provisions = [
  { id: "alpha-art-1", documentId: "alpha", editionId: "alpha-1" },
  { id: "alpha-art-2", documentId: "alpha", editionId: "alpha-1" },
]

test("parses a part without executing authored TypeScript", () => {
  const source = part({ entries: [entry("alpha-art-1", "draft")] })
  const parsed = parseEditorialPartSource(source, "part-00.ts")
  assert.equal(parsed.documentId, "alpha")
  assert.equal(parsed.editionId, "alpha-1")
  assert.deepEqual(parsed.entries.map(({ provisionId, reviewStatus }) => ({ provisionId, reviewStatus })), [
    { provisionId: "alpha-art-1", reviewStatus: "draft" },
  ])
})

test("parses entries containing authored legal-text templates", () => {
  const source = part({
    entries: [
      entry("alpha-art-1").replace(
        'summary: "summary"',
        'summary: alphaLaw.text`See ${alphaLaw.article("1", "Art. 1")}.`',
      ),
      entry("alpha-art-2"),
    ],
  })
  const parsed = parseEditorialPartSource(source, "part-00.ts")
  assert.deepEqual(
    parsed.entries.map(({ provisionId, reviewStatus }) => ({
      provisionId,
      reviewStatus,
    })),
    [
      { provisionId: "alpha-art-1", reviewStatus: "reviewed" },
      { provisionId: "alpha-art-2", reviewStatus: "reviewed" },
    ],
  )
})

test("incomplete mode accepts the scaffold but reports missing and draft coverage", () => {
  const result = validateEditorial({
    allowIncomplete: true,
  })
  assert.equal(result.ok, true)
  assert.ok(result.summary.expectedCount > result.summary.authoredCount)
  assert.ok(result.warnings.some(({ code }) => code === "missing-provision"))
})

test("temporarily skips authored KPA parts with an explicit warning", () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "legal-editorial-kpa-"))
  const editorialRoot = path.join(root, "editorial")
  const corpusRoot = path.join(root, "corpus")
  const currentEditionsPath = path.join(root, "current-editions.json")
  fs.mkdirSync(path.join(editorialRoot, "kpa"), { recursive: true })
  fs.writeFileSync(
    path.join(editorialRoot, "kpa", "part-00.ts"),
    part({
      documentId: "kpa",
      editionId: "kpa-2025-1691",
      entries: [entry("kpa-art-1")],
    }),
  )
  fs.writeFileSync(currentEditionsPath, JSON.stringify({ kpa: "kpa-2025-1691" }))

  const result = validateEditorial({
    editorialRoot,
    corpusRoot,
    currentEditionsPath,
    allowIncomplete: true,
  })

  assert.equal(result.ok, true)
  assert.equal(result.summary.authoredCount, 0)
  assert.ok(
    result.warnings.some(({ code }) => code === "kpa-editorial-not-validated"),
  )
})

test("detects duplicate and unknown provision IDs", () => {
  const fixture = writeFixture({
    partSource: part({
      entries: [entry("alpha-art-1"), entry("alpha-art-1"), entry("alpha-art-999")],
    }),
    provisions,
  })
  const result = validateEditorial({ ...fixture, allowIncomplete: true })
  assert.equal(result.ok, false)
  assert.ok(result.errors.some(({ code }) => code === "duplicate-provision"))
  assert.ok(result.errors.some(({ code }) => code === "unknown-provision"))
})

test("detects wrong document, edition, and non-reviewed entries", () => {
  const fixture = writeFixture({
    partSource: part({
      documentId: "beta",
      editionId: "alpha-old",
      entries: [entry("alpha-art-1", "draft")],
    }),
    provisions,
  })
  const result = validateEditorial({ ...fixture, allowIncomplete: true })
  assert.equal(result.ok, false)
  assert.ok(result.errors.some(({ code }) => code === "wrong-document"))
  assert.ok(result.errors.some(({ code }) => code === "wrong-edition"))
  assert.ok(result.warnings.some(({ code }) => code === "not-reviewed"))
})
