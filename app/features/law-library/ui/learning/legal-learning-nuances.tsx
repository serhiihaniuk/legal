import type { DocumentHeading } from "~/components/patterns/document-content"
import { LegalText as LearningText } from "~/components/references"
import { legalLearningPlainText } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModuleView } from "~/features/law-library/model/learning/legal-learning-view"

export function LegalLearningNuances({
  module,
  heading,
}: {
  module: LegalLearningModuleView
  heading: Pick<DocumentHeading, "id" | "title">
}) {
  return (
    <section id={heading.id}>
      <h2>{heading.title}</h2>
      <ul>
        {module.pitfalls.map((pitfall) => (
          <li key={legalLearningPlainText(pitfall)}>
            <LearningText text={pitfall} />
          </li>
        ))}
      </ul>
      <h3>Як застосувати знання до своєї справи</h3>
      <ol>
        {module.method.map((step) => (
          <li key={legalLearningPlainText(step)}>
            <LearningText text={step} />
          </li>
        ))}
      </ol>
    </section>
  )
}
