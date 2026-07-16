import type { CorpusProvision, LegalCorpusManifest } from "./contracts"

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
  // The generated registry is the trusted source of the JSON shape; this assertion
  // is localized immediately after the runtime shape and checksum checks.
  return value as LegalCorpusManifest
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
    value.documentId !== documentId ||
    value.editionId !== editionId ||
    !PROVISION_KINDS.has(value.kind) ||
    !PROVISION_STATUSES.has(value.status) ||
    !SHA256_PATTERN.test(value.sourcePdfSha256) ||
    value.startPdfPage < 1 ||
    value.endPdfPage < value.startPdfPage
  )
    return undefined
  return value as CorpusProvision
}
