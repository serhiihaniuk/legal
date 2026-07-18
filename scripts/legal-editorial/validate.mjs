import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url))
const REPOSITORY_ROOT = path.resolve(SCRIPT_DIR, "../..")
export const DEFAULT_EDITORIAL_ROOT = path.join(
  REPOSITORY_ROOT,
  "app/data/legal-library/editorial"
)
export const DEFAULT_CORPUS_ROOT = path.join(
  REPOSITORY_ROOT,
  "app/data/legal-corpus"
)
export const DEFAULT_CURRENT_EDITIONS_PATH = path.join(
  REPOSITORY_ROOT,
  "app/data/legal-library/current-editions.json"
)

const REVIEW_STATUSES = new Set([
  "draft",
  "reviewed",
  "stale",
  "blocked",
  "superseded",
])

/** @typedef {Object} EditorialIssue
 * @property {string} code
 * @property {"error" | "warning"} severity
 * @property {string} message
 * @property {string | undefined} [filePath]
 * @property {string | undefined} [provisionId]
 * @property {string | undefined} [documentId]
 * @property {string | undefined} [editionId]
 */

/** @typedef {Object} EditorialEntry
 * @property {string | undefined} provisionId
 * @property {string | undefined} reviewStatus
 * @property {number} entryIndex
 */

/** @typedef {Object} ParsedEditorialPart
 * @property {string} filePath
 * @property {string | undefined} documentId
 * @property {string | undefined} editionId
 * @property {EditorialEntry[]} entries
 */

/** @typedef {Object} AuthoredEntry
 * @property {string | undefined} provisionId
 * @property {string | undefined} reviewStatus
 * @property {number} entryIndex
 * @property {string} filePath
 * @property {string | undefined} documentId
 * @property {string | undefined} editionId
 */

/** @typedef {Object} ExpectedProvision
 * @property {string} provisionId
 * @property {string} documentId
 * @property {string} editionId
 */

/** @typedef {string | { currentEditionId?: string, editionId?: string }} CurrentEditionConfig */

/** @typedef {Object} EditorialValidationOptions
 * @property {string} [editorialRoot]
 * @property {string} [corpusRoot]
 * @property {string} [currentEditionsPath]
 * @property {Record<string, CurrentEditionConfig>} [currentEditions]
 * @property {string} [documentId]
 * @property {boolean} [allowIncomplete]
 */

/** @typedef {Object} EditorialSummary
 * @property {number} expectedCount
 * @property {number} authoredCount
 * @property {number} coveredCount
 * @property {number} missingCount
 * @property {number} duplicateCount
 */

/** @typedef {Object} EditorialValidationResult
 * @property {boolean} ok
 * @property {boolean} allowIncomplete
 * @property {EditorialIssue[]} errors
 * @property {EditorialIssue[]} warnings
 * @property {EditorialSummary} summary
 */

/** @param {string} filePath */
function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"))
}

/** @param {EditorialIssue[]} entries @returns {EditorialIssue[]} */
function sortedEntries(entries) {
  return [...entries].sort((left, right) => {
    const leftKey = [
      left.code,
      left.filePath ?? "",
      left.provisionId ?? "",
      left.documentId ?? "",
      left.message,
    ].join("\u0000")
    const rightKey = [
      right.code,
      right.filePath ?? "",
      right.provisionId ?? "",
      right.documentId ?? "",
      right.message,
    ].join("\u0000")
    return leftKey.localeCompare(rightKey)
  })
}

/**
 * @param {string} code
 * @param {string} message
 * @param {Record<string, unknown>} [details={ }]
 * @param {"error" | "warning"} [severity="error"]
 * @returns {EditorialIssue}
 */
function issue(code, message, details = {}, severity = "error") {
  return { code, severity, message, ...details }
}

/** @param {string} source @param {string} fieldName @returns {string | undefined} */
function findLiteralField(source, fieldName) {
  const pattern = new RegExp(`\\b${fieldName}\\s*:\\s*(["'])(.*?)\\1`)
  return source.match(pattern)?.[2]
}

/**
 * Extract top-level object literals from the entries array without executing
 * authored TypeScript. This keeps editorial validation deterministic and
 * Node-only while allowing nested claim/rule objects in each entry.
 */
/** @param {string} source @returns {string[]} */
function findEntryObjects(source) {
  const entriesStart = source.search(
    /\bentries\s*:\s*(?:[A-Za-z_$][\w$]*\s*\([^[]*)?\[/u
  )
  if (entriesStart < 0) return []

  const arrayStart = source.indexOf("[", entriesStart)
  const objects = []
  let arrayDepth = 1
  let objectDepth = 0
  let objectStart = -1
  let quote = null

  for (let index = arrayStart + 1; index < source.length; index += 1) {
    const character = source[index]

    if (quote) {
      if (character === "\\") {
        index += 1
      } else if (character === quote) {
        quote = null
      }
      continue
    }

    if (character === '"' || character === "'" || character === "`") {
      quote = character
      continue
    }

    if (character === "/" && source[index + 1] === "/") {
      const lineEnd = source.indexOf("\n", index + 2)
      index = lineEnd < 0 ? source.length : lineEnd
      continue
    }

    if (character === "/" && source[index + 1] === "*") {
      const commentEnd = source.indexOf("*/", index + 2)
      index = commentEnd < 0 ? source.length : commentEnd + 1
      continue
    }

    if (character === "[") {
      arrayDepth += 1
      continue
    }
    if (character === "]") {
      arrayDepth -= 1
      if (arrayDepth === 0) break
      continue
    }
    if (character === "{") {
      if (arrayDepth === 1 && objectDepth === 0) objectStart = index
      objectDepth += 1
      continue
    }
    if (character === "}") {
      objectDepth -= 1
      if (objectDepth === 0 && objectStart >= 0) {
        objects.push(source.slice(objectStart, index + 1))
        objectStart = -1
      }
    }
  }

  return objects
}

/** @param {string} directory @returns {string[]} */
function walk(directory) {
  if (!fs.existsSync(directory)) return []
  const files = []
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...walk(entryPath))
    else files.push(entryPath)
  }
  return files.sort((left, right) => left.localeCompare(right))
}

/** List one-file article modules plus legacy part-shaped test fixtures. */
export function listEditorialPartFiles(editorialRoot = DEFAULT_EDITORIAL_ROOT) {
  return walk(editorialRoot).filter((filePath) =>
    /^(?:part-\d+[a-z0-9]*|article-[a-z0-9_-]+)\.ts$/u.test(
      path.basename(filePath)
    )
  )
}

/**
 * @param {string} source
 * @param {string} [filePath="<source>"]
 * @returns {ParsedEditorialPart}
 */
export function parseEditorialPartSource(source, filePath = "<source>") {
  const documentId = findLiteralField(source, "documentId")
  const editionId = findLiteralField(source, "editionId")
  const entries = findEntryObjects(source).map((entrySource, index) => ({
    provisionId: findLiteralField(entrySource, "provisionId"),
    reviewStatus: findLiteralField(entrySource, "reviewStatus"),
    entryIndex: index,
  }))
  const knownProvisionIds = new Set(
    entries.map((entry) => entry.provisionId).filter(Boolean)
  )
  const helperPattern =
    /\b(reviewedArticle|draftArticle|blockedArticle|reviewed)\s*\(\s*(["'])([^"']+)\2\s*,/gu
  for (const match of source.matchAll(helperPattern)) {
    const key = match[3]
    const provisionId = key.startsWith(`${documentId}-`)
      ? key
      : documentId
        ? `${documentId}-art-${key}`
        : undefined
    if (!provisionId || knownProvisionIds.has(provisionId)) continue
    knownProvisionIds.add(provisionId)
    entries.push({
      provisionId,
      reviewStatus:
        match[1] === "draftArticle"
          ? "draft"
          : match[1] === "blockedArticle"
            ? "blocked"
            : "reviewed",
      entryIndex: entries.length,
    })
  }

  return { filePath, documentId, editionId, entries }
}

/**
 * @param {Record<string, CurrentEditionConfig>} currentEditions
 * @param {string} corpusRoot
 * @param {EditorialIssue[]} issues
 * @param {EditorialIssue[]} [warnings=[]]
 * @param {string | undefined} [targetDocumentId]
 * @returns {{
 *   currentEditions: Record<string, CurrentEditionConfig>,
 *   documents: Set<string>,
 *   expectedById: Map<string, ExpectedProvision>,
 * }}
 */
function loadCorpus(
  currentEditions,
  corpusRoot,
  issues,
  warnings = [],
  targetDocumentId
) {
  /** @type {Map<string, ExpectedProvision>} */
  const expectedById = new Map()
  const documents = new Set()

  if (
    targetDocumentId &&
    !Object.prototype.hasOwnProperty.call(currentEditions, targetDocumentId)
  ) {
    issues.push(
      issue(
        "invalid-current-edition",
        `No current edition is configured for ${targetDocumentId}`,
        { documentId: targetDocumentId }
      )
    )
  }

  for (const [documentId, configuredEdition] of Object.entries(
    currentEditions
  )) {
    if (targetDocumentId && documentId !== targetDocumentId) continue
    const editionId =
      typeof configuredEdition === "string"
        ? configuredEdition
        : (configuredEdition?.currentEditionId ?? configuredEdition?.editionId)
    if (!editionId) {
      issues.push(
        issue(
          "invalid-current-edition",
          `No current edition is configured for ${documentId}`,
          { documentId }
        )
      )
      continue
    }
    documents.add(documentId)

    const editionDirectory = walk(corpusRoot).find(
      (candidate) =>
        path.basename(candidate) === "provisions.json" &&
        path.basename(path.dirname(candidate)) === editionId
    )
    if (!editionDirectory) {
      issues.push(
        issue(
          "missing-current-corpus",
          `Current edition ${editionId} has no provisions.json`,
          { documentId, editionId }
        )
      )
      continue
    }

    const provisions = readJson(editionDirectory)
    if (!Array.isArray(provisions)) {
      issues.push(
        issue(
          "invalid-corpus-provisions",
          `${editionDirectory} must contain an array`,
          { documentId, editionId }
        )
      )
      continue
    }

    for (const provision of provisions) {
      if (!provision || typeof provision.id !== "string") {
        issues.push(
          issue(
            "invalid-corpus-provision",
            `${editionDirectory} contains a provision without a string id`,
            { documentId, editionId }
          )
        )
        continue
      }
      const expected = {
        provisionId: provision.id,
        documentId: provision.documentId,
        editionId: provision.editionId,
      }
      if (expectedById.has(provision.id)) {
        issues.push(
          issue(
            "duplicate-corpus-provision",
            `Current corpus contains ${provision.id} more than once`,
            { documentId, editionId, provisionId: provision.id }
          )
        )
      } else {
        expectedById.set(provision.id, expected)
      }
    }
  }

  return { currentEditions, documents, expectedById }
}

/**
 * @param {EditorialValidationOptions} [options={}]
 * @returns {EditorialValidationResult}
 */
export function validateEditorial(options = {}) {
  const editorialRoot = path.resolve(
    options.editorialRoot ?? DEFAULT_EDITORIAL_ROOT
  )
  const corpusRoot = path.resolve(options.corpusRoot ?? DEFAULT_CORPUS_ROOT)
  const currentEditions =
    options.currentEditions ??
    readJson(
      path.resolve(options.currentEditionsPath ?? DEFAULT_CURRENT_EDITIONS_PATH)
    )
  const targetDocumentId = options.documentId?.trim() || undefined
  const allowIncomplete = Boolean(options.allowIncomplete)
  /** @type {EditorialIssue[]} */
  const errors = []
  /** @type {EditorialIssue[]} */
  const warnings = []
  /** @type {EditorialIssue[]} */
  const corpusIssues = []
  const { documents, expectedById } = loadCorpus(
    currentEditions,
    corpusRoot,
    corpusIssues,
    warnings,
    targetDocumentId
  )

  for (const corpusIssue of corpusIssues) errors.push(corpusIssue)

  /** @type {AuthoredEntry[]} */
  const authoredEntries = []
  for (const filePath of listEditorialPartFiles(editorialRoot)) {
    const directoryDocumentId = path
      .relative(editorialRoot, filePath)
      .split(path.sep)[0]
    if (targetDocumentId && directoryDocumentId !== targetDocumentId) continue

    const parsed = parseEditorialPartSource(
      fs.readFileSync(filePath, "utf8"),
      filePath
    )

    if (!parsed.documentId || !parsed.editionId) {
      errors.push(
        issue(
          "missing-part-metadata",
          `${filePath} must declare documentId and editionId`,
          { filePath }
        )
      )
    }
    if (parsed.documentId && parsed.documentId !== directoryDocumentId) {
      errors.push(
        issue(
          "document-directory-mismatch",
          `${filePath} declares ${parsed.documentId}, not its document directory ${directoryDocumentId}`,
          { filePath, documentId: parsed.documentId }
        )
      )
    }
    if (parsed.documentId && !documents.has(parsed.documentId)) {
      errors.push(
        issue(
          "unknown-document",
          `${filePath} declares document ${parsed.documentId}, which is not current`,
          { filePath, documentId: parsed.documentId }
        )
      )
    }

    for (const entry of parsed.entries) {
      const authored = {
        ...entry,
        filePath,
        documentId: parsed.documentId,
        editionId: parsed.editionId,
      }
      authoredEntries.push(authored)

      if (!entry.provisionId) {
        errors.push(
          issue(
            "missing-provision-id",
            `${filePath} entry ${entry.entryIndex} has no provisionId`,
            { filePath }
          )
        )
        continue
      }
      if (!entry.reviewStatus) {
        errors.push(
          issue(
            "missing-review-status",
            `${entry.provisionId} in ${filePath} has no reviewStatus`,
            { filePath, provisionId: entry.provisionId }
          )
        )
      } else if (!REVIEW_STATUSES.has(entry.reviewStatus)) {
        errors.push(
          issue(
            "invalid-review-status",
            `${entry.provisionId} in ${filePath} uses unknown reviewStatus ${entry.reviewStatus}`,
            { filePath, provisionId: entry.provisionId }
          )
        )
      } else if (entry.reviewStatus !== "reviewed") {
        const target = allowIncomplete ? warnings : errors
        target.push(
          issue(
            "not-reviewed",
            `${entry.provisionId} in ${filePath} is ${entry.reviewStatus}, not reviewed`,
            { filePath, provisionId: entry.provisionId },
            allowIncomplete ? "warning" : "error"
          )
        )
      }

      const expected = expectedById.get(entry.provisionId)
      if (!expected) {
        errors.push(
          issue(
            "unknown-provision",
            `${entry.provisionId} in ${filePath} is not a current provision`,
            { filePath, provisionId: entry.provisionId }
          )
        )
        continue
      }
      if (parsed.documentId !== expected.documentId) {
        errors.push(
          issue(
            "wrong-document",
            `${entry.provisionId} in ${filePath} declares ${parsed.documentId}, expected ${expected.documentId}`,
            {
              filePath,
              provisionId: entry.provisionId,
              documentId: parsed.documentId,
            }
          )
        )
      }
      if (parsed.editionId !== expected.editionId) {
        errors.push(
          issue(
            "wrong-edition",
            `${entry.provisionId} in ${filePath} declares ${parsed.editionId}, expected ${expected.editionId}`,
            {
              filePath,
              provisionId: entry.provisionId,
              editionId: parsed.editionId,
            }
          )
        )
      }
    }
  }

  /** @type {Map<string, AuthoredEntry[]>} */
  const occurrences = new Map()
  for (const authored of authoredEntries) {
    if (!authored.provisionId) continue
    const provisionOccurrences = occurrences.get(authored.provisionId) ?? []
    provisionOccurrences.push(authored)
    occurrences.set(authored.provisionId, provisionOccurrences)
  }
  for (const [provisionId, provisionOccurrences] of occurrences) {
    /** @type {Map<string, AuthoredEntry[]>} */
    const byFile = new Map()
    for (const occurrence of provisionOccurrences) {
      const fileOccurrences = byFile.get(occurrence.filePath) ?? []
      fileOccurrences.push(occurrence)
      byFile.set(occurrence.filePath, fileOccurrences)
    }
    for (const [filePath, fileOccurrences] of byFile) {
      if (fileOccurrences.length > 1) {
        errors.push(
          issue(
            "duplicate-provision",
            `${provisionId} is authored ${fileOccurrences.length} times in one file`,
            { provisionId, filePath }
          )
        )
      }
    }
  }

  for (const provisionId of expectedById.keys()) {
    if (occurrences.has(provisionId)) continue
    const target = allowIncomplete ? warnings : errors
    target.push(
      issue(
        "missing-provision",
        `${provisionId} has no authored editorial entry`,
        { provisionId },
        allowIncomplete ? "warning" : "error"
      )
    )
  }

  const sortedErrors = sortedEntries(errors)
  const sortedWarnings = sortedEntries(warnings)
  return {
    ok: sortedErrors.length === 0,
    allowIncomplete,
    errors: sortedErrors,
    warnings: sortedWarnings,
    summary: {
      expectedCount: expectedById.size,
      authoredCount: authoredEntries.length,
      coveredCount: [...occurrences.keys()].filter((id) => expectedById.has(id))
        .length,
      missingCount: [...expectedById.keys()].filter(
        (id) => !occurrences.has(id)
      ).length,
      duplicateCount: [...occurrences.values()].filter((entries) => {
        const files = new Set(entries.map((entry) => entry.filePath))
        return files.size < entries.length
      }).length,
    },
  }
}

/** @param {EditorialValidationResult} result @returns {string} */
export function formatValidationResult(result) {
  const lines = [
    `Editorial coverage: ${result.summary.coveredCount}/${result.summary.expectedCount} current provisions`,
    `Authored entries: ${result.summary.authoredCount}; missing: ${result.summary.missingCount}; duplicate IDs: ${result.summary.duplicateCount}`,
    result.ok ? "Editorial validation passed." : "Editorial validation failed.",
  ]
  for (const finding of result.errors) {
    lines.push(`ERROR [${finding.code}] ${finding.message}`)
  }
  for (const finding of result.warnings) {
    lines.push(`WARN [${finding.code}] ${finding.message}`)
  }
  return lines.join("\n")
}

const invokedFile = process.argv[1] ? path.resolve(process.argv[1]) : ""
if (invokedFile === path.resolve(fileURLToPath(import.meta.url))) {
  const allowIncomplete = process.argv.includes("--incomplete")
  const result = validateEditorial({ allowIncomplete })
  const output = formatValidationResult(result)
  if (result.ok) console.log(output)
  else console.error(output)
  process.exitCode = result.ok ? 0 : 1
}
