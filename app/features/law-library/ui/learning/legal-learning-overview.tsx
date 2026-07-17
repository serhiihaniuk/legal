import { Badge } from "~/components/ui/badge"
import {
  DocumentHeader,
  type DocumentHeading,
} from "~/components/patterns/document-content"
import { LegalText as LearningText } from "~/components/references"
import type { LegalLearningModuleView } from "~/features/law-library/model/learning/legal-learning-view"

export function LegalLearningOverview({
  module,
  headings,
}: {
  module: LegalLearningModuleView
  headings: {
    overview: Pick<DocumentHeading, "id">
    position: Pick<DocumentHeading, "id" | "title">
  }
}) {
  return (
    <>
      <DocumentHeader
        id={headings.overview.id}
        badgeAlign="center"
        badges={
          <>
            <Badge variant="secondary">Модуль {module.order}</Badge>
            <Badge variant="outline">
              <LearningText
                text={module.provisionScope}
                context="reference-section"
              />
            </Badge>
            <span className="text-xs text-muted-foreground">
              Стан права: {module.legalState}
            </span>
          </>
        }
      >
        <h1>{module.title}</h1>
        <p className="text-muted-foreground" lang="pl">
          <LearningText text={module.polish} />
        </p>
        <p className="text-lg leading-8">
          <strong>Після цього модуля:</strong>{" "}
          <LearningText text={module.outcome} />
        </p>
      </DocumentHeader>

      <section id={headings.position.id}>
        <p className="text-sm font-medium text-muted-foreground">
          {module.stage}
        </p>
        <h2>{headings.position.title}</h2>
        <p>
          <LearningText text={module.positionIntro} />
        </p>

        <div data-not-typeset className="not-typeset mt-6 divide-y border-y">
          <div className="grid gap-1 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
            <p className="text-sm font-medium">Питання модуля</p>
            <p className="text-sm leading-6 text-muted-foreground">
              <LearningText text={module.question} />
            </p>
          </div>
          <div className="grid gap-1 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
            <p className="text-sm font-medium">Коли це потрібно</p>
            <p className="text-sm leading-6 text-muted-foreground">
              <LearningText text={module.neededWhen} />
            </p>
          </div>
          <div className="grid gap-1 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
            <p className="text-sm font-medium">Чого тема не вирішує</p>
            <p className="text-sm leading-6 text-muted-foreground">
              <LearningText text={module.boundary} />
            </p>
          </div>
        </div>

        {module.coursePhases?.length ? (
          <div data-not-typeset className="not-typeset mt-10">
            <h3 className="text-xl font-semibold tracking-tight">
              {module.courseTitle ?? "Карта курсу"}
            </h3>
            {module.courseDescription ? (
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                {module.courseDescription}
              </p>
            ) : null}
            <ol className="mt-5 divide-y border-y">
              {module.coursePhases.map((phase) => (
                <li
                  key={phase.number}
                  className="grid gap-2 py-5 sm:grid-cols-[3rem_13rem_minmax(0,1fr)_auto] sm:items-start sm:gap-5"
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    {phase.number}
                  </span>
                  <strong className="text-sm leading-6">{phase.title}</strong>
                  <span className="text-sm leading-6 text-muted-foreground">
                    <LearningText text={phase.description} />
                  </span>
                  <Badge variant="outline">{phase.modules}</Badge>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </section>
    </>
  )
}
