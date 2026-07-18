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

type DecisionWorkflowBody = LegalMapTopicBody

export const decisionWorkflowTopic: KnowledgeUnit<DecisionWorkflowBody> =
  defineKnowledgeUnit({
    id: "map-topic:decision-workflow",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "decision-workflow" },
    },
    summary:
      "Не починай із написання odwołania. Спочатку відокрем rozstrzygnięcie, факти, оцінку доказів, тлумачення права й pouczenie.",
    claims: [
      {
        id: "decision-analysis-order",
        kind: "practical-inference",
        text: "Розбір decyzji починається з резолютивної частини й рухається через факти, докази, право та pouczenie до належного засобу контролю.",
        basis: [{ reference: kpaSourceReference, locator: "Art. 104–140" }],
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
      title: "Алгоритм аналізу decyzji",
      polish: "rozstrzygnięcie → ustalenia → prawo → środek",
      sources: [mapTopicSources.kpa],
      guide: {
        introduction: [
          "Робота з decyzją є послідовним відтворенням того, як organ перейшов від фактів і доказів до матеріальної норми та rozstrzygnięcia, з одночасним контролем строку й доступного засобу.",
        ],
        regulated: [
          kpaLaw.text`${kpaLaw.articleRange("104", "113", { start: "Art. 104", end: "113" })} KPA визначають форму й зміст decyzji, ${kpaLaw.articleRange("127", "140", { start: "art. 127", end: "140" })} — odwołanie, а PPSA — подальшу skargę do WSA.`,
        ],
        appliesWhen: [
          "Від chwili doręczenia decyzji незалежно від того, є вона позитивною, частково позитивною, негативною або umarzającą.",
        ],
        conditions: [
          "Резолютивна частина, правова підстава, фактичні висновки, оцінка кожного істотного доказу й pouczenie утворюють єдину логічну конструкцію.",
          "Строк засобу обчислюється від skutecznego doręczenia, а виконуваність оцінюється окремо від остаточності.",
        ],
        exceptions: [
          kpaLaw.text`Очевидна описка, арифметична помилка або неясність може підпадати під sprostowanie, uzupełnienie чи wykładnię за ${kpaLaw.articleRange("111", "113", { start: "art. 111", end: "113" })} KPA, але ці інструменти не замінюють оскарження суті через odwołanie.`,
        ],
        consequences: [
          "Карта дефектів визначає належний засіб: odwołanie для неостаточної decyzji, skarga do WSA після адміністративної дороги, або надзвичайний режим за окремими підставами.",
        ],
        procedure: [
          "Послідовність містить реєстрацію doręczenia, читання rozstrzygnięcia, таблицю передумов і доказів, перевірку процедури, класифікацію вад, визначення вимоги засобу та контроль його строку й шляху подання.",
        ],
        foreignersContext: [
          "Для decyzji pobytowej окремо фіксуються вид дозволу, період, мета pobytu, доступ до праці, кожна позитивна й негативна передумова та наслідки для подальшого перебування. Ці елементи не зводяться до загальної оцінки, що справа позитивна або негативна.",
        ],
      } satisfies LegalNodeGuide,
      steps: [
        "Зафіксуй дату doręczenia.",
        "Сформулюй одним реченням результат decyzji.",
        "Випиши факти, які organ визнав/не визнав.",
        "Порівняй оцінку доказів з aktami.",
        "Перевір застосовані статті й процедуру.",
        "Окремо сформулюй zarzuty та żądanie.",
      ],
    },
  })

export default decisionWorkflowTopic

export const decisionWorkflowMapNode: LegalNode = {
  id: "decision-workflow",
  title: decisionWorkflowTopic.body.title,
  polish: decisionWorkflowTopic.body.polish,
  summary: decisionWorkflowTopic.summary,
  steps: [...(decisionWorkflowTopic.body.steps ?? [])],
  sources: [...decisionWorkflowTopic.body.sources],
}
