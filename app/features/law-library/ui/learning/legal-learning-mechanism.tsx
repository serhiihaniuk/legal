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
      {module.mechanismSections?.map((section) => (
        <section key={section.id} id={`legal-learning-section-${section.id}`}>
          <h3>{section.title}</h3>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index}>
              <LearningText text={paragraph} />
            </p>
          ))}
          {section.steps?.length ? (
            <ol>
              {section.steps.map((step, index) => (
                <li key={index}>
                  <LearningText text={step} />
                </li>
              ))}
            </ol>
          ) : null}
          {section.evidence?.length ? (
            <>
              <h4>Документи й докази</h4>
              <ul>
                {section.evidence.map((item, index) => (
                  <li key={index}>
                    <LearningText text={item} />
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          {section.warning ? (
            <p>
              <LearningText text={section.warning} />
            </p>
          ) : null}
        </section>
      ))}

      {module.layers.length ? (
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
      ) : null}

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
