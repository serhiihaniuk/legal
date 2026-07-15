import { useEffect, useMemo, useState } from "react"
import {
  redirect,
  useNavigate,
  useParams,
  type LoaderFunctionArgs,
} from "react-router"

import {
  DocumentCatalogNavigation,
  DocumentCatalogOverview,
  DocumentDetailContent,
  documentCatalogToc,
  documentDetailToc,
  MobileDocumentNavigation,
} from "~/components/document-catalog-content"
import { DocsLayout } from "~/components/docs-layout"
import {
  getEvidenceDocument,
  getEvidenceDocumentPath,
  legacyEvidenceDocumentIdMap,
  type EvidenceDocumentCategory,
} from "~/data/document-library"
import { documentById } from "~/data/document-index"

export function loader({ params }: LoaderFunctionArgs) {
  const documentId = params.documentId
  if (!documentId) return null

  const legacyDocumentId = legacyEvidenceDocumentIdMap.get(documentId)
  if (legacyDocumentId) {
    throw redirect(getEvidenceDocumentPath(legacyDocumentId) ?? "/documents")
  }
  if (!getEvidenceDocument(documentId)) {
    throw new Response("Evidence document not found", { status: 404 })
  }
  return null
}

function scrollToTop() {
  requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }))
}

export default function DocumentsPage() {
  const navigate = useNavigate()
  const { documentId } = useParams<{ documentId?: string }>()
  const canonicalDocument = documentId
    ? getEvidenceDocument(documentId)
    : undefined
  const selectedDocument = canonicalDocument
    ? documentById.get(canonicalDocument.id)
    : undefined
  const [selectedCategory, setSelectedCategory] = useState<
    EvidenceDocumentCategory | "all"
  >(selectedDocument?.category ?? "all")

  useEffect(() => {
    if (selectedDocument) setSelectedCategory(selectedDocument.category)
  }, [selectedDocument])

  const toc = useMemo(
    () =>
      selectedDocument
        ? documentDetailToc(selectedDocument)
        : documentCatalogToc,
    [selectedDocument]
  )

  function selectCategory(category: EvidenceDocumentCategory | "all") {
    setSelectedCategory(category)
    navigate("/documents")
    scrollToTop()
  }

  function selectDocument(nextDocumentId: string) {
    const nextDocument = getEvidenceDocument(nextDocumentId)
    const nextPath = nextDocument
      ? getEvidenceDocumentPath(nextDocument.id)
      : undefined
    if (!nextDocument || !nextPath) return
    setSelectedCategory(nextDocument.category)
    navigate(nextPath)
    scrollToTop()
  }

  return (
    <DocsLayout
      navigation={
        <DocumentCatalogNavigation
          selectedCategory={selectedCategory}
          selectedDocumentId={selectedDocument?.id}
          onCategorySelect={selectCategory}
          onDocumentSelect={selectDocument}
        />
      }
      toc={toc}
    >
      <MobileDocumentNavigation
        selectedCategory={selectedCategory}
        selectedDocumentId={selectedDocument?.id}
        onCategorySelect={selectCategory}
        onDocumentSelect={selectDocument}
        onOverviewSelect={() => selectCategory(selectedCategory)}
      />

      {selectedDocument ? (
        <DocumentDetailContent
          document={selectedDocument}
          onDocumentSelect={selectDocument}
        />
      ) : (
        <DocumentCatalogOverview
          category={selectedCategory}
          onDocumentSelect={selectDocument}
        />
      )}
    </DocsLayout>
  )
}
