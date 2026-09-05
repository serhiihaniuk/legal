import { ArrowRight } from "lucide-react"
import { Link } from "react-router"
import {
  DocumentArticle,
  DocumentHeader,
} from "~/components/patterns/document-content"
import { Badge } from "~/components/ui/badge"
import {
  documentCategoryLabels,
  documentCategoryOrder,
  getEvidenceDocumentPath,
  type EvidenceDocumentCategory,
} from "~/data/document-library"
import { legalTextPlainText } from "~/data/legal-library/legal-text"
import { documentCatalog, documentsForCategory } from "~/data/documents/catalog"
import {
  documentKindLabel,
  pluralizeUkrainian,
} from "../model/document-catalog-model"

export function DocumentCatalogOverview({
  category,
}: {
  category: EvidenceDocumentCategory | "all"
}) {
  const groups = documentCategoryOrder.filter(
    (id) => category === "all" || category === id
  )
  return (
    <DocumentArticle>
      <DocumentHeader
        id="documents-overview"
        badges={
          <Badge variant="outline">
            {pluralizeUkrainian(documentCatalog.length, [
              "матеріал",
              "матеріали",
              "матеріалів",
            ])}
          </Badge>
        }
      >
        <h1>Документи і докази</h1>
        <p className="lead">
          Що підтверджує документ, як його прочитати і з чим зіставити. Від
          паспорта й заяви до історії поїздок, доходів і матеріалів навчання.
        </p>
        <p>
          Для простих документів є коротка довідка. Складні питання розібрано на
          прикладах. Робочі записи допомагають поєднати кілька джерел і побачити
          прогалини.
        </p>
      </DocumentHeader>
      <div id="documents-list">
        {groups.map((id) => (
          <section key={id} aria-labelledby={`documents-category-${id}`}>
            <h2 id={`documents-category-${id}`}>
              {documentCategoryLabels[id]}
            </h2>
            <ul data-not-typeset className="not-typeset mt-5 divide-y border-y">
              {documentsForCategory(id).map((document) => (
                <li key={document.id}>
                  <Link
                    to={getEvidenceDocumentPath(document.id)!}
                    className="group grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-5 text-foreground no-underline hover:bg-muted/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  >
                    <span className="min-w-0">
                      <span className="block text-base font-medium group-hover:underline">
                        {document.title}
                      </span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {documentKindLabel(document.guide)}
                        {document.guide.explanation?.some(
                          (section) => section.example
                        )
                          ? " · З розібраним прикладом"
                          : ""}
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-muted-foreground">
                        {legalTextPlainText(document.guide.description)}
                      </span>
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="mt-1 size-4 text-muted-foreground"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </DocumentArticle>
  )
}
