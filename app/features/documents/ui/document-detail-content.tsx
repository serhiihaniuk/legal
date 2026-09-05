import { DocumentFormLink } from "./document-form-link"
import {
  DocumentArticle,
  DocumentHeader,
} from "~/components/patterns/document-content"
import { LegalText } from "~/components/references"
import { Badge } from "~/components/ui/badge"
import { documentCategoryLabels } from "~/data/document-library"
import type { DocumentCatalogEntry } from "~/data/documents/catalog"
import { documentKindLabel } from "../model/document-catalog-model"
import { DocumentAdjacentNavigation } from "./document-adjacent-navigation"
import { DocumentChecks } from "./document-checks"
import { DocumentContexts } from "./document-contexts"
import { DocumentExplanation } from "./document-explanation"
import { DocumentSources } from "./document-sources"
import { DocumentTextList } from "./document-text-list"

export function DocumentDetailContent({
  document,
}: {
  document: DocumentCatalogEntry
}) {
  const guide = document.guide
  return (
    <DocumentArticle>
      <DocumentHeader
        id="document-overview"
        badges={
          <>
            <Badge variant="secondary">{documentKindLabel(guide)}</Badge>
            <Badge variant="outline">
              {documentCategoryLabels[document.category]}
            </Badge>
          </>
        }
      >
        <h1>{document.title}</h1>
        <p className="lead">
          <LegalText text={guide.description} />
        </p>
        <p className="text-sm text-muted-foreground">
          <LegalText text={guide.preparedBy} />
        </p>
        {guide.documentType ? (
          <p className="text-sm">
            <LegalText text={guide.documentType} />
          </p>
        ) : null}
      </DocumentHeader>
      <DocumentFormLink documentId={document.id} />
      <section id="document-purpose">
        <h2>Що цей матеріал пояснює у справі</h2>
        <DocumentTextList items={guide.purpose} />
        <div className="border-l pl-4">
          <p className="text-sm font-medium">Межа доказу</p>
          <DocumentTextList items={guide.doesNotProve} />
        </div>
      </section>
      {guide.explanation?.map((section) => (
        <DocumentExplanation key={section.id} section={section} />
      ))}
      {guide.howToObtain?.length || guide.formAndValidity?.length ? (
        <section id="document-obtain">
          <h2>Підготовка і форма</h2>
          {guide.howToObtain?.length ? (
            <DocumentTextList items={guide.howToObtain} ordered />
          ) : null}
          {guide.formAndValidity?.length ? (
            <DocumentTextList items={guide.formAndValidity} />
          ) : null}
        </section>
      ) : null}
      <DocumentChecks document={document} />
      <DocumentContexts document={document} />
      <DocumentSources document={document} />
      <DocumentAdjacentNavigation documentId={document.id} />
    </DocumentArticle>
  )
}
