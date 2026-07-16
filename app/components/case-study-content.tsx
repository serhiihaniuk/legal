import { ArrowRight, ArrowUpRight, Clock3, FileText, Scale } from "lucide-react"
import { Link } from "react-router"

import { LegalText, OfficialSourceEntry } from "~/components/references"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
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
import { Separator } from "~/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import type {
  CaseGuideCondition,
  CaseGuideDeadline,
  CaseGuideDocument,
  CaseGuideRoute,
  CaseGuideSource,
  CaseGuideStage,
} from "~/data/case-guide-types"
import {
  legalTextPlainText,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"
import type { OfficialSource } from "~/data/legal-types"
import { DocumentArticle } from "~/components/patterns/document-content"
import { DefinitionRowGrid } from "~/components/patterns/definition-rows"

export const caseStudySectionIds = {
  overview: "case-overview",
  facts: "case-facts",
  choice: "case-choice",
  stages: "case-stages",
  conditions: "case-conditions",
  registers: "case-registers",
  branches: "case-branches",
  sources: "case-sources",
} as const

export const caseStudyToc = [
  { href: `#${caseStudySectionIds.overview}`, label: "Огляд маршруту" },
  { href: `#${caseStudySectionIds.facts}`, label: "Факти для перевірки" },
  { href: `#${caseStudySectionIds.choice}`, label: "Чому ця підстава" },
  { href: `#${caseStudySectionIds.stages}`, label: "Етапи справи" },
  { href: `#${caseStudySectionIds.conditions}`, label: "Матриця умов" },
  { href: `#${caseStudySectionIds.registers}`, label: "Документи і строки" },
  { href: `#${caseStudySectionIds.branches}`, label: "Негативні гілки" },
  { href: `#${caseStudySectionIds.sources}`, label: "Офіційні джерела" },
] as const

export function caseStudyTableOfContents(route: CaseGuideRoute) {
  const stages = route.stages.map((stage, index) => ({
    href: `#case-stage-${stage.id}`,
    label: `${index + 1}. ${stage.title}`,
    depth: 3 as const,
  }))

  return [...caseStudyToc.slice(0, 4), ...stages, ...caseStudyToc.slice(4)]
}

export function caseStudyStageNavigation(route: CaseGuideRoute) {
  return route.stages.map((stage, index) => ({
    href: `#case-stage-${stage.id}`,
    label: `${index + 1}. ${stage.title}`,
  }))
}

type CaseStudyContentProps = {
  route: CaseGuideRoute
  updatedAt: string
}

function displayDate(value: string) {
  const [year, month, day] = value.split("-")
  return year && month && day ? `${day}.${month}.${year}` : value
}

function documentStatusVariant(level: string) {
  if (level === "required") return "default" as const
  if (level === "conditional") return "secondary" as const
  return "outline" as const
}

function conditionStatusLabel(status: CaseGuideCondition["status"]) {
  if (status === "confirmed") return "підтверджено"
  if (status === "conditional") return "залежить від підстави"
  return "перевірити"
}

function DocumentStatus({ document }: { document: CaseGuideDocument }) {
  return (
    <Badge variant={documentStatusVariant(document.level)}>
      {document.status}
    </Badge>
  )
}

function documentChecklistHint(document: CaseGuideDocument) {
  if (document.level === "conditional") {
    return "Спочатку зафіксуйте, яка обставина робить документ потрібним. Якщо вона є — перевірте актуальність, форму та зв’язок із конкретною умовою."
  }
  if (document.level === "control") {
    return "Збережіть фінальну версію, дату створення або подання та місце в актах. Це контрольний слід, а не заміна основного доказу."
  }
  if (document.level === "external") {
    return "Перевірте цей обов’язок окремо від pobytowego пакета: відповідальну особу, строк, канал виконання та підтвердження."
  }
  return "Перевірте повноту, чинність на потрібну дату, усі сторінки, підписи та узгодженість даних з рештою пакета."
}

function DocumentRegister({ documents }: { documents: CaseGuideDocument[] }) {
  if (documents.length === 0) {
    return (
      <p className="mt-5 border-y py-4 text-sm text-muted-foreground">
        Для цієї розвилки спочатку треба визначити точну підставу. Після цього
        реєстр документів формується з її умов, а не з універсального списку.
      </p>
    )
  }

  return (
    <div data-not-typeset className="mt-6">
      <div className="hidden border-y xl:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[21%]">Документ / дія</TableHead>
              <TableHead className="w-[12%]">Статус</TableHead>
              <TableHead className="w-[23%]">Хто і коли</TableHead>
              <TableHead className="w-[25%]">Що доводить</TableHead>
              <TableHead>Правова роль</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((document) => (
              <TableRow
                key={`${legalTextPlainText(document.item)}-${legalTextPlainText(document.owner)}`}
              >
                <TableCell className="align-top font-medium whitespace-normal">
                  <LegalText text={document.item} />
                </TableCell>
                <TableCell className="align-top whitespace-normal">
                  <DocumentStatus document={document} />
                </TableCell>
                <TableCell className="align-top whitespace-normal text-muted-foreground">
                  <LegalText text={document.owner} />
                </TableCell>
                <TableCell className="align-top whitespace-normal">
                  <LegalText text={document.proves} />
                </TableCell>
                <TableCell className="align-top whitespace-normal text-muted-foreground">
                  <LegalText text={document.law} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="divide-y border-y xl:hidden">
        {documents.map((document) => (
          <article
            key={`${legalTextPlainText(document.item)}-${legalTextPlainText(document.owner)}`}
            className="py-4"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold">
                <LegalText text={document.item} />
              </h3>
              <DocumentStatus document={document} />
            </div>
            <dl className="mt-3 grid gap-2 text-sm leading-6">
              <div>
                <dt className="inline font-medium">Хто і коли:</dt>{" "}
                <dd className="inline text-muted-foreground">
                  <LegalText text={document.owner} />
                </dd>
              </div>
              <div>
                <dt className="inline font-medium">Доводить:</dt>{" "}
                <dd className="inline">
                  <LegalText text={document.proves} />
                </dd>
              </div>
              <div>
                <dt className="inline font-medium">Правова роль:</dt>{" "}
                <dd className="inline text-muted-foreground">
                  <LegalText text={document.law} />
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  )
}

function DeadlineRegister({ deadlines }: { deadlines: CaseGuideDeadline[] }) {
  if (deadlines.length === 0) {
    return (
      <p className="mt-5 border-y py-4 text-sm text-muted-foreground">
        Точний строк з’явиться лише після вибору конкретної підстави і події,
        яка запускає відлік.
      </p>
    )
  }

  return (
    <div data-not-typeset className="mt-6 divide-y border-y">
      {deadlines.map((deadline) => (
        <article
          key={`${legalTextPlainText(deadline.period)}-${legalTextPlainText(deadline.trigger)}`}
          className="grid gap-4 py-5 lg:grid-cols-[9rem_minmax(0,1fr)_minmax(0,1fr)]"
        >
          <div className="py-2 sm:px-3">
            <Clock3
              aria-hidden="true"
              className="size-5 text-muted-foreground"
            />
            <h3 className="mt-2 text-base font-semibold">
              <LegalText text={deadline.period} />
            </h3>
          </div>
          <div className="grid gap-3 text-sm leading-6">
            <p>
              <strong>Початок відліку:</strong>{" "}
              <span className="text-muted-foreground">
                <LegalText text={deadline.trigger} />
              </span>
            </p>
            <p>
              <LegalText text={deadline.action} />
            </p>
          </div>
          <div className="grid gap-2 text-sm leading-6">
            <p className="border-l-2 border-primary pl-3">
              <strong>Якщо пропустити:</strong>{" "}
              <LegalText text={deadline.consequence} />
            </p>
            <p className="text-xs text-muted-foreground">
              <LegalText text={deadline.law} />
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

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
                              <LegalText text={document.item} />
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
                                <LegalText text={document.law} />
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

function CaseStages({ stages }: { stages: CaseGuideStage[] }) {
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

type DefinitionGridItem = { label: string; value: LegalTextValue }

function definitionRows(items: readonly DefinitionGridItem[]) {
  return items.map((item) => ({
    id: item.label,
    term: item.label,
    description: <LegalText text={item.value} />,
  }))
}

function ConditionsMatrix({
  conditions,
}: {
  conditions: CaseGuideCondition[]
}) {
  if (conditions.length === 0) {
    return (
      <p className="mt-5 border-y py-4 text-sm text-muted-foreground">
        У цій вкладці спочатку обирається точна спеціальна підстава. Лише після
        цього можна скласти коректну матрицю умов.
      </p>
    )
  }

  return (
    <div data-not-typeset className="mt-6">
      <div className="hidden border-y xl:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[22%]">Умова</TableHead>
              <TableHead className="w-[22%]">Факт у справі</TableHead>
              <TableHead className="w-[22%]">Доказ</TableHead>
              <TableHead className="w-[14%]">Стан</TableHead>
              <TableHead>Ризик / норма</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {conditions.map((condition) => (
              <TableRow
                key={`${legalTextPlainText(condition.condition)}-${legalTextPlainText(condition.law)}`}
              >
                <TableCell className="align-top font-medium whitespace-normal">
                  <LegalText text={condition.condition} />
                </TableCell>
                <TableCell className="align-top whitespace-normal">
                  <LegalText text={condition.modelFact} />
                </TableCell>
                <TableCell className="align-top whitespace-normal text-muted-foreground">
                  <LegalText text={condition.evidence} />
                </TableCell>
                <TableCell className="align-top whitespace-normal">
                  <Badge
                    variant={
                      condition.status === "confirmed" ? "secondary" : "outline"
                    }
                  >
                    {conditionStatusLabel(condition.status)}
                  </Badge>
                </TableCell>
                <TableCell className="align-top whitespace-normal text-muted-foreground">
                  <p>
                    <LegalText text={condition.risk} />
                  </p>
                  <p className="mt-2 text-xs">
                    <LegalText text={condition.law} />
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="divide-y border-y xl:hidden">
        {conditions.map((condition) => (
          <article
            key={`${legalTextPlainText(condition.condition)}-${legalTextPlainText(condition.law)}`}
            className="py-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-base font-semibold">
                <LegalText text={condition.condition} />
              </h3>
              <Badge
                variant={
                  condition.status === "confirmed" ? "secondary" : "outline"
                }
              >
                {conditionStatusLabel(condition.status)}
              </Badge>
            </div>
            <dl className="mt-3 grid gap-2 text-sm leading-6">
              <div>
                <dt className="inline font-medium">Факт:</dt>{" "}
                <dd className="inline">
                  <LegalText text={condition.modelFact} />
                </dd>
              </div>
              <div>
                <dt className="inline font-medium">Доказ:</dt>{" "}
                <dd className="inline text-muted-foreground">
                  <LegalText text={condition.evidence} />
                </dd>
              </div>
              <div>
                <dt className="inline font-medium">Ризик:</dt>{" "}
                <dd className="inline text-muted-foreground">
                  <LegalText text={condition.risk} />
                </dd>
              </div>
              <div>
                <dt className="inline font-medium">Норма:</dt>{" "}
                <dd className="inline text-muted-foreground">
                  <LegalText text={condition.law} />
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  )
}

export function CaseStudyContent({ route, updatedAt }: CaseStudyContentProps) {
  return (
    <DocumentArticle>
      <header id={caseStudySectionIds.overview}>
        <div
          data-not-typeset
          className="mb-3 flex flex-wrap items-center gap-2"
        >
          <Badge variant="secondary">Повний гайд по справі</Badge>
          <Badge variant="outline">{route.tab}</Badge>
          <span className="text-xs text-muted-foreground">
            Стан права: {displayDate(updatedAt)}
          </span>
        </div>

        <p className="text-sm font-medium text-muted-foreground">
          {route.eyebrow}
        </p>
        <h1>{route.title}</h1>
        <p className="text-muted-foreground">
          <LegalText text={route.subtitle} />
        </p>
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

        <div
          data-not-typeset
          className="mt-6 grid border-y text-sm md:grid-cols-2"
        >
          <div className="py-4 md:pr-5">
            <p className="text-xs font-medium text-muted-foreground">
              Кому підходить
            </p>
            <p className="mt-1 font-medium">
              <LegalText text={route.forWhom} />
            </p>
          </div>
          <div className="border-t py-4 md:border-t-0 md:border-l md:pl-5">
            <p className="text-xs font-medium text-muted-foreground">
              Коли не обирати автоматично
            </p>
            <p className="mt-1 font-medium">
              <LegalText text={route.notFor} />
            </p>
          </div>
        </div>

        <div
          data-not-typeset
          className="mt-5 overflow-hidden rounded-md border text-sm"
        >
          <DefinitionRowGrid items={definitionRows(route.metrics)} />
        </div>
      </header>

      <Separator data-not-typeset />

      <section
        id={caseStudySectionIds.facts}
        aria-labelledby="case-facts-heading"
      >
        <h2 id="case-facts-heading">Факти, які треба встановити у справі</h2>
        <p>
          <LegalText text={route.profile.description} />
        </p>
        <div
          data-not-typeset
          className="mt-5 overflow-hidden rounded-md border text-sm"
        >
          <dl>
            <div className="bg-muted/40 px-4 py-3">
              <dt className="text-xs font-medium text-muted-foreground">
                Профіль маршруту
              </dt>
              <dd className="mt-1 leading-6 font-medium">
                <LegalText text={route.profile.name} />
              </dd>
            </div>
            <DefinitionRowGrid items={definitionRows(route.profile.facts)} />
          </dl>
        </div>
        <aside className="mt-6 border-l-2 border-primary pl-4">
          <p>
            <strong>Що ще треба підтвердити.</strong>{" "}
            <LegalText text={route.profile.assumption} />
          </p>
        </aside>
      </section>

      <section
        id={caseStudySectionIds.choice}
        aria-labelledby="case-choice-heading"
      >
        <h2 id="case-choice-heading">Чому обираємо саме цю підставу</h2>
        <p>
          <LegalText text={route.choice.why} />
        </p>
        <div
          data-not-typeset
          className="mt-6 divide-y border-y text-sm leading-6"
        >
          <div className="grid gap-2 py-4 md:grid-cols-[11rem_minmax(0,1fr)]">
            <h3 className="text-sm font-semibold">Найближча альтернатива</h3>
            <p className="text-muted-foreground">
              <LegalText text={route.choice.closestAlternative} />
            </p>
          </div>
          <div className="grid gap-2 py-4 md:grid-cols-[11rem_minmax(0,1fr)]">
            <h3 className="text-sm font-semibold">Вирішальний критерій</h3>
            <p className="text-muted-foreground">
              <LegalText text={route.choice.gate} />
            </p>
          </div>
        </div>
      </section>

      <section
        id={caseStudySectionIds.stages}
        aria-labelledby="case-stages-heading"
      >
        <h2 id="case-stages-heading">Справа від першої перевірки до карти</h2>
        <p>
          Нижче — послідовний розбір механізму й робочий checklist. На кожному
          етапі видно, що орган або сторона робить, який результат потрібен, які
          документи треба зібрати й де перевірити ризики до переходу далі.
        </p>
        <CaseStages stages={route.stages} />
      </section>

      <section
        id={caseStudySectionIds.conditions}
        aria-labelledby="case-conditions-heading"
      >
        <h2 id="case-conditions-heading">Матриця умов маршруту</h2>
        <p>
          Тут правова умова з’єднана з фактом, який треба встановити, доказом і
          ризиком. Саме така матриця показує, чого справді бракує до рішення.
        </p>
        <ConditionsMatrix conditions={route.conditions} />
      </section>

      <section
        id={caseStudySectionIds.registers}
        aria-labelledby="case-registers-heading"
      >
        <h2 id="case-registers-heading">Документи й строки</h2>
        <p>
          Реєстри нижче збирають деталі з етапів в одному місці. Документ
          читається через факт, який він доводить; строк — через подію, яка
          запускає відлік.
        </p>
        <h3>Реєстр документів і доказів</h3>
        <DocumentRegister documents={route.documents} />
        <h3>Реєстр строків і наслідків</h3>
        <DeadlineRegister deadlines={route.deadlines} />
      </section>

      <section
        id={caseStudySectionIds.branches}
        aria-labelledby="case-branches-heading"
      >
        <h2 id="case-branches-heading">Негативні й альтернативні гілки</h2>
        <p>
          Негативна гілка починається не лише з відмови. Нею може бути
          неправильна підстава, формальний недолік, невиконана особиста дія або
          зміна ключового факту під час розгляду.
        </p>
        <div data-not-typeset className="mt-6 divide-y border-y">
          {route.negativeBranches.map((branch) => (
            <article key={branch.title} className="py-5">
              <h3 className="text-base font-semibold">{branch.title}</h3>
              <dl className="mt-3 grid gap-2 text-sm leading-6">
                <div>
                  <dt className="inline font-medium">Тригер:</dt>{" "}
                  <dd className="inline text-muted-foreground">
                    <LegalText text={branch.trigger} />
                  </dd>
                </div>
                <div>
                  <dt className="inline font-medium">Наслідок:</dt>{" "}
                  <dd className="inline">
                    <LegalText text={branch.consequence} />
                  </dd>
                </div>
                <div>
                  <dt className="inline font-medium">Реакція:</dt>{" "}
                  <dd className="inline text-muted-foreground">
                    <LegalText text={branch.response} />
                  </dd>
                </div>
              </dl>
              {branch.material ? (
                <div className="mt-4">
                  <Button
                    nativeButton={false}
                    variant="outline"
                    size="sm"
                    render={<Link to={branch.material.href} />}
                  >
                    {branch.material.label}
                    <ArrowRight data-icon="inline-end" aria-hidden="true" />
                  </Button>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section
        id={caseStudySectionIds.sources}
        aria-labelledby="case-sources-heading"
      >
        <h2 id="case-sources-heading">Офіційні джерела</h2>
        <p>
          Внутрішні матеріали пояснюють механізм, але юридичне твердження завжди
          звіряємо з актуальним офіційним текстом і датою факту.
        </p>
        <ul data-not-typeset className="not-typeset list-none p-0">
          {route.sources.map((source) => (
            <li key={source.url} className="border-t py-5 first:border-t-0">
              <OfficialSourceEntry
                source={source as CaseGuideSource as OfficialSource}
              />
            </li>
          ))}
        </ul>
      </section>
    </DocumentArticle>
  )
}
