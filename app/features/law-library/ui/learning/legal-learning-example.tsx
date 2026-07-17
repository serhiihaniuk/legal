import { LegalText as LearningText } from "~/components/references"
import type { DocumentHeading } from "~/components/patterns/document-content"
import type { LegalLearningModuleView } from "~/features/law-library/model/learning/legal-learning-view"

export function LegalLearningExample({
  module,
  heading,
}: {
  module: LegalLearningModuleView
  heading: Pick<DocumentHeading, "id" | "title">
}) {
  return (
    <section id={heading.id}>
      <h2>{heading.title}</h2>
      <h3>
        <LearningText text={module.caseExample.title} />
      </h3>
      <div data-not-typeset className="not-typeset mt-6 divide-y border-y">
        {[
          { number: "01", label: "Факти", text: module.caseExample.facts },
          {
            number: "02",
            label: "Аналіз",
            text: module.caseExample.analysis,
          },
          {
            number: "03",
            label: "Висновок",
            text: module.caseExample.lesson,
          },
        ].map(({ number, label, text }) => (
          <div
            key={number}
            className="grid gap-2 py-5 sm:grid-cols-[3rem_8rem_minmax(0,1fr)] sm:gap-5"
          >
            <span className="font-mono text-xs text-muted-foreground">
              {number}
            </span>
            <strong className="text-sm">{label}</strong>
            <p
              className={`text-sm leading-6 ${number === "03" ? "text-foreground" : "text-muted-foreground"}`}
            >
              <LearningText text={text} />
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
