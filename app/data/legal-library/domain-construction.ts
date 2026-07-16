import { legalLibraryRegistry } from "~/data/legal-corpus/registry.generated"

import {
  hasOwn,
  isInteger,
  isRecord,
  isString,
  parseCorpusManifest,
  parseCorpusProvision,
  SHA256_PATTERN,
  type UnknownRecord,
} from "./corpus-parsing"
import type {
  CanonicalPdfLocator,
  CorpusProvision,
  LegalCorpusManifest,
  LegalDocument,
  LegalDocumentId,
  LegalEdition,
  LegalEditionId,
  LegalProvision,
  LegalProvisionId,
} from "./contracts"

export function isRegisteredDocumentId(
  value: unknown
): value is LegalDocumentId {
  return isString(value) && hasOwn(legalLibraryRegistry, value)
}

export function getRawDocument(documentId: unknown) {
  if (!isRegisteredDocumentId(documentId)) return undefined
  return legalLibraryRegistry[documentId]
}

export function getRegisteredDocumentIds(): readonly LegalDocumentId[] {
  return Object.keys(legalLibraryRegistry) as LegalDocumentId[]
}

export function getRawEditions(
  documentId: LegalDocumentId
): readonly UnknownRecord[] {
  const document = legalLibraryRegistry[documentId]
  return Object.values(document.editions).filter(isRecord)
}

export function getRawEdition(
  documentId: LegalDocumentId,
  editionId: string
): UnknownRecord | undefined {
  return getRawEditions(documentId).find(
    (edition) => edition.editionId === editionId
  )
}

export function getRawProvisions(edition: UnknownRecord): readonly unknown[] {
  return Array.isArray(edition.provisions) ? edition.provisions : []
}

export function getCurrentEditionId(documentId: LegalDocumentId): string {
  return legalLibraryRegistry[documentId].currentEditionId
}

export function constructDocument<D extends LegalDocumentId>(
  documentId: D
): LegalDocument<D> | undefined {
  const raw = getRawDocument(documentId)
  if (!raw) return undefined
  return {
    id: documentId,
    documentId,
    shortName: raw.shortName,
    title: raw.title,
    citation: raw.citation,
    editionIds: [...raw.editionIds] as readonly LegalEditionId<D>[],
    currentEditionId: raw.currentEditionId as LegalEditionId<D>,
    provisionIds: [...raw.provisionIds] as readonly LegalProvisionId<D>[],
  }
}

export function constructEdition<D extends LegalDocumentId>(
  documentId: D,
  raw: UnknownRecord
): LegalEdition<D> | undefined {
  const editionId = raw.editionId
  if (!isString(editionId)) return undefined
  const manifest = parseCorpusManifest(raw.manifest)
  if (
    !manifest ||
    manifest.documentId !== documentId ||
    manifest.editionId !== editionId
  )
    return undefined
  const provisions = getRawProvisions(raw)
    .map((provision) => parseCorpusProvision(provision, documentId, editionId))
    .filter(
      (provision): provision is CorpusProvision => provision !== undefined
    )
  const provisionIds = provisions.map(
    (provision) => provision.id
  ) as readonly LegalProvisionId<D>[]
  return {
    documentId,
    editionId: editionId as LegalEditionId<D>,
    shortName: manifest.shortName,
    title: manifest.title,
    citation: manifest.citation,
    manifest,
    provisionIds,
  }
}

export function constructProvision<D extends LegalDocumentId>(
  documentId: D,
  editionId: string,
  raw: unknown,
  manifest: LegalCorpusManifest
): LegalProvision<D> | undefined {
  const provision = parseCorpusProvision(raw, documentId, editionId)
  if (!provision || provision.sourcePdfSha256 !== manifest.sourcePdfSha256)
    return undefined
  const canonicalPdfLocator = buildCanonicalPdfLocator(manifest, provision)
  if (!canonicalPdfLocator) return undefined
  return {
    ...provision,
    canonicalPdfLocator: canonicalPdfLocator.href,
  } as LegalProvision<D>
}

export function findProvisionInEdition<D extends LegalDocumentId>(
  documentId: D,
  editionId: string,
  provisionId: string
): LegalProvision<D> | undefined {
  const rawEdition = getRawEdition(documentId, editionId)
  if (!rawEdition) return undefined
  const manifest = parseCorpusManifest(rawEdition.manifest)
  if (
    !manifest ||
    manifest.documentId !== documentId ||
    manifest.editionId !== editionId
  )
    return undefined
  const raw = getRawProvisions(rawEdition).find(
    (provision) => isRecord(provision) && provision.id === provisionId
  )
  return raw === undefined
    ? undefined
    : constructProvision(documentId, editionId, raw, manifest)
}

function validPdfInput(
  manifest: LegalCorpusManifest,
  provision: CorpusProvision
): boolean {
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
    if (!isRegisteredDocumentId(first) || !isString(second) || !isString(third))
      return undefined
    const rawEdition = getRawEdition(first, second)
    if (!rawEdition) return undefined
    manifest = parseCorpusManifest(rawEdition.manifest)
    provision = findProvisionInEdition(first, second, third)
    documentId = first
    editionId = second
    provisionId = third
  } else {
    if (!isRecord(first) || !isRecord(second)) return undefined
    manifest = parseCorpusManifest(first)
    provision = parseCorpusProvision(
      second,
      manifest?.documentId ?? "",
      manifest?.editionId ?? ""
    )
    documentId = manifest?.documentId
    editionId = manifest?.editionId
    provisionId = provision?.id
  }

  if (
    !manifest ||
    !provision ||
    !documentId ||
    !editionId ||
    !provisionId ||
    !validPdfInput(manifest, provision)
  )
    return undefined
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
