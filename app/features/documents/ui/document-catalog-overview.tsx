import { ArrowRight } from "lucide-react"

import {
  DocumentArticle,
  DocumentHeader,
} from "~/components/patterns/document-content"
import { Badge } from "~/components/ui/badge"
import {
  documentCategoryLabels,
  type EvidenceDocumentCategory,
} from "~/data/document-library"
import { documentCatalog, documentsForCategory } from "~/data/document-index"
import { pluralizeUkrainian } from "../model/document-catalog-model"

export function DocumentCatalogOverview({
  category,
  onDocumentSelect,
}: {
  category: EvidenceDocumentCategory | "all"
  onDocumentSelect: (documentId: string) => void
}) {
  const documents = documentsForCategory(category)

  return (
    <DocumentArticle>
      <DocumentHeader
        id="documents-overview"
        badges={
          <>
            <Badge variant="secondary">Документи</Badge>
            <Badge variant="outline">
              {pluralizeUkrainian(documentCatalog.length, [
                "сторінка",
                "сторінки",
                "сторінок",
              ])}
            </Badge>
          </>
        }
      >
        <h1>Каталог документів і доказів</h1>
        <p className="lead">
          Тут зібрані редакційно підготовлені сторінки документів: хто готує
          документ, що він доводить, чого не доводить, як його перевіряти та з
          якою нормою зіставляти.
        </p>
      </DocumentHeader>

      <section id="documents-list">
        <h2>Документи в цій категорії</h2>
        <p>
          Категорію змінюйте в лівій навігації. На мобільному екрані
          використовуйте компактні списки над матеріалом.
        </p>
        <ol data-not-typeset className="not-typeset mt-6 divide-y border-y">
          {documents.map((document, index) => (
            <li key={document.id}>
              <button
                type="button"
                onClick={() => onDocumentSelect(document.id)}
                className="group grid w-full grid-cols-[2rem_minmax(0,1fr)_auto] gap-3 py-5 text-left"
              >
                <span className="text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <strong className="block text-sm font-medium break-words">
                    {document.title}
                  </strong>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {documentCategoryLabels[document.category]}
                  </span>
                </span>
                <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </button>
            </li>
          ))}
        </ol>
      </section>
    </DocumentArticle>
  )
}
