import { getKpaArticleExplanation } from "~/data/kpa-article-explanations"
import { legalLibraryRegistry } from "~/data/legal-corpus/registry.generated"

import type {
  CanonicalPdfLocator,
  CorpusProvision,
  LegalCorpusManifest,
  LegalDocument,
  LegalDocumentId,
  LegalDocumentReference,
  LegalEdition,
  LegalEditionId,
  LegalExplanation,
  LegalExplanationResolution,
  LegalProvision,
  LegalProvisionId,
  LegalProvisionReference,
  LegalReferenceResolution,
} from "./contracts"

const REVIEWED_KPA_EDITION = "kpa-2025-1691" as const
const REVIEWED_LEGAL_STATE_DATE = "2026-07-14" as const
const SHA256_PATTERN = /^[a-f0-9]{64}$/iu
const PROVISION_KINDS = new Set(["article", "paragraph", "section", "point", "annex", "other"])
const PROVISION_STATUSES = new Set(["active", "repealed", "reserved", "removed", "unknown"])

type UnknownRecord = Record<string, unknown>

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null
}

function hasOwn(value: UnknownRecord, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(value, key)
}

function isString(value: unknown): value is string {
  return typeof value === "string"
}

function isInteger(value: unknown): value is number {
  return typeof value === "number" && Number.isInteger(value)
}

function getRawDocument(documentId: unknown) {
  if (!isLegalDocumentId(documentId)) return undefined
  return legalLibraryRegistry[documentId]
}

function getRawEditions(documentId: LegalDocumentId): readonly UnknownRecord[] {
  const document = legalLibraryRegistry[documentId]
  return Object.values(document.editions).filter(isRecord)
}

function getRawEdition(documentId: LegalDocumentId, editionId: string) {
  return getRawEditions(documentId).find((edition) => edition.editionId === editionId)
}

function getRawProvisions(edition: UnknownRecord): readonly unknown[] {
  return Array.isArray(edition.provisions) ? edition.provisions : []
}

function parseManifest(value: unknown): LegalCorpusManifest | undefined {
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
  ) return undefined
  if (value.id !== value.editionId || !SHA256_PATTERN.test(value.pdfSha256) || value.pdfSha256 !== value.sourcePdfSha256) {
    return undefined
  }
  // The generated registry is the trusted source of the JSON shape; this assertion
  // is localized immediately after the runtime shape and checksum checks.
  return value as LegalCorpusManifest
}

function parseProvision(value: unknown, documentId: string, editionId: string): CorpusProvision | undefined {
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
  ) return undefined
  if (
    value.documentId !== documentId ||
    value.editionId !== editionId ||
    !PROVISION_KINDS.has(value.kind) ||
    !PROVISION_STATUSES.has(value.status) ||
    !SHA256_PATTERN.test(value.sourcePdfSha256) ||
    value.startPdfPage < 1 ||
    value.endPdfPage < value.startPdfPage
  ) return undefined
  return value as CorpusProvision
}

function getCurrentEditionId(documentId: LegalDocumentId): string {
  return legalLibraryRegistry[documentId].currentEditionId
}

function makeEdition(documentId: LegalDocumentId, raw: UnknownRecord): LegalEdition<LegalDocumentId> | undefined {
  const editionId = raw.editionId
  if (!isString(editionId)) return undefined
  const manifest = parseManifest(raw.manifest)
  if (!manifest || manifest.documentId !== documentId || manifest.editionId !== editionId) return undefined
  const provisions = getRawProvisions(raw)
    .map((provision) => parseProvision(provision, documentId, editionId))
    .filter((provision): provision is CorpusProvision => provision !== undefined)
  const provisionIds = provisions.map((provision) => provision.id) as readonly LegalProvisionId<LegalDocumentId>[]
  return {
    documentId,
    editionId: editionId as LegalEditionId<LegalDocumentId>,
    shortName: manifest.shortName,
    title: manifest.title,
    citation: manifest.citation,
    manifest,
    provisionIds,
  }
}

function makeProvision(
  documentId: LegalDocumentId,
  editionId: string,
  raw: unknown,
  manifest: LegalCorpusManifest
): LegalProvision<LegalDocumentId> | undefined {
  const provision = parseProvision(raw, documentId, editionId)
  if (!provision || provision.sourcePdfSha256 !== manifest.sourcePdfSha256) return undefined
  const canonicalPdfLocator = buildCanonicalPdfLocator(manifest, provision)
  if (!canonicalPdfLocator) return undefined
  return {
    ...provision,
    canonicalPdfLocator: canonicalPdfLocator.href,
  } as LegalProvision<LegalDocumentId>
}

function findProvisionInEdition(documentId: LegalDocumentId, editionId: string, provisionId: string) {
  const rawEdition = getRawEdition(documentId, editionId)
  if (!rawEdition) return undefined
  const manifest = parseManifest(rawEdition.manifest)
  if (!manifest || manifest.documentId !== documentId || manifest.editionId !== editionId) return undefined
  const raw = getRawProvisions(rawEdition).find((provision) => isRecord(provision) && provision.id === provisionId)
  return raw === undefined ? undefined : makeProvision(documentId, editionId, raw, manifest)
}

function findProvisionOwner(provisionId: string): LegalDocumentId | undefined {
  for (const document of listDocuments()) {
    if (document.provisionIds.includes(provisionId as never)) return document.id
  }
  return undefined
}

function provisionExistsInDocument(documentId: LegalDocumentId, provisionId: string): boolean {
  return listEditions(documentId).some((edition) => edition.provisionIds.includes(provisionId as never))
}

function requestedReference(
  referenceOrDocumentId: unknown,
  provisionId?: unknown,
  editionId?: unknown
): unknown {
  if (isString(referenceOrDocumentId)) {
    return {
      kind: "legal-provision",
      documentId: referenceOrDocumentId,
      provisionId,
      ...(editionId === undefined ? {} : { editionId }),
    }
  }
  return referenceOrDocumentId
}

export function isLegalDocumentId(value: unknown): value is LegalDocumentId {
  return isString(value) && hasOwn(legalLibraryRegistry, value)
}

export function isLegalEditionId<D extends LegalDocumentId>(
  documentId: D,
  value: unknown
): value is LegalEditionId<D>
export function isLegalEditionId(value: unknown): value is LegalEditionId<LegalDocumentId>
export function isLegalEditionId(
  documentIdOrValue: unknown,
  maybeValue?: unknown
): boolean {
  if (maybeValue === undefined) {
    const value = documentIdOrValue
    if (!isString(value)) return false
    return listDocuments().some((document) => document.editionIds.includes(value as never))
  }
  const document = getRawDocument(documentIdOrValue)
  return Boolean(document && isString(maybeValue) && document.editionIds.includes(maybeValue as never))
}

export function isLegalProvisionId<D extends LegalDocumentId>(
  documentId: D,
  value: unknown
): value is LegalProvisionId<D>
export function isLegalProvisionId(value: unknown): value is LegalProvisionId<LegalDocumentId>
export function isLegalProvisionId(
  documentIdOrValue: unknown,
  maybeValue?: unknown
): boolean {
  if (maybeValue === undefined) {
    const value = documentIdOrValue
    return isString(value) && listDocuments().some((document) => document.provisionIds.includes(value as never))
  }
  const document = getRawDocument(documentIdOrValue)
  return Boolean(document && isString(maybeValue) && document.provisionIds.includes(maybeValue as never))
}

export function isLegalDocumentReference(value: unknown): value is LegalDocumentReference {
  return isRecord(value) && value.kind === "legal-document" && isLegalDocumentId(value.documentId)
}

export function isLegalProvisionReference(value: unknown): value is LegalProvisionReference {
  if (!isRecord(value) || value.kind !== "legal-provision" || !isLegalDocumentId(value.documentId)) return false
  if (!isLegalProvisionId(value.documentId, value.provisionId)) return false
  return value.editionId === undefined || isLegalEditionId(value.documentId, value.editionId)
}

export function parseLegalDocumentReference(value: unknown): LegalDocumentReference | undefined {
  return isLegalDocumentReference(value) ? value : undefined
}

export function parseLegalProvisionReference(value: unknown): LegalProvisionReference | undefined {
  return isLegalProvisionReference(value) ? value : undefined
}

export function parseLegalReference(value: unknown): LegalDocumentReference | LegalProvisionReference | undefined {
  if (isLegalDocumentReference(value) || isLegalProvisionReference(value)) return value
  return undefined
}

export function listDocuments(): LegalDocument[] {
  return (Object.keys(legalLibraryRegistry) as LegalDocumentId[]).sort((a, b) => a.localeCompare(b)).map((documentId) => {
    const raw = legalLibraryRegistry[documentId]
    return {
      id: documentId,
      documentId,
      shortName: raw.shortName,
      title: raw.title,
      citation: raw.citation,
      editionIds: [...raw.editionIds] as readonly LegalEditionId<LegalDocumentId>[],
      currentEditionId: raw.currentEditionId as LegalEditionId<LegalDocumentId>,
      provisionIds: [...raw.provisionIds] as readonly LegalProvisionId<LegalDocumentId>[],
    }
  })
}

export function getDocument(documentId: unknown): LegalDocument | undefined {
  if (!isLegalDocumentId(documentId)) return undefined
  return listDocuments().find((document) => document.id === documentId)
}

export function listEditions(documentId: unknown): LegalEdition[] {
  if (!isLegalDocumentId(documentId)) return []
  return getRawEditions(documentId)
    .map((edition) => makeEdition(documentId, edition))
    .filter((edition): edition is LegalEdition<LegalDocumentId> => edition !== undefined)
}

export function getEdition(documentId: unknown, editionId: unknown): LegalEdition | undefined {
  if (!isLegalDocumentId(documentId) || !isString(editionId)) return undefined
  const raw = getRawEdition(documentId, editionId)
  return raw ? makeEdition(documentId, raw) : undefined
}

export function listProvisions(documentId: unknown, editionId?: unknown): LegalProvision[] {
  if (!isLegalDocumentId(documentId)) return []
  const selectedEditionId = editionId === undefined ? getCurrentEditionId(documentId) : editionId
  if (!isString(selectedEditionId)) return []
  const rawEdition = getRawEdition(documentId, selectedEditionId)
  if (!rawEdition) return []
  const manifest = parseManifest(rawEdition.manifest)
  if (!manifest) return []
  return getRawProvisions(rawEdition)
    .map((provision) => makeProvision(documentId, selectedEditionId, provision, manifest))
    .filter((provision): provision is LegalProvision<LegalDocumentId> => provision !== undefined)
}

export function getProvision(
  documentId: unknown,
  provisionId: unknown,
  editionId?: unknown
): LegalProvision | undefined {
  if (!isLegalDocumentId(documentId) || !isString(provisionId)) return undefined
  const selectedEditionId = editionId === undefined ? getCurrentEditionId(documentId) : editionId
  if (!isString(selectedEditionId)) return undefined
  return findProvisionInEdition(documentId, selectedEditionId, provisionId)
}

export function getPreviousProvision(
  documentId: unknown,
  provisionId: unknown,
  editionId?: unknown
): LegalProvision | null | undefined {
  const provisions = listProvisions(documentId, editionId)
  if (!isString(provisionId)) return undefined
  const index = provisions.findIndex((provision) => provision.id === provisionId)
  if (index < 0) return undefined
  return index === 0 ? null : provisions[index - 1]
}

export function getNextProvision(
  documentId: unknown,
  provisionId: unknown,
  editionId?: unknown
): LegalProvision | null | undefined {
  const provisions = listProvisions(documentId, editionId)
  if (!isString(provisionId)) return undefined
  const index = provisions.findIndex((provision) => provision.id === provisionId)
  if (index < 0) return undefined
  return index === provisions.length - 1 ? null : provisions[index + 1]
}

export const getPrevious = getPreviousProvision
export const getNext = getNextProvision

function validPdfInput(manifest: LegalCorpusManifest, provision: CorpusProvision): boolean {
  return (
    isString(manifest.localPdfUrl) &&
    manifest.pageCount >= 1 &&
    SHA256_PATTERN.test(manifest.sourcePdfSha256) &&
    manifest.pdfSha256 === manifest.sourcePdfSha256 &&
    provision.sourcePdfSha256 === manifest.sourcePdfSha256 &&
    isInteger(provision.startPdfPage) &&
    isInteger(provision.endPdfPage) &&
    provision.startPdfPage >= 1 &&
    provision.endPdfPage >= provision.startPdfPage &&
    provision.endPdfPage <= manifest.pageCount
  )
}

export function buildCanonicalPdfLocator(
  manifest: unknown,
  provision: unknown
): CanonicalPdfLocator | undefined
export function buildCanonicalPdfLocator(
  documentId: unknown,
  editionId: unknown,
  provisionId: unknown
): CanonicalPdfLocator | undefined
export function buildCanonicalPdfLocator(
  first: unknown,
  second: unknown,
  third?: unknown
): CanonicalPdfLocator | undefined {
  let manifest: LegalCorpusManifest | undefined
  let provision: CorpusProvision | undefined
  let documentId: string | undefined
  let editionId: string | undefined
  let provisionId: string | undefined

  if (third !== undefined) {
    if (!isLegalDocumentId(first) || !isString(second) || !isString(third)) return undefined
    const rawEdition = getRawEdition(first, second)
    if (!rawEdition) return undefined
    manifest = parseManifest(rawEdition.manifest)
    provision = findProvisionInEdition(first, second, third)
    documentId = first
    editionId = second
    provisionId = third
  } else {
    if (!isRecord(first) || !isRecord(second)) return undefined
    manifest = parseManifest(first)
    provision = parseProvision(second, manifest?.documentId ?? "", manifest?.editionId ?? "")
    documentId = manifest?.documentId
    editionId = manifest?.editionId
    provisionId = provision?.id
  }

  if (!manifest || !provision || !documentId || !editionId || !provisionId || !validPdfInput(manifest, provision)) return undefined
  return {
    href: `${manifest.localPdfUrl}#page=${provision.startPdfPage}&zoom=page-width`,
    page: provision.startPdfPage,
    endPage: provision.endPdfPage,
    editionId,
    documentId,
    provisionId,
    sourcePdfSha256: manifest.sourcePdfSha256,
  }
}

export function buildCanonicalPdfHref(
  documentId: unknown,
  editionId: unknown,
  provisionId: unknown
): string | undefined {
  return buildCanonicalPdfLocator(documentId, editionId, provisionId)?.href
}

function resolutionFailure(status: LegalReferenceResolution["status"], reference: unknown): LegalReferenceResolution {
  return { status, state: status, reference } as LegalReferenceResolution
}

export function resolveLegalDocumentReference(reference: unknown): LegalReferenceResolution {
  if (!isRecord(reference) || reference.kind !== "legal-document") return resolutionFailure("unknown-document", reference)
  if (!isLegalDocumentId(reference.documentId)) return resolutionFailure("unknown-document", reference)
  const document = getDocument(reference.documentId)
  if (!document) return resolutionFailure("unknown-document", reference)
  const edition = getEdition(document.id, document.currentEditionId)
  return {
    status: "resolved",
    state: "resolved",
    reference: { kind: "legal-document", documentId: document.id },
    href: `/law/${encodeURIComponent(document.id)}`,
    document,
    edition,
  }
}

export function resolveLegalProvisionReference(reference: unknown): LegalReferenceResolution {
  if (!isRecord(reference) || reference.kind !== "legal-provision") return resolutionFailure("unknown-provision", reference)
  if (!isLegalDocumentId(reference.documentId)) return resolutionFailure("unknown-document", reference)
  const documentId = reference.documentId
  if (!isString(reference.provisionId)) return resolutionFailure("unknown-provision", reference)
  if (!isLegalProvisionId(documentId, reference.provisionId)) {
    const owner = findProvisionOwner(reference.provisionId)
    return resolutionFailure(owner && owner !== documentId ? "mismatched-provision" : "unknown-provision", reference)
  }
  const requestedEditionId = reference.editionId ?? getCurrentEditionId(documentId)
  if (!isString(requestedEditionId) || !isLegalEditionId(documentId, requestedEditionId)) {
    return resolutionFailure("unknown-edition", reference)
  }
  const edition = getEdition(documentId, requestedEditionId)
  const provision = getProvision(documentId, reference.provisionId, requestedEditionId)
  if (!edition || !provision) {
    return resolutionFailure(
      provisionExistsInDocument(documentId, reference.provisionId) ? "mismatched-provision" : "unknown-provision",
      reference
    )
  }
  const resolvedReference = parseLegalProvisionReference({
    kind: "legal-provision",
    documentId,
    provisionId: reference.provisionId,
    ...(reference.editionId === undefined ? {} : { editionId: requestedEditionId }),
  })
  if (!resolvedReference) return resolutionFailure("mismatched-provision", reference)

  return {
    status: "resolved",
    state: "resolved",
    reference: resolvedReference,
    href: `/law/${encodeURIComponent(documentId)}/provisions/${encodeURIComponent(reference.provisionId)}`,
    document: getDocument(documentId)!,
    edition,
    provision,
  }
}

export function resolveLegalReference(reference: unknown): LegalReferenceResolution {
  if (isRecord(reference) && reference.kind === "legal-document") return resolveLegalDocumentReference(reference)
  if (isRecord(reference) && reference.kind === "legal-provision") return resolveLegalProvisionReference(reference)
  return resolutionFailure("unknown-document", reference)
}

export const resolveReference = resolveLegalReference

function explanationFailure(
  status: Exclude<LegalExplanationResolution["status"], "reviewed">,
  requestedEditionId?: string,
  provision?: LegalProvision<LegalDocumentId>
): LegalExplanationResolution {
  return {
    status,
    state: status,
    ...(requestedEditionId === undefined ? {} : { requestedEditionId }),
    ...(provision === undefined ? {} : { provision }),
  }
}

function articleForProvision(provision: LegalProvision<LegalDocumentId>): string {
  const fromLocator = provision.locator.replace(/^Art\.\s*/u, "").replace(/\.$/u, "").trim()
  return fromLocator || provision.id.replace(/^kpa-art-/u, "")
}

function makeKpaExplanation(
  provision: LegalProvision<LegalDocumentId>,
  source: Awaited<ReturnType<typeof getKpaArticleExplanation>>
): LegalExplanation<LegalDocumentId> | undefined {
  if (!source) return undefined
  return {
    id: `kpa-explanation-${provision.id}`,
    documentId: "kpa",
    provisionId: provision.id as LegalProvisionId<"kpa">,
    sourceEditionId: REVIEWED_KPA_EDITION,
    legalStateDate: REVIEWED_LEGAL_STATE_DATE,
    verifiedAt: REVIEWED_LEGAL_STATE_DATE,
    reviewStatus: "reviewed",
    language: "uk",
    claims: [
      { kind: "statute-text", text: source.summary, sourceLocator: provision.canonicalPdfLocator },
      { kind: "practical-inference", text: source.foreignersCase, sourceLocator: provision.canonicalPdfLocator },
    ],
    summary: source.summary,
    rules: source.rules,
    legalEffect: source.legalEffect,
    foreignersCase: source.foreignersCase,
  }
}

export async function getExplanation(
  referenceOrDocumentId: unknown,
  provisionId?: unknown,
  editionId?: unknown
): Promise<LegalExplanationResolution> {
  const reference = requestedReference(referenceOrDocumentId, provisionId, editionId)
  if (!isRecord(reference) || reference.kind !== "legal-provision") return explanationFailure("unknown-provision")
  if (!isLegalDocumentId(reference.documentId)) return explanationFailure("unknown-document")
  const documentId = reference.documentId
  if (!isString(reference.provisionId)) return explanationFailure("unknown-provision")
  if (!isLegalProvisionId(documentId, reference.provisionId)) {
    const owner = findProvisionOwner(reference.provisionId)
    return explanationFailure(owner && owner !== documentId ? "mismatched-provision" : "unknown-provision")
  }
  const requestedEditionId = reference.editionId ?? getCurrentEditionId(documentId)
  if (!isString(requestedEditionId) || !isLegalEditionId(documentId, requestedEditionId)) {
    return explanationFailure("unknown-edition", isString(requestedEditionId) ? requestedEditionId : undefined)
  }
  const provision = getProvision(documentId, reference.provisionId, requestedEditionId)
  if (!provision) return explanationFailure("mismatched-provision", requestedEditionId)

  if (documentId !== "kpa") return explanationFailure("source-only", requestedEditionId, provision)
  if (requestedEditionId !== REVIEWED_KPA_EDITION) return explanationFailure("stale-explanation", requestedEditionId, provision)

  const source = await getKpaArticleExplanation(articleForProvision(provision))
  const explanation = makeKpaExplanation(provision, source)
  if (!explanation) return explanationFailure("missing-explanation", requestedEditionId, provision)
  return {
    status: "reviewed",
    state: "reviewed",
    explanation,
    sourceEditionId: REVIEWED_KPA_EDITION,
    requestedEditionId,
    provision,
  }
}

export const getLegalExplanation = getExplanation
export const parseCorpusManifest = parseManifest
export const parseCorpusProvision = parseProvision
