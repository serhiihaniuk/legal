import { legalReferenceRegistry } from "~/data/legal-corpus/reference-registry.generated"

import { getDocumentHomePath } from "../navigation/navigation"
import type {
  LegalDocumentId,
  LegalDocumentReference,
  LegalEditionId,
  LegalProvisionId,
  LegalProvisionReference,
} from "../contracts"

export function isRegisteredLegalDocumentId(
  value: unknown
): value is LegalDocumentId {
  return (
    typeof value === "string" &&
    Object.prototype.hasOwnProperty.call(legalReferenceRegistry, value)
  )
}

export function isRegisteredLegalEditionId<D extends LegalDocumentId>(
  documentId: D,
  value: unknown
): value is LegalEditionId<D> {
  return (
    typeof value === "string" &&
    legalReferenceRegistry[documentId].editionIds.some(
      (editionId) => editionId === value
    )
  )
}

export function isRegisteredLegalProvisionId<D extends LegalDocumentId>(
  documentId: D,
  value: unknown
): value is LegalProvisionId<D> {
  return (
    typeof value === "string" &&
    legalReferenceRegistry[documentId].provisionIds.some(
      (provisionId) => provisionId === value
    )
  )
}

export function resolveRegisteredLegalHref(
  reference: unknown
): string | undefined {
  if (!reference || typeof reference !== "object") return undefined
  const candidate = reference as Record<string, unknown>

  if (candidate.kind === "legal-document") {
    return isRegisteredLegalDocumentId(candidate.documentId)
      ? getDocumentHomePath(candidate.documentId)
      : undefined
  }

  if (
    candidate.kind !== "legal-provision" ||
    !isRegisteredLegalDocumentId(candidate.documentId)
  ) {
    return undefined
  }

  const documentId = candidate.documentId
  if (!isRegisteredLegalProvisionId(documentId, candidate.provisionId)) {
    return undefined
  }
  if (
    candidate.editionId !== undefined &&
    !isRegisteredLegalEditionId(documentId, candidate.editionId)
  ) {
    return undefined
  }

  return `/law/${encodeURIComponent(documentId)}/provisions/${encodeURIComponent(candidate.provisionId)}`
}

export function isRegisteredLegalReference(
  reference: unknown
): reference is LegalDocumentReference | LegalProvisionReference {
  return resolveRegisteredLegalHref(reference) !== undefined
}
