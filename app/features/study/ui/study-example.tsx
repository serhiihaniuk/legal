import { LegalText } from "~/components/references"
import { legalTextPlainText } from "~/data/legal-library/legal-text"
import type { StudyModule } from "~/data/study/plan-data"

export function StudyExample({ example }: { example: StudyModule["example"] }) {
  return (
    <section id="study-example">
      <h2>{example.title}</h2>
      {example.fragment ? (
        <figure data-not-typeset className="not-typeset my-6 border-y py-4">
          <figcaption className="mb-3 text-xs text-muted-foreground">
            {example.fragment.label}
          </figcaption>
          <div
            lang={example.fragment.language}
            className="flex flex-col gap-2 text-sm leading-6"
          >
            {example.fragment.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </figure>
      ) : null}
      {example.paragraphs.map((text) => (
        <p key={legalTextPlainText(text)}>
          <LegalText text={text} />
        </p>
      ))}
    </section>
  )
}
