import crypto from "node:crypto"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

/**
 * @typedef {"pending" | "accepted" | "changes-requested" | "blocked"} ReviewStatus
 * @typedef {"authorReview" | "crossReview"} ReviewPhase
 *
 * @typedef {object} HashAttestation
 * @property {string} contentHash
 * @property {string | null} sourceTextHash
 *
 * @typedef {object} ReviewState
 * @property {string | null} reviewer
 * @property {string | null} reviewedAt
 * @property {ReviewStatus} status
 * @property {string[]} blockers
 * @property {HashAttestation | null} hashAttestation
 *
 * @typedef {object} LedgerEntry
 * @property {string} id
 * @property {string} path
 * @property {string} family
 * @property {string} lane
 * @property {string | null} documentId
 * @property {string | null} contentId
 * @property {string | null} provisionId
 * @property {number | null} provisionIndex
 * @property {number | null} sourceProvisionCount
 * @property {string | null} currentSourceEdition
 * @property {string | null} sourceTextHash
 * @property {string[]} officialSourceUrls
 * @property {string} contentHash
 * @property {string | null} sourceReviewStatus
 * @property {ReviewState} authorReview
 * @property {ReviewState} crossReview
 *
 * @typedef {object} LedgerFile
 * @property {number} schemaVersion
 * @property {string} reviewDate
 * @property {string} lane
 * @property {LedgerEntry[]} entries
 *
 * @typedef {object} ReviewIndex
 * @property {boolean} declaredComplete
 *
 * @typedef {object} LaneBoundary
 * @property {number} total
 * @property {number} midpoint
 * @property {unknown} laneA
 * @property {unknown} laneB
 *
 * @typedef {object} Summary
 * @property {number} total
 * @property {Record<string, number>} byFamily
 * @property {Record<string, number>} byLane
 * @property {Record<string, LaneBoundary>} laneBoundaries
 *
 * @typedef {object} ValidationIssue
 * @property {string} code
 * @property {string} message
 * @property {string | null} id
 * @property {string | null} path
 * @property {string | null} lane
 *
 * @typedef {object} ValidationResult
 * @property {boolean} ok
 * @property {boolean} strict
 * @property {boolean} declaredComplete
 * @property {Summary} summary
 * @property {ValidationIssue[]} issues
 *
 * @typedef {object} TextIntegrityDefect
 * @property {string} code
 * @property {string} message
 * @property {number} line
 * @property {number} column
 * @property {string} match
 *
 * @typedef {object} KnowledgeSubject
 * @property {string | null} family
 * @property {string | null} documentId
 * @property {string | null} moduleId
 * @property {string | null} nodeId
 * @property {string | null} routeId
 * @property {string | null} evidenceDocumentId
 * @property {string} relativePath
 *
 * @typedef {object} DocumentSource
 * @property {string} editionId
 * @property {string[]} officialSourceUrls
 *
 * @typedef {object} BaseEntryInput
 * @property {string} repositoryRoot
 * @property {string} family
 * @property {string} lane
 * @property {string} relativePath
 * @property {string | null} contentId
 * @property {string | null} [documentId]
 * @property {string | null} [editionId]
 * @property {string | null} [provisionId]
 * @property {number | null} [provisionIndex]
 * @property {number | null} [sourceProvisionCount]
 * @property {string | null} [sourceTextHash]
 * @property {string[]} [officialSourceUrls]
 * @property {string | null} [sourceReviewStatus]
 * @property {LedgerEntry | null | undefined} [previous]
 *
 * @typedef {object} GenerateInventoryOptions
 * @property {string} [repositoryRoot]
 * @property {LedgerEntry[]} [previousEntries]
 *
 * @typedef {object} ReviewDirOptions
 * @property {string} [repositoryRoot]
 * @property {string} [reviewDir]
 *
 * @typedef {object} ValidateOptions
 * @property {string} [repositoryRoot]
 * @property {string} [reviewDir]
 * @property {boolean} [strict]
 * @property {boolean} [ifComplete]
 *
 * @typedef {object} MarkReviewOptions
 * @property {string} [repositoryRoot]
 * @property {string} [reviewDir]
 * @property {string | null} [id]
 * @property {string | null} [lane]
 * @property {string | null} [path]
 * @property {ReviewPhase} phase
 * @property {string} reviewer
 * @property {ReviewStatus} status
 * @property {string | null} [blocker]
 *
 * @typedef {object} MarkReviewsOptions
 * @property {string} [repositoryRoot]
 * @property {string} [reviewDir]
 * @property {string} lane
 * @property {string | null} [documentId]
 * @property {string | null} [family]
 * @property {string | null} [pathPrefix]
 * @property {boolean} [all]
 * @property {ReviewPhase} phase
 * @property {string} reviewer
 * @property {ReviewStatus} status
 * @property {string | null} [blocker]
 *
 * @typedef {object} LineAndColumn
 * @property {number} line
 * @property {number} column
 */

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url))
export const DEFAULT_REPOSITORY_ROOT = path.resolve(SCRIPT_DIR, "../..")
export const DEFAULT_REVIEW_DIR = path.join(
  DEFAULT_REPOSITORY_ROOT,
  "docs/content-review/2026-07-18"
)

export const LANES = [
  "kpa",
  "foreigners-a",
  "foreigners-b",
  "ppsa",
  "employment-regulation",
  "teaching-pages",
]

const CURRENT_EDITIONS_PATH = "app/data/legal-library/current-editions.json"
const CORPUS_ROOT = "app/data/legal-corpus"
const DOCUMENT_CONFIG_ROOT = "legal-corpus/documents"

/** @type {Record<string, number>} */
const FAMILY_COUNTS = {
  provision: 1478,
  "learning-module": 43,
  "map-topic": 63,
  "evidence-document": 18,
  "case-guide": 9,
}

const REVIEWABLE_KNOWLEDGE_FAMILIES = new Set([
  "learning-module",
  "map-topic",
  "evidence-document",
  "case-guide",
])

const SHARED_RENDERER_PATHS = [
  "app/components/layout/docs-layout.tsx",
  "app/components/layout/site-header.tsx",
  "app/components/references/legal-reference-preview.tsx",
  "app/components/references/legal-reference-text.tsx",
  "app/components/references/official-source.tsx",
  "app/components/ui/dialog.tsx",
  "app/data/documents/catalog.ts",
  "app/features/case-guides/model/case-study-navigation.ts",
  "app/features/study/ui/study-plan-content.tsx",
  "app/features/documents/model/document-catalog-model.ts",
  "app/features/documents/ui/document-catalog-navigation.tsx",
  "app/features/documents/ui/document-catalog-overview.tsx",
  "app/features/documents/ui/document-detail-content.tsx",
  "app/features/legal-map/model/legal-map-model.ts",
  "app/features/legal-map/ui/legal-map-navigation.tsx",
  "app/features/legal-map/ui/legal-map-overview.tsx",
  "app/features/legal-map/ui/legal-node-content.tsx",
  "app/features/law-library/model/kpa/kpa-route.ts",
  "app/features/law-library/model/learning/legal-learning-view.ts",
  "app/features/case-guides/ui/case-guide-shared.tsx",
  "app/features/case-guides/ui/case-registers.tsx",
  "app/features/case-guides/ui/case-stages.tsx",
  "app/features/case-guides/ui/case-study-content.tsx",
  "app/features/case-guides/ui/conditions-matrix.tsx",
  "app/features/law-library/ui/kpa/kpa-articles-content.tsx",
  "app/features/law-library/ui/kpa/kpa-learning-content.tsx",
  "app/features/law-library/ui/kpa/kpa-practice-content.tsx",
  "app/features/law-library/ui/kpa/kpa-route-navigation.tsx",
  "app/features/law-library/ui/learning/legal-learning-example.tsx",
  "app/features/law-library/ui/learning/legal-learning-mechanism.tsx",
  "app/features/law-library/ui/learning/legal-learning-module-content.tsx",
  "app/features/law-library/ui/learning/legal-learning-nuances.tsx",
  "app/features/law-library/ui/learning/legal-learning-overview.tsx",
  "app/features/law-library/ui/learning/legal-learning-provisions.tsx",
  "app/features/law-library/ui/navigation/law-document-navigation.tsx",
  "app/features/law-library/ui/navigation/law-library-navigation.tsx",
  "app/features/law-library/ui/provision/legal-provision-selector.tsx",
  "app/features/law-library/ui/provision/legal-provision-source.tsx",
]

const ROUTE_COPY_PATHS = [
  "app/routes/case.tsx",
  "app/routes/documents.tsx",
  "app/routes/home.tsx",
  "app/routes/kpa.tsx",
  "app/routes/law.tsx",
  "app/routes/law-document.tsx",
  "app/routes/law-document-index.tsx",
  "app/routes/law-document-practice.tsx",
  "app/routes/law-kpa-compat.tsx",
  "app/routes/law-kpa-practice-compat.tsx",
  "app/routes/law-provision.tsx",
  "app/routes/legacy-case.tsx",
  "app/routes/map.tsx",
  "app/routes/shell.tsx",
  "app/routes/study.tsx",
]

/**
 * @param {string} value
 * @returns {string}
 */
function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex")
}

/**
 * @param {string} repositoryRoot
 * @param {string} relativePath
 * @returns {string}
 */
function readText(repositoryRoot, relativePath) {
  return fs.readFileSync(path.join(repositoryRoot, relativePath), "utf8")
}

/**
 * @template T
 * @param {string} repositoryRoot
 * @param {string} relativePath
 * @returns {T}
 */
function readJson(repositoryRoot, relativePath) {
  return JSON.parse(readText(repositoryRoot, relativePath))
}

/**
 * @param {string} filePath
 * @param {unknown} value
 */
function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(`${filePath}.tmp`, `${JSON.stringify(value, null, 2)}\n`)
  fs.renameSync(`${filePath}.tmp`, filePath)
}

/**
 * @param {string} reviewDir
 * @returns {string}
 */
function laneDirectory(reviewDir) {
  return path.join(reviewDir, "lanes")
}

/**
 * @param {string} directory
 * @returns {string[]}
 */
function walkFiles(directory) {
  if (!fs.existsSync(directory)) return []
  const files = []
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...walkFiles(entryPath))
    else if (entry.isFile()) files.push(entryPath)
  }
  return files.sort((left, right) => left.localeCompare(right))
}

/**
 * @param {string} repositoryRoot
 * @param {string} filePath
 * @returns {string}
 */
function toRepositoryPath(repositoryRoot, filePath) {
  return path.relative(repositoryRoot, filePath).replaceAll(path.sep, "/")
}

/**
 * @param {string} repositoryRoot
 * @param {string} relativePath
 * @returns {string}
 */
function fileHash(repositoryRoot, relativePath) {
  return sha256(readText(repositoryRoot, relativePath))
}

/**
 * @param {ReviewStatus} [status]
 * @returns {ReviewState}
 */
function reviewState(status = "pending") {
  return {
    reviewer: null,
    reviewedAt: null,
    status,
    blockers: [],
    hashAttestation: null,
  }
}

/**
 * @param {string} source
 * @param {string} fieldName
 * @returns {string | null}
 */
function findLiteral(source, fieldName) {
  return (
    source.match(
      new RegExp(`\\b${fieldName}\\s*:\\s*(["'])(.*?)\\1`, "u")
    )?.[2] ?? null
  )
}

/**
 * @param {string} repositoryRoot
 * @param {string} relativePath
 * @returns {string | null}
 */
function sourceReviewStatus(repositoryRoot, relativePath) {
  return findLiteral(readText(repositoryRoot, relativePath), "reviewStatus")
}

/**
 * @param {string} source
 * @param {string} relativePath
 * @returns {KnowledgeSubject | null}
 */
function extractKnowledgeSubject(source, relativePath) {
  const subjectStart = source.indexOf("subject:")
  if (subjectStart < 0) return null
  const reviewStart = source.indexOf("review:", subjectStart)
  const subjectSource = source.slice(
    subjectStart,
    reviewStart < 0 ? source.length : reviewStart
  )
  return {
    family: findLiteral(subjectSource, "family"),
    documentId: findLiteral(subjectSource, "documentId"),
    moduleId: findLiteral(subjectSource, "moduleId"),
    nodeId: findLiteral(subjectSource, "nodeId"),
    routeId: findLiteral(subjectSource, "routeId"),
    evidenceDocumentId:
      subjectSource.match(
        /\breference\s*:\s*\{\s*documentId\s*:\s*(["'])(.*?)\1/su
      )?.[2] ?? null,
    relativePath,
  }
}

/**
 * @param {string} relativePath
 * @returns {string}
 */
function learningDocumentFromPath(relativePath) {
  const match = relativePath.match(
    /^app\/data\/legal-library\/learning\/modules\/([^/]+)\/[^/]+\.ts$/u
  )
  if (!match) {
    throw new Error(
      `Learning module is outside the canonical modules/<document>/ folder: ${relativePath}`
    )
  }
  return match[1]
}

/**
 * @param {{ source?: Record<string, unknown> }} config
 * @returns {string[]}
 */
function officialUrls(config) {
  const urls = []
  for (const value of Object.values(config.source ?? {})) {
    if (typeof value === "string" && value.startsWith("https://"))
      urls.push(value)
  }
  return [...new Set(urls)].sort((left, right) => left.localeCompare(right))
}

/**
 * @param {number} totalCount
 * @returns {number}
 */
export function provisionLaneMidpoint(totalCount) {
  if (!Number.isInteger(totalCount) || totalCount < 1) {
    throw new Error(
      `Cannot compute provision lane midpoint for count ${totalCount}`
    )
  }
  return Math.ceil(totalCount / 2)
}

/**
 * @param {number} index
 * @param {number} totalCount
 * @returns {string}
 */
export function foreignersProvisionLane(index, totalCount) {
  return index <= provisionLaneMidpoint(totalCount)
    ? "foreigners-a"
    : "foreigners-b"
}

/**
 * @param {string} documentId
 * @param {number} index
 * @param {number} totalCount
 * @returns {string}
 */
function documentLane(documentId, index, totalCount) {
  if (documentId === "kpa") return "kpa"
  if (documentId === "ustawa-o-cudzoziemcach") {
    return foreignersProvisionLane(index, totalCount)
  }
  if (documentId === "ppsa") return "ppsa"
  if (
    documentId === "powierzanie-pracy" ||
    documentId === "rozporzadzenie-wniosek-pobyt-czasowy"
  ) {
    return "employment-regulation"
  }
  throw new Error(`No lane mapping for document ${documentId}`)
}

/**
 * @param {string | null} documentId
 * @returns {string}
 */
function learningLane(documentId) {
  if (documentId === "kpa") return "kpa"
  if (documentId === "ustawa-o-cudzoziemcach") return "foreigners-b"
  if (documentId === "ppsa") return "ppsa"
  if (
    documentId === "powierzanie-pracy" ||
    documentId === "rozporzadzenie-wniosek-pobyt-czasowy"
  ) {
    return "employment-regulation"
  }
  return "teaching-pages"
}

/**
 * @param {string} family
 * @param {string} relativePath
 * @param {string | null} contentId
 * @returns {string}
 */
function stableId(family, relativePath, contentId) {
  return `${family}:${contentId ?? relativePath}`
}

/**
 * @param {BaseEntryInput} input
 * @returns {LedgerEntry}
 */
function baseEntry({
  repositoryRoot,
  family,
  lane,
  relativePath,
  contentId,
  documentId = null,
  editionId = null,
  provisionId = null,
  provisionIndex = null,
  sourceProvisionCount = null,
  sourceTextHash = null,
  officialSourceUrls = [],
  sourceReviewStatus = null,
  previous = null,
}) {
  const contentHash = fileHash(repositoryRoot, relativePath)
  const previousValid =
    previous?.contentHash === contentHash &&
    previous?.sourceTextHash === sourceTextHash
  return {
    id: stableId(family, relativePath, contentId),
    path: relativePath,
    family,
    lane,
    documentId,
    contentId,
    provisionId,
    provisionIndex,
    sourceProvisionCount,
    currentSourceEdition: editionId,
    sourceTextHash,
    officialSourceUrls,
    contentHash,
    sourceReviewStatus,
    authorReview: previousValid ? previous.authorReview : reviewState(),
    crossReview: previousValid ? previous.crossReview : reviewState(),
  }
}

/**
 * @param {string} documentId
 * @param {string} provisionId
 * @returns {string}
 */
function provisionPath(documentId, provisionId) {
  const prefix = `${documentId}-`
  if (!provisionId.startsWith(prefix)) {
    throw new Error(`Provision ${provisionId} does not belong to ${documentId}`)
  }
  return `app/data/legal-library/editorial/${documentId}/articles/article-${provisionId.slice(prefix.length)}.ts`
}

/**
 * @param {string} repositoryRoot
 * @param {Map<string, LedgerEntry>} previousById
 * @returns {LedgerEntry[]}
 */
function collectProvisionEntries(repositoryRoot, previousById) {
  const currentEditions = readJson(repositoryRoot, CURRENT_EDITIONS_PATH)
  /** @type {LedgerEntry[]} */
  const entries = []
  for (const [documentId, editionId] of Object.entries(currentEditions)) {
    const config = readJson(
      repositoryRoot,
      `${DOCUMENT_CONFIG_ROOT}/${editionId}.json`
    )
    /** @type {{ id: string, sourceTextHash?: string, text?: string }[]} */
    const provisions = readJson(
      repositoryRoot,
      `${CORPUS_ROOT}/${editionId}/provisions.json`
    )
    const provisionCount = provisions.length
    for (const [zeroIndex, provision] of provisions.entries()) {
      const index = zeroIndex + 1
      const relativePath = provisionPath(documentId, provision.id)
      if (!fs.existsSync(path.join(repositoryRoot, relativePath))) {
        throw new Error(`Missing authored provision file ${relativePath}`)
      }
      entries.push(
        baseEntry({
          repositoryRoot,
          family: "provision",
          lane: documentLane(documentId, index, provisionCount),
          relativePath,
          contentId: provision.id,
          documentId,
          editionId,
          provisionId: provision.id,
          provisionIndex: index,
          sourceProvisionCount: provisionCount,
          sourceTextHash:
            provision.sourceTextHash ?? sha256(provision.text ?? ""),
          officialSourceUrls: officialUrls(config),
          sourceReviewStatus: sourceReviewStatus(repositoryRoot, relativePath),
          previous: previousById.get(
            stableId("provision", relativePath, provision.id)
          ),
        })
      )
    }
  }
  return entries
}

/**
 * @param {string} repositoryRoot
 * @param {Map<string, LedgerEntry>} previousById
 * @param {string} family
 * @param {string} directory
 * @param {(context: { documentId: string | null, relativePath: string }) => string} laneForPath
 * @returns {LedgerEntry[]}
 */
function collectTypedUnitEntries(
  repositoryRoot,
  previousById,
  family,
  directory,
  laneForPath
) {
  const documentSources = currentDocumentSources(repositoryRoot)
  return walkFiles(path.join(repositoryRoot, directory))
    .filter((filePath) => filePath.endsWith(".ts"))
    .filter((filePath) => !filePath.endsWith(".test.ts"))
    .filter((filePath) => path.basename(filePath) !== "index.ts")
    .map((filePath) => {
      const relativePath = toRepositoryPath(repositoryRoot, filePath)
      const source = readText(repositoryRoot, relativePath)
      const subject = extractKnowledgeSubject(source, relativePath)
      const folderDocumentId =
        family === "learning-module"
          ? learningDocumentFromPath(relativePath)
          : null
      if (
        family === "learning-module" &&
        subject?.documentId &&
        subject.documentId !== folderDocumentId
      ) {
        throw new Error(
          `Learning module subject/folder document mismatch in ${relativePath}: folder ${folderDocumentId}, subject ${subject.documentId}`
        )
      }
      const documentId =
        folderDocumentId ??
        subject?.documentId ??
        subject?.evidenceDocumentId ??
        findLiteral(source, "documentId")
      const contentId =
        subject?.moduleId ??
        subject?.nodeId ??
        subject?.routeId ??
        subject?.evidenceDocumentId ??
        documentId ??
        path.basename(filePath, ".ts")
      const documentSource = documentId ? documentSources.get(documentId) : null
      return baseEntry({
        repositoryRoot,
        family,
        lane: laneForPath({ documentId, relativePath }),
        relativePath,
        contentId,
        documentId,
        editionId: documentSource?.editionId ?? null,
        officialSourceUrls: documentSource?.officialSourceUrls ?? [],
        sourceReviewStatus: sourceReviewStatus(repositoryRoot, relativePath),
        previous: previousById.get(stableId(family, relativePath, contentId)),
      })
    })
}

/**
 * @param {string} repositoryRoot
 * @returns {Map<string, DocumentSource>}
 */
function currentDocumentSources(repositoryRoot) {
  const currentEditions = readJson(repositoryRoot, CURRENT_EDITIONS_PATH)
  /** @type {Map<string, DocumentSource>} */
  const sources = new Map()
  for (const [documentId, editionId] of Object.entries(currentEditions)) {
    const config = readJson(
      repositoryRoot,
      `${DOCUMENT_CONFIG_ROOT}/${editionId}.json`
    )
    sources.set(documentId, {
      editionId,
      officialSourceUrls: officialUrls(config),
    })
  }
  return sources
}

/**
 * @param {string} repositoryRoot
 * @param {Map<string, LedgerEntry>} previousById
 * @param {string} family
 * @param {string} relativePath
 * @param {string} contentId
 * @returns {LedgerEntry}
 */
function collectSingleFileEntry(
  repositoryRoot,
  previousById,
  family,
  relativePath,
  contentId
) {
  return baseEntry({
    repositoryRoot,
    family,
    lane: "teaching-pages",
    relativePath,
    contentId,
    previous: previousById.get(stableId(family, relativePath, contentId)),
  })
}

/**
 * @param {string} repositoryRoot
 * @param {Map<string, LedgerEntry>} previousById
 * @param {string} family
 * @param {string[]} relativePaths
 * @returns {LedgerEntry[]}
 */
function collectPathEntries(
  repositoryRoot,
  previousById,
  family,
  relativePaths
) {
  return relativePaths
    .filter((relativePath) =>
      fs.existsSync(path.join(repositoryRoot, relativePath))
    )
    .map((relativePath) =>
      baseEntry({
        repositoryRoot,
        family,
        lane: "teaching-pages",
        relativePath,
        contentId: path.basename(relativePath, path.extname(relativePath)),
        previous: previousById.get(
          stableId(
            family,
            relativePath,
            path.basename(relativePath, path.extname(relativePath))
          )
        ),
      })
    )
}

/**
 * @param {string} [reviewDir]
 * @returns {LedgerEntry[]}
 */
export function loadExistingEntries(reviewDir = DEFAULT_REVIEW_DIR) {
  /** @type {LedgerEntry[]} */
  const entries = []
  const lanesDir = laneDirectory(reviewDir)
  for (const lane of LANES) {
    const filePath = path.join(lanesDir, `${lane}.json`)
    if (fs.existsSync(filePath)) {
      entries.push(...JSON.parse(fs.readFileSync(filePath, "utf8")).entries)
    }
  }
  return entries
}

/**
 * @param {GenerateInventoryOptions} [options]
 * @returns {LedgerEntry[]}
 */
export function generateInventory({
  repositoryRoot = DEFAULT_REPOSITORY_ROOT,
  previousEntries = [],
} = {}) {
  const previousById = new Map(
    previousEntries.map((entry) => [entry.id, entry])
  )
  const entries = [
    ...collectProvisionEntries(repositoryRoot, previousById),
    ...collectTypedUnitEntries(
      repositoryRoot,
      previousById,
      "learning-module",
      "app/data/legal-library/learning/modules",
      ({ documentId }) => learningLane(documentId)
    ),
    ...collectTypedUnitEntries(
      repositoryRoot,
      previousById,
      "map-topic",
      "app/data/legal-map/editorial/topics",
      () => "teaching-pages"
    ),
    ...collectTypedUnitEntries(
      repositoryRoot,
      previousById,
      "evidence-document",
      "app/data/document-library/editorial/guides",
      () => "teaching-pages"
    ),
    ...collectTypedUnitEntries(
      repositoryRoot,
      previousById,
      "case-guide",
      "app/data/case-guides/editorial/routes",
      () => "teaching-pages"
    ),
    collectSingleFileEntry(
      repositoryRoot,
      previousById,
      "study-plan",
      "app/data/study/plan-data.ts",
      "study-plan"
    ),
    collectSingleFileEntry(
      repositoryRoot,
      previousById,
      "map-journey",
      "app/data/legal-map/journey.ts",
      "legal-map-journey"
    ),
    collectSingleFileEntry(
      repositoryRoot,
      previousById,
      "map-group-copy",
      "app/data/legal-map/data.ts",
      "legal-map-groups"
    ),
    ...collectPathEntries(
      repositoryRoot,
      previousById,
      "route-copy",
      ROUTE_COPY_PATHS
    ),
    ...collectPathEntries(
      repositoryRoot,
      previousById,
      "shared-renderer",
      SHARED_RENDERER_PATHS
    ),
  ]

  return entries.sort((left, right) =>
    [left.lane, left.family, left.path, left.id]
      .join("\0")
      .localeCompare(
        [right.lane, right.family, right.path, right.id].join("\0")
      )
  )
}

/**
 * @param {ReviewDirOptions} [options]
 * @returns {{ entries: LedgerEntry[], summary: Summary }}
 */
export function generateLedgers({
  repositoryRoot = DEFAULT_REPOSITORY_ROOT,
  reviewDir = DEFAULT_REVIEW_DIR,
} = {}) {
  const previousEntries = loadExistingEntries(reviewDir)
  const entries = generateInventory({ repositoryRoot, previousEntries })
  /** @type {Map<string, LedgerEntry[]>} */
  const byLane = new Map(LANES.map((lane) => [lane, []]))
  for (const entry of entries) byLane.get(entry.lane)?.push(entry)

  const summary = summarizeEntries(entries)
  writeJson(path.join(reviewDir, "index.json"), {
    schemaVersion: 1,
    reviewDate: "2026-07-18",
    declaredComplete: false,
    lanes: LANES,
    summary,
  })

  for (const lane of LANES) {
    writeJson(path.join(laneDirectory(reviewDir), `${lane}.json`), {
      schemaVersion: 1,
      reviewDate: "2026-07-18",
      lane,
      entries: byLane.get(lane),
    })
  }
  return { entries, summary }
}

/**
 * @param {LedgerEntry[]} entries
 * @returns {Summary}
 */
function summarizeEntries(entries) {
  /** @type {Record<string, number>} */
  const byFamily = {}
  /** @type {Record<string, number>} */
  const byLane = {}
  /** @type {Record<string, LaneBoundary>} */
  const laneBoundaries = {}
  for (const entry of entries) {
    byFamily[entry.family] = (byFamily[entry.family] ?? 0) + 1
    byLane[entry.lane] = (byLane[entry.lane] ?? 0) + 1
  }
  const foreignersProvisions = entries
    .filter(
      (entry) =>
        entry.family === "provision" &&
        entry.documentId === "ustawa-o-cudzoziemcach"
    )
    .sort(
      (left, right) => (left.provisionIndex ?? 0) - (right.provisionIndex ?? 0)
    )
  if (foreignersProvisions.length > 0) {
    const midpoint = provisionLaneMidpoint(foreignersProvisions.length)
    const laneAEnd = foreignersProvisions.find(
      (entry) => entry.provisionIndex === midpoint
    )
    const laneBStart = foreignersProvisions.find(
      (entry) => entry.provisionIndex === midpoint + 1
    )
    laneBoundaries["ustawa-o-cudzoziemcach"] = {
      total: foreignersProvisions.length,
      midpoint,
      laneA: {
        lane: "foreigners-a",
        indexStart: 1,
        indexEnd: midpoint,
        lastProvisionId: laneAEnd?.provisionId ?? null,
        lastPath: laneAEnd?.path ?? null,
      },
      laneB: {
        lane: "foreigners-b",
        indexStart: midpoint + 1,
        indexEnd: foreignersProvisions.length,
        firstProvisionId: laneBStart?.provisionId ?? null,
        firstPath: laneBStart?.path ?? null,
      },
    }
  }
  return { total: entries.length, byFamily, byLane, laneBoundaries }
}

/**
 * @param {string} reviewDir
 * @returns {{ index: ReviewIndex, entries: LedgerEntry[] }}
 */
function loadLedgerFiles(reviewDir) {
  const indexPath = path.join(reviewDir, "index.json")
  /** @type {ReviewIndex} */
  const index = fs.existsSync(indexPath)
    ? JSON.parse(fs.readFileSync(indexPath, "utf8"))
    : { declaredComplete: false }
  const entries = loadExistingEntries(reviewDir)
  return { index, entries }
}

/**
 * @param {string} code
 * @param {string} message
 * @param {LedgerEntry | null} [entry]
 * @returns {ValidationIssue}
 */
function validationIssue(code, message, entry = null) {
  return {
    code,
    message,
    id: entry?.id ?? null,
    path: entry?.path ?? null,
    lane: entry?.lane ?? null,
  }
}

const TEXT_INTEGRITY_PATTERNS = [
  {
    code: "placeholder-question-marks",
    message: "Content contains a run of placeholder question marks",
    pattern: /\?{4,}/gu,
  },
  {
    code: "unicode-replacement-character",
    message: "Content contains the Unicode replacement character",
    pattern: /\uFFFD/gu,
  },
  {
    code: "mojibake-sequence",
    message: "Content contains a common mojibake sequence",
    pattern:
      /(?:â(?:€|€™|€œ|€|€“|€”|€¦)|[ÃÄÅÐÑ][^\s]|Â(?:\u00A0|[^\p{L}\p{N}]))/gu,
  },
  {
    code: "mixed-script-word",
    message:
      "Content contains adjacent Latin and Cyrillic letters; keep Polish terms intact and explain them in natural Ukrainian",
    pattern:
      /(?:[\p{Script=Latin}][\p{Script=Cyrillic}]|[\p{Script=Cyrillic}][\p{Script=Latin}])/gu,
  },
]

/**
 * @param {string} source
 * @param {number} offset
 * @returns {LineAndColumn}
 */
function lineAndColumn(source, offset) {
  const before = source.slice(0, offset)
  const line = before.split("\n").length
  const lastNewline = before.lastIndexOf("\n")
  return { line, column: offset - lastNewline }
}

/**
 * @param {string} source
 * @returns {TextIntegrityDefect[]}
 */
export function detectTextIntegrityDefects(source) {
  /** @type {TextIntegrityDefect[]} */
  const defects = []
  for (const { code, message, pattern } of TEXT_INTEGRITY_PATTERNS) {
    pattern.lastIndex = 0
    const match = pattern.exec(source)
    if (!match) continue
    const { line, column } = lineAndColumn(source, match.index)
    defects.push({ code, message, line, column, match: match[0] })
  }
  return defects
}

/**
 * @param {unknown} value
 * @returns {value is string}
 */
function hasText(value) {
  return typeof value === "string" && value.trim().length > 0
}

/**
 * @param {ReviewState | undefined} review
 * @param {LedgerEntry} entry
 * @returns {boolean}
 */
function reviewMatchesEntry(review, entry) {
  return (
    review?.hashAttestation?.contentHash === entry.contentHash &&
    review?.hashAttestation?.sourceTextHash === entry.sourceTextHash
  )
}

/**
 * @param {ValidationIssue[]} issues
 * @param {LedgerEntry} entry
 * @param {ReviewPhase} phase
 * @param {string} label
 */
function validateAcceptedReview(issues, entry, phase, label) {
  const review = entry[phase]
  if (!review) {
    issues.push(
      validationIssue(
        `missing-${phase}`,
        `${label} review state is missing`,
        entry
      )
    )
    return
  }
  if (review.status !== "accepted") {
    issues.push(
      validationIssue(
        `pending-${phase}`,
        `${label} review is not accepted`,
        entry
      )
    )
  }
  if (!hasText(review.reviewer)) {
    issues.push(
      validationIssue(
        `missing-${phase}-reviewer`,
        `${label} reviewer is missing`,
        entry
      )
    )
  }
  if (!hasText(review.reviewedAt)) {
    issues.push(
      validationIssue(
        `missing-${phase}-timestamp`,
        `${label} review timestamp is missing`,
        entry
      )
    )
  }
  if (!Array.isArray(review.blockers) || review.blockers.length !== 0) {
    issues.push(
      validationIssue(
        `${phase}-blockers`,
        `${label} review must have no blockers`,
        entry
      )
    )
  }
  if (!reviewMatchesEntry(review, entry)) {
    issues.push(
      validationIssue(
        `${phase}-hash-attestation-mismatch`,
        `${label} review hash attestation does not match current entry hashes`,
        entry
      )
    )
  }
}

/**
 * @param {ValidateOptions} [options]
 * @returns {ValidationResult}
 */
export function validateLedgers({
  repositoryRoot = DEFAULT_REPOSITORY_ROOT,
  reviewDir = DEFAULT_REVIEW_DIR,
  strict = false,
  ifComplete = false,
} = {}) {
  const { index, entries } = loadLedgerFiles(reviewDir)
  const effectiveStrict =
    strict || (ifComplete && index.declaredComplete === true)
  const expectedEntries = generateInventory({
    repositoryRoot,
    previousEntries: [],
  })
  const expectedById = new Map(
    expectedEntries.map((entry) => [entry.id, entry])
  )
  /** @type {Map<string, LedgerEntry>} */
  const actualById = new Map()
  /** @type {ValidationIssue[]} */
  const issues = []

  for (const entry of entries) {
    if (actualById.has(entry.id)) {
      issues.push(
        validationIssue(
          "duplicate-entry",
          `Duplicate ledger id ${entry.id}`,
          entry
        )
      )
    }
    actualById.set(entry.id, entry)
    if (entry.lane && !LANES.includes(entry.lane)) {
      issues.push(
        validationIssue("unknown-lane", `Unknown lane ${entry.lane}`, entry)
      )
    }
  }

  /** @type {Map<string, LedgerEntry>} */
  const pathOwners = new Map()
  for (const entry of entries) {
    const owner = pathOwners.get(entry.path)
    if (owner) {
      issues.push(
        validationIssue(
          "duplicate-path",
          `Path ${entry.path} is assigned to both ${owner.id} and ${entry.id}`,
          entry
        )
      )
    }
    pathOwners.set(entry.path, entry)
  }

  for (const expected of expectedEntries) {
    const actual = actualById.get(expected.id)
    if (!actual) {
      issues.push(
        validationIssue(
          "missing-entry",
          `Missing ledger entry ${expected.id}`,
          expected
        )
      )
      continue
    }
    if (actual.lane !== expected.lane) {
      issues.push(
        validationIssue("wrong-lane", `Expected lane ${expected.lane}`, actual)
      )
    }
    if (actual.contentHash !== expected.contentHash) {
      issues.push(
        validationIssue("stale-content-hash", "Content hash is stale", actual)
      )
    }
    if (actual.sourceTextHash !== expected.sourceTextHash) {
      issues.push(
        validationIssue(
          "stale-source-text-hash",
          "Source text hash is stale",
          actual
        )
      )
    }
  }

  for (const actual of entries) {
    if (!expectedById.has(actual.id)) {
      issues.push(
        validationIssue(
          "unassigned-entry",
          `Unassigned ledger entry ${actual.id}`,
          actual
        )
      )
    }
    if (!actual.authorReview || !actual.crossReview) {
      issues.push(
        validationIssue(
          "missing-review-state",
          "Review state is incomplete",
          actual
        )
      )
      continue
    }
    if (effectiveStrict) {
      validateAcceptedReview(issues, actual, "authorReview", "Author")
      validateAcceptedReview(issues, actual, "crossReview", "Cross")
      if (
        hasText(actual.authorReview?.reviewer) &&
        actual.authorReview.reviewer === actual.crossReview?.reviewer
      ) {
        issues.push(
          validationIssue(
            "same-reviewer",
            "Author and cross-review identities must be distinct",
            actual
          )
        )
      }
      if (
        REVIEWABLE_KNOWLEDGE_FAMILIES.has(actual.family) &&
        actual.sourceReviewStatus === "draft" &&
        actual.authorReview.status !== "blocked" &&
        actual.crossReview.status !== "blocked"
      ) {
        issues.push(
          validationIssue(
            "draft-knowledge-unit",
            "Teaching knowledge unit is still draft and is not explicitly blocked",
            actual
          )
        )
      }
    }
  }

  const integrityPaths = new Set()
  for (const expected of expectedEntries) {
    if (integrityPaths.has(expected.path)) continue
    integrityPaths.add(expected.path)
    const source = readText(repositoryRoot, expected.path)
    for (const defect of detectTextIntegrityDefects(source)) {
      issues.push(
        validationIssue(
          defect.code,
          `${defect.message} at ${defect.line}:${defect.column} (${JSON.stringify(defect.match)})`,
          expected
        )
      )
    }
  }

  for (const [family, count] of Object.entries(FAMILY_COUNTS)) {
    const actual = expectedEntries.filter(
      (entry) => entry.family === family
    ).length
    if (actual !== count) {
      issues.push(
        validationIssue(
          "inventory-count-mismatch",
          `Expected ${count} ${family} entries, found ${actual}`
        )
      )
    }
  }

  return {
    ok: issues.length === 0,
    strict: effectiveStrict,
    declaredComplete: index.declaredComplete === true,
    summary: summarizeEntries(entries),
    issues,
  }
}

/**
 * @param {MarkReviewOptions} options
 * @returns {LedgerEntry}
 */
export function markReview({
  repositoryRoot = DEFAULT_REPOSITORY_ROOT,
  reviewDir = DEFAULT_REVIEW_DIR,
  id = null,
  lane = null,
  path: targetPath = null,
  phase,
  reviewer,
  status,
  blocker = null,
}) {
  if (!["authorReview", "crossReview"].includes(phase)) {
    throw new Error("phase must be authorReview or crossReview")
  }
  if (!reviewer) throw new Error("--reviewer is required")
  if (
    !["accepted", "changes-requested", "blocked", "pending"].includes(status)
  ) {
    throw new Error(`Unsupported review status ${status}`)
  }
  const laneFiles = lane ? [lane] : LANES
  /** @type {LedgerEntry | null} */
  let matched = null
  /** @type {string | null} */
  let matchedFile = null
  /** @type {LedgerFile | null} */
  let ledger = null

  for (const laneName of laneFiles) {
    const filePath = path.join(laneDirectory(reviewDir), `${laneName}.json`)
    if (!fs.existsSync(filePath)) continue
    /** @type {LedgerFile} */
    const candidate = JSON.parse(fs.readFileSync(filePath, "utf8"))
    const entry = candidate.entries.find(
      (item) =>
        (id && item.id === id) || (targetPath && item.path === targetPath)
    )
    if (entry) {
      if (matched)
        throw new Error("Review selector matched more than one ledger entry")
      matched = entry
      matchedFile = filePath
      ledger = candidate
    }
  }

  if (!matched || !ledger || !matchedFile) {
    throw new Error("No ledger entry matched the provided --id or --path")
  }

  const current = generateInventory({
    repositoryRoot,
    previousEntries: [],
  }).find((entry) => entry.id === matched.id)
  if (!current) {
    throw new Error(`Cannot mark ${matched.id}: entry is no longer assigned`)
  }
  if (
    matched.contentHash !== current.contentHash ||
    matched.sourceTextHash !== current.sourceTextHash ||
    matched.lane !== current.lane
  ) {
    throw new Error(
      `Cannot mark ${matched.id}: ledger entry is stale; regenerate ledgers first`
    )
  }

  matched[phase] = {
    reviewer,
    reviewedAt: new Date().toISOString(),
    status,
    blockers: blocker ? [blocker] : [],
    hashAttestation: {
      contentHash: matched.contentHash,
      sourceTextHash: matched.sourceTextHash,
    },
  }
  writeJson(matchedFile, ledger)
  return matched
}

/**
 * @param {MarkReviewsOptions} options
 * @returns {LedgerEntry[]}
 */
export function markReviews({
  repositoryRoot = DEFAULT_REPOSITORY_ROOT,
  reviewDir = DEFAULT_REVIEW_DIR,
  lane,
  documentId = null,
  family = null,
  pathPrefix = null,
  all = false,
  phase,
  reviewer,
  status,
  blocker = null,
}) {
  if (!lane || !LANES.includes(lane)) {
    throw new Error(`--lane must be one of: ${LANES.join(", ")}`)
  }
  if (!all && !documentId && !family && !pathPrefix) {
    throw new Error(
      "Batch review requires --all, --document-id, --family, or --path-prefix"
    )
  }
  if (!["authorReview", "crossReview"].includes(phase)) {
    throw new Error("phase must be authorReview or crossReview")
  }
  if (!reviewer) throw new Error("--reviewer is required")
  if (
    !["accepted", "changes-requested", "blocked", "pending"].includes(status)
  ) {
    throw new Error(`Unsupported review status ${status}`)
  }

  const filePath = path.join(laneDirectory(reviewDir), `${lane}.json`)
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing ledger for lane ${lane}`)
  }
  /** @type {LedgerFile} */
  const ledger = JSON.parse(fs.readFileSync(filePath, "utf8"))
  const selected = ledger.entries.filter(
    (entry) =>
      (!documentId || entry.documentId === documentId) &&
      (!family || entry.family === family) &&
      (!pathPrefix || entry.path.startsWith(pathPrefix))
  )
  if (selected.length === 0) {
    throw new Error("Batch review selector matched no ledger entries")
  }

  const currentById = new Map(
    generateInventory({ repositoryRoot, previousEntries: [] }).map((entry) => [
      entry.id,
      entry,
    ])
  )
  for (const entry of selected) {
    const current = currentById.get(entry.id)
    if (!current) {
      throw new Error(`Cannot mark ${entry.id}: entry is no longer assigned`)
    }
    if (
      entry.contentHash !== current.contentHash ||
      entry.sourceTextHash !== current.sourceTextHash ||
      entry.lane !== current.lane
    ) {
      throw new Error(
        `Cannot mark ${entry.id}: ledger entry is stale; regenerate ledgers first`
      )
    }
  }

  const reviewedAt = new Date().toISOString()
  for (const entry of selected) {
    entry[phase] = {
      reviewer,
      reviewedAt,
      status,
      blockers: blocker ? [blocker] : [],
      hashAttestation: {
        contentHash: entry.contentHash,
        sourceTextHash: entry.sourceTextHash,
      },
    }
  }
  writeJson(filePath, ledger)
  return selected
}
