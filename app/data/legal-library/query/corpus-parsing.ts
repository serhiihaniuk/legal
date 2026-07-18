import type {
  CorpusProvision,
  LegalCorpusManifest,
  LegalProvisionSourceSpan,
  LegalSourceMaterial,
} from "../contracts"

export const SHA256_PATTERN = /^[a-f0-9]{64}$/iu

const PROVISION_KINDS = new Set([
  "article",
  "paragraph",
  "section",
  "point",
  "annex",
  "other",
])
const PROVISION_STATUSES = new Set([
  "active",
  "future",
  "repealed",
  "reserved",
  "removed",
  "unknown",
])

export type UnknownRecord = Record<string, unknown>

export function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null
}

export function hasOwn(value: UnknownRecord, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(value, key)
}

export function isString(value: unknown): value is string {
  return typeof value === "string"
}

export function isInteger(value: unknown): value is number {
  return typeof value === "number" && Number.isInteger(value)
}

function isCalendarDate(value: unknown): value is string {
  if (!isString(value) || !/^\d{4}-\d{2}-\d{2}$/u.test(value)) return false
  const date = new Date(`${value}T00:00:00Z`)
  return (
    !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value
  )
}

export function parseCorpusManifest(
  value: unknown
): LegalCorpusManifest | undefined {
  if (!isRecord(value)) return undefined
  if (
    !isString(value.id) ||
    !isInteger(value.schemaVersion) ||
    !isString(value.documentId) ||
    !isString(value.editionId) ||
    !isString(value.shortName) ||
    !isString(value.title) ||
    !isString(value.citation) ||
    !isString(value.officialPageUrl) ||
    !isString(value.metadataUrl) ||
    !isString(value.pdfUrl) ||
    !isString(value.checkedAt) ||
    !isString(value.legalStateDate) ||
    !isString(value.localPdfUrl) ||
    !isInteger(value.pageCount) ||
    !isInteger(value.textLayerPageCount) ||
    !isString(value.pdfSha256) ||
    !isString(value.sourcePdfSha256) ||
    !isString(value.builtAt) ||
    !isRecord(value.source) ||
    !isString(value.source.provider) ||
    !isString(value.source.officialPageUrl) ||
    !isString(value.source.metadataUrl) ||
    !isString(value.source.pdfUrl)
  )
    return undefined
  if (
    value.id !== value.editionId ||
    !SHA256_PATTERN.test(value.pdfSha256) ||
    value.pdfSha256 !== value.sourcePdfSha256
  ) {
    return undefined
  }
  if (
    value.sourceMaterials !== undefined &&
    (!Array.isArray(value.sourceMaterials) ||
      !value.sourceMaterials.every(parseLegalSourceMaterial))
  ) {
    return undefined
  }
  // The generated registry is the trusted source of the JSON shape; this assertion
  // is localized immediately after the runtime shape and checksum checks.
  return value as LegalCorpusManifest
}

function parseLegalSourceMaterial(
  value: unknown
): value is LegalSourceMaterial {
  return (
    isRecord(value) &&
    isString(value.id) &&
    isString(value.role) &&
    isString(value.citation) &&
    isString(value.officialPageUrl) &&
    isString(value.metadataUrl) &&
    isString(value.pdfUrl) &&
    isString(value.localPdfUrl) &&
    isString(value.pdfSha256) &&
    SHA256_PATTERN.test(value.pdfSha256) &&
    (value.expectedPdfSha256 === undefined ||
      (isString(value.expectedPdfSha256) &&
        SHA256_PATTERN.test(value.expectedPdfSha256))) &&
    (value.effectiveDate === undefined || isString(value.effectiveDate))
  )
}

function parseLegalProvisionSourceSpan(
  value: unknown
): value is LegalProvisionSourceSpan {
  return (
    isRecord(value) &&
    isString(value.sourceId) &&
    isString(value.role) &&
    isString(value.locator) &&
    (value.startPdfPage === undefined || isInteger(value.startPdfPage)) &&
    (value.endPdfPage === undefined || isInteger(value.endPdfPage)) &&
    (value.sourcePdfSha256 === undefined ||
      (isString(value.sourcePdfSha256) &&
        SHA256_PATTERN.test(value.sourcePdfSha256))) &&
    (value.effectiveDate === undefined || isString(value.effectiveDate))
  )
}

export function parseCorpusProvision(
  value: unknown,
  documentId: string,
  editionId: string
): CorpusProvision | undefined {
  if (!isRecord(value)) return undefined
  if (
    !isString(value.id) ||
    !isString(value.documentId) ||
    !isString(value.editionId) ||
    !isString(value.kind) ||
    !isString(value.locator) ||
    !(value.parentId === null || isString(value.parentId)) ||
    !Array.isArray(value.childIds) ||
    !value.childIds.every(isString) ||
    !isInteger(value.order) ||
    !isInteger(value.startPdfPage) ||
    !isInteger(value.endPdfPage) ||
    !isString(value.status) ||
    !isString(value.sourcePdfSha256) ||
    !isString(value.sourceTextHash) ||
    !isString(value.text)
  )
    return undefined
  if (
    value.sourceSpans !== undefined &&
    (!Array.isArray(value.sourceSpans) ||
      !value.sourceSpans.every(parseLegalProvisionSourceSpan))
  ) {
    return undefined
  }
  if (
    value.documentId !== documentId ||
    value.editionId !== editionId ||
    !PROVISION_KINDS.has(value.kind) ||
    !PROVISION_STATUSES.has(value.status) ||
    !SHA256_PATTERN.test(value.sourcePdfSha256) ||
    value.startPdfPage < 1 ||
    value.endPdfPage < value.startPdfPage
  )
    return undefined
  if (
    (value.status === "future" && !isCalendarDate(value.effectiveDate)) ||
    (value.status !== "future" && value.effectiveDate !== undefined)
  ) {
    return undefined
  }
  return value as CorpusProvision
}
