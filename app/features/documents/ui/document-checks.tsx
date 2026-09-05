import { LegalReferenceArrow } from "~/components/references"
import {
  getEvidenceDocument,
  type EvidenceDocument,
} from "~/data/document-library"
import { DocumentTextList } from "./document-text-list"

export function DocumentChecks({ document }: { document: EvidenceDocument }) {
  const related = document.relatedDocuments.flatMap((id) => {
    const entry = getEvidenceDocument(id)
    return entry ? [entry] : []
  })
  return (
    <section id="document-elements">
      <h2>Що перевірити в матеріалах</h2>
      <DocumentTextList items={document.guide.keyChecks} ordered />
      {related.length ? (
        <nav
          aria-label="Пов’язані документи"
          data-not-typeset
          className="not-typeset mt-6 border-t pt-4"
        >
          <p className="mb-2 text-xs font-medium text-muted-foreground">
            Читати разом
          </p>
          <ul className="space-y-3">
            {related.map((entry) => (
              <li
                key={entry.id}
                className="flex items-start justify-between gap-4 text-sm"
              >
                <span>{entry.title}</span>
                <LegalReferenceArrow
                  reference={{
                    kind: "evidence-document",
                    documentId: entry.id,
                  }}
                  label={`Відкрити: ${entry.title}`}
                />
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </section>
  )
}
