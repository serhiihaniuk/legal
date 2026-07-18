import test from "node:test"
import assert from "node:assert/strict"

import {
  buildManifest,
  buildStructure,
  projectArticles,
} from "../lib/artifacts.mjs"
import { ConfigValidationError, validateConfig } from "../lib/config.mjs"
import {
  createProvisionId,
  extractArticles,
  extractProvisions,
  normalizeArticleKey,
  normalizeArticleLocator,
  selectTemporalText,
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

/**
 * @param {{
 *   id?: string,
 *   locator?: string,
 *   order?: number,
 *   parentId?: string | null,
 *   childIds?: string[],
 *   startPdfPage?: number,
 *   endPdfPage?: number,
 *   text?: string,
 * }} [options]
 */
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

const amendmentPdfSha256 = "b".repeat(64)
const amendmentSourceId = "du-2026-846"

function overlayManifest() {
  return {
    sourceMaterials: [
      { id: "base", role: "base", pdfSha256: "a".repeat(64) },
      {
        id: amendmentSourceId,
        role: "amendment",
        pdfSha256: amendmentPdfSha256,
        effectiveDate: "2026-06-26",
      },
    ],
    amendmentOverlay: {
      effectiveDate: "2026-06-26",
      amendmentSource: {
        id: amendmentSourceId,
        role: "amendment",
        pdfSha256: amendmentPdfSha256,
      },
    },
  }
}

/**
 * @param {{ sourceId?: string, amendmentHash?: string }} [options]
 */
function overlaidProvision({
  sourceId = amendmentSourceId,
  amendmentHash = amendmentPdfSha256,
} = {}) {
  const base = provision()
  return {
    ...base,
    sourceSpans: [
      {
        sourceId: "base",
        role: "base",
        locator: base.locator,
        startPdfPage: base.startPdfPage,
        endPdfPage: base.endPdfPage,
        sourcePdfSha256: base.sourcePdfSha256,
      },
      {
        sourceId,
        role: "amendment",
        locator: "Dz.U. 2026 poz. 846, Art. 10 pkt 1",
        sourcePdfSha256: amendmentHash,
        effectiveDate: "2026-06-26",
      },
    ],
    amendmentOverlay: {
      kind: "replace-once",
      amendmentSourceId: sourceId,
      amendmentLocator: "Dz.U. 2026 poz. 846, Art. 10 pkt 1",
      effectiveDate: "2026-06-26",
      baseSourceTextHash: "c".repeat(64),
      compiledSourceTextHash: base.sourceTextHash,
    },
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
        source: {
          ...baseConfig.source,
          pdfUrl: "http://example.test/source.pdf",
        },
      }),
    ConfigValidationError
  )
  assert.throws(
    () => validateConfig({ ...baseConfig, documentId: undefined }),
    ConfigValidationError
  )
})

test("validates future extraction exclusions and provision status overrides", () => {
  const config = {
    ...baseConfig,
    extraction: {
      ...baseConfig.extraction,
      ignoredArticleOccurrences: [
        {
          locator: "Art. 31",
          pdfPage: 1,
          matchIndex: 12,
          reason: "Citation, not a boundary.",
        },
      ],
      excludedArticleOccurrences: [
        {
          locator: "Art. 31",
          pdfPage: 2,
          matchIndex: 24,
          reason: "Future duplicate.",
        },
      ],
      futureTextExclusions: [
        {
          locator: "Art. 37",
          startMarker: "§ 1a. 13 )",
          endMarker: "§ 2.",
          effectiveDate: "2029-10-01",
          reason: "Future paragraph.",
        },
      ],
      provisionStatusOverrides: [
        {
          locator: "Art. 65a",
          status: "future",
          effectiveDate: "2029-10-01",
          reason: "Future-only provision.",
        },
      ],
    },
  }

  assert.deepEqual(validateConfig(config), config)
  assert.throws(
    () =>
      validateConfig({
        ...config,
        extraction: {
          ...config.extraction,
          excludedArticleOccurrences:
            config.extraction.ignoredArticleOccurrences,
        },
      }),
    ConfigValidationError
  )
  assert.throws(
    () =>
      validateConfig({
        ...config,
        extraction: {
          ...config.extraction,
          provisionStatusOverrides: [
            {
              locator: "Art. 65a",
              status: "future",
              reason: "Missing effective date.",
            },
          ],
        },
      }),
    ConfigValidationError
  )
})

test("rejects supplemental source filenames that can overwrite another staged PDF", () => {
  const supplementalSource = {
    id: "effective-date",
    role: "effective-date",
    citation: "M.P. 2026 poz. 1",
    officialPageUrl: "https://eli.gov.pl/eli/MP/2026/1/ogl",
    metadataUrl: "https://api.sejm.gov.pl/eli/acts/MP/2026/1",
    pdfUrl: "https://eli.gov.pl/api/acts/MP/2026/1/text/O/M20260001.pdf",
    expectedPdfSha256: "b".repeat(64),
    effectiveDate: "2026-01-01",
    localFilename: "effective-date.pdf",
  }
  assert.throws(
    () =>
      validateConfig({
        ...baseConfig,
        supplementalSources: [
          { ...supplementalSource, localFilename: "source.pdf" },
        ],
      }),
    ConfigValidationError
  )
  assert.throws(
    () =>
      validateConfig({
        ...baseConfig,
        supplementalSources: [
          supplementalSource,
          {
            ...supplementalSource,
            id: "effective-date-two",
          },
        ],
      }),
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
  entryIntoForce: [
    { locator: "ELI official page", result: "entered into force" },
  ],
  transitionalRules: [
    { locator: "final provisions", result: "express result recorded" },
  ],
  unresolved: [],
}

test("strictly validates complete manual evidence and rejects missing or HTTP sources", () => {
  assert.deepEqual(
    validateConfig({ ...baseConfig, legalStatusEvidence: completeEvidence })
      .legalStatusEvidence,
    completeEvidence
  )
  assert.throws(
    () =>
      validateConfig({
        ...baseConfig,
        legalStatusEvidence: { ...completeEvidence, transitionalRules: [] },
      }),
    ConfigValidationError
  )
  assert.throws(
    () =>
      validateConfig({
        ...baseConfig,
        legalStatusEvidence: {
          ...completeEvidence,
          sourceUrls: ["http://eli.gov.pl/source"],
        },
      }),
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
    observed: {
      provisionCount: 0,
      pageCount: 0,
      textCoverage: 0,
      textLayerPageCount: 0,
      articleCount: 0,
      promotedProvisionCount: 0,
      promotedPageCount: 0,
    },
    diagnostics: { fatal: [], warnings: [] },
    builtAt: "2026-07-15T00:00:00Z",
  })
  assert.equal(manifest.legalStatusEvidence.legalStateDate, "2026-07-15")
  assert.deepEqual(manifest.legalStatusEvidence.unresolved, [])
  assert.deepEqual(
    manifest.legalStatusEvidence.entryIntoForce,
    completeEvidence.entryIntoForce
  )
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
  assert.ok(
    diagnostics.some(
      ({ code, severity }) =>
        code === "source.legal-status-evidence-contradiction" &&
        severity === "fatal"
    )
  )
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
      {
        id: "regulation-par-1",
        kind: "paragraph",
        locator: "§ 1",
        startPdfPage: 1,
        endPdfPage: 1,
      },
      {
        id: "regulation-par-2",
        kind: "paragraph",
        locator: "§ 2",
        startPdfPage: 1,
        endPdfPage: 1,
      },
      {
        id: "regulation-annex-1",
        kind: "annex",
        locator: "Załącznik nr 1",
        startPdfPage: 2,
        endPdfPage: 3,
      },
    ]
  )
})

test("treats a duplicate article locator as a fatal diagnostic carrying both page positions instead of silently keeping one occurrence", () => {
  const pages = [
    {
      pdfPage: 1,
      text: "Art. 10. Pierwsza wersja przepisu.",
      hasTextLayer: true,
    },
    {
      pdfPage: 2,
      text: "Art. 10. Druga, sprzeczna wersja przepisu.",
      hasTextLayer: true,
    },
  ]
  assert.throws(
    () => extractArticles(pages),
    (/** @type {any} */ error) => {
      assert.equal(error.name, "CorpusValidationError")
      assert.equal(error.diagnostics.fatal.length, 1)
      const [entry] = error.diagnostics.fatal
      assert.equal(entry.code, "extraction.duplicate-locator")
      assert.equal(entry.details.locator, "Art. 10")
      assert.deepEqual(
        entry.details.occurrences.map(
          (/** @type {any} */ occurrence) => occurrence.startPdfPage
        ),
        [1, 2]
      )
      return true
    }
  )
})

test("keeps ignored citation headings but uses excluded future headings as semantic boundaries", () => {
  const text = [
    "Art. 1. Current first provision.",
    "Art. 99. Citation that belongs to Art. 1.",
    "Art. 2. Current second provision.",
    "Art. 2. Future second provision.",
    "Art. 3. Current third provision.",
  ].join("\n")
  const articles = extractArticles([{ pdfPage: 1, text, hasTextLayer: true }], {
    ignoredArticleOccurrences: [
      {
        locator: "Art. 99",
        pdfPage: 1,
        matchIndex: text.indexOf("Art. 99."),
      },
    ],
    excludedArticleOccurrences: [
      {
        locator: "Art. 2",
        pdfPage: 1,
        matchIndex: text.lastIndexOf("Art. 2."),
      },
    ],
  })

  assert.deepEqual(
    articles.map(({ article, text: articleText }) => ({
      article,
      text: articleText,
    })),
    [
      {
        article: "1",
        text: "Art. 1. Current first provision.\nArt. 99. Citation that belongs to Art. 1.",
      },
      { article: "2", text: "Art. 2. Current second provision." },
      { article: "3", text: "Art. 3. Current third provision." },
    ]
  )
})

test("fails closed when an article occurrence selector no longer matches the source", () => {
  assert.throws(
    () =>
      extractArticles(
        [
          {
            pdfPage: 1,
            text: "Art. 1. Current provision.",
            hasTextLayer: true,
          },
        ],
        {
          excludedArticleOccurrences: [
            { locator: "Art. 1", pdfPage: 1, matchIndex: 99 },
          ],
        }
      ),
    (/** @type {any} */ error) => {
      assert.equal(
        error.diagnostics.fatal[0].code,
        "extraction.article-occurrence-mismatch"
      )
      return true
    }
  )
})

test("removes exact future fragments and emits explicit future-only provisions", () => {
  const provisions = extractProvisions(
    [
      {
        pdfPage: 1,
        text: [
          "Art. 37. § 1a. 12 ) Current paragraph.",
          "§ 1a. 13 ) Future paragraph.",
          "§ 2. Current continuation.",
          "Art. 65a. Future-only provision.",
        ].join("\n"),
        hasTextLayer: true,
      },
    ],
    {
      documentId: "ppsa",
      editionId: "ppsa-2026-143-with-2026-846",
      sourcePdfSha256: "a".repeat(64),
      futureTextExclusions: [
        {
          locator: "Art. 37",
          startMarker: "§ 1a. 13 )",
          endMarker: "§ 2.",
          effectiveDate: "2029-10-01",
        },
      ],
      provisionStatusOverrides: [
        {
          locator: "Art. 65a",
          status: "future",
          effectiveDate: "2029-10-01",
        },
      ],
    }
  )

  assert.match(provisions[0].text, /Current paragraph/u)
  assert.match(provisions[0].text, /Current continuation/u)
  assert.doesNotMatch(provisions[0].text, /Future paragraph/u)
  assert.equal(provisions[1].status, "future")
  assert.equal(provisions[1].effectiveDate, "2029-10-01")
})

test("fails closed when a future-fragment selector is stale", () => {
  assert.throws(
    () =>
      extractArticles(
        [
          {
            pdfPage: 1,
            text: "Art. 37. § 1a. 12 ) Current paragraph.",
            hasTextLayer: true,
          },
        ],
        {
          futureTextExclusions: [
            {
              locator: "Art. 37",
              startMarker: "§ 1a. 13 )",
              effectiveDate: "2029-10-01",
            },
          ],
        }
      ),
    (/** @type {any} */ error) => {
      assert.equal(
        error.diagnostics.fatal[0].code,
        "extraction.future-text-start-mismatch"
      )
      return true
    }
  )
})

test("fails closed when future-fragment selectors overlap for one provision", () => {
  assert.throws(
    () =>
      extractArticles(
        [
          {
            pdfPage: 1,
            text: [
              "Art. 37. § 1. Current paragraph.",
              "§ 1a. 13 ) First future paragraph.",
              "§ 1b. 14 ) Second future paragraph.",
              "§ 2. Current continuation.",
            ].join("\n"),
            hasTextLayer: true,
          },
        ],
        {
          futureTextExclusions: [
            {
              locator: "Art. 37",
              startMarker: "§ 1a. 13 )",
              endMarker: "§ 2.",
              effectiveDate: "2029-10-01",
            },
            {
              locator: "Art. 37",
              startMarker: "§ 1b. 14 )",
              endMarker: "§ 2.",
              effectiveDate: "2029-10-01",
            },
          ],
        }
      ),
    (/** @type {any} */ error) => {
      assert.equal(
        error.diagnostics.fatal[0].code,
        "extraction.future-text-overlap"
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
    (/** @type {any} */ error) => {
      assert.equal(error.name, "CorpusValidationError")
      const [entry] = error.diagnostics.fatal
      assert.equal(entry.code, "extraction.duplicate-locator")
      assert.equal(entry.details.kind, "paragraph")
      assert.equal(entry.details.locator, "§ 1")
      return true
    }
  )
})

test("selects effective angle variants, removes old variants, and preserves crossed page boundaries", () => {
  const selection = {
    kind: "bracket-angle-v1",
    expectedOldBlockCount: 1,
    expectedCurrentBlockCount: 1,
    sources: [
      {
        sourceId: "effective-date-source",
        effectiveDate: "2026-04-27",
        locator: "M.P. 2026 poz. 370, pkt 1",
        oldBlockRange: { first: 1, last: 1 },
        currentBlockRange: { first: 1, last: 1 },
        expectedProvisionCount: 1,
      },
    ],
  }
  const result = selectTemporalText(
    [
      { pdfPage: 1, text: "Art. 1. Początek. [Stare", hasTextLayer: true },
      {
        pdfPage: 2,
        text: "brzmienie.] <Art. 2. Aktualne brzmienie.>",
        hasTextLayer: true,
      },
    ],
    selection
  )

  assert.equal(result.pages.length, 2)
  assert.equal(result.pages[0].text, "Art. 1. Początek.")
  assert.equal(result.pages[1].text, "Art. 2. Aktualne brzmienie.")
  assert.deepEqual([...result.traces[0].introducedArticleLocators], ["Art. 2"])
  assert.match(result.traces[0].counterfactualPages[0].text, /\[Stare/u)
  assert.match(result.traces[0].counterfactualPages[1].text, /<Art\. 2/u)
})

test("fails closed when the temporal marker inventory drifts", () => {
  assert.throws(
    () =>
      selectTemporalText(
        [{ pdfPage: 1, text: "Art. 1. [Stare] <Nowe>", hasTextLayer: true }],
        {
          kind: "bracket-angle-v1",
          expectedOldBlockCount: 2,
          expectedCurrentBlockCount: 1,
          sources: [
            {
              sourceId: "effective-date-source",
              oldBlockRange: { first: 1, last: 2 },
              currentBlockRange: { first: 1, last: 1 },
            },
          ],
        }
      ),
    (/** @type {any} */ error) => {
      assert.equal(error.name, "CorpusValidationError")
      assert.equal(
        error.diagnostics.fatal[0].code,
        "temporal-selection.block-count-mismatch"
      )
      return true
    }
  )
})

test("fails duplicate IDs/locators and out-of-range page spans", () => {
  const duplicate = provision()
  const duplicateDiagnostics = validateProvisionFacts({
    provisions: [
      duplicate,
      provision({ locator: "Art. 2", text: "Art. 2. Different text." }),
    ],
    documentId: "kpa",
    editionId: "kpa-2025-1691",
    pageCount: 46,
    pdfSha256: "a".repeat(64),
  })
  assert.ok(
    duplicateDiagnostics.some(({ code }) => code === "provisions.duplicate-id")
  )

  const invalidPageDiagnostics = validateProvisionFacts({
    provisions: [provision({ startPdfPage: 47, endPdfPage: 46 })],
    documentId: "kpa",
    editionId: "kpa-2025-1691",
    pageCount: 46,
    pdfSha256: "a".repeat(64),
  })
  assert.ok(
    invalidPageDiagnostics.some(
      ({ code }) => code === "provisions.page-range-out-of-bounds"
    )
  )
  assert.throws(
    () =>
      assertNoFatalDiagnostics({
        fatal: invalidPageDiagnostics,
        warnings: [],
        entries: invalidPageDiagnostics,
      }),
    /fatal diagnostic/
  )
})

test("requires a future provision effective date after the edition legal-state date", () => {
  const future = {
    ...provision(),
    status: "future",
    effectiveDate: "2029-10-01",
  }
  const options = {
    documentId: "kpa",
    editionId: "kpa-2025-1691",
    pageCount: 46,
    pdfSha256: "a".repeat(64),
    manifest: { legalStateDate: "2026-07-18" },
  }

  assert.equal(
    validateProvisionFacts({ provisions: [future], ...options }).some(
      ({ code }) => code.includes("effective-date")
    ),
    false
  )
  assert.ok(
    validateProvisionFacts({
      provisions: [{ ...future, effectiveDate: undefined }],
      ...options,
    }).some(({ code }) => code === "provisions.missing-future-effective-date")
  )
  assert.ok(
    validateProvisionFacts({
      provisions: [{ ...future, effectiveDate: "2026-07-18" }],
      ...options,
    }).some(({ code }) => code === "provisions.non-future-effective-date")
  )
  assert.ok(
    validateProvisionFacts({
      provisions: [{ ...future, status: "active" }],
      ...options,
    }).some(({ code }) => code === "provisions.unexpected-effective-date")
  )
})

test("rejects swallowed article headings and unresolved temporal alternatives", () => {
  const text = "Art. 1. Tekst.\n[ Art. 2. Superseded. ]"
  const diagnostics = validateProvisionFacts({
    provisions: [provision({ text })],
    documentId: "kpa",
    editionId: "kpa-2025-1691",
    pageCount: 46,
    pdfSha256: "a".repeat(64),
    rejectEmbeddedArticleHeadings: true,
    rejectTemporalMarkers: true,
  })

  assert.ok(
    diagnostics.some(
      ({ code }) => code === "provisions.embedded-article-heading"
    )
  )
  assert.ok(
    diagnostics.some(
      ({ code }) => code === "provisions.unresolved-temporal-alternative"
    )
  )
})

test("fails closed when a provision sourceSpan does not resolve to manifest.sourceMaterials", () => {
  const diagnostics = validateProvisionFacts({
    provisions: [overlaidProvision({ sourceId: "missing-amendment-source" })],
    documentId: "kpa",
    editionId: "kpa-2025-1691",
    pageCount: 46,
    pdfSha256: "a".repeat(64),
    manifest: overlayManifest(),
  })

  assert.ok(
    diagnostics.some(
      ({ code, severity }) =>
        code === "provisions.source-span-source-not-found" &&
        severity === "fatal"
    )
  )
})

test("fails closed when an amendment sourceSpan checksum differs from its material", () => {
  const diagnostics = validateProvisionFacts({
    provisions: [overlaidProvision({ amendmentHash: "d".repeat(64) })],
    documentId: "kpa",
    editionId: "kpa-2025-1691",
    pageCount: 46,
    pdfSha256: "a".repeat(64),
    manifest: overlayManifest(),
  })

  assert.ok(
    diagnostics.some(
      ({ code, severity }) =>
        code === "provisions.source-span-pdf-checksum-mismatch" &&
        severity === "fatal"
    )
  )
})

test("fails closed when an effective-date sourceSpan checksum differs from its material", () => {
  const base = provision()
  const diagnostics = validateProvisionFacts({
    provisions: [
      {
        ...base,
        sourceSpans: [
          {
            sourceId: "base",
            role: "base",
            locator: base.locator,
            startPdfPage: base.startPdfPage,
            endPdfPage: base.endPdfPage,
            sourcePdfSha256: base.sourcePdfSha256,
          },
          {
            sourceId: "mp-2026-370",
            role: "effective-date",
            locator: "M.P. 2026 poz. 370, pkt 1",
            sourcePdfSha256: "d".repeat(64),
            effectiveDate: "2026-04-27",
          },
        ],
      },
    ],
    documentId: "kpa",
    editionId: "kpa-2025-1691",
    pageCount: 46,
    pdfSha256: "a".repeat(64),
    manifest: {
      sourceMaterials: [
        { id: "base", role: "base", pdfSha256: "a".repeat(64) },
        {
          id: "mp-2026-370",
          role: "effective-date",
          pdfSha256: "c".repeat(64),
          effectiveDate: "2026-04-27",
        },
      ],
    },
  })

  assert.ok(
    diagnostics.some(
      ({ code, severity }) =>
        code === "provisions.source-span-pdf-checksum-mismatch" &&
        severity === "fatal"
    )
  )
})

test("projects article provisions back to the unchanged KPA consumer shape", () => {
  const articles = projectArticles([
    provision({
      id: "kpa-art-2a",
      locator: "Art. 2a",
      order: 1,
      startPdfPage: 2,
      endPdfPage: 3,
    }),
    {
      ...provision({
        id: "kpa-art-2a-par-1",
        locator: "Art. 2a § 1",
        order: 1.1,
      }),
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

test("projects future status metadata into article and structure artifacts", () => {
  const future = {
    ...provision({ id: "kpa-art-65a", locator: "Art. 65a" }),
    status: "future",
    effectiveDate: "2029-10-01",
  }
  const articles = projectArticles([future])
  const structure = buildStructure([future], {
    schemaVersion: 2,
    documentId: "kpa",
    editionId: "kpa-2025-1691",
    profile: "polish-statute-art-v1",
  })

  assert.equal(articles[0].status, "future")
  assert.equal(articles[0].effectiveDate, "2029-10-01")
  assert.equal(structure.nodes[0].status, "future")
  assert.equal(structure.nodes[0].effectiveDate, "2029-10-01")
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
  assert.deepEqual(
    validateStructure({
      structure: first,
      provisions: [provisions[1], provisions[0]],
    }),
    []
  )
})
