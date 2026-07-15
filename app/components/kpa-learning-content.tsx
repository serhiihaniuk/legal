import { ArrowLeft, ArrowRight } from "lucide-react"

import { KpaModuleArticleGuide } from "~/components/kpa-module-article-guide"
import { Badge } from "~/components/ui/badge"
import { Button } from "~/components/ui/button"
import type { KpaArticleExplanation } from "~/data/kpa-article-explanations"
import {
  kpaGuideModuleArticles,
  type KpaGuideModuleId,
} from "~/data/kpa-guide-module-articles"
import {
  kpaGuideLegalState,
  kpaGuideLessons,
  kpaGuideModules,
} from "~/data/kpa-guide-data"

export const kpaLearningSectionIds = {
  overview: "kpa-overview",
  position: "kpa-position",
  mechanism: "kpa-mechanism",
  articles: "kpa-module-articles",
  example: "kpa-example",
  nuances: "kpa-nuances",
} as const

export const kpaLearningContentToc = [
  { href: `#${kpaLearningSectionIds.overview}`, label: "Про тему" },
  { href: `#${kpaLearningSectionIds.position}`, label: "Місце в процедурі" },
  { href: `#${kpaLearningSectionIds.mechanism}`, label: "Як це працює" },
  { href: `#${kpaLearningSectionIds.articles}`, label: "Стаття за статтею" },
  { href: `#${kpaLearningSectionIds.example}`, label: "Повний приклад" },
  { href: `#${kpaLearningSectionIds.nuances}`, label: "Нюанси й помилки" },
] as const

const kpaCoursePhases = [
  {
    number: "01",
    title: "Зрозуміти систему",
    description:
      "Сфера KPA, будова норми та загальні засади, за якими оцінюється вся поведінка органу.",
    modules: "Модулі 1–3",
  },
  {
    number: "02",
    title: "Встановити учасників і початок справи",
    description:
      "Компетентний орган, сторона, представник, спосіб wszczęcia та формальна перевірка podania.",
    modules: "Модулі 4–6",
  },
  {
    number: "03",
    title: "Провести справу",
    description:
      "Akta, докази, doręczenia, строки, wezwania та реакція на бездіяльність або затягування.",
    modules: "Модулі 7–10 і 13",
  },
  {
    number: "04",
    title: "Завершити й перевірити результат",
    description:
      "Decyzja, milczące załatwienie, odwołanie, надзвичайний перегляд і контроль WSA.",
    modules: "Модулі 11–12 і 14–15",
  },
] as const

export type KpaLearningContentProps = {
  selectedId: string
  articleExplanations: KpaArticleExplanation[]
  onSelectModule: (id: string) => void
}

export function KpaLearningContent({
  selectedId,
  articleExplanations,
  onSelectModule,
}: KpaLearningContentProps) {
  const guideModule = kpaGuideModules.find((item) => item.id === selectedId)
  const lesson = guideModule ? kpaGuideLessons[guideModule.id] : undefined

  if (!guideModule || !lesson) {
    return (
      <div role="alert" className="border-l-2 border-destructive pl-4 text-sm">
        <p className="font-medium">Не вдалося відкрити навчальний модуль.</p>
        <p className="mt-1 text-muted-foreground">
          Ідентифікатор <code>{selectedId}</code> відсутній у даних KPA.
        </p>
      </div>
    )
  }

  const moduleContext =
    kpaGuideModuleArticles[guideModule.id as KpaGuideModuleId]
  const layers = guideModule.layers
  const moduleIndex = kpaGuideModules.findIndex(
    (item) => item.id === guideModule.id
  )
  const previousModule = kpaGuideModules[moduleIndex - 1]
  const nextModule = kpaGuideModules[moduleIndex + 1]

  return (
    <article className="typeset typeset-docs w-full pb-16 sm:pb-0">
      <header id={kpaLearningSectionIds.overview}>
        <div
          data-not-typeset
          className="mb-3 flex flex-wrap items-center gap-2"
        >
          <Badge variant="secondary">Модуль {guideModule.order}</Badge>
          <Badge variant="outline">{guideModule.articles}</Badge>
          <span className="text-xs text-muted-foreground">
            Стан права: {kpaGuideLegalState}
          </span>
        </div>
        <h1>{guideModule.title}</h1>
        <p className="text-muted-foreground" lang="pl">
          {guideModule.polish}
        </p>
        <p className="text-lg leading-8">
          <strong>Після цього модуля:</strong> {guideModule.outcome}
        </p>
      </header>

      <section
        id={kpaLearningSectionIds.position}
        aria-labelledby="kpa-position-heading"
      >
        <p className="text-sm font-medium text-muted-foreground">
          {moduleContext.stage}
        </p>
        <h2 id="kpa-position-heading">Де ця тема знаходиться в процедурі</h2>
        <p>{layers.beginner.practice}</p>

        <div data-not-typeset className="not-typeset mt-6 divide-y border-y">
          <div className="grid gap-1 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
            <p className="text-sm font-medium">Питання модуля</p>
            <p className="text-sm leading-6 text-muted-foreground">
              {guideModule.outcome}
            </p>
          </div>
          <div className="grid gap-1 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
            <p className="text-sm font-medium">Коли це потрібно</p>
            <p className="text-sm leading-6 text-muted-foreground">
              {layers.practical.practice}
            </p>
          </div>
          <div className="grid gap-1 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
            <p className="text-sm font-medium">Чого тема не вирішує</p>
            <p className="text-sm leading-6 text-muted-foreground">
              {layers.beginner.pitfall}
            </p>
          </div>
        </div>

        {guideModule.id === "system" ? (
          <div data-not-typeset className="not-typeset mt-10">
            <h3 className="text-xl font-semibold tracking-tight">
              Карта всього курсу KPA
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
              Курс іде тим самим шляхом, яким рухається адміністративна справа:
              від визначення правил до доказів, рішення та контролю.
            </p>
            <ol className="mt-5 divide-y border-y">
              {kpaCoursePhases.map((phase) => (
                <li
                  key={phase.number}
                  className="grid gap-2 py-5 sm:grid-cols-[3rem_13rem_minmax(0,1fr)_auto] sm:items-start sm:gap-5"
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    {phase.number}
                  </span>
                  <strong className="text-sm leading-6">{phase.title}</strong>
                  <span className="text-sm leading-6 text-muted-foreground">
                    {phase.description}
                  </span>
                  <Badge variant="outline">{phase.modules}</Badge>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </section>

      <section
        id={kpaLearningSectionIds.mechanism}
        aria-labelledby="kpa-mechanism-heading"
      >
        <h2 id="kpa-mechanism-heading">Як працює цей правовий механізм</h2>
        {lesson.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <div data-not-typeset className="not-typeset mt-7 divide-y border-y">
          <div className="py-5">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Основне правило
            </p>
            <p className="mt-2 max-w-4xl text-base leading-7">
              {layers.beginner.law}
            </p>
          </div>
          <div className="py-5">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Як воно працює на практиці
            </p>
            <p className="mt-2 max-w-4xl text-base leading-7">
              {layers.practical.law}
            </p>
          </div>
          <div className="py-5">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Межа або важливий виняток
            </p>
            <p className="mt-2 max-w-4xl text-base leading-7">
              {layers.advanced.law}
            </p>
          </div>
        </div>

        <h3>Ключові поняття</h3>
        <dl>
          {lesson.terms.map((item) => (
            <div key={item.term}>
              <dt lang="pl">{item.term}</dt>
              <dd>{item.meaning}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        id={kpaLearningSectionIds.articles}
        aria-labelledby="kpa-module-articles-heading"
      >
        <h2 id="kpa-module-articles-heading">Як статті ділять цю тему</h2>
        <p>
          Спочатку подивіться на роль груп статей, а нижче відкривайте кожну
          норму окремо. Так видно і загальну конструкцію інституту, і точний
          зміст параграфів та пунктів.
        </p>
        <dl>
          {lesson.articles.map((article) => (
            <div key={article.reference}>
              <dt lang="pl">{article.reference}</dt>
              <dd>{article.role}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10">
          <KpaModuleArticleGuide explanations={articleExplanations} />
        </div>
      </section>

      <section
        id={kpaLearningSectionIds.example}
        aria-labelledby="kpa-example-heading"
      >
        <h2 id="kpa-example-heading">Повний приклад у справі іноземця</h2>
        <h3>{lesson.caseExample.title}</h3>
        <div data-not-typeset className="not-typeset mt-6 divide-y border-y">
          <div className="grid gap-2 py-5 sm:grid-cols-[3rem_8rem_minmax(0,1fr)] sm:gap-5">
            <span className="font-mono text-xs text-muted-foreground">01</span>
            <strong className="text-sm">Факти</strong>
            <p className="text-sm leading-6 text-muted-foreground">
              {lesson.caseExample.facts}
            </p>
          </div>
          <div className="grid gap-2 py-5 sm:grid-cols-[3rem_8rem_minmax(0,1fr)] sm:gap-5">
            <span className="font-mono text-xs text-muted-foreground">02</span>
            <strong className="text-sm">Аналіз</strong>
            <p className="text-sm leading-6 text-muted-foreground">
              {lesson.caseExample.analysis}
            </p>
          </div>
          <div className="grid gap-2 py-5 sm:grid-cols-[3rem_8rem_minmax(0,1fr)] sm:gap-5">
            <span className="font-mono text-xs text-muted-foreground">03</span>
            <strong className="text-sm">Висновок</strong>
            <p className="text-sm leading-6 text-foreground">
              {lesson.caseExample.lesson}
            </p>
          </div>
        </div>
      </section>

      <section
        id={kpaLearningSectionIds.nuances}
        aria-labelledby="kpa-nuances-heading"
      >
        <h2 id="kpa-nuances-heading">Нюанси й типові помилки</h2>
        <ul>
          <li>{layers.beginner.pitfall}</li>
          <li>{layers.practical.pitfall}</li>
          <li>{layers.advanced.pitfall}</li>
        </ul>

        <h3>Як застосувати знання до своєї справи</h3>
        <ol>
          {guideModule.method.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>
          <strong>Поглиблений рівень.</strong> {layers.advanced.focus}
        </p>
      </section>

      <nav
        data-not-typeset
        className="not-typeset flex items-center justify-between gap-4 border-t pt-6"
        aria-label="Навігація між модулями"
      >
        <Button
          type="button"
          variant="ghost"
          disabled={!previousModule}
          onClick={() => previousModule && onSelectModule(previousModule.id)}
        >
          <ArrowLeft data-icon="inline-start" aria-hidden="true" />
          {previousModule ? `Модуль ${previousModule.order}` : "Початок"}
        </Button>
        <Button
          type="button"
          variant="ghost"
          disabled={!nextModule}
          onClick={() => nextModule && onSelectModule(nextModule.id)}
        >
          {nextModule ? `Модуль ${nextModule.order}` : "Кінець"}
          <ArrowRight data-icon="inline-end" aria-hidden="true" />
        </Button>
      </nav>
    </article>
  )
}
