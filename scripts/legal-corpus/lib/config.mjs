import { URL } from "node:url"

export const SCHEMA_VERSION = 2
export const EXTRACTION_PROFILE = "polish-statute-art-v1"
export const EXTRACTION_PROFILES = new Set([
  EXTRACTION_PROFILE,
  "polish-regulation-paragraph-v1",
])

const ID_PATTERN = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/
const REQUIRED_SOURCE_URLS = [
  "officialPageUrl",
  "metadataUrl",
  "pdfUrl",
]

export class ConfigValidationError extends Error {
  constructor(message, diagnostics = []) {
    super(message)
    this.name = "ConfigValidationError"
    this.diagnostics = diagnostics
  }
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value)
}

/**
 * @param {unknown} value
 * @param {string} field
 * @param {Array<Record<string, unknown>>} diagnostics
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
 * @param {Array<Record<string, unknown>>} diagnostics
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
  if (Number.isNaN(date.valueOf()) || date.toISOString().slice(0, 10) !== value) {
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
 * @param {Array<Record<string, unknown>>} diagnostics
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
        validateHttpsUrl(entry[urlField], `${entryField}.${urlField}`, diagnostics)
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
          validateHttpsUrl(url, `${entryField}.sourceUrls[${urlIndex}]`, diagnostics)
        )
      }
    }
  })
}

/**
 * Validate the optional manual legal-state evidence attached to a schema-v2
 * config or generated manifest. This is deliberately stricter than the ELI
 * response: it is only a supplement for omitted metadata, never a replacement
 * for contradictory official status facts.
 */
export function validateLegalStatusEvidence(evidence, field = "legalStatusEvidence") {
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

  for (const name of ["status", "inForce", "legalStateDate", "checkedAt", "amendmentsCheckedThrough"]) {
    const currentField = `${field}.${name}`
    if (name.endsWith("Date") || name === "checkedAt" || name === "amendmentsCheckedThrough") {
      validateDate(evidence[name], currentField, diagnostics)
    } else {
      requireString(evidence[name], currentField, diagnostics)
    }
  }

  if (evidence.legalStatusDate !== undefined) {
    validateDate(evidence.legalStatusDate, `${field}.legalStatusDate`, diagnostics)
  }
  if (evidence.consolidatedTextIdentifier !== undefined) {
    requireString(evidence.consolidatedTextIdentifier, `${field}.consolidatedTextIdentifier`, diagnostics)
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

  validateEvidenceEntries(evidence.entryIntoForce, `${field}.entryIntoForce`, diagnostics)
  validateEvidenceEntries(evidence.transitionalRules, `${field}.transitionalRules`, diagnostics)
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

export function isCompleteLegalStatusEvidence(evidence) {
  return validateLegalStatusEvidence(evidence).length === 0
}

/**
 * Validate and return a schema-v2 edition configuration.
 *
 * Schema-v1 is intentionally not guessed here. A caller migrating a v1 file
 * must provide an explicit documentId and construct a v2 config first.
 */
export function validateConfig(config) {
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
  }

  if (diagnostics.length > 0) {
    throw new ConfigValidationError("Invalid corpus config", diagnostics)
  }

  return config
}

export function getSourceUrl(config, name) {
  validateConfig(config)
  return config.source[name]
}
