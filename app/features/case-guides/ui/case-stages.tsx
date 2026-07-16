import { ArrowUpRight, FileText, Scale } from "lucide-react"
import { Link } from "react-router"

import { LegalText } from "~/components/references"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { Badge } from "~/components/ui/badge"
import { Checkbox } from "~/components/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "~/components/ui/field"
import type { CaseGuideStage } from "~/data/case-guide-types"
import { legalTextPlainText } from "~/data/legal-library/legal-text"

import { documentChecklistHint, DocumentStatus } from "./case-guide-shared"

function RelatedMaterials({ stage }: { stage: CaseGuideStage }) {
  if (stage.materials.length === 0) return null

  return (
    <nav
      aria-label={`Пов’язані матеріали до етапу «${stage.title}»`}
      className="mt-4 border-t pt-3"
      data-not-typeset
    >
      <p className="text-sm font-semibold">Пов’язані матеріали</p>
      <ul className="mt-2 flex flex-col gap-1.5">
        {stage.materials.map((material) => (
          <li key={`${stage.id}-${material.href}`}>
            <Link
              to={material.href}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {material.label}
              <ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function StageDetails({ stage }: { stage: CaseGuideStage }) {
  if (stage.documents.length === 0 && stage.risks.length === 0) return null

  return (
    <div data-not-typeset className="mt-3 flex flex-col gap-2">
      {stage.documents.length > 0 ? (
        <Accordion>
          <AccordionItem value={`documents-${stage.id}`}>
            <AccordionTrigger className="items-center bg-secondary px-3 py-2 text-secondary-foreground hover:bg-secondary/80 hover:no-underline">
              <span className="flex min-w-0 items-center gap-2">
                <FileText aria-hidden="true" className="size-4 shrink-0" />
                Документи
                <Badge variant="outline">{stage.documents.length}</Badge>
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-3 pt-3 pb-2">
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                Це робочий список саме для цього етапу. Відмічайте позицію не
                тоді, коли файл просто отримано, а після перевірки його змісту,
                дати, форми та факту, який він має підтвердити.
              </p>
              <FieldSet className="mt-4 gap-0">
                <FieldLegend className="sr-only">
                  Документи етапу «{stage.title}»
                </FieldLegend>
                <FieldGroup className="gap-0 divide-y border-y">
                  {stage.documents.map((document, documentIndex) => {
                    const checkboxId = `${stage.id}-document-${documentIndex}`

                    return (
                      <Field
                        key={`${legalTextPlainText(document.item)}-${legalTextPlainText(document.owner)}`}
                        orientation="horizontal"
                        className="items-start py-4"
                      >
                        <Checkbox id={checkboxId} className="mt-1" />
                        <FieldContent>
                          <div className="flex flex-wrap items-center gap-2">
                            <FieldLabel
                              htmlFor={checkboxId}
                              className="text-base"
                            >
                              <LegalText
                                text={document.item}
                                context="reference-section"
                              />
                            </FieldLabel>
                            <DocumentStatus document={document} />
                          </div>
                          <FieldDescription>
                            <strong className="font-medium text-foreground">
                              Навіщо на цьому етапі:
                            </strong>{" "}
                            <LegalText text={document.proves} />
                          </FieldDescription>
                          <dl className="mt-2 grid gap-2 text-sm leading-6 lg:grid-cols-2">
                            <div>
                              <dt className="font-medium">Хто і коли</dt>
                              <dd className="text-muted-foreground">
                                <LegalText text={document.owner} />
                              </dd>
                            </div>
                            <div>
                              <dt className="font-medium">Правова роль</dt>
                              <dd className="text-muted-foreground">
                                <LegalText
                                  text={document.law}
                                  context="reference-section"
                                />
                              </dd>
                            </div>
                          </dl>
                          <p className="mt-2 text-sm leading-6">
                            <strong>Перед відміткою:</strong>{" "}
                            <LegalText text={documentChecklistHint(document)} />
                          </p>
                        </FieldContent>
                      </Field>
                    )
                  })}
                </FieldGroup>
              </FieldSet>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : null}

      {stage.risks.length > 0 ? (
        <Accordion>
          <AccordionItem value={`risks-${stage.id}`}>
            <AccordionTrigger className="items-center bg-secondary px-3 py-2 text-secondary-foreground hover:bg-secondary/80 hover:no-underline">
              <span className="flex min-w-0 items-center gap-2">
                <Scale aria-hidden="true" className="size-4 shrink-0" />
                Ризики
                <Badge variant="outline">{stage.risks.length}</Badge>
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-3 pt-3 pb-2">
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                Ризик — це не загальне попередження, а конкретне місце контролю.
                Перед переходом до наступного етапу встановіть факт, перевірте
                доказ і запишіть, як усувається невизначеність.
              </p>
              <ol className="mt-4 divide-y border-y">
                {stage.risks.map((risk, riskIndex) => (
                  <li key={risk.title} className="py-4">
                    <h4 className="text-sm font-semibold">
                      {riskIndex + 1}. {risk.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      <LegalText text={risk.explanation} />
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      <strong>Що перевірити:</strong>{" "}
                      <LegalText text={risk.check} />
                    </p>
                  </li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : null}
    </div>
  )
}

export function CaseStages({ stages }: { stages: CaseGuideStage[] }) {
  return (
    <div className="mt-6">
      {stages.map((stage, index) => (
        <section
          key={stage.id}
          id={`case-stage-${stage.id}`}
          aria-labelledby={`case-stage-${stage.id}-heading`}
          className="relative scroll-mt-28 border-t py-7 first:border-t-0 first:pt-0"
        >
          <div
            aria-hidden="true"
            className="absolute top-7 -left-12 hidden size-8 items-center justify-center rounded-full border bg-background text-sm font-semibold lg:flex"
          >
            {index + 1}
          </div>
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Етап {index + 1} · <LegalText text={stage.question} />
          </p>
          <h3 id={`case-stage-${stage.id}-heading`} className="mt-2">
            {stage.title}
          </h3>

          {stage.explanation.map((paragraph) => (
            <p key={legalTextPlainText(paragraph)}>
              <LegalText text={paragraph} />
            </p>
          ))}

          <div
            data-not-typeset
            className="mt-4 grid border-y text-sm md:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="py-3 md:pr-4">
              <p className="text-xs font-medium text-muted-foreground">
                Хто веде етап
              </p>
              <p className="mt-1 font-medium">
                <LegalText text={stage.actor} />
              </p>
            </div>
            <div className="border-t py-3 md:border-t-0 md:border-l md:pl-4">
              <p className="text-xs font-medium text-muted-foreground">
                Результат етапу
              </p>
              <p className="mt-1 font-medium">
                <LegalText text={stage.outcome} />
              </p>
            </div>
          </div>

          <h4 className="mt-4 text-base font-semibold">
            Що відбувається по черзі
          </h4>
          <ol
            data-not-typeset
            className="mt-3 divide-y border-y text-sm leading-6"
          >
            {stage.actions.map((action, actionIndex) => (
              <li
                key={legalTextPlainText(action)}
                className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-2 py-2"
              >
                <span className="text-muted-foreground">{actionIndex + 1}</span>
                <span>
                  <LegalText text={action} />
                </span>
              </li>
            ))}
          </ol>

          <StageDetails stage={stage} />
          <RelatedMaterials stage={stage} />
        </section>
      ))}
    </div>
  )
}
