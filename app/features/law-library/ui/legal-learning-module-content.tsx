import { ArrowLeft, ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

import { LegalLink, LegalText as LearningText } from "~/components/references"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import {
  legalLearningPlainText,
  type LegalLearningText,
} from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModuleView } from "~/features/law-library/model/legal-learning-view"
import {
  defineDocumentHeadings,
  DocumentArticle,
  DocumentHeader,
  tableOfContentsFromHeadings,
} from "~/components/patterns/document-content"

const legalLearningHeadings = defineDocumentHeadings({
  overview: { id: "legal-learning-overview", title: "Про тему" },
  position: {
    id: "legal-learning-position",
    title: "Де ця тема знаходиться в правовій роботі",
    tocLabel: "Місце в процедурі",
  },
  mechanism: {
    id: "legal-learning-mechanism",
    title: "Як працює цей правовий механізм",
    tocLabel: "Як це працює",
  },
  provisions: {
    id: "legal-learning-provisions",
    title: "Як норми ділять цю тему",
    tocLabel: "Норми крок за кроком",
  },
  example: {
    id: "legal-learning-example",
    title: "Повний приклад у справі іноземця",
    tocLabel: "Повний приклад",
  },
  nuances: {
    id: "legal-learning-nuances",
    title: "Нюанси й типові помилки",
    tocLabel: "Нюанси й помилки",
  },
})

export const legalLearningContentToc = tableOfContentsFromHeadings(
  legalLearningHeadings
)

function ProvisionText({
  text,
  reference,
  target,
}: {
  text: LegalLearningText
  reference: string
  target?: LegalLearningModuleView["provisionGuide"]["items"][number]["target"]
}) {
  if (typeof text !== "string" || !target || !text.includes(reference)) {
    return <LearningText text={text} />
  }

  const content: ReactNode[] = []
  let cursor = 0
  let matchIndex = text.indexOf(reference)
  while (matchIndex !== -1) {
    if (matchIndex > cursor) content.push(text.slice(cursor, matchIndex))
    content.push(
      <LegalLink key={`${matchIndex}-${reference}`} reference={target}>
        {reference}
      </LegalLink>
    )
    cursor = matchIndex + reference.length
    matchIndex = text.indexOf(reference, cursor)
  }
  if (cursor < text.length) content.push(text.slice(cursor))
  return <>{content}</>
}

type ModuleNavigation = {
  previousLabel?: string
  nextLabel?: string
  onPrevious?: () => void
  onNext?: () => void
  previousControl?: ReactNode
  nextControl?: ReactNode
}

function formatRuleCount(count: number) {
  const lastTwo = count % 100
  if (lastTwo >= 11 && lastTwo <= 14) return `${count} структурних пунктів`
  const last = count % 10
  if (last === 1) return `${count} структурний пункт`
  if (last >= 2 && last <= 4) return `${count} структурні пункти`
  return `${count} структурних пунктів`
}

function ProvisionGuide({
  guide,
}: {
  guide: LegalLearningModuleView["provisionGuide"]
}) {
  const firstItem = guide.items[0]

  return (
    <div data-not-typeset className="not-typeset mt-10 flex flex-col gap-8">
      <header className="flex max-w-3xl flex-col gap-3">
        <p className="text-sm font-medium text-muted-foreground">
          {guide.countLabel}
        </p>
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {guide.title}
        </h3>
        <p className="text-base leading-7 text-muted-foreground">
          {guide.description}
        </p>
      </header>

      <Accordion
        multiple
        defaultValue={firstItem ? [firstItem.id] : []}
        className="border-y"
      >
        {guide.items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="py-5 hover:no-underline">
              <span className="grid min-w-0 flex-1 gap-2 pr-5 text-left sm:grid-cols-[8rem_minmax(0,1fr)_auto] sm:items-start sm:gap-5">
                <span className="font-mono text-sm font-medium text-foreground">
                  {item.target ? (
                    <LegalLink reference={item.target}>
                      {item.reference}
                    </LegalLink>
                  ) : (
                    item.reference
                  )}
                </span>
                <span className="grid gap-1">
                  <span className="text-sm leading-6 font-medium text-foreground sm:text-base">
                    <LearningText text={item.title} />
                  </span>
                  <span className="text-sm leading-6 font-normal text-muted-foreground">
                    <ProvisionText
                      text={item.explanation.summary}
                      reference={item.reference}
                      target={item.target}
                    />
                  </span>
                </span>
                <span className="text-xs leading-6 font-normal whitespace-nowrap text-muted-foreground">
                  {formatRuleCount(item.explanation.rules.length)}
                </span>
              </span>
            </AccordionTrigger>

            <AccordionContent className="border-t bg-muted/40 px-4 pt-5 pb-7 sm:px-6">
              <div className="flex w-full min-w-0 flex-col gap-7">
                <section>
                  <h4 className="text-sm font-semibold">
                    Що встановлює ця частина
                  </h4>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">
                    <ProvisionText
                      text={item.explanation.summary}
                      reference={item.reference}
                      target={item.target}
                    />
                  </p>
                </section>

                {item.explanation.rules.length ? (
                  <section>
                    <h4 className="text-sm font-semibold">
                      Структура механізму
                    </h4>
                    <ol className="mt-3 flex flex-col border-y">
                      {item.explanation.rules.map((rule, index) => (
                        <li
                          key={`${item.id}-${rule.locator}-${index}`}
                          className="flex gap-4 py-4 not-last:border-b"
                        >
                          <span className="font-mono text-sm text-muted-foreground">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <div className="flex min-w-0 flex-col gap-1">
                            <p className="text-sm font-semibold">
                              {item.target ? (
                                <LegalLink reference={item.target}>
                                  {rule.locator}
                                </LegalLink>
                              ) : (
                                rule.locator
                              )}
                            </p>
                            <p className="text-base leading-7 text-muted-foreground">
                              <ProvisionText
                                text={rule.explanation}
                                reference={item.reference}
                                target={item.target}
                              />
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </section>
                ) : null}

                <section className="border-t pt-6">
                  <h4 className="text-sm font-semibold">Правовий наслідок</h4>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">
                    <ProvisionText
                      text={item.explanation.legalEffect}
                      reference={item.reference}
                      target={item.target}
                    />
                  </p>
                </section>

                <section className="border-t pt-6">
                  <h4 className="text-sm font-semibold">
                    Значення у справі іноземця
                  </h4>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">
                    <ProvisionText
                      text={item.explanation.foreignersCase}
                      reference={item.reference}
                      target={item.target}
                    />
                  </p>
                  {item.target ? (
                    <p className="mt-4">
                      <LegalLink
                        reference={item.target}
                        className="inline-flex items-center gap-1.5"
                      >
                        Відкрити повне пояснення {item.reference}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </LegalLink>
                    </p>
                  ) : null}
                </section>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

export function LegalLearningModuleContent({
  module,
  navigation,
}: {
  module: LegalLearningModuleView
  navigation: ModuleNavigation
}) {
  return (
    <DocumentArticle>
      <DocumentHeader
        id={legalLearningHeadings.overview.id}
        badgeAlign="center"
        badges={
          <>
            <Badge variant="secondary">Модуль {module.order}</Badge>
            <Badge variant="outline">
              <LearningText text={module.provisionScope} />
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

      <section id={legalLearningHeadings.position.id}>
        <p className="text-sm font-medium text-muted-foreground">
          {module.stage}
        </p>
        <h2>{legalLearningHeadings.position.title}</h2>
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

      <section id={legalLearningHeadings.mechanism.id}>
        <h2>{legalLearningHeadings.mechanism.title}</h2>
        {module.mechanismParagraphs.map((paragraph) => (
          <p key={legalLearningPlainText(paragraph)}>
            <LearningText text={paragraph} />
          </p>
        ))}

        <div data-not-typeset className="not-typeset mt-7 divide-y border-y">
          {module.layers.map((layer) => (
            <div key={layer.label} className="py-5">
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {layer.label}
              </p>
              <p className="mt-2 max-w-4xl text-base leading-7">
                <LearningText text={layer.text} />
              </p>
            </div>
          ))}
        </div>

        {module.terms.length ? (
          <>
            <h3>Ключові поняття</h3>
            <dl>
              {module.terms.map((term) => (
                <div key={term.term}>
                  <dt lang="pl">{term.term}</dt>
                  <dd>
                    <LearningText text={term.meaning} />
                  </dd>
                </div>
              ))}
            </dl>
          </>
        ) : null}
      </section>

      <section id={legalLearningHeadings.provisions.id}>
        <h2>{legalLearningHeadings.provisions.title}</h2>
        <p>
          Спочатку подивіться на роль частин механізму, а нижче розкрийте кожну
          з них. Так видно не лише номер, а питання, умови, докази і наслідок.
        </p>
        <dl>
          {module.articleGroups.map((group) => (
            <div
              key={`${legalLearningPlainText(group.reference)}-${legalLearningPlainText(group.role)}`}
            >
              <dt lang="pl">
                {group.target ? (
                  <LegalLink
                    reference={group.target}
                    context="reference-section"
                  >
                    <LearningText text={group.reference} />
                  </LegalLink>
                ) : (
                  <LearningText text={group.reference} />
                )}
              </dt>
              <dd>
                <ProvisionText
                  text={group.role}
                  reference={legalLearningPlainText(group.reference)}
                  target={group.target}
                />
              </dd>
            </div>
          ))}
        </dl>

        <ProvisionGuide guide={module.provisionGuide} />
      </section>

      <section id={legalLearningHeadings.example.id}>
        <h2>{legalLearningHeadings.example.title}</h2>
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

      <section id={legalLearningHeadings.nuances.id}>
        <h2>{legalLearningHeadings.nuances.title}</h2>
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

      <nav
        data-not-typeset
        className="not-typeset flex items-center justify-between gap-4 border-t pt-6"
        aria-label="Навігація між модулями"
      >
        {navigation.previousControl ?? (
          <Button
            type="button"
            variant="ghost"
            disabled={!navigation.onPrevious}
            onClick={navigation.onPrevious}
          >
            <ArrowLeft data-icon="inline-start" aria-hidden="true" />
            {navigation.previousLabel ?? "Початок"}
          </Button>
        )}
        {navigation.nextControl ?? (
          <Button
            type="button"
            variant="ghost"
            disabled={!navigation.onNext}
            onClick={navigation.onNext}
          >
            {navigation.nextLabel ?? "Кінець"}
            <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </Button>
        )}
      </nav>
    </DocumentArticle>
  )
}
