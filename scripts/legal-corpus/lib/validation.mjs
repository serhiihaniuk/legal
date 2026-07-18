import { URL } from "node:url"

import { isCompleteLegalStatusEvidence } from "./config.mjs"
import { CorpusValidationError } from "./errors.mjs"
import { createProvisionId, sha256 } from "./extraction.mjs"

/**
 * @typedef {import("./types.mjs").Diagnostic} Diagnostic
 * @typedef {import("./types.mjs").Page} Page
 * @typedef {import("./types.mjs").Provision} Provision
 */

const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const SHA256_PATTERN = /^[0-9a-f]{64}$/u
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/u
const SOURCE_SPAN_ROLES = new Set(["base", "amendment", "effective-date"])
const STATUS_VALUES = new Set([
  "active",
  "future",
  "repealed",
  "reserved",
  "removed",
  "unknown",
])
const KIND_VALUES = new Set([
  "article",
  "paragraph",
  "section",
  "point",
  "annex",
])

/**
 * @param {Diagnostic["severity"]} severity
 * @param {string} code
 * @param {string} message
 * @param {string} [path]
 * @param {unknown} [details]
 * @returns {Diagnostic}
 */
export function diagnostic(
  severity,
  code,
  message,
  path = undefined,
  details = undefined
) {
  return {
    severity,
    code,
    message,
    ...(path !== undefined ? { path } : {}),
    ...(details !== undefined ? { details } : {}),
  }
}

/**
 * @param {any} manifest
 * @param {any} config
 * @param {string} [pdfSha256]
 * @returns {Diagnostic[]}
 */
export function validateExistingEditionIdentity(
  manifest,
  config,
  pdfSha256 = undefined
) {
  if (!manifest) return []
  const diagnostics = []
  const source = manifest.source ?? {}
  const existingEditionId = manifest.editionId ?? manifest.id

  if (existingEditionId && existingEditionId !== config.editionId) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "identity.edition-id-mismatch",
        `Existing edition manifest names ${existingEditionId}, expected ${config.editionId}`,
        "editionId"
      )
    )
  }
  if (manifest.documentId && manifest.documentId !== config.documentId) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "identity.document-id-mismatch",
        `Existing edition manifest names document ${manifest.documentId}, expected ${config.documentId}`,
        "documentId"
      )
    )
  }

  const sourceFields = ["provider", "officialPageUrl", "metadataUrl", "pdfUrl"]
  for (const field of sourceFields) {
    const existingValue = source[field] ?? manifest[field]
    const expectedValue = config.source[field]
    if (existingValue && expectedValue && existingValue !== expectedValue) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "identity.official-source-mismatch",
          `Existing edition ${field} differs from the configured official source`,
          `source.${field}`,
          { existing: existingValue, expected: expectedValue }
        )
      )
    }
  }

  if (pdfSha256 && manifest.pdfSha256 && manifest.pdfSha256 !== pdfSha256) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "identity.pdf-checksum-mismatch",
        "Existing edition PDF checksum differs from fetched official bytes",
        "pdfSha256",
        { existing: manifest.pdfSha256, fetched: pdfSha256 }
      )
    )
  }

  return diagnostics
}

/**
 * @param {string} metadataUrl
 * @returns {string | undefined}
 */
function expectedEliIdentifier(metadataUrl) {
  try {
    const pathname = new URL(metadataUrl).pathname
    const match = pathname.match(/\/acts\/([^/]+\/\d+\/\d+)\/?$/i)
    return match?.[1] ?? undefined
  } catch {
    return undefined
  }
}

/**
 * @param {any} config
 * @param {any} metadata
 * @param {unknown} pdfBytes
 * @returns {Diagnostic[]}
 */
export function validateOfficialIdentity(config, metadata, pdfBytes) {
  /** @type {Diagnostic[]} */
  const diagnostics = []
  const expectedIdentifier = expectedEliIdentifier(config.source.metadataUrl)

  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "source.metadata-not-object",
        "Official metadata response must be a JSON object",
        "metadata"
      )
    )
  } else {
    if (typeof metadata.ELI !== "string" || metadata.ELI.trim() === "") {
      diagnostics.push(
        diagnostic(
          "fatal",
          "source.missing-eli",
          "Official metadata does not contain an ELI identifier",
          "metadata.ELI"
        )
      )
    } else if (expectedIdentifier && metadata.ELI !== expectedIdentifier) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "source.eli-mismatch",
          "Official metadata ELI does not match the configured metadata URL",
          "metadata.ELI",
          { expected: expectedIdentifier, observed: metadata.ELI }
        )
      )
    }

    if (
      metadata.displayAddress &&
      metadata.displayAddress !== config.citation
    ) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "source.citation-mismatch",
          "Official metadata citation does not match the configured citation",
          "metadata.displayAddress",
          { expected: config.citation, observed: metadata.displayAddress }
        )
      )
    }

    for (const field of ["status", "inForce"]) {
      if (
        typeof metadata[field] !== "string" ||
        metadata[field].trim() === ""
      ) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "source.missing-legal-fact",
            `Official metadata is missing ${field}`,
            `metadata.${field}`
          )
        )
      }
      const manualValue = config.legalStatusEvidence?.[field]
      if (
        typeof manualValue === "string" &&
        typeof metadata[field] === "string" &&
        manualValue !== metadata[field]
      ) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "source.legal-status-evidence-contradiction",
            `Manual legal-status evidence contradicts official metadata ${field}`,
            `legalStatusEvidence.${field}`,
            { manual: manualValue, official: metadata[field] }
          )
        )
      }
    }

    if (
      (typeof metadata.legalStatusDate !== "string" ||
        metadata.legalStatusDate.trim() === "") &&
      !isCompleteLegalStatusEvidence(config.legalStatusEvidence)
    ) {
      diagnostics.push(
        diagnostic(
          "warning",
          "source.missing-legal-status-date",
          "Official metadata does not expose legalStatusDate; ingestion may continue but promotion requires separate legal-state evidence",
          "metadata.legalStatusDate"
        )
      )
    }
  }

  if (!(pdfBytes instanceof Uint8Array) || pdfBytes.length < 5) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "source.pdf-unreadable",
        "Official PDF response is empty or not binary",
        "source.pdf"
      )
    )
  } else if (new TextDecoder().decode(pdfBytes.slice(0, 5)) !== "%PDF-") {
    diagnostics.push(
      diagnostic(
        "fatal",
        "source.pdf-not-pdf",
        "Official PDF response does not begin with %PDF-",
        "source.pdf"
      )
    )
  }
  if (
    typeof config.source?.expectedPdfSha256 === "string" &&
    pdfBytes instanceof Uint8Array
  ) {
    const actual = sha256(pdfBytes)
    if (actual !== config.source.expectedPdfSha256) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "source.pdf-checksum-pin-mismatch",
          "Fetched official PDF does not match the pinned source checksum",
          "source.expectedPdfSha256",
          { expected: config.source.expectedPdfSha256, actual }
        )
      )
    }
  }

  return diagnostics
}

/**
 * @param {any} config
 * @param {any} observed
 * @returns {Diagnostic[]}
 */
export function validateExtractionExpectations(config, observed) {
  /** @type {Diagnostic[]} */
  const diagnostics = []
  const expected = config.extraction

  if (observed.pageCount !== expected.expectedPageCount) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "extraction.page-count-mismatch",
        `Expected ${expected.expectedPageCount} PDF pages but observed ${observed.pageCount}`,
        "extraction.expectedPageCount",
        { expected: expected.expectedPageCount, observed: observed.pageCount }
      )
    )
  }
  if (observed.provisionCount !== expected.expectedProvisionCount) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "extraction.provision-count-mismatch",
        `Expected ${expected.expectedProvisionCount} provisions but observed ${observed.provisionCount}`,
        "extraction.expectedProvisionCount",
        {
          expected: expected.expectedProvisionCount,
          observed: observed.provisionCount,
        }
      )
    )
  }
  if (observed.textCoverage < expected.expectedTextCoverage) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "extraction.text-coverage-below-expectation",
        `Expected text coverage of at least ${expected.expectedTextCoverage} but observed ${observed.textCoverage}`,
        "extraction.expectedTextCoverage",
        {
          expected: expected.expectedTextCoverage,
          observed: observed.textCoverage,
        }
      )
    )
  }

  return diagnostics
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
function isOneBasedPage(value) {
  return Number.isInteger(value) && /** @type {number} */ (value) >= 1
}

/**
 * Validate and index the manifest-side source materials used by provision
 * spans. Legacy single-PDF editions do not have spans or sourceMaterials, so
 * the manifest remains optional until a provision opts into span provenance.
 * @param {any} manifest
 * @param {{ required: boolean, pdfSha256: string }} options
 * @returns {{
 *   diagnostics: Diagnostic[],
 *   byId: Map<string, any>,
 *   amendmentSourceId: string | undefined,
 *   amendmentEffectiveDate: string | undefined,
 * }}
 */
function validateManifestSourceMaterials(manifest, { required, pdfSha256 }) {
  /** @type {Diagnostic[]} */
  const diagnostics = []
  /** @type {Map<string, any>} */
  const byId = new Map()
  const sourceMaterials = manifest?.sourceMaterials

  if (sourceMaterials === undefined) {
    if (required) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provenance.missing-source-materials",
          "Provision sourceSpans require manifest.sourceMaterials",
          "manifest.sourceMaterials"
        )
      )
    }
  } else if (!Array.isArray(sourceMaterials) || sourceMaterials.length === 0) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "provenance.invalid-source-materials",
        "manifest.sourceMaterials must be a non-empty array when present",
        "manifest.sourceMaterials"
      )
    )
  } else {
    sourceMaterials.forEach(
      (/** @type {any} */ material, /** @type {number} */ index) => {
        const materialPath = `manifest.sourceMaterials[${index}]`
        if (
          !material ||
          typeof material !== "object" ||
          Array.isArray(material)
        ) {
          diagnostics.push(
            diagnostic(
              "fatal",
              "provenance.invalid-source-material",
              "Source material must be an object",
              materialPath
            )
          )
          return
        }

        const hasValidId =
          typeof material.id === "string" && material.id.trim() !== ""
        if (!hasValidId) {
          diagnostics.push(
            diagnostic(
              "fatal",
              "provenance.invalid-source-material",
              "Source material id must be non-empty",
              `${materialPath}.id`
            )
          )
        } else if (byId.has(material.id)) {
          diagnostics.push(
            diagnostic(
              "fatal",
              "provenance.duplicate-source-material-id",
              `Source material id ${material.id} is duplicated`,
              `${materialPath}.id`
            )
          )
        } else {
          byId.set(material.id, material)
        }

        if (typeof material.role !== "string" || material.role.trim() === "") {
          diagnostics.push(
            diagnostic(
              "fatal",
              "provenance.invalid-source-material",
              "Source material role must be non-empty",
              `${materialPath}.role`
            )
          )
        } else if (!SOURCE_SPAN_ROLES.has(material.role)) {
          diagnostics.push(
            diagnostic(
              "fatal",
              "provenance.invalid-source-material-role",
              `Unsupported source material role ${material.role}`,
              `${materialPath}.role`
            )
          )
        }
        if (
          typeof material.pdfSha256 !== "string" ||
          !SHA256_PATTERN.test(material.pdfSha256)
        ) {
          diagnostics.push(
            diagnostic(
              "fatal",
              "provenance.invalid-source-material-checksum",
              "Source material pdfSha256 must be a SHA-256 hex digest",
              `${materialPath}.pdfSha256`
            )
          )
        } else {
          if (material.role === "base" && material.pdfSha256 !== pdfSha256) {
            diagnostics.push(
              diagnostic(
                "fatal",
                "provenance.base-source-material-checksum-mismatch",
                "Base source material checksum must equal the edition PDF checksum",
                `${materialPath}.pdfSha256`,
                { expected: pdfSha256, observed: material.pdfSha256 }
              )
            )
          }
          if (
            typeof material.expectedPdfSha256 === "string" &&
            material.pdfSha256 !== material.expectedPdfSha256
          ) {
            diagnostics.push(
              diagnostic(
                "fatal",
                "provenance.source-material-checksum-pin-mismatch",
                "Source material checksum must equal its pinned checksum",
                `${materialPath}.pdfSha256`,
                {
                  expected: material.expectedPdfSha256,
                  observed: material.pdfSha256,
                }
              )
            )
          }
        }
        if (
          material.expectedPdfSha256 !== undefined &&
          (typeof material.expectedPdfSha256 !== "string" ||
            !SHA256_PATTERN.test(material.expectedPdfSha256))
        ) {
          diagnostics.push(
            diagnostic(
              "fatal",
              "provenance.invalid-source-material-checksum-pin",
              "Source material expectedPdfSha256 must be a SHA-256 hex digest",
              `${materialPath}.expectedPdfSha256`
            )
          )
        }
        if (
          material.role === "effective-date" &&
          (typeof material.effectiveDate !== "string" ||
            !DATE_PATTERN.test(material.effectiveDate))
        ) {
          diagnostics.push(
            diagnostic(
              "fatal",
              "provenance.invalid-effective-date-source",
              "An effective-date source material requires a YYYY-MM-DD effectiveDate",
              `${materialPath}.effectiveDate`
            )
          )
        }
      }
    )
  }

  let amendmentSourceId
  let amendmentEffectiveDate
  const manifestOverlay = manifest?.amendmentOverlay
  if (manifestOverlay !== undefined) {
    if (
      !manifestOverlay ||
      typeof manifestOverlay !== "object" ||
      Array.isArray(manifestOverlay)
    ) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provenance.invalid-manifest-amendment-overlay",
          "manifest.amendmentOverlay must be an object",
          "manifest.amendmentOverlay"
        )
      )
    } else {
      amendmentEffectiveDate =
        typeof manifestOverlay.effectiveDate === "string"
          ? manifestOverlay.effectiveDate
          : undefined
      const amendmentSource = manifestOverlay.amendmentSource
      if (
        !amendmentSource ||
        typeof amendmentSource !== "object" ||
        Array.isArray(amendmentSource)
      ) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provenance.invalid-manifest-amendment-source",
            "manifest.amendmentOverlay.amendmentSource must be an object",
            "manifest.amendmentOverlay.amendmentSource"
          )
        )
      } else {
        amendmentSourceId =
          typeof amendmentSource.id === "string" &&
          amendmentSource.id.trim() !== ""
            ? amendmentSource.id
            : undefined
        if (!amendmentSourceId) {
          diagnostics.push(
            diagnostic(
              "fatal",
              "provenance.invalid-manifest-amendment-source",
              "Manifest amendment source id must be non-empty",
              "manifest.amendmentOverlay.amendmentSource.id"
            )
          )
        } else {
          const material = byId.get(amendmentSourceId)
          if (!material) {
            diagnostics.push(
              diagnostic(
                "fatal",
                "provenance.amendment-source-material-not-found",
                `Manifest amendment source ${amendmentSourceId} is missing from sourceMaterials`,
                "manifest.amendmentOverlay.amendmentSource.id"
              )
            )
          } else {
            if (material.role !== "amendment") {
              diagnostics.push(
                diagnostic(
                  "fatal",
                  "provenance.amendment-source-role-mismatch",
                  "Manifest amendment source must resolve to an amendment material",
                  "manifest.amendmentOverlay.amendmentSource.id"
                )
              )
            }
            if (amendmentSource.pdfSha256 !== material.pdfSha256) {
              diagnostics.push(
                diagnostic(
                  "fatal",
                  "provenance.amendment-source-checksum-mismatch",
                  "Manifest amendment source checksum must match its source material",
                  "manifest.amendmentOverlay.amendmentSource.pdfSha256",
                  {
                    expected: material.pdfSha256,
                    observed: amendmentSource.pdfSha256,
                  }
                )
              )
            }
            if (
              amendmentEffectiveDate !== undefined &&
              material.effectiveDate !== amendmentEffectiveDate
            ) {
              diagnostics.push(
                diagnostic(
                  "fatal",
                  "provenance.amendment-source-effective-date-mismatch",
                  "Manifest amendment source effective date must match its source material",
                  "manifest.amendmentOverlay.effectiveDate",
                  {
                    expected: material.effectiveDate,
                    observed: amendmentEffectiveDate,
                  }
                )
              )
            }
          }
        }
      }
    }
  }

  return { diagnostics, byId, amendmentSourceId, amendmentEffectiveDate }
}

/**
 * @param {{
 *   provisions: any,
 *   documentId: string,
 *   editionId: string,
 *   pageCount: number,
 *   pdfSha256: string,
 *   manifest?: any,
 *   rejectEmbeddedArticleHeadings?: boolean,
 *   rejectTemporalMarkers?: boolean,
 * }} options
 * @returns {Diagnostic[]}
 */
export function validateProvisionFacts({
  provisions,
  documentId,
  editionId,
  pageCount,
  pdfSha256,
  manifest = undefined,
  rejectEmbeddedArticleHeadings = false,
  rejectTemporalMarkers = false,
}) {
  /** @type {Diagnostic[]} */
  const diagnostics = []
  if (!/^[0-9a-f]{64}$/u.test(String(pdfSha256))) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "provisions.invalid-edition-pdf-checksum",
        "Edition PDF checksum must be a SHA-256 hex digest",
        "pdfSha256"
      )
    )
  }
  if (!Array.isArray(provisions)) {
    return [
      diagnostic(
        "fatal",
        "provisions.not-array",
        "provisions.json must contain an array",
        "provisions"
      ),
    ]
  }

  const hasSourceSpans = provisions.some(
    (/** @type {any} */ provision) => provision?.sourceSpans !== undefined
  )
  const sourceMaterialContext = validateManifestSourceMaterials(manifest, {
    required: hasSourceSpans,
    pdfSha256,
  })
  diagnostics.push(...sourceMaterialContext.diagnostics)

  const ids = new Set()
  const locators = new Set()
  const orders = new Set()

  provisions.forEach((provision, index) => {
    const path = `provisions[${index}]`
    if (
      !provision ||
      typeof provision !== "object" ||
      Array.isArray(provision)
    ) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.invalid-record",
          "Provision must be an object",
          path
        )
      )
      return
    }

    if (typeof provision.id !== "string" || !ID_PATTERN.test(provision.id)) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.invalid-id",
          "Provision ID must be URL-safe",
          `${path}.id`
        )
      )
    } else if (ids.has(provision.id)) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.duplicate-id",
          `Duplicate provision ID ${provision.id}`,
          `${path}.id`
        )
      )
    } else {
      ids.add(provision.id)
    }

    if (
      typeof provision.locator !== "string" ||
      provision.locator.trim() === ""
    ) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.invalid-locator",
          "Provision locator must be non-empty",
          `${path}.locator`
        )
      )
    } else if (locators.has(provision.locator)) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.duplicate-locator",
          `Duplicate provision locator ${provision.locator}`,
          `${path}.locator`
        )
      )
    } else {
      locators.add(provision.locator)
    }

    if (provision.documentId !== documentId) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.document-id-mismatch",
          `Provision must belong to document ${documentId}`,
          `${path}.documentId`
        )
      )
    }
    if (provision.editionId !== editionId) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.edition-id-mismatch",
          `Provision must belong to edition ${editionId}`,
          `${path}.editionId`
        )
      )
    }
    if (!KIND_VALUES.has(provision.kind)) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.invalid-kind",
          `Unsupported provision kind ${provision.kind}`,
          `${path}.kind`
        )
      )
    } else if (
      provision.kind === "article" &&
      typeof provision.locator === "string"
    ) {
      try {
        const expectedId = createProvisionId(
          documentId,
          provision.locator,
          "article"
        )
        if (provision.id !== expectedId) {
          diagnostics.push(
            diagnostic(
              "fatal",
              "provisions.id-locator-mismatch",
              `Article ID must be the deterministic ID for ${provision.locator}`,
              `${path}.id`,
              { expected: expectedId, observed: provision.id }
            )
          )
        }
      } catch (error) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.invalid-locator",
            error instanceof Error ? error.message : String(error),
            `${path}.locator`
          )
        )
      }
    }
    if (!Number.isFinite(provision.order) || orders.has(provision.order)) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.invalid-order",
          "Provision order must be unique and finite",
          `${path}.order`
        )
      )
    } else {
      if (index > 0 && provision.order <= provisions[index - 1]?.order) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.non-deterministic-order",
            "Provision order must increase in output order",
            `${path}.order`
          )
        )
      }
      orders.add(provision.order)
    }
    if (
      !isOneBasedPage(provision.startPdfPage) ||
      !isOneBasedPage(provision.endPdfPage)
    ) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.invalid-page-range",
          "Provision PDF pages must be positive integers",
          path
        )
      )
    } else if (
      provision.startPdfPage > provision.endPdfPage ||
      provision.endPdfPage > pageCount
    ) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.page-range-out-of-bounds",
          `Provision page range must satisfy 1 <= start <= end <= ${pageCount}`,
          path,
          {
            startPdfPage: provision.startPdfPage,
            endPdfPage: provision.endPdfPage,
            pageCount,
          }
        )
      )
    }
    if (!/^[0-9a-f]{64}$/u.test(String(provision.sourcePdfSha256))) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.invalid-pdf-checksum",
          "Provision sourcePdfSha256 must be a SHA-256 hex digest",
          `${path}.sourcePdfSha256`
        )
      )
    } else if (provision.sourcePdfSha256 !== pdfSha256) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.pdf-checksum-mismatch",
          "Provision sourcePdfSha256 must equal the edition PDF checksum",
          `${path}.sourcePdfSha256`,
          { expected: pdfSha256, observed: provision.sourcePdfSha256 }
        )
      )
    }
    if (typeof provision.text !== "string" || provision.text.trim() === "") {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.missing-text",
          "Provision text must be non-empty",
          `${path}.text`
        )
      )
    } else if (!/^[0-9a-f]{64}$/u.test(String(provision.sourceTextHash))) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.invalid-source-text-checksum",
          "Provision sourceTextHash must be a SHA-256 hex digest",
          `${path}.sourceTextHash`
        )
      )
    } else if (provision.sourceTextHash !== sha256(provision.text)) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.source-text-checksum-mismatch",
          "Provision sourceTextHash must match normalized provision text",
          `${path}.sourceTextHash`
        )
      )
    }
    if (!STATUS_VALUES.has(provision.status)) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.invalid-status",
          `Unsupported provision status ${provision.status}`,
          `${path}.status`
        )
      )
    }
    const effectiveDate = provision.effectiveDate
    const validEffectiveDate =
      typeof effectiveDate === "string" &&
      DATE_PATTERN.test(effectiveDate) &&
      !Number.isNaN(new Date(`${effectiveDate}T00:00:00Z`).valueOf()) &&
      new Date(`${effectiveDate}T00:00:00Z`).toISOString().slice(0, 10) ===
        effectiveDate
    if (provision.status === "future") {
      if (!validEffectiveDate) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.missing-future-effective-date",
            "A future provision requires a valid YYYY-MM-DD effectiveDate",
            `${path}.effectiveDate`
          )
        )
      } else if (
        typeof manifest?.legalStateDate === "string" &&
        DATE_PATTERN.test(manifest.legalStateDate) &&
        effectiveDate <= manifest.legalStateDate
      ) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.non-future-effective-date",
            "A future provision effectiveDate must be later than the edition legalStateDate",
            `${path}.effectiveDate`,
            {
              legalStateDate: manifest.legalStateDate,
              effectiveDate,
            }
          )
        )
      }
    } else if (effectiveDate !== undefined) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.unexpected-effective-date",
          "Only future provisions may declare effectiveDate",
          `${path}.effectiveDate`
        )
      )
    }
    if (
      rejectEmbeddedArticleHeadings &&
      provision.kind === "article" &&
      typeof provision.text === "string"
    ) {
      const headings = [
        ...provision.text.matchAll(
          /(?:^|\n)\s*[\[<]?\s*Art\.\s+\d+(?:\s*[a-z]{1,2})?\s*\./gmu
        ),
      ]
      if (headings.length !== 1 || !/^Art\.\s+\d+/u.test(provision.text)) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.embedded-article-heading",
            "An article provision must contain exactly one top-level article heading",
            `${path}.text`,
            { observedHeadingCount: headings.length }
          )
        )
      }
    }
    if (
      rejectTemporalMarkers &&
      typeof provision.text === "string" &&
      (/\[[\s\S]*?\]/u.test(provision.text) ||
        /<[\s\S]*?>/u.test(provision.text))
    ) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.unresolved-temporal-alternative",
          "Provision text retains a bracketed or angle-bracketed temporal alternative",
          `${path}.text`
        )
      )
    }
    /** @type {any[]} */
    const sourceSpans = []
    if (provision.sourceSpans !== undefined) {
      if (
        !Array.isArray(provision.sourceSpans) ||
        provision.sourceSpans.length === 0
      ) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.invalid-source-spans",
            "sourceSpans must be a non-empty array when present",
            `${path}.sourceSpans`
          )
        )
      } else {
        provision.sourceSpans.forEach(
          (/** @type {any} */ span, /** @type {number} */ spanIndex) => {
            const spanPath = `${path}.sourceSpans[${spanIndex}]`
            if (!span || typeof span !== "object" || Array.isArray(span)) {
              diagnostics.push(
                diagnostic(
                  "fatal",
                  "provisions.invalid-source-spans",
                  "sourceSpan must be an object",
                  spanPath
                )
              )
              return
            }
            sourceSpans.push(span)
            const hasValidSourceId =
              typeof span.sourceId === "string" && span.sourceId.trim() !== ""
            if (!hasValidSourceId) {
              diagnostics.push(
                diagnostic(
                  "fatal",
                  "provisions.invalid-source-spans",
                  "sourceSpan.sourceId is required",
                  `${spanPath}.sourceId`
                )
              )
            }
            const hasValidRole =
              typeof span.role === "string" && span.role.trim() !== ""
            if (!hasValidRole) {
              diagnostics.push(
                diagnostic(
                  "fatal",
                  "provisions.invalid-source-spans",
                  "sourceSpan.role is required",
                  `${spanPath}.role`
                )
              )
            } else if (!SOURCE_SPAN_ROLES.has(span.role)) {
              diagnostics.push(
                diagnostic(
                  "fatal",
                  "provisions.invalid-source-span-role",
                  `Unsupported sourceSpan role ${span.role}`,
                  `${spanPath}.role`
                )
              )
            }
            if (typeof span.locator !== "string" || !span.locator.trim()) {
              diagnostics.push(
                diagnostic(
                  "fatal",
                  "provisions.invalid-source-spans",
                  "sourceSpan.locator is required",
                  `${spanPath}.locator`
                )
              )
            }
            const material = hasValidSourceId
              ? sourceMaterialContext.byId.get(span.sourceId)
              : undefined
            if (hasValidSourceId && !material) {
              diagnostics.push(
                diagnostic(
                  "fatal",
                  "provisions.source-span-source-not-found",
                  `sourceSpan sourceId ${span.sourceId} is missing from manifest.sourceMaterials`,
                  `${spanPath}.sourceId`
                )
              )
            } else if (
              material &&
              hasValidRole &&
              span.role !== material.role
            ) {
              diagnostics.push(
                diagnostic(
                  "fatal",
                  "provisions.source-span-role-mismatch",
                  "sourceSpan role must match the resolved source material role",
                  `${spanPath}.role`,
                  { expected: material.role, observed: span.role }
                )
              )
            }
            if (SOURCE_SPAN_ROLES.has(span.role)) {
              if (
                typeof span.sourcePdfSha256 !== "string" ||
                !SHA256_PATTERN.test(span.sourcePdfSha256)
              ) {
                diagnostics.push(
                  diagnostic(
                    "fatal",
                    "provisions.invalid-source-span-checksum",
                    `${span.role} sourceSpan requires sourcePdfSha256`,
                    `${spanPath}.sourcePdfSha256`
                  )
                )
              } else if (
                material &&
                span.sourcePdfSha256 !== material.pdfSha256
              ) {
                diagnostics.push(
                  diagnostic(
                    "fatal",
                    "provisions.source-span-pdf-checksum-mismatch",
                    "sourceSpan checksum must match the resolved source material",
                    `${spanPath}.sourcePdfSha256`,
                    {
                      expected: material.pdfSha256,
                      observed: span.sourcePdfSha256,
                    }
                  )
                )
              }
            }
            if (span.role === "base") {
              if (
                !isOneBasedPage(span.startPdfPage) ||
                !isOneBasedPage(span.endPdfPage)
              ) {
                diagnostics.push(
                  diagnostic(
                    "fatal",
                    "provisions.invalid-source-spans",
                    "base sourceSpan requires PDF page range",
                    spanPath
                  )
                )
              } else if (
                span.startPdfPage > span.endPdfPage ||
                span.endPdfPage > pageCount
              ) {
                diagnostics.push(
                  diagnostic(
                    "fatal",
                    "provisions.source-span-page-range-out-of-bounds",
                    `Base sourceSpan page range must satisfy 1 <= start <= end <= ${pageCount}`,
                    spanPath
                  )
                )
              }
            } else if (
              (span.role === "amendment" || span.role === "effective-date") &&
              (typeof span.effectiveDate !== "string" ||
                span.effectiveDate.trim() === "")
            ) {
              diagnostics.push(
                diagnostic(
                  "fatal",
                  "provisions.invalid-source-spans",
                  `${span.role} sourceSpan requires effectiveDate`,
                  `${spanPath}.effectiveDate`
                )
              )
            }
            if (
              material &&
              (span.role === "amendment" || span.role === "effective-date") &&
              typeof material.effectiveDate === "string" &&
              span.effectiveDate !== material.effectiveDate
            ) {
              diagnostics.push(
                diagnostic(
                  "fatal",
                  "provisions.source-span-effective-date-mismatch",
                  "sourceSpan effectiveDate must match the resolved source material",
                  `${spanPath}.effectiveDate`,
                  {
                    expected: material.effectiveDate,
                    observed: span.effectiveDate,
                  }
                )
              )
            }
          }
        )
      }
    }
    const amendmentSpans = sourceSpans.filter(
      (/** @type {any} */ span) => span.role === "amendment"
    )
    if (provision.amendmentOverlay === undefined) {
      if (amendmentSpans.length > 0) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.missing-amendment-overlay",
            "An amendment sourceSpan requires provision amendmentOverlay provenance",
            `${path}.amendmentOverlay`
          )
        )
      }
    } else if (
      !provision.amendmentOverlay ||
      typeof provision.amendmentOverlay !== "object" ||
      Array.isArray(provision.amendmentOverlay)
    ) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.invalid-amendment-overlay",
          "Provision amendmentOverlay must be an object",
          `${path}.amendmentOverlay`
        )
      )
    } else {
      const overlay = provision.amendmentOverlay
      for (const field of [
        "amendmentSourceId",
        "amendmentLocator",
        "effectiveDate",
        "baseSourceTextHash",
        "compiledSourceTextHash",
      ]) {
        if (
          typeof overlay[field] !== "string" ||
          overlay[field].trim() === ""
        ) {
          diagnostics.push(
            diagnostic(
              "fatal",
              "provisions.invalid-amendment-overlay",
              `Provision amendmentOverlay.${field} is required`,
              `${path}.amendmentOverlay.${field}`
            )
          )
        }
      }
      if (overlay.kind !== "replace-once") {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.invalid-amendment-overlay",
            "Provision amendmentOverlay.kind must be replace-once",
            `${path}.amendmentOverlay.kind`
          )
        )
      }
      for (const hashField of [
        "baseSourceTextHash",
        "compiledSourceTextHash",
      ]) {
        if (
          typeof overlay[hashField] === "string" &&
          !SHA256_PATTERN.test(overlay[hashField])
        ) {
          diagnostics.push(
            diagnostic(
              "fatal",
              "provisions.invalid-amendment-overlay-checksum",
              `Provision amendmentOverlay.${hashField} must be a SHA-256 hex digest`,
              `${path}.amendmentOverlay.${hashField}`
            )
          )
        }
      }
      if (overlay.compiledSourceTextHash !== provision.sourceTextHash) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.amendment-overlay-compiled-checksum-mismatch",
            "Compiled overlay checksum must equal the provision source text hash",
            `${path}.amendmentOverlay.compiledSourceTextHash`
          )
        )
      }

      const overlayMaterial = sourceMaterialContext.byId.get(
        overlay.amendmentSourceId
      )
      if (!overlayMaterial) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.amendment-overlay-source-not-found",
            `Provision amendment source ${overlay.amendmentSourceId} is missing from manifest.sourceMaterials`,
            `${path}.amendmentOverlay.amendmentSourceId`
          )
        )
      } else if (overlayMaterial.role !== "amendment") {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.amendment-overlay-source-role-mismatch",
            "Provision amendment source must resolve to an amendment material",
            `${path}.amendmentOverlay.amendmentSourceId`
          )
        )
      }
      if (!sourceMaterialContext.amendmentSourceId) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.missing-manifest-amendment-overlay",
            "Provision amendmentOverlay requires manifest amendmentOverlay provenance",
            "manifest.amendmentOverlay"
          )
        )
      } else if (
        overlay.amendmentSourceId !== sourceMaterialContext.amendmentSourceId
      ) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.amendment-overlay-source-mismatch",
            "Provision amendment source must match the manifest amendment source",
            `${path}.amendmentOverlay.amendmentSourceId`,
            {
              expected: sourceMaterialContext.amendmentSourceId,
              observed: overlay.amendmentSourceId,
            }
          )
        )
      }
      if (
        sourceMaterialContext.amendmentEffectiveDate !== undefined &&
        overlay.effectiveDate !== sourceMaterialContext.amendmentEffectiveDate
      ) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.amendment-overlay-effective-date-mismatch",
            "Provision amendment effective date must match the manifest overlay",
            `${path}.amendmentOverlay.effectiveDate`
          )
        )
      }

      const matchingAmendmentSpans = amendmentSpans.filter(
        (/** @type {any} */ span) => span.sourceId === overlay.amendmentSourceId
      )
      if (amendmentSpans.length !== 1 || matchingAmendmentSpans.length !== 1) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.amendment-overlay-span-mismatch",
            "Provision amendmentOverlay must have exactly one matching amendment sourceSpan",
            `${path}.sourceSpans`
          )
        )
      } else {
        const [amendmentSpan] = matchingAmendmentSpans
        if (
          amendmentSpan.locator !== overlay.amendmentLocator ||
          amendmentSpan.effectiveDate !== overlay.effectiveDate
        ) {
          diagnostics.push(
            diagnostic(
              "fatal",
              "provisions.amendment-overlay-span-mismatch",
              "Amendment sourceSpan locator and effective date must match amendmentOverlay",
              `${path}.sourceSpans`
            )
          )
        }
      }
      if (
        !sourceSpans.some((/** @type {any} */ span) => span.role === "base")
      ) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.amendment-overlay-missing-base-span",
            "A compiled amendment provision requires a base sourceSpan",
            `${path}.sourceSpans`
          )
        )
      }
    }
    if (provision.parentId !== null && typeof provision.parentId !== "string") {
      diagnostics.push(
        diagnostic(
          "fatal",
          "hierarchy.invalid-parent",
          "parentId must be null or a provision ID",
          `${path}.parentId`
        )
      )
    }
    if (
      !Array.isArray(provision.childIds) ||
      provision.childIds.some(
        (/** @type {unknown} */ id) => typeof id !== "string"
      )
    ) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "hierarchy.invalid-children",
          "childIds must be an array of provision IDs",
          `${path}.childIds`
        )
      )
    } else if (new Set(provision.childIds).size !== provision.childIds.length) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "hierarchy.duplicate-child",
          "childIds must not repeat a provision ID",
          `${path}.childIds`
        )
      )
    }
  })

  for (const provision of provisions) {
    if (!provision || typeof provision !== "object") continue
    if (provision.parentId && !ids.has(provision.parentId)) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "hierarchy.missing-parent",
          `Parent ${provision.parentId} does not exist in this edition`,
          `provisions.${provision.id}.parentId`
        )
      )
    }
    for (const childId of Array.isArray(provision.childIds)
      ? provision.childIds
      : []) {
      if (!ids.has(childId)) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "hierarchy.missing-child",
            `Child ${childId} does not exist in this edition`,
            `provisions.${provision.id}.childIds`
          )
        )
      }
    }
  }

  const provisionById = new Map(
    provisions
      .filter((provision) => provision && typeof provision === "object")
      .map((provision) => [provision.id, provision])
  )
  for (const provision of provisions) {
    if (!provision || typeof provision !== "object") continue
    for (const childId of Array.isArray(provision.childIds)
      ? provision.childIds
      : []) {
      const child = provisionById.get(childId)
      if (child && child.parentId !== provision.id) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "hierarchy.parent-child-mismatch",
            `Child ${childId} does not point back to parent ${provision.id}`,
            `provisions.${provision.id}.childIds`
          )
        )
      }
    }
    if (provision.parentId) {
      const parent = provisionById.get(provision.parentId)
      if (parent && !parent.childIds.includes(provision.id)) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "hierarchy.parent-child-mismatch",
            `Parent ${provision.parentId} does not list child ${provision.id}`,
            `provisions.${provision.id}.parentId`
          )
        )
      }
    }
  }

  /** @type {Set<string>} */
  const visiting = new Set()
  /** @type {Set<string>} */
  const visited = new Set()
  /** @param {string} id */
  const visit = (id) => {
    if (visiting.has(id)) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "hierarchy.cycle",
          `Provision hierarchy contains a cycle at ${id}`,
          "provisions"
        )
      )
      return
    }
    if (visited.has(id)) return
    visiting.add(id)
    const provision = provisionById.get(id)
    for (const childId of provision?.childIds ?? []) {
      if (provisionById.has(childId)) visit(childId)
    }
    visiting.delete(id)
    visited.add(id)
  }
  for (const id of provisionById.keys()) visit(id)

  return diagnostics
}

/**
 * @param {{ structure: any, provisions: any }} options
 * @returns {Diagnostic[]}
 */
export function validateStructure({ structure, provisions }) {
  /** @type {Diagnostic[]} */
  const diagnostics = []
  if (!structure || typeof structure !== "object" || Array.isArray(structure)) {
    return [
      diagnostic(
        "fatal",
        "structure.invalid",
        "structure.json must contain an object",
        "structure"
      ),
    ]
  }
  if (!Array.isArray(provisions)) return diagnostics

  const ids = provisions.map((provision) => provision.id)
  const roots = provisions
    .filter((provision) => provision.parentId === null)
    .map((provision) => provision.id)
  const expectedPrevious = Object.fromEntries(
    ids.map((id, index) => [id, ids[index - 1] ?? null])
  )
  const expectedNext = Object.fromEntries(
    ids.map((id, index) => [id, ids[index + 1] ?? null])
  )
  const expectedChildren = Object.fromEntries(
    ids.map((id) => [id, provisions.find((p) => p.id === id).childIds])
  )

  if (JSON.stringify(structure.provisionIds) !== JSON.stringify(ids)) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "structure.order-mismatch",
        "structure.provisionIds must match provision order",
        "structure.provisionIds"
      )
    )
  }
  if (JSON.stringify(structure.order) !== JSON.stringify(ids)) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "structure.order-mismatch",
        "structure.order must match provision order",
        "structure.order"
      )
    )
  }
  if (JSON.stringify(structure.rootIds) !== JSON.stringify(roots)) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "structure.roots-mismatch",
        "structure.rootIds must match hierarchy roots",
        "structure.rootIds"
      )
    )
  }
  if (
    JSON.stringify(structure.previousById) !== JSON.stringify(expectedPrevious)
  ) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "structure.previous-mismatch",
        "structure.previousById is not deterministic",
        "structure.previousById"
      )
    )
  }
  if (JSON.stringify(structure.nextById) !== JSON.stringify(expectedNext)) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "structure.next-mismatch",
        "structure.nextById is not deterministic",
        "structure.nextById"
      )
    )
  }
  if (
    JSON.stringify(structure.childrenById) !== JSON.stringify(expectedChildren)
  ) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "structure.children-mismatch",
        "structure.childrenById does not match provisions",
        "structure.childrenById"
      )
    )
  }
  if (
    !Array.isArray(structure.nodes) ||
    structure.nodes.length !== provisions.length
  ) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "structure.nodes-mismatch",
        "structure.nodes must contain one node per provision",
        "structure.nodes"
      )
    )
  } else {
    structure.nodes.forEach(
      (/** @type {any} */ node, /** @type {number} */ index) => {
        const expected = provisions[index]
        if (
          node?.id !== expected.id ||
          node?.kind !== expected.kind ||
          node?.locator !== expected.locator ||
          node?.parentId !== expected.parentId ||
          JSON.stringify(node?.childIds) !==
            JSON.stringify(expected.childIds) ||
          node?.order !== expected.order ||
          node?.startPdfPage !== expected.startPdfPage ||
          node?.endPdfPage !== expected.endPdfPage ||
          node?.status !== expected.status ||
          node?.effectiveDate !== expected.effectiveDate
        ) {
          diagnostics.push(
            diagnostic(
              "fatal",
              "structure.nodes-mismatch",
              `structure.nodes[${index}] does not match its provision`,
              `structure.nodes[${index}]`
            )
          )
        }
      }
    )
  }

  return diagnostics
}

/**
 * @param {{
 *   config: any,
 *   metadata: any,
 *   pdfBytes: unknown,
 *   pdfSha256: string,
 *   pages: Page[],
 *   provisions: any,
 *   structure: any,
 *   observed: any,
 *   manifest?: any,
 *   existingManifests?: any[],
 * }} options
 * @returns {{ entries: Diagnostic[], fatal: Diagnostic[], warnings: Diagnostic[] }}
 */
export function validateCorpusFacts({
  config,
  metadata,
  pdfBytes,
  pdfSha256,
  pages,
  provisions,
  structure,
  observed,
  manifest = undefined,
  existingManifests = [],
}) {
  const entries = [
    ...validateOfficialIdentity(config, metadata, pdfBytes),
    ...validateExtractionExpectations(config, observed),
    ...validateProvisionFacts({
      provisions,
      documentId: config.documentId,
      editionId: config.editionId,
      pageCount: observed.pageCount,
      pdfSha256,
      manifest,
      rejectEmbeddedArticleHeadings:
        config.extraction.rejectEmbeddedArticleHeadings ?? false,
      rejectTemporalMarkers: config.extraction.rejectTemporalMarkers ?? false,
    }),
    ...validateStructure({ structure, provisions }),
  ]
  for (const manifest of existingManifests) {
    entries.push(
      ...validateExistingEditionIdentity(manifest, config, pdfSha256)
    )
  }

  return {
    entries,
    fatal: entries.filter((entry) => entry.severity === "fatal"),
    warnings: entries.filter((entry) => entry.severity === "warning"),
  }
}

/**
 * @param {{ config: any, observed: any, result: { entries: Diagnostic[], fatal: Diagnostic[], warnings: Diagnostic[] } }} options
 * @returns {any}
 */
export function makeDiagnostics({ config, observed, result }) {
  return {
    schemaVersion: config.schemaVersion,
    documentId: config.documentId,
    editionId: config.editionId,
    profile: config.extraction.profile,
    expected: {
      provisionCount: config.extraction.expectedProvisionCount,
      pageCount: config.extraction.expectedPageCount,
      textCoverage: config.extraction.expectedTextCoverage,
    },
    observed,
    entries: result.entries,
    fatal: result.fatal,
    warnings: result.warnings,
  }
}

/**
 * @param {{ entries: Diagnostic[], fatal: Diagnostic[], warnings: Diagnostic[] }} result
 * @returns {{ entries: Diagnostic[], fatal: Diagnostic[], warnings: Diagnostic[] }}
 */
export function assertNoFatalDiagnostics(result) {
  if (result.fatal.length === 0) return result
  throw new CorpusValidationError(
    `Corpus validation failed with ${result.fatal.length} fatal diagnostic(s)`,
    result
  )
}
