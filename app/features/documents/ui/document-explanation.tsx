import { LegalText } from "~/components/references"
import type {
  DocumentExplanation as Explanation,
  DocumentWorkedExample,
} from "~/data/document-library"
import { legalTextPlainText } from "~/data/legal-library/legal-text"
import { DocumentSample } from "./document-sample"

function WorkedExample({ example }: { example: DocumentWorkedExample }) {
  return (
    <div className="mt-8 min-w-0">
      <p className="text-xs font-medium tracking-wide text-muted-foreground">
        Розібраний приклад
      </p>
      <h3>{example.title}</h3>
      {example.facts.map((text) => (
        <p key={legalTextPlainText(text)}>
          <LegalText text={text} />
        </p>
      ))}
      {example.sample ? <DocumentSample sample={example.sample} /> : null}
      {example.rows?.length ? (
        <ol data-not-typeset className="not-typeset my-6 divide-y border-y">
          {example.rows.map((row) => (
            <li
              key={row.label}
              className="grid gap-2 py-4 text-sm leading-6 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-4"
            >
              <span className="font-medium tabular-nums">{row.label}</span>
              <dl className="min-w-0 space-y-2">
                <div>
                  <dt className="inline text-muted-foreground">Джерело: </dt>
                  <dd className="inline">
                    <LegalText text={row.evidence} />
                  </dd>
                </div>
                <div>
                  <dt className="inline text-muted-foreground">
                    Що встановлено:{" "}
                  </dt>
                  <dd className="inline">
                    <LegalText text={row.meaning} />
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      ) : null}
      {example.reasoning.map((text) => (
        <p key={legalTextPlainText(text)}>
          <LegalText text={text} />
        </p>
      ))}
      <p>
        <strong>Висновок. </strong>
        <LegalText text={example.conclusion} />
      </p>
    </div>
  )
}

export function DocumentExplanation({ section }: { section: Explanation }) {
  return (
    <section id={`document-${section.id}`}>
      <h2>{section.title}</h2>
      {section.paragraphs.map((text) => (
        <p key={legalTextPlainText(text)}>
          <LegalText text={text} />
        </p>
      ))}
      {section.example ? <WorkedExample example={section.example} /> : null}
    </section>
  )
}
