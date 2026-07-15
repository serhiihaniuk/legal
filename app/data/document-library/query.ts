import type {
  EvidenceDocument,
  EvidenceDocumentCategory,
  EvidenceDocumentId,
  EvidenceDocumentReference,
  EvidenceDocumentReferenceResolution,
} from "./contracts"
import {
  documentCategoryOrder,
  evidenceDocumentAliasRegistry,
  evidenceDocumentRegistry,
  normalizeEvidenceDocumentAlias,
} from "./registry"
import { getEvidenceDocumentPath } from "./navigation"

export function isEvidenceDocumentId(
  value: unknown
): value is EvidenceDocumentId {
  return (
    typeof value === "string" &&
    evidenceDocumentRegistry.has(value as EvidenceDocumentId)
  )
}

export function getEvidenceDocument(
  documentId: unknown
): EvidenceDocument | undefined {
  return isEvidenceDocumentId(documentId)
    ? evidenceDocumentRegistry.get(documentId)
    : undefined
}

export function listEvidenceDocuments(
  category?: EvidenceDocumentCategory | "all"
): EvidenceDocument[] {
  return [...evidenceDocumentRegistry.values()]
    .filter(
      (document) =>
        !category || category === "all" || document.category === category
    )
    .sort((left, right) => {
      const categoryDifference =
        documentCategoryOrder.indexOf(left.category) -
        documentCategoryOrder.indexOf(right.category)
      return categoryDifference || left.title.localeCompare(right.title, "pl")
    })
}

export function listEvidenceDocumentCategories(): EvidenceDocumentCategory[] {
  return [...documentCategoryOrder].filter((category) =>
    [...evidenceDocumentRegistry.values()].some(
      (document) => document.category === category
    )
  )
}

export function getEvidenceDocumentByAlias(
  alias: unknown
): EvidenceDocument | undefined {
  if (typeof alias !== "string") return undefined
  const id = evidenceDocumentAliasRegistry.get(
    normalizeEvidenceDocumentAlias(alias)
  )
  return id ? evidenceDocumentRegistry.get(id) : undefined
}

export function listRelatedEvidenceDocuments(
  documentId: unknown
): EvidenceDocument[] {
  return (
    getEvidenceDocument(documentId)?.relatedDocuments.flatMap((id) => {
      const document = getEvidenceDocument(id)
      return document ? [document] : []
    }) ?? []
  )
}

export function parseEvidenceDocumentReference(
  value: unknown
): EvidenceDocumentReference | undefined {
  if (
    !value ||
    typeof value !== "object" ||
    !("kind" in value) ||
    value.kind !== "evidence-document" ||
    !("documentId" in value) ||
    !isEvidenceDocumentId(value.documentId)
  ) {
    return undefined
  }
  return {
    kind: "evidence-document",
    documentId: value.documentId,
  }
}

export function resolveEvidenceDocumentReference(
  value: unknown
): EvidenceDocumentReferenceResolution {
  const reference = parseEvidenceDocumentReference(value)
  if (!reference) {
    return {
      status: "unknown-document",
      state: "unknown-document",
      reference: value,
    }
  }
  const document = getEvidenceDocument(reference.documentId)
  const href = getEvidenceDocumentPath(reference.documentId)
  if (!document || !href) {
    return {
      status: "unknown-document",
      state: "unknown-document",
      reference: value,
    }
  }
  return { status: "resolved", state: "resolved", reference, href, document }
}
