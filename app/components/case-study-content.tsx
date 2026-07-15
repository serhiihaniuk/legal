import { ArrowRight, Clock3, ExternalLink, FileText, Scale } from "lucide-react"
import { Link } from "react-router"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
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
  CaseGuideRoute,
  CaseGuideStage,
} from "~/data/case-guide-types"
import type { CaseDeadline, CaseDocument } from "~/data/legal-types"

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
  { href: `#${caseStudySectionIds.facts}`, label: "Модельні факти" },
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

function DocumentStatus({ document }: { document: CaseDocument }) {
  return (
    <Badge variant={documentStatusVariant(document.level)}>
      {document.status}
    </Badge>
  )
}

function DocumentRegister({ documents }: { documents: CaseDocument[] }) {
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
              <TableRow key={`${document.item}-${document.owner}`}>
                <TableCell className="align-top font-medium whitespace-normal">
                  {document.item}
                </TableCell>
                <TableCell className="align-top whitespace-normal">
                  <DocumentStatus document={document} />
                </TableCell>
                <TableCell className="align-top whitespace-normal text-muted-foreground">
                  {document.owner}
                </TableCell>
                <TableCell className="align-top whitespace-normal">
                  {document.proves}
                </TableCell>
                <TableCell className="align-top whitespace-normal text-muted-foreground">
                  {document.law}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="divide-y border-y xl:hidden">
        {documents.map((document) => (
          <article key={`${document.item}-${document.owner}`} className="py-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold">{document.item}</h3>
              <DocumentStatus document={document} />
            </div>
            <dl className="mt-3 grid gap-2 text-sm leading-6">
              <div>
                <dt className="inline font-medium">Хто і коли:</dt>{" "}
                <dd className="inline text-muted-foreground">
                  {document.owner}
                </dd>
              </div>
              <div>
                <dt className="inline font-medium">Доводить:</dt>{" "}
                <dd className="inline">{document.proves}</dd>
              </div>
              <div>
                <dt className="inline font-medium">Правова роль:</dt>{" "}
                <dd className="inline text-muted-foreground">{document.law}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  )
}

function DeadlineRegister({ deadlines }: { deadlines: CaseDeadline[] }) {
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
          key={`${deadline.period}-${deadline.trigger}`}
          className="grid gap-4 py-5 lg:grid-cols-[9rem_minmax(0,1fr)_minmax(0,1fr)]"
        >
          <div className="py-2 sm:px-3">
            <Clock3
              aria-hidden="true"
              className="size-5 text-muted-foreground"
            />
            <h3 className="mt-2 text-base font-semibold">{deadline.period}</h3>
          </div>
          <div className="grid gap-3 text-sm leading-6">
            <p>
              <strong>Початок відліку:</strong>{" "}
              <span className="text-muted-foreground">{deadline.trigger}</span>
            </p>
            <p>{deadline.action}</p>
          </div>
          <div className="grid gap-2 text-sm leading-6">
            <p className="border-l-2 border-primary pl-3">
              <strong>Якщо пропустити:</strong> {deadline.consequence}
            </p>
            <p className="text-xs text-muted-foreground">{deadline.law}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

function RelatedMaterials({ stage }: { stage: CaseGuideStage }) {
  if (stage.materials.length === 0) return null

  return (
    <div className="mt-6 border-y" data-not-typeset>
      <p className="py-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        Пов’язані матеріали
      </p>
      <div className="divide-y">
        {stage.materials.map((material) => (
          <div
            key={`${stage.id}-${material.href}`}
            className="grid gap-3 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
          >
            <div className="min-w-0">
              <h4 className="text-sm font-semibold">{material.label}</h4>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {material.description}
              </p>
            </div>
            <Button
              nativeButton={false}
              variant="outline"
              size="sm"
              render={<Link to={material.href} />}
            >
              Відкрити
              <ArrowRight data-icon="inline-end" aria-hidden="true" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

function StageDetails({ stage }: { stage: CaseGuideStage }) {
  if (stage.documents.length === 0 && stage.risks.length === 0) return null

  return (
    <Accordion data-not-typeset className="mt-5 border-y">
      <AccordionItem value={`details-${stage.id}`}>
        <AccordionTrigger className="hover:no-underline">
          Документи й ризики цього етапу
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid gap-6 text-sm leading-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 flex items-center gap-2 font-semibold">
                <FileText aria-hidden="true" className="size-4" />
                Що тримати в актах
              </h4>
              <ul className="grid gap-2 text-muted-foreground">
                {stage.documents.map((document) => (
                  <li key={document}>• {document}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 flex items-center gap-2 font-semibold">
                <Scale aria-hidden="true" className="size-4" />
                Де найчастіше ламається справа
              </h4>
              <ul className="grid gap-2 text-muted-foreground">
                {stage.risks.map((risk) => (
                  <li key={risk}>• {risk}</li>
                ))}
              </ul>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

function CaseStages({ stages }: { stages: CaseGuideStage[] }) {
  return (
    <div className="mt-8">
      {stages.map((stage, index) => (
        <section
          key={stage.id}
          id={`case-stage-${stage.id}`}
          aria-labelledby={`case-stage-${stage.id}-heading`}
          className="relative scroll-mt-28 border-t py-10 first:border-t-0 first:pt-0"
        >
          <div
            aria-hidden="true"
            className="absolute top-10 -left-12 hidden size-8 items-center justify-center rounded-full border bg-background text-sm font-semibold lg:flex"
          >
            {index + 1}
          </div>
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Етап {index + 1} · {stage.question}
          </p>
          <h3 id={`case-stage-${stage.id}-heading`} className="mt-2">
            {stage.title}
          </h3>

          {stage.explanation.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div
            data-not-typeset
            className="mt-6 grid border-y text-sm md:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="py-4 md:pr-5">
              <p className="text-xs font-medium text-muted-foreground">
                Хто веде етап
              </p>
              <p className="mt-1 font-medium">{stage.actor}</p>
            </div>
            <div className="border-t py-4 md:border-t-0 md:border-l md:pl-5">
              <p className="text-xs font-medium text-muted-foreground">
                Результат етапу
              </p>
              <p className="mt-1 font-medium">{stage.outcome}</p>
            </div>
          </div>

          <h4 className="mt-6 text-base font-semibold">
            Що відбувається по черзі
          </h4>
          <ol
            data-not-typeset
            className="mt-3 divide-y border-y text-sm leading-6"
          >
            {stage.actions.map((action, actionIndex) => (
              <li
                key={action}
                className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-2 py-3"
              >
                <span className="text-muted-foreground">{actionIndex + 1}</span>
                <span>{action}</span>
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
              <TableHead className="w-[22%]">Факт у моделі</TableHead>
              <TableHead className="w-[22%]">Доказ</TableHead>
              <TableHead className="w-[14%]">Стан</TableHead>
              <TableHead>Ризик / норма</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {conditions.map((condition) => (
              <TableRow key={`${condition.condition}-${condition.law}`}>
                <TableCell className="align-top font-medium whitespace-normal">
                  {condition.condition}
                </TableCell>
                <TableCell className="align-top whitespace-normal">
                  {condition.modelFact}
                </TableCell>
                <TableCell className="align-top whitespace-normal text-muted-foreground">
                  {condition.evidence}
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
                  <p>{condition.risk}</p>
                  <p className="mt-2 text-xs">{condition.law}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="divide-y border-y xl:hidden">
        {conditions.map((condition) => (
          <article
            key={`${condition.condition}-${condition.law}`}
            className="py-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-base font-semibold">{condition.condition}</h3>
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
                <dd className="inline">{condition.modelFact}</dd>
              </div>
              <div>
                <dt className="inline font-medium">Доказ:</dt>{" "}
                <dd className="inline text-muted-foreground">
                  {condition.evidence}
                </dd>
              </div>
              <div>
                <dt className="inline font-medium">Ризик:</dt>{" "}
                <dd className="inline text-muted-foreground">
                  {condition.risk}
                </dd>
              </div>
              <div>
                <dt className="inline font-medium">Норма:</dt>{" "}
                <dd className="inline text-muted-foreground">
                  {condition.law}
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
    <article className="typeset typeset-docs w-full pb-16 sm:pb-0">
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
        <p className="text-muted-foreground">{route.subtitle}</p>
        {route.overview.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <blockquote>
          <p>
            <strong>Результат маршруту.</strong> {route.result}
          </p>
          <p>
            Це модельна навчальна справа. Перед роботою з реальною особою
            потрібно заново перевірити факти, актуальну редакцію норм і
            документи.
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
            <p className="mt-1 font-medium">{route.forWhom}</p>
          </div>
          <div className="border-t py-4 md:border-t-0 md:border-l md:pl-5">
            <p className="text-xs font-medium text-muted-foreground">
              Коли не обирати автоматично
            </p>
            <p className="mt-1 font-medium">{route.notFor}</p>
          </div>
        </div>

        <dl
          data-not-typeset
          className="mt-5 grid border-y text-sm sm:grid-cols-2"
        >
          {route.metrics.map((metric) => (
            <div
              key={metric.label}
              className="border-t py-3 first:border-t-0 sm:px-3"
            >
              <dt className="text-xs text-muted-foreground">{metric.label}</dt>
              <dd className="mt-1 font-medium">{metric.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <Separator data-not-typeset />

      <section
        id={caseStudySectionIds.facts}
        aria-labelledby="case-facts-heading"
      >
        <h2 id="case-facts-heading">Модельні факти цієї справи</h2>
        <p>{route.profile.description}</p>
        <dl
          data-not-typeset
          className="mt-5 grid border-y text-sm sm:grid-cols-2"
        >
          <div className="py-3 sm:px-3">
            <dt className="text-xs text-muted-foreground">Модельна особа</dt>
            <dd className="mt-1 font-medium">{route.profile.name}</dd>
          </div>
          {route.profile.facts.map((fact) => (
            <div key={fact.label} className="border-t py-3 sm:px-3">
              <dt className="text-xs text-muted-foreground">{fact.label}</dt>
              <dd className="mt-1 font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <aside className="mt-6 border-l-2 border-primary pl-4">
          <p>
            <strong>Що в моделі ще треба довести.</strong>{" "}
            {route.profile.assumption}
          </p>
        </aside>
      </section>

      <section
        id={caseStudySectionIds.choice}
        aria-labelledby="case-choice-heading"
      >
        <h2 id="case-choice-heading">Чому обираємо саме цю підставу</h2>
        <p>{route.choice.why}</p>
        <div
          data-not-typeset
          className="mt-6 divide-y border-y text-sm leading-6"
        >
          <div className="grid gap-2 py-4 md:grid-cols-[11rem_minmax(0,1fr)]">
            <h3 className="text-sm font-semibold">Найближча альтернатива</h3>
            <p className="text-muted-foreground">
              {route.choice.closestAlternative}
            </p>
          </div>
          <div className="grid gap-2 py-4 md:grid-cols-[11rem_minmax(0,1fr)]">
            <h3 className="text-sm font-semibold">Вирішальний критерій</h3>
            <p className="text-muted-foreground">{route.choice.gate}</p>
          </div>
        </div>
      </section>

      <section
        id={caseStudySectionIds.stages}
        aria-labelledby="case-stages-heading"
      >
        <h2 id="case-stages-heading">Справа від першої перевірки до карти</h2>
        <p>
          Нижче — не checklist, а послідовний розбір механізму. На кожному етапі
          видно, що орган або сторона робить, який результат потрібен і де
          відкрити пов’язаний матеріал у нашому атласі.
        </p>
        <CaseStages stages={route.stages} />
      </section>

      <section
        id={caseStudySectionIds.conditions}
        aria-labelledby="case-conditions-heading"
      >
        <h2 id="case-conditions-heading">Матриця умов маршруту</h2>
        <p>
          Тут правова умова вже з’єднана з конкретним модельним фактом, доказом
          і ризиком. Саме така матриця показує, чого справді бракує до рішення.
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
                    {branch.trigger}
                  </dd>
                </div>
                <div>
                  <dt className="inline font-medium">Наслідок:</dt>{" "}
                  <dd className="inline">{branch.consequence}</dd>
                </div>
                <div>
                  <dt className="inline font-medium">Реакція:</dt>{" "}
                  <dd className="inline text-muted-foreground">
                    {branch.response}
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
        <ul className="list-none p-0">
          {route.sources.map((source) => (
            <li key={source.url} className="border-t py-5 first:border-t-0">
              <h3>{source.label}</h3>
              <p>{source.note}</p>
              <div data-not-typeset>
                <Button
                  nativeButton={false}
                  variant="outline"
                  render={
                    <a href={source.url} target="_blank" rel="noreferrer" />
                  }
                >
                  Відкрити офіційне джерело
                  <ExternalLink data-icon="inline-end" aria-hidden="true" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
