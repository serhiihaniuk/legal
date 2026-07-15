import test from "node:test"
import assert from "node:assert/strict"

import { buildStructure, projectArticles } from "../lib/artifacts.mjs"
import { ConfigValidationError, validateConfig } from "../lib/config.mjs"
import {
  createProvisionId,
  normalizeArticleKey,
  normalizeArticleLocator,
  sha256,
} from "../lib/extraction.mjs"
import {
  assertNoFatalDiagnostics,
  validateProvisionFacts,
  validateStructure,
} from "../lib/validation.mjs"

const baseConfig = {
  schemaVersion: 2,
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  shortName: "KPA",
  title: "Kodeks postępowania administracyjnego",
  citation: "Dz.U. 2025 poz. 1691",
  source: {
    provider: "eli",
    officialPageUrl: "https://eli.gov.pl/eli/DU/2025/1691/ogl",
    metadataUrl: "https://api.sejm.gov.pl/eli/acts/DU/2025/1691",
    pdfUrl: "https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf",
  },
  checkedAt: "2026-07-14",
  legalStateDate: "2026-07-14",
  extraction: {
    profile: "polish-statute-art-v1",
    expectedProvisionCount: 306,
    expectedTextCoverage: 0.98,
    expectedPageCount: 46,
  },
}

function provision({
  id = "kpa-art-1",
  locator = "Art. 1",
  order = 1,
  parentId = null,
  childIds = [],
  startPdfPage = 2,
  endPdfPage = 2,
  text = `${locator}. Tekst przepisu.`,
} = {}) {
  return {
    id,
    documentId: "kpa",
    editionId: "kpa-2025-1691",
    kind: "article",
    locator,
    parentId,
    childIds,
    order,
    startPdfPage,
    endPdfPage,
    status: "active",
    sourcePdfSha256: "a".repeat(64),
    sourceTextHash: sha256(text),
    text,
  }
}

test("validates the schema-v2 config and rejects guessed or non-HTTPS sources", () => {
  assert.deepEqual(validateConfig(baseConfig), baseConfig)
  assert.throws(
    () => validateConfig({ ...baseConfig, schemaVersion: 1 }),
    ConfigValidationError
  )
  assert.throws(
    () =>
      validateConfig({
        ...baseConfig,
        source: { ...baseConfig.source, pdfUrl: "http://example.test/source.pdf" },
      }),
    ConfigValidationError
  )
  assert.throws(
    () => validateConfig({ ...baseConfig, documentId: undefined }),
    ConfigValidationError
  )
})

test("normalizes lettered and superscript article locators into stable IDs", () => {
  assert.equal(normalizeArticleLocator("Art. 2a."), "Art. 2a")
  assert.equal(normalizeArticleLocator("Art. 39 1 ."), "Art. 39¹")
  assert.equal(normalizeArticleLocator("Art. 39¹."), "Art. 39¹")
  assert.equal(normalizeArticleKey("Art. 39¹"), "39-1")
  assert.equal(createProvisionId("kpa", "Art. 2a"), "kpa-art-2a")
  assert.equal(createProvisionId("kpa", "Art. 39¹"), "kpa-art-39-1")
})

test("fails duplicate IDs/locators and out-of-range page spans", () => {
  const duplicate = provision()
  const duplicateDiagnostics = validateProvisionFacts({
    provisions: [duplicate, provision({ locator: "Art. 2", text: "Art. 2. Different text." })],
    documentId: "kpa",
    editionId: "kpa-2025-1691",
    pageCount: 46,
    pdfSha256: "a".repeat(64),
  })
  assert.ok(duplicateDiagnostics.some(({ code }) => code === "provisions.duplicate-id"))

  const invalidPageDiagnostics = validateProvisionFacts({
    provisions: [provision({ startPdfPage: 47, endPdfPage: 46 })],
    documentId: "kpa",
    editionId: "kpa-2025-1691",
    pageCount: 46,
    pdfSha256: "a".repeat(64),
  })
  assert.ok(
    invalidPageDiagnostics.some(({ code }) => code === "provisions.page-range-out-of-bounds")
  )
  assert.throws(
    () => assertNoFatalDiagnostics({ fatal: invalidPageDiagnostics, warnings: [], entries: invalidPageDiagnostics }),
    /fatal diagnostic/
  )
})

test("projects article provisions back to the unchanged KPA consumer shape", () => {
  const articles = projectArticles([
    provision({ id: "kpa-art-2a", locator: "Art. 2a", order: 1, startPdfPage: 2, endPdfPage: 3 }),
    {
      ...provision({ id: "kpa-art-2a-par-1", locator: "Art. 2a § 1", order: 1.1 }),
      kind: "paragraph",
      parentId: "kpa-art-2a",
    },
  ])
  assert.deepEqual(articles, [
    {
      article: "2a",
      pdfPage: 2,
      endPdfPage: 3,
      status: "active",
      text: "Art. 2a. Tekst przepisu.",
    },
  ])
})

test("builds deterministic structure order and previous/next navigation", () => {
  const provisions = [
    provision({ id: "kpa-art-2", locator: "Art. 2", order: 2 }),
    provision({ id: "kpa-art-1", locator: "Art. 1", order: 1 }),
  ]
  const options = {
    schemaVersion: 2,
    documentId: "kpa",
    editionId: "kpa-2025-1691",
    profile: "polish-statute-art-v1",
  }
  const first = buildStructure(provisions, options)
  const second = buildStructure(provisions, options)
  assert.deepEqual(first, second)
  assert.deepEqual(first.provisionIds, ["kpa-art-1", "kpa-art-2"])
  assert.equal(first.previousById["kpa-art-1"], null)
  assert.equal(first.nextById["kpa-art-1"], "kpa-art-2")
  assert.equal(first.previousById["kpa-art-2"], "kpa-art-1")
  assert.equal(first.nextById["kpa-art-2"], null)
  assert.deepEqual(validateStructure({ structure: first, provisions: [provisions[1], provisions[0]] }), [])
})
