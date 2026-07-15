import { URL } from "node:url"

export const SCHEMA_VERSION = 2
export const EXTRACTION_PROFILE = "polish-statute-art-v1"

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

function validateDate(value, field, diagnostics) {
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

function validateHttpsUrl(value, field, diagnostics) {
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
    if (config.extraction.profile !== EXTRACTION_PROFILE) {
      diagnostics.push({
        severity: "fatal",
        code: "config.unsupported-profile",
        path: "extraction.profile",
        message: `Expected extraction profile ${EXTRACTION_PROFILE}`,
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
