import { LegalText, OfficialSourceEntry } from "~/components/references"
import type { EvidenceDocument } from "~/data/document-library"
import { legalTextPlainText } from "~/data/legal-library/legal-text"

export function DocumentSources({ document }: { document: EvidenceDocument }) {
  return (
    <>
      <section id="document-regulation">
        <h2>Правова основа</h2>
        <ul>
          {document.guide.legalBasis.map((text) => (
            <li key={legalTextPlainText(text)}>
              <LegalText text={text} context="reference-section" />
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">
          Перевірено для цієї сторінки:{" "}
          {document.verifiedAt.split("-").reverse().join(".")}.
          {document.guide.explanation?.some((section) => section.example)
            ? " Приклади є умовними."
            : ""}
        </p>
      </section>
      <section id="document-sources">
        <h2>Офіційні джерела</h2>
        <ul data-not-typeset className="not-typeset mt-5 space-y-4">
          {document.sources.map((source) => (
            <li key={source.url}>
              <OfficialSourceEntry source={source} />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
