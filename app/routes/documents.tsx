import {
  useNavigate,
  useParams,
  useSearchParams,
  type LoaderFunctionArgs,
} from "react-router"

import {
  DocumentCatalogNavigation,
  DocumentCatalogOverview,
  DocumentDetailContent,
  documentCatalogToc,
  documentDetailToc,
  MobileDocumentNavigation,
} from "~/features/documents"
import { DocsLayout } from "~/components/layout"
import {
  getEvidenceDocument,
  getEvidenceDocumentPath,
  listEvidenceDocumentCategories,
  type EvidenceDocumentCategory,
} from "~/data/document-library"
import { documentById } from "~/data/documents/catalog"

export function meta() {
  return [{ title: "Документи — Legalizacja" }]
}

export function loader({ params }: LoaderFunctionArgs) {
  const documentId = params.documentId
  if (!documentId) return null

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
  const [searchParams] = useSearchParams()
  const { documentId } = useParams<{ documentId?: string }>()
  const canonicalDocument = documentId
    ? getEvidenceDocument(documentId)
    : undefined
  const selectedDocument = canonicalDocument
    ? documentById.get(canonicalDocument.id)
    : undefined
  const categoryParam = searchParams.get("category")
  const selectedCategory: EvidenceDocumentCategory | "all" =
    selectedDocument?.category ??
    listEvidenceDocumentCategories().find((id) => id === categoryParam) ??
    "all"
  const toc = selectedDocument
    ? documentDetailToc(selectedDocument)
    : documentCatalogToc

  function selectCategory(category: EvidenceDocumentCategory | "all") {
    navigate(
      category === "all" ? "/documents" : `/documents?category=${category}`
    )
    scrollToTop()
  }

  function selectDocument(nextDocumentId: string) {
    const nextDocument = getEvidenceDocument(nextDocumentId)
    const nextPath = nextDocument
      ? getEvidenceDocumentPath(nextDocument.id)
      : undefined
    if (!nextDocument || !nextPath) return
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
        <DocumentDetailContent document={selectedDocument} />
      ) : (
        <DocumentCatalogOverview category={selectedCategory} />
      )}
    </DocsLayout>
  )
}
