import { ArrowRight } from "lucide-react"
import { Link, useLoaderData } from "react-router"

import { LegalText } from "~/components/legal-reference-text"
import { buttonVariants } from "~/components/ui/button"
import { caseGuideRouteById } from "~/data/case-guide-routes"
import { listEvidenceDocuments } from "~/data/document-library"
import { legalReferenceRegistry } from "~/data/legal-corpus/reference-registry.generated"

const journeySteps = [
  "Факт",
  "Поняття",
  "Норма",
  "Доказ",
  "Строк",
  "Дія",
  "Наслідок",
] as const

const atlasSections = [
  {
    number: "01",
    title: "KPA — процесуальна основа",
    description:
      "Тут вивчаємо, хто веде справу, як вона починається, як орган збирає докази, вручає письма, рахує строки та видає decyzję. Матеріальні умови конкретного pobytu шукаємо у спеціальному законі.",
    action: "Розпочати навчання",
    href: "/guide/kpa?module=system",
    start: true,
  },
  {
    number: "02",
    title: "Бібліотека права",
    description:
      "Повні тексти актів в актуальних редакціях: кожен przepis поруч із поясненням і офіційним джерелом PDF.",
    action: "Відкрити бібліотеку",
    href: "/law",
  },
  {
    number: "03",
    title: "Карта права",
    description:
      "Карта показує місце поняття у зв’язках pobyt, praca, KPA, dokumenty та praktyka. Використовуйте її, коли потрібно зрозуміти, до якої правової гілки належить питання.",
    action: "Відкрити карту",
    href: "/map",
  },
  {
    number: "04",
    title: "Документи",
    description:
      "Каталог пояснює, хто видає або готує документ, коли він потрібний, що підтверджує, чого не доводить і з чим його потрібно звірити.",
    action: "Відкрити документи",
    href: "/documents",
  },
  {
    number: "05",
    title: "Гайди по справах",
    description:
      "Кожен гайд поєднує кваліфікацію маршруту, умови, докази, timeline, wezwanie, строки, рішення та негативні гілки.",
    action: "Відкрити гайди",
    href: "/cases/cukr",
  },
  {
    number: "06",
    title: "План навчання",
    description:
      "Вісім модулів ведуть від перевірки актуального тексту права до самостійного аналізу повного dossier. Кожен модуль має завдання, результат і критерії перевірки.",
    action: "Відкрити план",
    href: "/study",
  },
] as const

const exampleFlow = [
  {
    label: "Факт",
    text: "Громадянка України перебуває у Польщі та працює на umowie o pracę.",
  },
  {
    label: "Два правові питання",
    text: "Окремо встановлюємо підставу pobytu і право виконувати конкретну роботу.",
  },
  {
    label: "Норма й умови",
    text: "Знаходимо матеріальну підставу, актуальну редакцію та процесуальні правила KPA.",
  },
  {
    label: "Докази",
    text: "До кожної істотної умови додаємо факт, документ, період і ризик суперечності.",
  },
  {
    label: "Дія",
    text: "Фіксуємо строк, комплект документів і наступну процесуальну дію.",
  },
] as const

export function loader() {
  const acts = Object.values(legalReferenceRegistry)
  return {
    documents: acts.length,
    provisions: acts.reduce((total, act) => total + act.provisionIds.length, 0),
    evidence: listEvidenceDocuments().length,
    routes: caseGuideRouteById.size,
  }
}

export function meta() {
  return [
    { title: "Legalizacja — навчальний атлас права" },
    {
      name: "description",
      content:
        "Атлас пояснює польські правові терміни простою українською і вчить переходити від юридичного тексту до контрольованого аналізу справи.",
    },
  ]
}

export default function Home() {
  const stats = useLoaderData<typeof loader>()
  const statItems = [
    { value: stats.documents, label: "актів права" },
    { value: stats.provisions, label: "приписів" },
    { value: stats.evidence, label: "доказових документів" },
    { value: stats.routes, label: "маршрутів справ" },
  ]

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pt-14 pb-24 sm:pt-24 lg:px-6">
      <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
        Навчальний атлас · Legalizacja cudzoziemców
      </p>
      <h1 className="mt-6 max-w-4xl font-display text-[2.6rem] leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl">
        Від юридичного тексту — до контрольованого аналізу справи
      </h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
        Атлас пояснює польські правові терміни простою українською і вчить
        працювати в одному незмінному порядку.
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-3">
        <Link
          to="/guide/kpa?module=system"
          className={buttonVariants({ size: "lg" })}
        >
          Розпочати з модуля 1 KPA
          <ArrowRight data-icon="inline-end" />
        </Link>
        <Link
          to="/law"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Відкрити бібліотеку права
        </Link>
      </div>

      <ol
        aria-label="Порядок аналізу справи"
        className="mt-16 flex flex-wrap items-baseline gap-y-2 border-y py-5 sm:mt-20"
      >
        {journeySteps.map((step, index) => (
          <li key={step} className="flex items-baseline">
            {index > 0 ? (
              <span aria-hidden className="mx-3 text-muted-foreground/50">
                →
              </span>
            ) : null}
            <span className="text-sm font-medium">
              <span className="mr-1.5 text-xs text-muted-foreground/60 tabular-nums">
                {index + 1}
              </span>
              {step}
            </span>
          </li>
        ))}
      </ol>

      <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:flex sm:gap-14">
        {statItems.map((item) => (
          <div key={item.label}>
            <dd className="font-display text-4xl tracking-tight tabular-nums">
              {item.value.toLocaleString("uk-UA")}
            </dd>
            <dt className="mt-1 text-xs tracking-[0.14em] text-muted-foreground uppercase">
              {item.label}
            </dt>
          </div>
        ))}
      </dl>

      <section aria-labelledby="atlas-structure-title" className="mt-24">
        <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
          Як влаштований атлас
        </p>
        <h2
          id="atlas-structure-title"
          className="mt-4 max-w-2xl font-display text-3xl tracking-tight sm:text-4xl"
        >
          Шість розділів виконують різні завдання
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
          Не потрібно читати все одночасно. KPA дає процесуальну основу,
          бібліотека тримає актуальний текст, карта орієнтує у системі,
          документи пояснюють докази, справа показує повний маршрут, а план
          навчання задає послідовність.
        </p>

        <div className="mt-10 grid gap-px border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {atlasSections.map((section) => (
            <Link
              key={section.number}
              to={section.href}
              className="group flex flex-col bg-background p-6 transition-colors hover:bg-muted/50 sm:p-8"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-muted-foreground tabular-nums">
                  {section.number}
                </span>
                {"start" in section ? (
                  <span className="border px-1.5 py-0.5 text-micro tracking-[0.14em] text-muted-foreground uppercase">
                    Старт тут
                  </span>
                ) : null}
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-tight">
                {section.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                <LegalText text={section.description} />
              </p>
              <span className="mt-8 flex items-center gap-1.5 text-sm font-medium text-primary">
                {section.action}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="example-flow-title" className="mt-24">
        <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
          Як виглядає робочий аналіз
        </p>
        <h2
          id="example-flow-title"
          className="mt-4 max-w-2xl font-display text-3xl tracking-tight sm:text-4xl"
        >
          Один факт проходить через п’ять кроків
        </h2>
        <ol className="mt-10 divide-y border-y">
          {exampleFlow.map((step, index) => (
            <li
              key={step.label}
              className="grid gap-2 py-6 sm:grid-cols-[4rem_12rem_minmax(0,1fr)] sm:gap-6"
            >
              <span className="font-display text-2xl text-muted-foreground/40 tabular-nums">
                0{index + 1}
              </span>
              <p className="font-medium sm:pt-1">{step.label}</p>
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:pt-1.5">
                <LegalText text={step.text} />
              </p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  )
}
