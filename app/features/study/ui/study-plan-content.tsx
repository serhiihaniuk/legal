import { ArrowLeft, ArrowRight } from "lucide-react"
import { Link } from "react-router"
import {
  DocumentArticle,
  DocumentHeader,
} from "~/components/patterns/document-content"
import { LegalText, OfficialSourceEntry } from "~/components/references"
import { legalTextPlainText } from "~/data/legal-library/legal-text"
import { legalData } from "~/data/legal-map/data"
import { studyModules, type StudyModule } from "~/data/study/plan-data"
import { StudyExample } from "./study-example"
import { StudyReadingLinks } from "./study-reading-links"

export function StudyPlanContent({ module }: { module: StudyModule }) {
  const index = studyModules.findIndex((item) => item.id === module.id)
  const previous = studyModules[index - 1]
  const next = studyModules[index + 1]
  const legalState = legalData.updatedAt.split("-").reverse().join(".")

  return (
    <DocumentArticle>
      <DocumentHeader id="study-overview">
        <p className="text-sm text-muted-foreground">Путівник по темах</p>
        <h1>{module.title}</h1>
        <p className="lead">
          <LegalText text={module.summary} />
        </p>
      </DocumentHeader>
      <div id="study-material">
        {module.sections.map((section) => (
          <section key={section.id} id={`study-${section.id}`}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((text) => (
              <p key={legalTextPlainText(text)}>
                <LegalText text={text} />
              </p>
            ))}
          </section>
        ))}
      </div>
      <StudyExample example={module.example} />
      <StudyReadingLinks items={module.reading} />
      <section id="study-sources">
        <h2>Офіційні джерела</h2>
        <ul data-not-typeset className="not-typeset flex flex-col gap-4">
          {module.sources.map((source) => (
            <li key={source.url}>
              <OfficialSourceEntry source={source} />
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted-foreground">
          Стан права в атласі: {legalState}. Для події в іншу дату потрібна
          перевірка відповідної редакції.
        </p>
      </section>
      <nav
        data-not-typeset
        aria-label="Інші питання путівника"
        className="not-typeset mt-8 flex flex-col gap-6 border-t pt-6 text-sm sm:flex-row sm:justify-between"
      >
        {previous ? (
          <Link
            to={`/study?module=${previous.id}`}
            className="flex min-w-0 flex-1 items-start gap-2 no-underline hover:underline"
          >
            <ArrowLeft aria-hidden className="mt-0.5 size-4 shrink-0" />
            <span>
              <span className="mb-1 block text-xs text-muted-foreground">
                Попередня тема
              </span>
              {previous.title}
            </span>
          </Link>
        ) : null}
        {next ? (
          <Link
            to={`/study?module=${next.id}`}
            className="flex min-w-0 flex-1 items-start justify-end gap-2 text-right no-underline hover:underline"
          >
            <span>
              <span className="mb-1 block text-xs text-muted-foreground">
                Наступна тема
              </span>
              {next.title}
            </span>
            <ArrowRight aria-hidden className="mt-0.5 size-4 shrink-0" />
          </Link>
        ) : null}
      </nav>
    </DocumentArticle>
  )
}
