import { getEditorialExplanation } from "./editorial"
import {
  isRecord,
  isString,
  parseCorpusManifest as parseManifest,
} from "./query/corpus-parsing"
import {
  constructDocument,
  constructEdition,
  constructProvision,
  findProvisionInEdition,
  getCurrentEditionId,
  getRawDocument,
  getRawEdition,
  getRawEditions,
  getRawProvisions,
  getRegisteredDocumentIds,
  isRegisteredDocumentId,
} from "./query/domain-construction"
import type {
  LegalDocument,
  LegalDocumentId,
  LegalDocumentReference,
  LegalEdition,
  LegalEditionId,
  LegalExplanationResolution,
  LegalProvision,
  LegalProvisionId,
  LegalProvisionReference,
  LegalReferenceResolution,
} from "./contracts"

export {
  buildCanonicalPdfHref,
  buildCanonicalPdfLocator,
} from "./query/domain-construction"
export {
  parseCorpusManifest,
  parseCorpusProvision,
} from "./query/corpus-parsing"

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
  return isRegisteredDocumentId(value)
}

export function isLegalEditionId<D extends LegalDocumentId>(
  documentId: D,
  value: unknown
): value is LegalEditionId<D>
export function isLegalEditionId(
  value: unknown
): value is LegalEditionId<LegalDocumentId>
export function isLegalEditionId(
  documentIdOrValue: unknown,
  maybeValue?: unknown
): boolean {
  if (maybeValue === undefined) {
    const value = documentIdOrValue
    if (!isString(value)) return false
    return listDocuments().some((document) =>
      document.editionIds.includes(value as never)
    )
  }
  const document = getRawDocument(documentIdOrValue)
  return Boolean(
    document &&
    isString(maybeValue) &&
    document.editionIds.includes(maybeValue as never)
  )
}

export function isLegalProvisionId<D extends LegalDocumentId>(
  documentId: D,
  value: unknown
): value is LegalProvisionId<D>
export function isLegalProvisionId(
  value: unknown
): value is LegalProvisionId<LegalDocumentId>
export function isLegalProvisionId(
  documentIdOrValue: unknown,
  maybeValue?: unknown
): boolean {
  if (maybeValue === undefined) {
    const value = documentIdOrValue
    return (
      isString(value) &&
      listDocuments().some((document) =>
        document.provisionIds.includes(value as never)
      )
    )
  }
  const document = getRawDocument(documentIdOrValue)
  return Boolean(
    document &&
    isString(maybeValue) &&
    document.provisionIds.includes(maybeValue as never)
  )
}

export function isLegalDocumentReference(
  value: unknown
): value is LegalDocumentReference {
  return (
    isRecord(value) &&
    value.kind === "legal-document" &&
    isLegalDocumentId(value.documentId)
  )
}

export function isLegalProvisionReference(
  value: unknown
): value is LegalProvisionReference {
  if (
    !isRecord(value) ||
    value.kind !== "legal-provision" ||
    !isLegalDocumentId(value.documentId)
  )
    return false
  if (!isLegalProvisionId(value.documentId, value.provisionId)) return false
  return (
    value.editionId === undefined ||
    isLegalEditionId(value.documentId, value.editionId)
  )
}

export function parseLegalDocumentReference(
  value: unknown
): LegalDocumentReference | undefined {
  return isLegalDocumentReference(value) ? value : undefined
}

export function parseLegalProvisionReference(
  value: unknown
): LegalProvisionReference | undefined {
  return isLegalProvisionReference(value) ? value : undefined
}

export function parseLegalReference(
  value: unknown
): LegalDocumentReference | LegalProvisionReference | undefined {
  if (isLegalDocumentReference(value) || isLegalProvisionReference(value))
    return value
  return undefined
}

export function listDocuments(): LegalDocument[] {
  return [...getRegisteredDocumentIds()]
    .sort((a, b) => a.localeCompare(b))
    .map((documentId) => constructDocument(documentId) as LegalDocument)
}

export function getDocument(documentId: unknown): LegalDocument | undefined {
  if (!isLegalDocumentId(documentId)) return undefined
  return listDocuments().find((document) => document.id === documentId)
}

export function listEditions(documentId: unknown): LegalEdition[] {
  if (!isLegalDocumentId(documentId)) return []
  return getRawEditions(documentId)
    .map((edition) => constructEdition(documentId, edition))
    .filter(
      (edition): edition is LegalEdition<LegalDocumentId> =>
        edition !== undefined
    )
}

export function getEdition(
  documentId: unknown,
  editionId: unknown
): LegalEdition | undefined {
  if (!isLegalDocumentId(documentId) || !isString(editionId)) return undefined
  const raw = getRawEdition(documentId, editionId)
  return raw ? constructEdition(documentId, raw) : undefined
}

export function listProvisions(
  documentId: unknown,
  editionId?: unknown
): LegalProvision[] {
  if (!isLegalDocumentId(documentId)) return []
  const selectedEditionId =
    editionId === undefined ? getCurrentEditionId(documentId) : editionId
  if (!isString(selectedEditionId)) return []
  const rawEdition = getRawEdition(documentId, selectedEditionId)
  if (!rawEdition) return []
  const manifest = parseManifest(rawEdition.manifest)
  if (!manifest) return []
  return getRawProvisions(rawEdition)
    .map((provision) =>
      constructProvision(documentId, selectedEditionId, provision, manifest)
    )
    .filter(
      (provision): provision is LegalProvision<LegalDocumentId> =>
        provision !== undefined
    )
}

export function getProvision(
  documentId: unknown,
  provisionId: unknown,
  editionId?: unknown
): LegalProvision | undefined {
  if (!isLegalDocumentId(documentId) || !isString(provisionId)) return undefined
  const selectedEditionId =
    editionId === undefined ? getCurrentEditionId(documentId) : editionId
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
  const index = provisions.findIndex(
    (provision) => provision.id === provisionId
  )
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
  const index = provisions.findIndex(
    (provision) => provision.id === provisionId
  )
  if (index < 0) return undefined
  return index === provisions.length - 1 ? null : provisions[index + 1]
}

export const getPrevious = getPreviousProvision
export const getNext = getNextProvision

function findProvisionOwner(provisionId: string): LegalDocumentId | undefined {
  for (const document of listDocuments()) {
    if (document.provisionIds.includes(provisionId as never)) return document.id
  }
  return undefined
}

function provisionExistsInDocument(
  documentId: LegalDocumentId,
  provisionId: string
): boolean {
  return listEditions(documentId).some((edition) =>
    edition.provisionIds.includes(provisionId as never)
  )
}

function resolutionFailure(
  status: LegalReferenceResolution["status"],
  reference: unknown
): LegalReferenceResolution {
  return { status, state: status, reference } as LegalReferenceResolution
}

export function resolveLegalDocumentReference(
  reference: unknown
): LegalReferenceResolution {
  if (!isRecord(reference) || reference.kind !== "legal-document")
    return resolutionFailure("unknown-document", reference)
  if (!isLegalDocumentId(reference.documentId))
    return resolutionFailure("unknown-document", reference)
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

export function resolveLegalProvisionReference(
  reference: unknown
): LegalReferenceResolution {
  if (!isRecord(reference) || reference.kind !== "legal-provision")
    return resolutionFailure("unknown-provision", reference)
  if (!isLegalDocumentId(reference.documentId))
    return resolutionFailure("unknown-document", reference)
  const documentId = reference.documentId
  if (!isString(reference.provisionId))
    return resolutionFailure("unknown-provision", reference)
  if (!isLegalProvisionId(documentId, reference.provisionId)) {
    const owner = findProvisionOwner(reference.provisionId)
    return resolutionFailure(
      owner && owner !== documentId
        ? "mismatched-provision"
        : "unknown-provision",
      reference
    )
  }
  const requestedEditionId =
    reference.editionId ?? getCurrentEditionId(documentId)
  if (
    !isString(requestedEditionId) ||
    !isLegalEditionId(documentId, requestedEditionId)
  ) {
    return resolutionFailure("unknown-edition", reference)
  }
  const edition = getEdition(documentId, requestedEditionId)
  const provision = getProvision(
    documentId,
    reference.provisionId,
    requestedEditionId
  )
  if (!edition || !provision) {
    return resolutionFailure(
      provisionExistsInDocument(documentId, reference.provisionId)
        ? "mismatched-provision"
        : "unknown-provision",
      reference
    )
  }
  const resolvedReference = parseLegalProvisionReference({
    kind: "legal-provision",
    documentId,
    provisionId: reference.provisionId,
    ...(reference.editionId === undefined
      ? {}
      : { editionId: requestedEditionId }),
  })
  if (!resolvedReference)
    return resolutionFailure("mismatched-provision", reference)

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

export function resolveLegalReference(
  reference: unknown
): LegalReferenceResolution {
  if (isRecord(reference) && reference.kind === "legal-document")
    return resolveLegalDocumentReference(reference)
  if (isRecord(reference) && reference.kind === "legal-provision")
    return resolveLegalProvisionReference(reference)
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

export async function getExplanation(
  referenceOrDocumentId: unknown,
  provisionId?: unknown,
  editionId?: unknown
): Promise<LegalExplanationResolution> {
  const reference = requestedReference(
    referenceOrDocumentId,
    provisionId,
    editionId
  )
  if (!isRecord(reference) || reference.kind !== "legal-provision")
    return explanationFailure("unknown-provision")
  if (!isLegalDocumentId(reference.documentId))
    return explanationFailure("unknown-document")
  const documentId = reference.documentId
  if (!isString(reference.provisionId))
    return explanationFailure("unknown-provision")
  if (!isLegalProvisionId(documentId, reference.provisionId)) {
    const owner = findProvisionOwner(reference.provisionId)
    return explanationFailure(
      owner && owner !== documentId
        ? "mismatched-provision"
        : "unknown-provision"
    )
  }
  const requestedEditionId =
    reference.editionId ?? getCurrentEditionId(documentId)
  if (
    !isString(requestedEditionId) ||
    !isLegalEditionId(documentId, requestedEditionId)
  ) {
    return explanationFailure(
      "unknown-edition",
      isString(requestedEditionId) ? requestedEditionId : undefined
    )
  }
  const provision = getProvision(
    documentId,
    reference.provisionId,
    requestedEditionId
  )
  if (!provision)
    return explanationFailure("mismatched-provision", requestedEditionId)

  const editorial = await getEditorialExplanation(
    documentId,
    provision.id as LegalProvisionId<typeof documentId>
  )
  if (!editorial) {
    return explanationFailure("source-only", requestedEditionId, provision)
  }
  if (
    editorial.sourceEditionId !== requestedEditionId ||
    editorial.reviewStatus !== "reviewed"
  ) {
    return explanationFailure(
      "stale-explanation",
      requestedEditionId,
      provision
    )
  }
  return {
    status: "reviewed",
    state: "reviewed",
    explanation: editorial,
    sourceEditionId: editorial.sourceEditionId,
    requestedEditionId,
    provision,
  }
}

export const getLegalExplanation = getExplanation
