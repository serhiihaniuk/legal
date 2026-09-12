import { ArrowRight } from "lucide-react"

import type { DocumentHeading } from "~/components/patterns/document-content"
import { LegalLink, LegalText as LearningText } from "~/components/references"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import type { LegalLearningModuleView } from "~/features/law-library/model/learning/legal-learning-view"
import { legalLearningPlainText } from "~/data/legal-library/learning/legal-text"

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
        key={guide.items.map((item) => item.id).join(":")}
        multiple
        defaultValue={firstItem ? [firstItem.id] : []}
        className="border-y"
      >
        {guide.items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="py-5 hover:no-underline">
              <span className="grid min-w-0 flex-1 gap-2 pr-5 text-left">
                <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="font-mono text-sm font-medium text-foreground">
                    {item.target ? (
                      <LegalLink
                        reference={item.target}
                        context="reference-section"
                      >
                        {item.reference}
                      </LegalLink>
                    ) : (
                      item.reference
                    )}
                  </span>
                  <span className="text-xs leading-6 font-normal whitespace-nowrap text-muted-foreground">
                    {formatRuleCount(item.explanation.rules.length)}
                  </span>
                </span>
                <span className="grid gap-1">
                  {item.title ? (
                    <span className="text-sm leading-6 font-medium text-foreground sm:text-base">
                      <LearningText text={item.title} />
                    </span>
                  ) : null}
                  <span className="text-sm leading-6 font-normal text-muted-foreground">
                    <LearningText
                      text={item.explanation.summary}
                      context="prose"
                    />
                  </span>
                </span>
              </span>
            </AccordionTrigger>

            <AccordionContent className="border-t bg-muted/40 px-4 pt-5 pb-7 sm:px-6">
              <div className="flex w-full min-w-0 flex-col gap-7">
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
                                <LegalLink
                                  reference={item.target}
                                  context="reference-section"
                                >
                                  {rule.locator}
                                </LegalLink>
                              ) : (
                                rule.locator
                              )}
                            </p>
                            <p className="text-base leading-7 text-muted-foreground">
                              <LearningText
                                text={rule.explanation}
                                context="prose"
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
                    <LearningText
                      text={item.explanation.legalEffect}
                      context="prose"
                    />
                  </p>
                </section>

                <section className="border-t pt-6">
                  <h4 className="text-sm font-semibold">
                    Значення у справі іноземця
                  </h4>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">
                    <LearningText
                      text={item.explanation.foreignersCase}
                      context="prose"
                    />
                  </p>
                  {item.target ? (
                    <p className="mt-4">
                      <LegalLink
                        reference={item.target}
                        context="reference-section"
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

export function LegalLearningProvisions({
  module,
  heading,
}: {
  module: LegalLearningModuleView
  heading: Pick<DocumentHeading, "id" | "title">
}) {
  return (
    <section id={heading.id}>
      <h2>{heading.title}</h2>
      {module.articleGroups.length ? (
        <>
          <p>
            Спочатку подивіться на роль частин механізму, а нижче розкрийте
            кожну з них. Так видно не лише номер, а питання, умови, докази і
            наслідок.
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
                  <LearningText text={group.role} context="prose" />
                </dd>
              </div>
            ))}
          </dl>
        </>
      ) : null}

      <ProvisionGuide guide={module.provisionGuide} />
    </section>
  )
}
