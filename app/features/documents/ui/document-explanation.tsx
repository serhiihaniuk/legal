import { LegalText } from "~/components/references"
import { DocumentWorkedExample } from "~/components/patterns/document-worked-example"
import type { DocumentExplanation as Explanation } from "~/data/document-library/contracts"
import { legalTextPlainText } from "~/data/legal-library/legal-text"

export function DocumentExplanation({ section }: { section: Explanation }) {
  return (
    <section id={`document-${section.id}`}>
      <h2>{section.title}</h2>
      {section.paragraphs.map((text) => (
        <p key={legalTextPlainText(text)}>
          <LegalText text={text} />
        </p>
      ))}
      {section.example ? (
        <DocumentWorkedExample example={section.example} />
      ) : null}
    </section>
  )
}
