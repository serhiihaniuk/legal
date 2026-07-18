import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import { kpaLaw, mapTopicSources } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const kpaSourceReference = {
  kind: "official-source",
  sourceId: "eli-kpa",
} as const

type WezwanieWorkflowBody = LegalMapTopicBody

export const wezwanieWorkflowTopic: KnowledgeUnit<WezwanieWorkflowBody> =
  defineKnowledgeUnit({
    id: "map-topic:wezwanie-workflow",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "wezwanie-workflow" },
    },
    summary:
      "Перетвори лист на робочу таблицю. Кожна вимога отримує власну правову підставу, пояснення, доказ і номер додатка.",
    claims: [
      {
        id: "wezwanie-matrix",
        kind: "practical-inference",
        text: "Кожну вимогу wezwania треба пов’язати з нормою, фактом, доказом, строком і наслідком окремо.",
        basis: [{ reference: kpaSourceReference, locator: "Art. 50–56, 64" }],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: {
      title: "Алгоритм відповіді на wezwanie",
      polish: "żądanie → podstawa → dowód → odpowiedź",
      sources: [mapTopicSources.kpa],
      guide: {
        introduction: [
          "Процесуальна обробка wezwania складається з визначення виду кожної вимоги, її правової підстави, факту, доказу, строку та наслідку. Один лист може містити кілька юридично різних wezwania.",
        ],
        regulated: [
          kpaLaw.text`${kpaLaw.articleRange("50", "56", { start: "Art. 50", end: "56" })} KPA визначають загальну форму wezwania, ${kpaLaw.article("64", "art. 64")} KPA — усунення braków formalnych, а матеріальний закон — документи й факти, потрібні для конкретного дозволу.`,
        ],
        appliesWhen: [
          "Від моменту skutecznego doręczenia кореспонденції, яка вимагає документа, пояснення, особистої явки або виправлення подання.",
        ],
        conditions: [
          "Для кожного пункту існує окремий зв’язок: норма — юридична умова — відсутній або сумнівний факт — допустимий доказ — строк — наслідок.",
          "Відповідь і додатки ідентифікують справу, конкретний пункт wezwania, доказуваний період і джерело документа.",
        ],
        exceptions: [
          "Об’єктивна неможливість отримати документ не скасовує автоматично строк і не доводить матеріальної умови; процесуальне значення мають своєчасно подані обставини, докази перешкоди та допустима альтернатива.",
        ],
        consequences: [
          "Неповна відповідь оцінюється окремо за кожним пунктом: можливе pozostawienie bez rozpoznania, доказовий дефіцит, рішення на наявному матеріалі або інший прямо передбачений наслідок.",
        ],
        procedure: [
          "Послідовність охоплює фіксацію doręczenia, поділ листа на вимоги, юридичну класифікацію, матрицю доказів, реєстр додатків, своєчасне подання та збереження potwierdzenia nadania або UPP.",
        ],
        foreignersContext: [
          "У pobyt czasowy i praca окремо аналізуються braki formularza, особиста присутність, дані роботодавця, умови праці, дохід, страхування, місце проживання й актуальність мети pobytu; один доказ не замінює автоматично всі ці блоки.",
        ],
      } satisfies LegalNodeGuide,
      steps: [
        "Зафіксуй doręczenie й обчисли строк.",
        "Випиши кожну вимогу дослівно окремим рядком.",
        "Переклади юридичний термін у функціональне питання.",
        "Знайди матеріальну норму і норму процедури.",
        "Підбери докази та перевір їх узгодженість.",
        "Склади відповідь із нумерацією вимог і додатків.",
        "Збережи доказ подання.",
      ],
      documents: [
        "wezwanie",
        "підтвердження doręczenia",
        "таблиця вимог",
        "лист-відповідь",
        "перелік додатків",
        "доказ відправлення",
      ],
    },
  })

export default wezwanieWorkflowTopic

export const wezwanieWorkflowMapNode: LegalNode = {
  id: "wezwanie-workflow",
  title: wezwanieWorkflowTopic.body.title,
  polish: wezwanieWorkflowTopic.body.polish,
  summary: wezwanieWorkflowTopic.summary,
  steps: [...(wezwanieWorkflowTopic.body.steps ?? [])],
  documents: [...(wezwanieWorkflowTopic.body.documents ?? [])],
  sources: [...wezwanieWorkflowTopic.body.sources],
}
