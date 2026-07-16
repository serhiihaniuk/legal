import {
  LegalLearningModuleContent,
  legalLearningContentToc,
} from "~/features/law-library/ui/legal-learning-module-content"
import { listProvisions } from "~/data/legal-library"
import type { LegalExplanation } from "~/data/legal-library/contracts"
import { kpaArticleIndex } from "~/data/legal-library/learning/kpa"
import {
  kpaGuideModuleArticles,
  type KpaGuideModuleId,
} from "~/data/legal-library/learning/kpa"
import {
  kpaGuideLegalState,
  kpaGuideLessons,
  kpaGuideModules,
} from "~/data/legal-library/learning/kpa"
import { parseLegalProvisionReference } from "~/data/legal-library/query"
import {
  toLegalExplanationView,
  type LegalLearningModuleView,
} from "~/features/law-library/model/legal-learning-view"

export const kpaLearningContentToc = legalLearningContentToc

const kpaProvisionById = new Map(
  listProvisions("kpa").map((provision) => [provision.id, provision])
)

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
  articleExplanations: LegalExplanation<"kpa">[]
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
        const provision = kpaProvisionById.get(explanation.provisionId)
        const article = provision?.locator.replace(/^Art\.\s*/u, "")
        const entry = kpaArticleIndex.find(
          (candidate) => candidate.article === article
        )
        return toLegalExplanationView({
          explanation,
          id: `article-${article ?? explanation.provisionId}`,
          reference: article
            ? `art. ${article} KPA`
            : (provision?.locator ?? explanation.provisionId),
          title: entry?.shortTitle ?? explanation.summary,
          target: parseLegalProvisionReference({
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: explanation.provisionId,
          }),
        })
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
