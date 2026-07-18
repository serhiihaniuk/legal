import { URL } from "node:url"

/** @typedef {import("./types.mjs").Diagnostic} Diagnostic */

export const SCHEMA_VERSION = 2
export const EXTRACTION_PROFILE = "polish-statute-art-v1"
export const EXTRACTION_PROFILES = new Set([
  EXTRACTION_PROFILE,
  "polish-regulation-paragraph-v1",
])

const ID_PATTERN = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/
const REQUIRED_SOURCE_URLS = ["officialPageUrl", "metadataUrl", "pdfUrl"]
const SHA256_PATTERN = /^[0-9a-f]{64}$/u
const PROVISION_STATUS_VALUES = new Set([
  "active",
  "future",
  "repealed",
  "reserved",
  "removed",
  "unknown",
])

export class ConfigValidationError extends Error {
  /**
   * @param {string} message
   * @param {Diagnostic[]} [diagnostics]
   */
  constructor(message, diagnostics = []) {
    super(message)
    this.name = "ConfigValidationError"
    this.diagnostics = diagnostics
  }
}

/**
 * @param {unknown} value
 * @returns {value is Record<string, any>}
 */
function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value)
}

/**
 * @param {unknown} value
 * @param {string} field
 * @param {Diagnostic[]} diagnostics
 * @returns {value is string}
 */
function requireString(value, field, diagnostics) {
  if (typeof value !== "string" || value.trim() === "") {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-field",
      path: field,
      message: `${field} must be a non-empty string`,
    })
    return false
  }
  return true
}

/**
 * Real-calendar-date check shared by config and work-order evidence
 * validation: `field` must be `YYYY-MM-DD` and round-trip through `Date`
 * unchanged, so syntactically shaped but impossible dates (`2026-99-99`) or
 * relative strings (`"yesterday"`) are rejected rather than accepted as
 * evidence.
 * @param {unknown} value
 * @param {string} field
 * @param {Diagnostic[]} diagnostics
 */
export function validateDate(value, field, diagnostics) {
  if (!requireString(value, field, diagnostics)) return
  if (!DATE_PATTERN.test(value)) {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-date",
      path: field,
      message: `${field} must use YYYY-MM-DD`,
    })
    return
  }

  const date = new Date(`${value}T00:00:00Z`)
  if (
    Number.isNaN(date.valueOf()) ||
    date.toISOString().slice(0, 10) !== value
  ) {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-date",
      path: field,
      message: `${field} is not a calendar date`,
    })
  }
}

/**
 * @param {unknown} value
 * @param {string} field
 * @param {Diagnostic[]} diagnostics
 */
export function validateHttpsUrl(value, field, diagnostics) {
  if (!requireString(value, field, diagnostics)) return

  try {
    const parsed = new URL(value)
    if (parsed.protocol !== "https:") throw new Error("not https")
    if (!parsed.hostname) throw new Error("missing hostname")
  } catch {
    diagnostics.push({
      severity: "fatal",
      code: "config.source-url-not-https",
      path: field,
      message: `${field} must be an absolute HTTPS URL`,
    })
  }
}

/**
 * @param {unknown} value
 * @param {string} field
 * @param {Diagnostic[]} diagnostics
 */
function validateOptionalSha256(value, field, diagnostics) {
  if (value === undefined) return
  if (typeof value !== "string" || !SHA256_PATTERN.test(value)) {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-checksum",
      path: field,
      message: `${field} must be a lowercase SHA-256 hex digest`,
    })
  }
}

/**
 * @param {unknown} value
 * @param {string} field
 * @param {Diagnostic[]} diagnostics
 */
function validateId(value, field, diagnostics) {
  if (!requireString(value, field, diagnostics)) return
  if (!ID_PATTERN.test(value)) {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-id",
      path: field,
      message: `${field} must be URL-safe and contain only lowercase letters, numbers, and hyphens`,
    })
  }
}

/**
 * @param {unknown} value
 * @param {string} field
 * @param {Diagnostic[]} diagnostics
 */
function validateEvidenceEntries(value, field, diagnostics) {
  if (!Array.isArray(value) || value.length === 0) {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-legal-status-evidence",
      path: field,
      message: `${field} must contain at least one explicit result`,
    })
    return
  }

  value.forEach((entry, index) => {
    const entryField = `${field}[${index}]`
    if (!isPlainObject(entry)) {
      diagnostics.push({
        severity: "fatal",
        code: "config.invalid-legal-status-evidence",
        path: entryField,
        message: `${entryField} must be an object`,
      })
      return
    }
    requireString(entry.locator, `${entryField}.locator`, diagnostics)
    requireString(entry.result, `${entryField}.result`, diagnostics)
    for (const urlField of ["sourceUrl", "url"]) {
      if (entry[urlField] !== undefined) {
        validateHttpsUrl(
          entry[urlField],
          `${entryField}.${urlField}`,
          diagnostics
        )
      }
    }
    if (entry.sourceUrls !== undefined) {
      if (!Array.isArray(entry.sourceUrls) || entry.sourceUrls.length === 0) {
        diagnostics.push({
          severity: "fatal",
          code: "config.invalid-legal-status-evidence",
          path: `${entryField}.sourceUrls`,
          message: `${entryField}.sourceUrls must contain HTTPS URLs`,
        })
      } else {
        entry.sourceUrls.forEach((url, urlIndex) =>
          validateHttpsUrl(
            url,
            `${entryField}.sourceUrls[${urlIndex}]`,
            diagnostics
          )
        )
      }
    }
  })
}

/**
 * @param {unknown} value
 * @param {string} field
 * @param {Diagnostic[]} diagnostics
 */
function validateArticleOccurrences(value, field, diagnostics) {
  const code = field.includes("excluded")
    ? "config.invalid-excluded-article-occurrences"
    : "config.invalid-ignored-article-occurrences"
  if (value === undefined) return
  if (!Array.isArray(value)) {
    diagnostics.push({
      severity: "fatal",
      code,
      path: field,
      message: `${field} must be an array`,
    })
    return
  }
  value.forEach((entry, index) => {
    const entryField = `${field}[${index}]`
    if (!isPlainObject(entry)) {
      diagnostics.push({
        severity: "fatal",
        code,
        path: entryField,
        message: `${entryField} must be an object`,
      })
      return
    }
    requireString(entry.locator, `${entryField}.locator`, diagnostics)
    if (!Number.isInteger(entry.pdfPage) || entry.pdfPage < 1) {
      diagnostics.push({
        severity: "fatal",
        code,
        path: `${entryField}.pdfPage`,
        message: `${entryField}.pdfPage must be a positive integer`,
      })
    }
    if (!Number.isInteger(entry.matchIndex) || entry.matchIndex < 0) {
      diagnostics.push({
        severity: "fatal",
        code,
        path: `${entryField}.matchIndex`,
        message: `${entryField}.matchIndex must be a non-negative integer`,
      })
    }
    if (entry.reason !== undefined) {
      requireString(entry.reason, `${entryField}.reason`, diagnostics)
    }
  })
}

/**
 * @param {unknown} value
 * @param {unknown} legalStateDate
 * @param {Diagnostic[]} diagnostics
 */
function validateFutureTextExclusions(value, legalStateDate, diagnostics) {
  if (value === undefined) return
  if (!Array.isArray(value) || value.length === 0) {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-future-text-exclusions",
      path: "extraction.futureTextExclusions",
      message: "extraction.futureTextExclusions must be a non-empty array",
    })
    return
  }
  const keys = new Set()
  value.forEach((entry, index) => {
    const field = `extraction.futureTextExclusions[${index}]`
    if (!isPlainObject(entry)) {
      diagnostics.push({
        severity: "fatal",
        code: "config.invalid-future-text-exclusions",
        path: field,
        message: `${field} must be an object`,
      })
      return
    }
    for (const name of ["locator", "startMarker", "effectiveDate", "reason"]) {
      requireString(entry[name], `${field}.${name}`, diagnostics)
    }
    if (entry.endMarker !== undefined) {
      requireString(entry.endMarker, `${field}.endMarker`, diagnostics)
    }
    validateDate(entry.effectiveDate, `${field}.effectiveDate`, diagnostics)
    if (
      typeof entry.effectiveDate === "string" &&
      DATE_PATTERN.test(entry.effectiveDate) &&
      typeof legalStateDate === "string" &&
      DATE_PATTERN.test(legalStateDate) &&
      entry.effectiveDate <= legalStateDate
    ) {
      diagnostics.push({
        severity: "fatal",
        code: "config.non-future-text-exclusion",
        path: `${field}.effectiveDate`,
        message: `${field}.effectiveDate must be later than legalStateDate`,
      })
    }
    const key = `${entry.locator}|${entry.startMarker}`
    if (keys.has(key)) {
      diagnostics.push({
        severity: "fatal",
        code: "config.duplicate-future-text-exclusion",
        path: field,
        message: `${field} duplicates an earlier future text exclusion`,
      })
    }
    keys.add(key)
  })
}

/**
 * @param {unknown} value
 * @param {unknown} legalStateDate
 * @param {Diagnostic[]} diagnostics
 */
function validateProvisionStatusOverrides(value, legalStateDate, diagnostics) {
  if (value === undefined) return
  if (!Array.isArray(value) || value.length === 0) {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-provision-status-overrides",
      path: "extraction.provisionStatusOverrides",
      message: "extraction.provisionStatusOverrides must be a non-empty array",
    })
    return
  }
  const locators = new Set()
  value.forEach((entry, index) => {
    const field = `extraction.provisionStatusOverrides[${index}]`
    if (!isPlainObject(entry)) {
      diagnostics.push({
        severity: "fatal",
        code: "config.invalid-provision-status-overrides",
        path: field,
        message: `${field} must be an object`,
      })
      return
    }
    for (const name of ["locator", "status", "reason"]) {
      requireString(entry[name], `${field}.${name}`, diagnostics)
    }
    if (!PROVISION_STATUS_VALUES.has(entry.status)) {
      diagnostics.push({
        severity: "fatal",
        code: "config.invalid-provision-status",
        path: `${field}.status`,
        message: `Unsupported provision status ${entry.status}`,
      })
    }
    if (entry.status === "future") {
      validateDate(entry.effectiveDate, `${field}.effectiveDate`, diagnostics)
      if (
        typeof entry.effectiveDate === "string" &&
        DATE_PATTERN.test(entry.effectiveDate) &&
        typeof legalStateDate === "string" &&
        DATE_PATTERN.test(legalStateDate) &&
        entry.effectiveDate <= legalStateDate
      ) {
        diagnostics.push({
          severity: "fatal",
          code: "config.non-future-provision-effective-date",
          path: `${field}.effectiveDate`,
          message: `${field}.effectiveDate must be later than legalStateDate`,
        })
      }
    } else if (entry.effectiveDate !== undefined) {
      diagnostics.push({
        severity: "fatal",
        code: "config.unexpected-provision-effective-date",
        path: `${field}.effectiveDate`,
        message: "Only future provisions may declare effectiveDate",
      })
    }
    if (locators.has(entry.locator)) {
      diagnostics.push({
        severity: "fatal",
        code: "config.duplicate-provision-status-override",
        path: `${field}.locator`,
        message: `Provision status override for ${entry.locator} is duplicated`,
      })
    }
    locators.add(entry.locator)
  })
}

/**
 * @param {unknown} value
 * @param {Diagnostic[]} diagnostics
 * @returns {any[]}
 */
function validateSupplementalSources(value, diagnostics) {
  if (value === undefined) return []
  if (!Array.isArray(value) || value.length === 0) {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-supplemental-sources",
      path: "supplementalSources",
      message: "supplementalSources must be a non-empty array when present",
    })
    return []
  }

  const ids = new Set()
  const localFilenames = new Set(["source.pdf", "amendment-source.pdf"])
  value.forEach((source, index) => {
    const field = `supplementalSources[${index}]`
    if (!isPlainObject(source)) {
      diagnostics.push({
        severity: "fatal",
        code: "config.invalid-supplemental-source",
        path: field,
        message: `${field} must be an object`,
      })
      return
    }
    validateId(source.id, `${field}.id`, diagnostics)
    if (typeof source.id === "string") {
      if (ids.has(source.id)) {
        diagnostics.push({
          severity: "fatal",
          code: "config.duplicate-supplemental-source",
          path: `${field}.id`,
          message: `Supplemental source id ${source.id} is duplicated`,
        })
      }
      ids.add(source.id)
    }
    for (const name of ["citation", "role", "localFilename"]) {
      requireString(source[name], `${field}.${name}`, diagnostics)
    }
    if (source.role !== "effective-date") {
      diagnostics.push({
        severity: "fatal",
        code: "config.invalid-supplemental-source-role",
        path: `${field}.role`,
        message: "Temporal supplemental sources must use role effective-date",
      })
    }
    if (
      typeof source.localFilename === "string" &&
      !/^[a-z0-9]+(?:-[a-z0-9]+)*\.pdf$/u.test(source.localFilename)
    ) {
      diagnostics.push({
        severity: "fatal",
        code: "config.invalid-supplemental-source-filename",
        path: `${field}.localFilename`,
        message: "localFilename must be a lowercase URL-safe PDF filename",
      })
    } else if (typeof source.localFilename === "string") {
      if (localFilenames.has(source.localFilename)) {
        diagnostics.push({
          severity: "fatal",
          code: "config.duplicate-supplemental-source-filename",
          path: `${field}.localFilename`,
          message: `Supplemental source filename ${source.localFilename} is reserved or duplicated`,
        })
      }
      localFilenames.add(source.localFilename)
    }
    for (const name of REQUIRED_SOURCE_URLS) {
      validateHttpsUrl(source[name], `${field}.${name}`, diagnostics)
    }
    requireString(
      source.expectedPdfSha256,
      `${field}.expectedPdfSha256`,
      diagnostics
    )
    validateOptionalSha256(
      source.expectedPdfSha256,
      `${field}.expectedPdfSha256`,
      diagnostics
    )
    validateDate(source.effectiveDate, `${field}.effectiveDate`, diagnostics)
  })
  return value
}

/**
 * @param {unknown} value
 * @param {any[]} supplementalSources
 * @param {unknown} legalStateDate
 * @param {Diagnostic[]} diagnostics
 */
function validateTemporalTextSelection(
  value,
  supplementalSources,
  legalStateDate,
  diagnostics
) {
  if (value === undefined) return
  if (!isPlainObject(value)) {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-temporal-text-selection",
      path: "temporalTextSelection",
      message: "temporalTextSelection must be an object",
    })
    return
  }
  if (value.kind !== "bracket-angle-v1") {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-temporal-text-selection",
      path: "temporalTextSelection.kind",
      message: "temporalTextSelection.kind must be bracket-angle-v1",
    })
  }
  for (const name of ["expectedOldBlockCount", "expectedCurrentBlockCount"]) {
    if (!Number.isInteger(value[name]) || value[name] <= 0) {
      diagnostics.push({
        severity: "fatal",
        code: "config.invalid-temporal-text-selection",
        path: `temporalTextSelection.${name}`,
        message: `${name} must be a positive integer`,
      })
    }
  }
  if (!Array.isArray(value.sources) || value.sources.length === 0) {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-temporal-text-selection",
      path: "temporalTextSelection.sources",
      message: "temporalTextSelection.sources must be a non-empty array",
    })
    return
  }

  const supplementalById = new Map(
    supplementalSources.map((source) => [source.id, source])
  )
  const sourceIds = new Set()
  value.sources.forEach((source, index) => {
    const field = `temporalTextSelection.sources[${index}]`
    if (!isPlainObject(source)) {
      diagnostics.push({
        severity: "fatal",
        code: "config.invalid-temporal-text-selection-source",
        path: field,
        message: `${field} must be an object`,
      })
      return
    }
    for (const name of ["sourceId", "locator"]) {
      requireString(source[name], `${field}.${name}`, diagnostics)
    }
    validateDate(source.effectiveDate, `${field}.effectiveDate`, diagnostics)
    if (
      typeof source.effectiveDate === "string" &&
      typeof legalStateDate === "string" &&
      source.effectiveDate > legalStateDate
    ) {
      diagnostics.push({
        severity: "fatal",
        code: "config.temporal-source-not-effective",
        path: `${field}.effectiveDate`,
        message:
          "A selected temporal source cannot take effect after legalStateDate",
      })
    }
    if (typeof source.sourceId === "string") {
      if (sourceIds.has(source.sourceId)) {
        diagnostics.push({
          severity: "fatal",
          code: "config.duplicate-temporal-source",
          path: `${field}.sourceId`,
          message: `Temporal source ${source.sourceId} is duplicated`,
        })
      }
      sourceIds.add(source.sourceId)
      const material = supplementalById.get(source.sourceId)
      if (!material) {
        diagnostics.push({
          severity: "fatal",
          code: "config.temporal-source-not-found",
          path: `${field}.sourceId`,
          message: `Temporal source ${source.sourceId} is missing from supplementalSources`,
        })
      } else if (material.effectiveDate !== source.effectiveDate) {
        diagnostics.push({
          severity: "fatal",
          code: "config.temporal-source-date-mismatch",
          path: `${field}.effectiveDate`,
          message: "Temporal selection date must match its supplemental source",
        })
      }
    }
    for (const rangeName of ["oldBlockRange", "currentBlockRange"]) {
      const range = source[rangeName]
      if (
        !isPlainObject(range) ||
        !Number.isInteger(range.first) ||
        !Number.isInteger(range.last) ||
        range.first < 1 ||
        range.first > range.last
      ) {
        diagnostics.push({
          severity: "fatal",
          code: "config.invalid-temporal-source-range",
          path: `${field}.${rangeName}`,
          message: `${rangeName} must contain positive inclusive first/last indexes`,
        })
      }
    }
    if (
      !Number.isInteger(source.expectedProvisionCount) ||
      source.expectedProvisionCount <= 0
    ) {
      diagnostics.push({
        severity: "fatal",
        code: "config.invalid-temporal-provision-count",
        path: `${field}.expectedProvisionCount`,
        message: "expectedProvisionCount must be a positive integer",
      })
    }
    if (source.textMarkers !== undefined) {
      if (
        !Array.isArray(source.textMarkers) ||
        source.textMarkers.length === 0 ||
        source.textMarkers.some(
          (marker) => typeof marker !== "string" || marker === ""
        )
      ) {
        diagnostics.push({
          severity: "fatal",
          code: "config.invalid-temporal-text-markers",
          path: `${field}.textMarkers`,
          message: "textMarkers must contain non-empty strings",
        })
      }
    }
  })

  for (const [rangeName, countName] of [
    ["oldBlockRange", "expectedOldBlockCount"],
    ["currentBlockRange", "expectedCurrentBlockCount"],
  ]) {
    const count = value[countName]
    if (!Number.isInteger(count) || count <= 0) continue
    for (let blockIndex = 1; blockIndex <= count; blockIndex += 1) {
      const matches = value.sources.filter(
        (source) =>
          isPlainObject(source?.[rangeName]) &&
          blockIndex >= source[rangeName].first &&
          blockIndex <= source[rangeName].last
      )
      if (matches.length !== 1) {
        diagnostics.push({
          severity: "fatal",
          code: "config.temporal-source-range-coverage",
          path: `temporalTextSelection.sources.${rangeName}`,
          message: `${rangeName} must assign block ${blockIndex} exactly once`,
        })
      }
    }
  }
}

/**
 * @param {unknown} value
 * @param {Diagnostic[]} diagnostics
 */
function validateAmendmentOverlay(value, diagnostics) {
  if (value === undefined) return
  if (!isPlainObject(value)) {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-amendment-overlay",
      path: "amendmentOverlay",
      message: "amendmentOverlay must be an object",
    })
    return
  }
  if (value.kind !== "amendment-overlay-v1") {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-amendment-overlay",
      path: "amendmentOverlay.kind",
      message: "amendmentOverlay.kind must be amendment-overlay-v1",
    })
  }
  requireString(
    value.baseEditionId,
    "amendmentOverlay.baseEditionId",
    diagnostics
  )
  validateDate(
    value.effectiveDate,
    "amendmentOverlay.effectiveDate",
    diagnostics
  )
  const amendmentSource = value.amendmentSource
  if (!isPlainObject(amendmentSource)) {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-amendment-source",
      path: "amendmentOverlay.amendmentSource",
      message: "amendmentOverlay.amendmentSource must be an object",
    })
  } else {
    for (const field of ["id", "citation", "role"]) {
      requireString(
        amendmentSource[field],
        `amendmentOverlay.amendmentSource.${field}`,
        diagnostics
      )
    }
    for (const field of REQUIRED_SOURCE_URLS) {
      validateHttpsUrl(
        amendmentSource[field],
        `amendmentOverlay.amendmentSource.${field}`,
        diagnostics
      )
    }
    validateOptionalSha256(
      amendmentSource.expectedPdfSha256,
      "amendmentOverlay.amendmentSource.expectedPdfSha256",
      diagnostics
    )
  }
  const operations = value.operations
  if (!Array.isArray(operations) || operations.length === 0) {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-amendment-overlay-operation",
      path: "amendmentOverlay.operations",
      message:
        "amendmentOverlay.operations must contain at least one operation",
    })
    return
  }
  operations.forEach((operation, index) => {
    const operationField = `amendmentOverlay.operations[${index}]`
    if (!isPlainObject(operation)) {
      diagnostics.push({
        severity: "fatal",
        code: "config.invalid-amendment-overlay-operation",
        path: operationField,
        message: `${operationField} must be an object`,
      })
      return
    }
    for (const field of [
      "provisionId",
      "type",
      "search",
      "replace",
      "amendmentLocator",
    ]) {
      requireString(operation[field], `${operationField}.${field}`, diagnostics)
    }
    if (operation.type !== "replace-once") {
      diagnostics.push({
        severity: "fatal",
        code: "config.invalid-amendment-overlay-operation",
        path: `${operationField}.type`,
        message: `${operationField}.type must be replace-once`,
      })
    }
  })
}

/**
 * Validate the optional manual legal-state evidence attached to a schema-v2
 * config or generated manifest. This is deliberately stricter than the ELI
 * response: it is only a supplement for omitted metadata, never a replacement
 * for contradictory official status facts.
 * @param {any} evidence
 * @param {string} [field]
 * @returns {Diagnostic[]}
 */
export function validateLegalStatusEvidence(
  evidence,
  field = "legalStatusEvidence"
) {
  /** @type {Diagnostic[]} */
  const diagnostics = []
  if (!isPlainObject(evidence)) {
    diagnostics.push({
      severity: "fatal",
      code: "config.invalid-legal-status-evidence",
      path: field,
      message: `${field} must be an object`,
    })
    return diagnostics
  }

  for (const name of [
    "status",
    "inForce",
    "legalStateDate",
    "checkedAt",
    "amendmentsCheckedThrough",
  ]) {
    const currentField = `${field}.${name}`
    if (
      name.endsWith("Date") ||
      name === "checkedAt" ||
      name === "amendmentsCheckedThrough"
    ) {
      validateDate(evidence[name], currentField, diagnostics)
    } else {
      requireString(evidence[name], currentField, diagnostics)
    }
  }

  if (evidence.legalStatusDate !== undefined) {
    validateDate(
      evidence.legalStatusDate,
      `${field}.legalStatusDate`,
      diagnostics
    )
  }
  if (evidence.consolidatedTextIdentifier !== undefined) {
    requireString(
      evidence.consolidatedTextIdentifier,
      `${field}.consolidatedTextIdentifier`,
      diagnostics
    )
  }

  const sourceUrls = evidence.sourceUrls
  if (sourceUrls !== undefined) {
    if (!Array.isArray(sourceUrls) || sourceUrls.length === 0) {
      diagnostics.push({
        severity: "fatal",
        code: "config.invalid-legal-status-evidence",
        path: `${field}.sourceUrls`,
        message: `${field}.sourceUrls must contain at least one HTTPS URL`,
      })
    } else {
      sourceUrls.forEach((url, index) =>
        validateHttpsUrl(url, `${field}.sourceUrls[${index}]`, diagnostics)
      )
    }
  } else if (evidence.sourceUrl !== undefined) {
    validateHttpsUrl(evidence.sourceUrl, `${field}.sourceUrl`, diagnostics)
  } else {
    diagnostics.push({
      severity: "fatal",
      code: "config.missing-legal-status-evidence-source",
      path: field,
      message: `${field} requires official HTTPS source URL(s)`,
    })
  }

  validateEvidenceEntries(
    evidence.entryIntoForce,
    `${field}.entryIntoForce`,
    diagnostics
  )
  validateEvidenceEntries(
    evidence.transitionalRules,
    `${field}.transitionalRules`,
    diagnostics
  )
  if (!Array.isArray(evidence.unresolved) || evidence.unresolved.length > 0) {
    diagnostics.push({
      severity: "fatal",
      code: "config.unresolved-legal-status-evidence",
      path: `${field}.unresolved`,
      message: `${field}.unresolved must be an empty array`,
    })
  }
  return diagnostics
}

/**
 * @param {any} evidence
 * @returns {boolean}
 */
export function isCompleteLegalStatusEvidence(evidence) {
  return validateLegalStatusEvidence(evidence).length === 0
}

/**
 * Validate and return a schema-v2 edition configuration.
 *
 * Schema-v1 is intentionally not guessed here. A caller migrating a v1 file
 * must provide an explicit documentId and construct a v2 config first.
 * @param {any} config
 * @returns {any}
 */
export function validateConfig(config) {
  /** @type {Diagnostic[]} */
  const diagnostics = []

  if (!isPlainObject(config)) {
    throw new ConfigValidationError("Corpus config must be a JSON object", [
      {
        severity: "fatal",
        code: "config.not-object",
        path: "$",
        message: "Corpus config must be a JSON object",
      },
    ])
  }

  if (config.schemaVersion !== SCHEMA_VERSION) {
    diagnostics.push({
      severity: "fatal",
      code: "config.unsupported-schema",
      path: "schemaVersion",
      message: `Expected schemaVersion ${SCHEMA_VERSION}; schema-v1 requires explicit migration`,
    })
  }

  validateId(config.documentId, "documentId", diagnostics)
  validateId(config.editionId, "editionId", diagnostics)
  for (const field of ["shortName", "title", "citation"]) {
    requireString(config[field], field, diagnostics)
  }
  validateDate(config.checkedAt, "checkedAt", diagnostics)
  validateDate(config.legalStateDate, "legalStateDate", diagnostics)
  if (config.legalStatusEvidence !== undefined) {
    diagnostics.push(...validateLegalStatusEvidence(config.legalStatusEvidence))
  }

  if (!isPlainObject(config.source)) {
    diagnostics.push({
      severity: "fatal",
      code: "config.missing-source",
      path: "source",
      message: "source must be an object with provider and official HTTPS URLs",
    })
  } else {
    requireString(config.source.provider, "source.provider", diagnostics)
    for (const field of REQUIRED_SOURCE_URLS) {
      validateHttpsUrl(config.source[field], `source.${field}`, diagnostics)
    }
    validateOptionalSha256(
      config.source.expectedPdfSha256,
      "source.expectedPdfSha256",
      diagnostics
    )
  }

  if (!isPlainObject(config.extraction)) {
    diagnostics.push({
      severity: "fatal",
      code: "config.missing-extraction",
      path: "extraction",
      message: "extraction must declare a named profile and expectations",
    })
  } else {
    if (!EXTRACTION_PROFILES.has(config.extraction.profile)) {
      diagnostics.push({
        severity: "fatal",
        code: "config.unsupported-profile",
        path: "extraction.profile",
        message: `Unsupported extraction profile ${config.extraction.profile}`,
      })
    }

    for (const field of ["expectedProvisionCount", "expectedPageCount"]) {
      const value = config.extraction[field]
      if (!Number.isInteger(value) || value <= 0) {
        diagnostics.push({
          severity: "fatal",
          code: "config.invalid-expectation",
          path: `extraction.${field}`,
          message: `${field} must be a positive integer`,
        })
      }
    }

    const coverage = config.extraction.expectedTextCoverage
    if (typeof coverage !== "number" || coverage < 0 || coverage > 1) {
      diagnostics.push({
        severity: "fatal",
        code: "config.invalid-expectation",
        path: "extraction.expectedTextCoverage",
        message: "expectedTextCoverage must be a number between 0 and 1",
      })
    }
    validateArticleOccurrences(
      config.extraction.ignoredArticleOccurrences,
      "extraction.ignoredArticleOccurrences",
      diagnostics
    )
    validateArticleOccurrences(
      config.extraction.excludedArticleOccurrences,
      "extraction.excludedArticleOccurrences",
      diagnostics
    )
    const ignoredOccurrences = Array.isArray(
      config.extraction.ignoredArticleOccurrences
    )
      ? config.extraction.ignoredArticleOccurrences
      : []
    const excludedOccurrences = Array.isArray(
      config.extraction.excludedArticleOccurrences
    )
      ? config.extraction.excludedArticleOccurrences
      : []
    const ignoredOccurrenceKeys = new Set(
      ignoredOccurrences.map(
        (/** @type {any} */ occurrence) =>
          `${occurrence.locator}|${occurrence.pdfPage}|${occurrence.matchIndex}`
      )
    )
    for (const [index, occurrence] of excludedOccurrences.entries()) {
      const key = `${occurrence.locator}|${occurrence.pdfPage}|${occurrence.matchIndex}`
      if (ignoredOccurrenceKeys.has(key)) {
        diagnostics.push({
          severity: "fatal",
          code: "config.article-occurrence-conflict",
          path: `extraction.excludedArticleOccurrences[${index}]`,
          message:
            "An article occurrence cannot be both ignored and semantically excluded",
        })
      }
    }
    validateFutureTextExclusions(
      config.extraction.futureTextExclusions,
      config.legalStateDate,
      diagnostics
    )
    validateProvisionStatusOverrides(
      config.extraction.provisionStatusOverrides,
      config.legalStateDate,
      diagnostics
    )
    for (const field of [
      "rejectEmbeddedArticleHeadings",
      "rejectTemporalMarkers",
    ]) {
      if (
        config.extraction[field] !== undefined &&
        typeof config.extraction[field] !== "boolean"
      ) {
        diagnostics.push({
          severity: "fatal",
          code: "config.invalid-extraction-guard",
          path: `extraction.${field}`,
          message: `${field} must be a boolean`,
        })
      }
    }
  }
  const supplementalSources = validateSupplementalSources(
    config.supplementalSources,
    diagnostics
  )
  validateTemporalTextSelection(
    config.temporalTextSelection,
    supplementalSources,
    config.legalStateDate,
    diagnostics
  )
  validateAmendmentOverlay(config.amendmentOverlay, diagnostics)

  if (diagnostics.length > 0) {
    throw new ConfigValidationError("Invalid corpus config", diagnostics)
  }

  return config
}

/**
 * @param {any} config
 * @param {string} name
 * @returns {string}
 */
export function getSourceUrl(config, name) {
  validateConfig(config)
  return config.source[name]
}
