import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router"

import {
  DocumentCatalogNavigation,
  DocumentCatalogOverview,
  DocumentDetailContent,
  documentCatalogToc,
  documentDetailToc,
  MobileDocumentNavigation,
} from "~/components/document-catalog-content"
import { DocsLayout } from "~/components/docs-layout"
import { documentById, type DocumentCategory } from "~/data/document-index"

function scrollToTop() {
  requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }))
}

export default function DocumentsPage() {
  const navigate = useNavigate()
  const { documentId } = useParams<{ documentId?: string }>()
  const selectedDocument = documentId ? documentById.get(documentId) : undefined
  const [selectedCategory, setSelectedCategory] = useState<
    DocumentCategory | "all"
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

  function selectCategory(category: DocumentCategory | "all") {
    setSelectedCategory(category)
    navigate("/documents")
    scrollToTop()
  }

  function selectDocument(nextDocumentId: string) {
    const nextDocument = documentById.get(nextDocumentId)
    if (nextDocument) setSelectedCategory(nextDocument.category)
    navigate(`/documents/${nextDocumentId}`)
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
