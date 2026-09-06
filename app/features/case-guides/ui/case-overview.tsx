import type { CaseGuideRoute } from "~/data/case-guides/types"
import { caseStudySectionIds } from "../model/case-study-navigation"
import { LegalText } from "~/components/references"
import { Badge } from "~/components/ui/badge"
import { legalTextPlainText } from "~/data/legal-library/legal-text"

function displayDate(value: string) {
  const [year, month, day] = value.split("-")
  return year && month && day ? `${day}.${month}.${year}` : value
}
export function CaseOverview({
  route,
  updatedAt,
}: {
  route: CaseGuideRoute
  updatedAt: string
}) {
  return (
    <>
      <header id={caseStudySectionIds.overview}>
        <div
          data-not-typeset
          className="mb-3 flex flex-wrap items-center gap-2"
        >
          <Badge variant="secondary">Повний гайд по справі</Badge>
          <Badge variant="outline">{route.tab}</Badge>
          <span className="text-xs text-muted-foreground">
            {route.verifiedAt
              ? `Гайд перевірено: ${displayDate(route.verifiedAt)}`
              : `Стан права: ${displayDate(updatedAt)}`}
          </span>
        </div>

        <p className="text-sm font-medium text-muted-foreground">
          {route.eyebrow}
        </p>
        <h1>{route.title}</h1>
        <p className="text-muted-foreground">
          <LegalText text={route.subtitle} />
        </p>
        <nav
          data-not-typeset
          aria-label="Швидкий перехід у гайді"
          className="my-4 flex flex-wrap gap-x-5 gap-y-1"
        >
          <a
            href={`#${caseStudySectionIds.stages}`}
            className="inline-flex min-h-10 items-center text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            До етапів справи ↓
          </a>
          <a
            href={`#${caseStudySectionIds.registers}`}
            className="inline-flex min-h-10 items-center text-sm underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Документи й строки ↓
          </a>
        </nav>
        {route.overview.map((paragraph) => (
          <p key={legalTextPlainText(paragraph)}>
            <LegalText text={paragraph} />
          </p>
        ))}

        <blockquote>
          <p>
            <strong>Результат маршруту.</strong>{" "}
            <LegalText text={route.result} />
          </p>
          <p>
            Це навчальний гайд по типовому правовому маршруту. У кожній реальній
            справі потрібно окремо встановити факти, перевірити актуальну
            редакцію норм і зібрати належні докази.
          </p>
        </blockquote>

        <h2>Коли користуватися цим гайдом</h2>
        <p>
          <LegalText text={route.forWhom} />
        </p>
        <p>
          <strong>Межі цієї підстави. </strong>
          <LegalText text={route.notFor} />
        </p>
      </header>
    </>
  )
}
