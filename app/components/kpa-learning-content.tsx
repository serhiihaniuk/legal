import {
  LegalLearningModuleContent,
  legalLearningContentToc,
} from "~/components/legal-learning-module-content"
import type { KpaArticleExplanation } from "~/data/kpa-article-explanations"
import { kpaArticleIndex } from "~/data/kpa-article-index"
import {
  kpaGuideModuleArticles,
  type KpaGuideModuleId,
} from "~/data/kpa-guide-module-articles"
import {
  kpaGuideLegalState,
  kpaGuideLessons,
  kpaGuideModules,
} from "~/data/kpa-guide-data"
import { parseLegalProvisionReference } from "~/data/legal-library/query"
import type { LegalLearningModuleView } from "~/data/legal-library/learning/view-types"

export const kpaLearningContentToc = legalLearningContentToc

const superscriptDigits: Record<string, string> = {
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
}

function kpaProvisionReference(article: string) {
  const normalized = article.toLocaleLowerCase("pl-PL")
  const base = normalized.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+$/u, "")
  const suffix = normalized.slice(base.length)
  const key = suffix
    ? `${base}-${[...suffix].map((digit) => superscriptDigits[digit]).join("-")}`
    : base
  return parseLegalProvisionReference({
    kind: "legal-provision",
    documentId: "kpa",
    provisionId: `kpa-art-${key}`,
  })
}

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

  const moduleView: LegalLearningModuleView = {
    order: guideModule.order,
    title: guideModule.title,
    polish: guideModule.polish,
    provisionScope: guideModule.articles,
    legalState: kpaGuideLegalState,
    outcome: guideModule.outcome,
    stage: moduleContext.stage,
    positionIntro: layers.beginner.practice,
    question: guideModule.outcome,
    neededWhen: layers.practical.practice,
    boundary: layers.beginner.pitfall,
    courseTitle:
      guideModule.id === "system" ? "Карта всього курсу KPA" : undefined,
    courseDescription:
      guideModule.id === "system"
        ? "Курс іде тим самим шляхом, яким рухається адміністративна справа: від визначення правил до доказів, рішення та контролю."
        : undefined,
    coursePhases: guideModule.id === "system" ? kpaCoursePhases : undefined,
    mechanismParagraphs: lesson.paragraphs,
    layers: [
      { label: "Основне правило", text: layers.beginner.law },
      {
        label: "Як воно працює на практиці",
        text: layers.practical.law,
      },
      {
        label: "Межа або важливий виняток",
        text: layers.advanced.law,
      },
    ],
    terms: lesson.terms,
    articleGroups: lesson.articles,
    provisionGuide: {
      countLabel: `${articleExplanations.length} ${articleExplanations.length === 1 ? "стаття" : "статей"} у цьому модулі`,
      title: "Стаття за статтею",
      description:
        "Відкрийте статтю, щоб побачити її реальні структурні частини, процесуальний наслідок і значення для адміністративної справи іноземця.",
      items: articleExplanations.map((explanation) => {
        const entry = kpaArticleIndex.find(
          (article) => article.article === explanation.article
        )
        return {
          id: `article-${explanation.article}`,
          reference: `art. ${explanation.article} KPA`,
          title: entry?.shortTitle ?? explanation.summary,
          summary: explanation.summary,
          rules: explanation.rules,
          legalEffect: explanation.legalEffect,
          foreignersCase: explanation.foreignersCase,
          target: kpaProvisionReference(explanation.article),
        }
      }),
    },
    caseExample: lesson.caseExample,
    pitfalls: [
      layers.beginner.pitfall,
      layers.practical.pitfall,
      layers.advanced.pitfall,
    ],
    method: guideModule.method,
  }

  return (
    <LegalLearningModuleContent
      module={moduleView}
      navigation={{
        previousLabel: previousModule
          ? `Модуль ${previousModule.order}`
          : "Початок",
        nextLabel: nextModule ? `Модуль ${nextModule.order}` : "Кінець",
        onPrevious: previousModule
          ? () => onSelectModule(previousModule.id)
          : undefined,
        onNext: nextModule ? () => onSelectModule(nextModule.id) : undefined,
      }}
    />
  )
}
