import type { EvidenceDocument, EvidenceDocumentId } from "./contracts"
import { documentCategoryOrder, evidenceDocumentRegistry } from "./registry"

function isEvidenceDocumentId(value: unknown): value is EvidenceDocumentId {
  return (
    typeof value === "string" &&
    evidenceDocumentRegistry.has(value as EvidenceDocumentId)
  )
}

export function getEvidenceDocumentPath(
  documentId: unknown
): string | undefined {
  return isEvidenceDocumentId(documentId)
    ? `/documents/${encodeURIComponent(documentId)}`
    : undefined
}

function orderedDocuments(): EvidenceDocument[] {
  return [...evidenceDocumentRegistry.values()].sort((left, right) => {
    const categoryDifference =
      documentCategoryOrder.indexOf(left.category) -
      documentCategoryOrder.indexOf(right.category)
    return categoryDifference || left.title.localeCompare(right.title, "pl")
  })
}

export function getPreviousEvidenceDocument(
  documentId: unknown
): EvidenceDocument | undefined {
  if (!isEvidenceDocumentId(documentId)) return undefined
  const documents = orderedDocuments()
  const index = documents.findIndex((document) => document.id === documentId)
  return index > 0 ? documents[index - 1] : undefined
}

export function getNextEvidenceDocument(
  documentId: unknown
): EvidenceDocument | undefined {
  if (!isEvidenceDocumentId(documentId)) return undefined
  const documents = orderedDocuments()
  const index = documents.findIndex((document) => document.id === documentId)
  return index >= 0 && index < documents.length - 1
    ? documents[index + 1]
    : undefined
}

export function getEvidenceDocumentNavigation(documentId: unknown): {
  previous?: EvidenceDocument
  next?: EvidenceDocument
} {
  return {
    previous: getPreviousEvidenceDocument(documentId),
    next: getNextEvidenceDocument(documentId),
  }
}
