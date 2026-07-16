import test from "node:test"
import assert from "node:assert/strict"

import { buildManifest, buildStructure, projectArticles } from "../lib/artifacts.mjs"
import { ConfigValidationError, validateConfig } from "../lib/config.mjs"
import {
  createProvisionId,
  extractArticles,
  extractProvisions,
  normalizeArticleKey,
  normalizeArticleLocator,
  sha256,
} from "../lib/extraction.mjs"
import {
  assertNoFatalDiagnostics,
  validateOfficialIdentity,
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

const completeEvidence = {
  status: "obowiązujący",
  inForce: "IN_FORCE",
  legalStateDate: "2026-07-15",
  consolidatedTextIdentifier: "DU/2025/1691",
  checkedAt: "2026-07-15",
  sourceUrls: ["https://eli.gov.pl/eli/DU/2025/1691/ogl"],
  amendmentsCheckedThrough: "2026-07-15",
  entryIntoForce: [{ locator: "ELI official page", result: "entered into force" }],
  transitionalRules: [{ locator: "final provisions", result: "express result recorded" }],
  unresolved: [],
}

test("strictly validates complete manual evidence and rejects missing or HTTP sources", () => {
  assert.deepEqual(validateConfig({ ...baseConfig, legalStatusEvidence: completeEvidence }).legalStatusEvidence, completeEvidence)
  assert.throws(
    () => validateConfig({ ...baseConfig, legalStatusEvidence: { ...completeEvidence, transitionalRules: [] } }),
    ConfigValidationError
  )
  assert.throws(
    () => validateConfig({ ...baseConfig, legalStatusEvidence: { ...completeEvidence, sourceUrls: ["http://eli.gov.pl/source"] } }),
    ConfigValidationError
  )
})

test("merges complete manual evidence without retaining a false metadata warning", () => {
  const manifest = buildManifest({
    config: { ...baseConfig, legalStatusEvidence: completeEvidence },
    metadata: {
      ELI: "DU/2025/1691",
      status: "obowiązujący",
      inForce: "IN_FORCE",
      legalStatusDate: undefined,
      textPDF: true,
    },
    pdfSha256: "a".repeat(64),
    observed: { provisionCount: 0, pageCount: 0, textCoverage: 0, textLayerPageCount: 0, articleCount: 0, promotedProvisionCount: 0, promotedPageCount: 0 },
    diagnostics: { fatal: [], warnings: [] },
    builtAt: "2026-07-15T00:00:00Z",
  })
  assert.equal(manifest.legalStatusEvidence.legalStateDate, "2026-07-15")
  assert.deepEqual(manifest.legalStatusEvidence.unresolved, [])
  assert.deepEqual(manifest.legalStatusEvidence.entryIntoForce, completeEvidence.entryIntoForce)
})

test("rejects manual legal-status evidence that contradicts ELI status", () => {
  const diagnostics = validateOfficialIdentity(
    { ...baseConfig, legalStatusEvidence: completeEvidence },
    {
      ELI: "DU/2025/1691",
      displayAddress: baseConfig.citation,
      status: "uchylony",
      inForce: "NOT_IN_FORCE",
    },
    new Uint8Array(new TextEncoder().encode("%PDF-test"))
  )
  assert.ok(diagnostics.some(({ code, severity }) => code === "source.legal-status-evidence-contradiction" && severity === "fatal"))
})

test("allows ingestion when ELI omits legalStatusDate but records a warning", () => {
  const diagnostics = validateOfficialIdentity(
    baseConfig,
    {
      ELI: "DU/2025/1691",
      displayAddress: baseConfig.citation,
      status: "obowiązujący",
      inForce: "IN_FORCE",
    },
    new Uint8Array(new TextEncoder().encode("%PDF-test"))
  )
  assert.equal(
    diagnostics.some(({ severity }) => severity === "fatal"),
    false
  )
  assert.ok(
    diagnostics.some(
      ({ code, severity }) =>
        code === "source.missing-legal-status-date" && severity === "warning"
    )
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

test("extracts paragraph-led regulations and annexes with stable IDs", () => {
  const provisions = extractProvisions(
    [
      {
        pdfPage: 1,
        text: "§ 1. Pierwszy przepis.\n§ 2. Drugi przepis.",
        hasTextLayer: true,
      },
      {
        pdfPage: 2,
        text: "Załącznik nr 1\nWZÓR FORMULARZA",
        hasTextLayer: true,
      },
      {
        pdfPage: 3,
        text: "Dalsza część formularza",
        hasTextLayer: true,
      },
    ],
    {
      documentId: "regulation",
      editionId: "regulation-2026-1",
      sourcePdfSha256: "a".repeat(64),
      profile: "polish-regulation-paragraph-v1",
    }
  )
  assert.deepEqual(
    provisions.map(({ id, kind, locator, startPdfPage, endPdfPage }) => ({
      id,
      kind,
      locator,
      startPdfPage,
      endPdfPage,
    })),
    [
      { id: "regulation-par-1", kind: "paragraph", locator: "§ 1", startPdfPage: 1, endPdfPage: 1 },
      { id: "regulation-par-2", kind: "paragraph", locator: "§ 2", startPdfPage: 1, endPdfPage: 1 },
      { id: "regulation-annex-1", kind: "annex", locator: "Załącznik nr 1", startPdfPage: 2, endPdfPage: 3 },
    ]
  )
})

test("treats a duplicate article locator as a fatal diagnostic carrying both page positions instead of silently keeping one occurrence", () => {
  const pages = [
    { pdfPage: 1, text: "Art. 10. Pierwsza wersja przepisu.", hasTextLayer: true },
    { pdfPage: 2, text: "Art. 10. Druga, sprzeczna wersja przepisu.", hasTextLayer: true },
  ]
  assert.throws(
    () => extractArticles(pages),
    (error) => {
      assert.equal(error.name, "CorpusValidationError")
      assert.equal(error.diagnostics.fatal.length, 1)
      const [entry] = error.diagnostics.fatal
      assert.equal(entry.code, "extraction.duplicate-locator")
      assert.equal(entry.details.locator, "Art. 10")
      assert.deepEqual(
        entry.details.occurrences.map((occurrence) => occurrence.startPdfPage),
        [1, 2]
      )
      return true
    }
  )
})

test("treats a duplicate paragraph locator as a fatal diagnostic instead of silently keeping the first occurrence", () => {
  assert.throws(
    () =>
      extractProvisions(
        [
          { pdfPage: 1, text: "§ 1. Pierwsza wersja.", hasTextLayer: true },
          { pdfPage: 2, text: "§ 1. Druga wersja.", hasTextLayer: true },
        ],
        {
          documentId: "regulation",
          editionId: "regulation-2026-1",
          sourcePdfSha256: "a".repeat(64),
          profile: "polish-regulation-paragraph-v1",
        }
      ),
    (error) => {
      assert.equal(error.name, "CorpusValidationError")
      const [entry] = error.diagnostics.fatal
      assert.equal(entry.code, "extraction.duplicate-locator")
      assert.equal(entry.details.kind, "paragraph")
      assert.equal(entry.details.locator, "§ 1")
      return true
    }
  )
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
