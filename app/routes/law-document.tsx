import { ArrowLeft, ArrowRight } from "lucide-react"
import {
  Link,
  redirect,
  useLoaderData,
  type LoaderFunctionArgs,
} from "react-router"

import {
  LawDocumentMobileNavigation,
  LawDocumentNavigation,
} from "~/components/law-document-navigation"
import { DocsLayout, type TocItem } from "~/components/docs-layout"
import { LegalText } from "~/components/legal-reference-text"
import { OfficialSourceLink } from "~/components/official-source"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import {
  getDocument,
  getDocumentHomePath,
  getDocumentLearningPath,
  getEdition,
  getLegalLearningCurriculum,
  getLegalLearningModule,
} from "~/data/legal-library"
import { officialSourceIdByLegalDocument } from "~/data/legal-library/official-sources"

const legacyTechnicalModuleIds = new Set([
  "overview",
  "reading",
  "structure",
  "source",
])

export async function loader({ params }: LoaderFunctionArgs) {
  const document = getDocument(params.documentId)
  if (!document) throw new Response("Legal document not found", { status: 404 })
  if (document.id === "kpa") {
    throw new Response("KPA uses its authored learning route", { status: 404 })
  }

  const curriculum = getLegalLearningCurriculum(document.id)
  if (!curriculum) {
    throw new Response("Learning curriculum not found", { status: 404 })
  }

  const module = getLegalLearningModule(document.id, params.moduleId ?? "")
  if (!module) {
    if (legacyTechnicalModuleIds.has(params.moduleId ?? "")) {
      throw redirect(getDocumentHomePath(document.id))
    }
    throw new Response("Learning module not found", { status: 404 })
  }

  const edition = getEdition(document.id, document.currentEditionId)
  if (!edition) throw new Response("Legal edition not found", { status: 404 })

  const moduleIndex = curriculum.modules.findIndex(
    (candidate) => candidate.id === module.id
  )

  return {
    document,
    edition,
    curriculum,
    module,
    previousModule:
      moduleIndex > 0 ? curriculum.modules[moduleIndex - 1] : undefined,
    nextModule:
      moduleIndex < curriculum.modules.length - 1
        ? curriculum.modules[moduleIndex + 1]
        : undefined,
    sourceLimitations: edition.manifest.legalStatusEvidence?.unresolved ?? [],
  }
}

function TextList({ items }: { items: readonly string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <LegalText text={item} />
        </li>
      ))}
    </ul>
  )
}

export default function LawDocumentLearningRoute() {
  const {
    document,
    edition,
    curriculum,
    module,
    previousModule,
    nextModule,
    sourceLimitations,
  } = useLoaderData<typeof loader>()

  const toc: readonly TocItem[] = [
    { href: "#learning-outcome", label: "Результат модуля" },
    { href: "#learning-case-question", label: "Питання справи" },
    ...module.sections.map((section) => ({
      href: `#learning-${section.id}`,
      label: section.title,
    })),
    { href: "#learning-exercise", label: "Практична вправа" },
    { href: "#learning-source-check", label: "Перевірка джерела" },
  ]

  return (
    <DocsLayout
      navigation={
        <LawDocumentNavigation
          document={document}
          activeSection="learning"
          activeModuleId={module.id}
        />
      }
      toc={toc}
    >
      <LawDocumentMobileNavigation
        document={document}
        activeSection="learning"
        activeModuleId={module.id}
      />

      <article className="typeset typeset-docs w-full pb-16 sm:pb-0">
        <header>
          <div data-not-typeset className="mb-3 flex flex-wrap gap-2">
            <Badge variant="secondary">Модуль {module.order}</Badge>
            <Badge variant="outline">{module.provisionScope}</Badge>
            <Badge variant="outline">
              Стан права: {edition.manifest.legalStateDate ?? edition.manifest.checkedAt}
            </Badge>
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            {curriculum.title}
          </p>
          <h1>{module.title}</h1>
          <p className="text-lg leading-8" lang="pl">
            <LegalText text={module.polish} />
          </p>
        </header>

        <section id="learning-outcome">
          <h2>Після цього модуля</h2>
          <p className="text-lg leading-8">
            <LegalText text={module.outcome} />
          </p>
        </section>

        <section id="learning-case-question">
          <h2>Де тема знаходиться у правовій роботі</h2>
          <div data-not-typeset className="not-typeset divide-y border-y">
            <div className="grid gap-2 py-4 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-5">
              <strong>Питання справи</strong>
              <p className="leading-7">
                <LegalText text={module.caseQuestion} />
              </p>
            </div>
            <div className="grid gap-2 py-4 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-5">
              <strong>Коли це потрібно</strong>
              <p className="leading-7">
                <LegalText text={module.placeInWork} />
              </p>
            </div>
          </div>
        </section>

        {module.sections.map((section) => (
          <section key={section.id} id={`learning-${section.id}`}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                <LegalText text={paragraph} />
              </p>
            ))}

            {section.questions?.length ? (
              <>
                <h3>Питання для справи</h3>
                <TextList items={section.questions} />
              </>
            ) : null}

            {section.steps?.length ? (
              <>
                <h3>Послідовність аналізу</h3>
                <ol>
                  {section.steps.map((step) => (
                    <li key={step}>
                      <LegalText text={step} />
                    </li>
                  ))}
                </ol>
              </>
            ) : null}

            {section.evidence?.length ? (
              <>
                <h3>Що перевірити в документах</h3>
                <TextList items={section.evidence} />
              </>
            ) : null}

            {section.warning ? (
              <blockquote>
                <strong>Не переплутайте: </strong>
                <LegalText text={section.warning} />
              </blockquote>
            ) : null}
          </section>
        ))}

        <section id="learning-exercise">
          <h2>Практична вправа</h2>
          <p>
            <LegalText text={module.exercise} />
          </p>
        </section>

        <section id="learning-source-check">
          <h2>Перевірка джерела</h2>
          <p>
            Навчальний модуль показує спосіб аналізу. Для конкретної справи
            перевірте текст норми, дату факту, wejście w życie, пізніші зміни та
            przepisy przejściowe в офіційному джерелі.
          </p>
          {sourceLimitations.length > 0 ? (
            <blockquote>
              Не підтверджено автоматичними metadata: {sourceLimitations.join(", ")}.
            </blockquote>
          ) : null}
          <div data-not-typeset className="not-typeset mt-5">
            <OfficialSourceLink
              sourceId={officialSourceIdByLegalDocument[document.id]}
              label="Відкрити офіційну сторінку ELI"
            />
          </div>
        </section>

        <nav
          data-not-typeset
          aria-label="Навігація між навчальними модулями"
          className="not-typeset mt-10 flex flex-wrap justify-between gap-3 border-t pt-6"
        >
          {previousModule ? (
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <Link
                  to={getDocumentLearningPath(document.id, previousModule.id)}
                />
              }
            >
              <ArrowLeft data-icon="inline-start" aria-hidden="true" />
              {previousModule.title}
            </Button>
          ) : (
            <span />
          )}
          {nextModule ? (
            <Button
              nativeButton={false}
              render={
                <Link to={getDocumentLearningPath(document.id, nextModule.id)} />
              }
            >
              {nextModule.title}
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Button>
          ) : null}
        </nav>
      </article>
    </DocsLayout>
  )
}
