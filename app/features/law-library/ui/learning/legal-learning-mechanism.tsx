import type { DocumentHeading } from "~/components/patterns/document-content"
import { LegalText as LearningText } from "~/components/references"
import { legalLearningPlainText } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModuleView } from "~/features/law-library/model/learning/legal-learning-view"

export function LegalLearningMechanism({
  module,
  heading,
}: {
  module: LegalLearningModuleView
  heading: Pick<DocumentHeading, "id" | "title">
}) {
  return (
    <section id={heading.id}>
      <h2>{heading.title}</h2>
      {module.mechanismParagraphs.map((paragraph) => (
        <p key={legalLearningPlainText(paragraph)}>
          <LearningText text={paragraph} />
        </p>
      ))}

      <div data-not-typeset className="not-typeset mt-7 divide-y border-y">
        {module.layers.map((layer) => (
          <div key={layer.label} className="py-5">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {layer.label}
            </p>
            <p className="mt-2 max-w-4xl text-base leading-7">
              <LearningText text={layer.text} />
            </p>
          </div>
        ))}
      </div>

      {module.terms.length ? (
        <>
          <h3>Ключові поняття</h3>
          <dl>
            {module.terms.map((term) => (
              <div key={term.term}>
                <dt lang="pl">{term.term}</dt>
                <dd>
                  <LearningText text={term.meaning} />
                </dd>
              </div>
            ))}
          </dl>
        </>
      ) : null}
    </section>
  )
}
