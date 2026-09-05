import { ArrowLeft, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router"

import { LegalText } from "~/components/references"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import { Separator } from "~/components/ui/separator"
import { legalData } from "~/data/legal-map/data"
import { studyModules } from "~/data/study/plan-data"
import {
  defineDocumentHeadings,
  DocumentArticle,
  tableOfContentsFromHeadings,
} from "~/components/patterns/document-content"

const studyPlanHeadings = defineDocumentHeadings({
  overview: { id: "study-overview", title: "Про тему" },
  material: { id: "study-material", title: "Основні поняття та зв’язки" },
  reading: { id: "study-reading", title: "Докладне пояснення" },
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
          <Badge variant="secondary">{module.label}</Badge>
          <span className="text-xs text-muted-foreground">
            Стан права: {formatLegalState(legalData.updatedAt)}
          </span>
        </div>
        <h1>{module.title}</h1>
        <p className="text-muted-foreground">
          <LegalText text={module.outcome} />
        </p>
        <p>
          Почніть із питання, яке виникло у вашій роботі. Цей огляд пояснює
          основні зв’язки; докладний матеріал доступний нижче. Теми можна читати
          в будь-якому порядку.
        </p>
      </header>

      <Separator data-not-typeset className="my-8" />

      <section id={studyPlanHeadings.material.id}>
        <h2>{studyPlanHeadings.material.title}</h2>
        {module.introduction.map((paragraph) => (
          <p key={paragraph}>
            <LegalText text={paragraph} />
          </p>
        ))}
        {module.lessons.map((lesson) => (
          <section key={lesson.title}>
            <h3>{lesson.title}</h3>
            <p>
              <LegalText text={lesson.explanation} />
            </p>
          </section>
        ))}
      </section>

      <section id={studyPlanHeadings.reading.id}>
        <h2>{studyPlanHeadings.reading.title}</h2>
        <p>
          У матеріалі за цим оглядом пояснено правові поняття та їх значення для
          справи. До огляду можна повернутися, щоб обрати іншу тему.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={() => navigate(module.materialNavigation.href)}
        >
          {module.materialNavigation.label}
          <ArrowRight data-icon="inline-end" />
        </Button>
      </section>

      <nav
        data-not-typeset
        aria-label="Перехід між темами путівника"
        className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t pt-6"
      >
        {previousModule ? (
          <Button
            type="button"
            variant="outline"
            onClick={() => onSelectModule(previousModule.id)}
          >
            <ArrowLeft data-icon="inline-start" />
            Попередня тема
          </Button>
        ) : (
          <span />
        )}
        {nextModule ? (
          <Button
            type="button"
            variant="outline"
            onClick={() => onSelectModule(nextModule.id)}
          >
            Наступна тема
            <ArrowRight data-icon="inline-end" />
          </Button>
        ) : null}
      </nav>
    </DocumentArticle>
  )
}
