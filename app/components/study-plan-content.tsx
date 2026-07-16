import { ArrowLeft, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router"

import { LegalText } from "~/components/legal-reference-text"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Separator } from "~/components/ui/separator"
import { legalData } from "~/data/legal-data"
import { studyModules } from "~/data/study-plan-data"
import {
  defineDocumentHeadings,
  DocumentArticle,
  tableOfContentsFromHeadings,
} from "~/components/patterns/document-content"

const studyPlanHeadings = defineDocumentHeadings({
  overview: { id: "study-overview", title: "Про модуль" },
  material: {
    id: "study-material",
    title: "Що треба зрозуміти",
    tocLabel: "Навчальний матеріал",
  },
  practice: { id: "study-practice", title: "Практичне завдання" },
  assessment: {
    id: "study-assessment",
    title: "Як перевірити результат",
    tocLabel: "Критерії результату",
  },
  review: {
    id: "study-review",
    title: "Повторення через 7 днів",
    tocLabel: "Повторення",
  },
})

export const studyPlanToc = tableOfContentsFromHeadings(studyPlanHeadings)

function formatLegalState(value: string) {
  const [year, month, day] = value.split("-")
  return year && month && day ? `${day}.${month}.${year}` : value
}

export function StudyPlanContent({
  selectedId,
  onSelectModule,
}: {
  selectedId: string
  onSelectModule: (id: string) => void
}) {
  const navigate = useNavigate()
  const selectedIndex = Math.max(
    0,
    studyModules.findIndex((module) => module.id === selectedId)
  )
  const module = studyModules[selectedIndex]
  const previousModule = studyModules[selectedIndex - 1]
  const nextModule = studyModules[selectedIndex + 1]

  return (
    <DocumentArticle>
      <header id={studyPlanHeadings.overview.id}>
        <div
          data-not-typeset
          className="mb-4 flex flex-wrap items-center gap-2"
        >
          <Badge variant="secondary">{module.label} з 8</Badge>
          <span className="text-xs text-muted-foreground">
            Стан права: {formatLegalState(legalData.updatedAt)}
          </span>
        </div>
        <h1>{module.title}</h1>
        <p className="text-muted-foreground">
          <LegalText text={module.outcome} />
        </p>
        <p>
          Курс проходиться послідовно. Кожен модуль дає одну робочу модель,
          конкретний результат і критерії, за якими можна перевірити себе до
          переходу далі.
        </p>
      </header>

      <Separator data-not-typeset className="my-8" />

      <section
        id={studyPlanHeadings.material.id}
        aria-labelledby="study-material-heading"
      >
        <h2 id="study-material-heading">{studyPlanHeadings.material.title}</h2>
        {module.introduction.map((paragraph) => (
          <p key={paragraph}>
            <LegalText text={paragraph} />
          </p>
        ))}

        {module.lessons.map((lesson, index) => (
          <section
            key={lesson.title}
            aria-labelledby={`${module.id}-lesson-${index + 1}`}
          >
            <h3 id={`${module.id}-lesson-${index + 1}`}>{lesson.title}</h3>
            <p>
              <LegalText text={lesson.explanation} />
            </p>
          </section>
        ))}

        <div data-not-typeset className="mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate(module.materialNavigation.href)}
          >
            {module.materialNavigation.label}
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </section>

      <Separator data-not-typeset className="my-8" />

      <section
        id={studyPlanHeadings.practice.id}
        aria-labelledby="study-practice-heading"
      >
        <h2 id="study-practice-heading">{studyPlanHeadings.practice.title}</h2>
        <p>
          <strong>Матеріал для роботи.</strong>{" "}
          <LegalText text={module.assignment.material} />
        </p>
        <ol>
          {module.assignment.steps.map((step) => (
            <li key={step}>
              <LegalText text={step} />
            </li>
          ))}
        </ol>
        <div
          data-not-typeset
          className="mt-6 border-l-2 border-foreground pl-5"
        >
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Що має залишитися після вправи
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-7">
            <LegalText text={module.assignment.deliverable} />
          </p>
        </div>
      </section>

      <Separator data-not-typeset className="my-8" />

      <section
        id={studyPlanHeadings.assessment.id}
        aria-labelledby="study-assessment-heading"
      >
        <h2 id="study-assessment-heading">
          {studyPlanHeadings.assessment.title}
        </h2>
        <p>
          Модуль можна завершити, якщо результат відповідає всім критеріям, а
          типові помилки можна пояснити власними словами.
        </p>
        <h3>Критерії</h3>
        <ul>
          {module.assignment.rubric.map((criterion) => (
            <li key={criterion}>
              <LegalText text={criterion} />
            </li>
          ))}
        </ul>
        <h3>Типові помилки</h3>
        <ul>
          {module.assignment.commonMistakes.map((mistake) => (
            <li key={mistake}>
              <LegalText text={mistake} />
            </li>
          ))}
        </ul>
      </section>

      <Separator data-not-typeset className="my-8" />

      <section
        id={studyPlanHeadings.review.id}
        aria-labelledby="study-review-heading"
      >
        <h2 id="study-review-heading">{studyPlanHeadings.review.title}</h2>
        <p>
          <LegalText text={module.reviewPrompt} />
        </p>
        <p>
          Якщо не вдається відновити логіку без підказки, повторіть завдання на
          іншому прикладі. Переходьте далі лише тоді, коли можете пояснити не
          номер статті, а весь ланцюг від факту до наступної дії.
        </p>

        <nav
          data-not-typeset
          aria-label="Перехід між модулями"
          className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t pt-6"
        >
          {previousModule ? (
            <Button
              type="button"
              variant="outline"
              onClick={() => onSelectModule(previousModule.id)}
            >
              <ArrowLeft data-icon="inline-start" />
              {previousModule.label}
            </Button>
          ) : (
            <span />
          )}
          {nextModule ? (
            <Button type="button" onClick={() => onSelectModule(nextModule.id)}>
              {nextModule.label}
              <ArrowRight data-icon="inline-end" />
            </Button>
          ) : (
            <span className="text-sm font-medium">Курс завершено</span>
          )}
        </nav>
      </section>
    </DocumentArticle>
  )
}
