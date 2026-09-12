import { LegalText as LearningText } from "~/components/references"
import type { DocumentHeading } from "~/components/patterns/document-content"
import type { LegalLearningModuleView } from "~/features/law-library/model/learning/legal-learning-view"
import { DocumentSample } from "~/components/patterns/document-sample"

export function LegalLearningExample({
  module,
  heading,
}: {
  module: LegalLearningModuleView
  heading: Pick<DocumentHeading, "id" | "title">
}) {
  const example = module.caseExample
  if (!example) return null
  return (
    <section id={heading.id}>
      <h2>{heading.title}</h2>
      <h3>
        <LearningText text={example.title} />
      </h3>
      <div>
        {[
          { number: "01", label: "Факти", text: example.facts },
          {
            number: "02",
            label: "Аналіз",
            text: example.analysis,
          },
          {
            number: "03",
            label: "Висновок",
            text: example.lesson,
          },
        ].map(({ number, label, text }) => (
          <div key={number}>
            {number === "03" && example.sample ? (
              <DocumentSample sample={example.sample} />
            ) : null}
            <p>
              <strong>{label}.</strong> <LearningText text={text} />
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
