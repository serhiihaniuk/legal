import type {
  CaseGuideRouteId,
  CaseGuideDocument,
} from "~/data/case-guides/types"
import { caseGuideRoutes } from "~/data/case-guides/routes"
import { allNodes, type IndexedNode } from "~/data/legal-map/index"
import { type LegalTextValue } from "~/data/legal-library/legal-text"
import {
  documentCategoryLabels,
  listEvidenceDocuments,
  type EvidenceDocument,
  type EvidenceDocumentCategory,
  type EvidenceDocumentId,
} from "~/data/document-library"

/** Map contexts derived from explicitly authored document references. */
export type DocumentContext = {
  node: IndexedNode
  regulation: LegalTextValue
}

export type DocumentCaseContext = CaseGuideDocument & {
  routeId: CaseGuideRouteId
  routeTitle: string
}

export type DocumentCatalogEntry = EvidenceDocument & {
  contexts: DocumentContext[]
  caseContexts: DocumentCaseContext[]
}

export type DocumentCategory = EvidenceDocumentCategory

export { documentCategoryLabels }

function uniqueContexts(contexts: DocumentContext[]): DocumentContext[] {
  return [
    ...new Map(contexts.map((context) => [context.node.id, context])).values(),
  ]
}

function uniqueCaseContexts(
  contexts: DocumentCaseContext[]
): DocumentCaseContext[] {
  return [
    ...new Map(contexts.map((context) => [context.routeId, context])).values(),
  ]
}

const contextsByDocumentId = new Map<
  EvidenceDocumentId,
  { contexts: DocumentContext[]; caseContexts: DocumentCaseContext[] }
>()
for (const document of listEvidenceDocuments()) {
  contextsByDocumentId.set(document.id, { contexts: [], caseContexts: [] })
}

for (const node of allNodes) {
  for (const mention of node.documents ?? []) {
    if (typeof mention === "string") continue
    for (const part of mention.parts) {
      if (!("target" in part) || part.target.kind !== "evidence-document")
        continue
      contextsByDocumentId
        .get(part.target.documentId)
        ?.contexts.push({ node, regulation: node.polish })
    }
  }
}

for (const route of caseGuideRoutes) {
  for (const document of [
    ...route.documents,
    ...route.stages.flatMap((stage) => stage.documents),
  ]) {
    if (document.guidance)
      contextsByDocumentId.get(document.guidance)?.caseContexts.push({
        ...document,
        routeId: route.id,
        routeTitle: route.title,
      })
    if (typeof document.item === "string") continue
    for (const part of document.item.parts) {
      if (!("target" in part) || part.target.kind !== "evidence-document")
        continue
      contextsByDocumentId.get(part.target.documentId)?.caseContexts.push({
        ...document,
        routeId: route.id as CaseGuideRouteId,
        routeTitle: route.title,
      })
    }
  }
}

/** Canonical registry records with contextual backlinks attached by the adapter. */
export const documentCatalog: DocumentCatalogEntry[] =
  listEvidenceDocuments().map((document) => {
    const contexts = contextsByDocumentId.get(document.id)
    return {
      ...document,
      contexts: uniqueContexts(contexts?.contexts ?? []),
      caseContexts: uniqueCaseContexts(contexts?.caseContexts ?? []),
    }
  })

export const documentById = new Map<EvidenceDocumentId, DocumentCatalogEntry>(
  documentCatalog.map((entry) => [entry.id, entry])
)

export function documentsForCategory(
  category?: DocumentCategory | "all"
): DocumentCatalogEntry[] {
  return documentCatalog.filter(
    (entry) => !category || category === "all" || entry.category === category
  )
}
