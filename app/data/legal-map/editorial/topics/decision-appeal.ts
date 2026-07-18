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

type DecisionAppealBody = LegalMapTopicBody

export const decisionAppealTopic: KnowledgeUnit<DecisionAppealBody> =
  defineKnowledgeUnit({
    id: "map-topic:decision-appeal",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "decision-appeal" },
    },
    summary:
      "Decyzja зазвичай вирішує справу по суті, postanowienie — процесуальне питання. Odwołanie на decyzję має загальний строк 14 днів, zażalenie допускається лише коли закон прямо це передбачає й зазвичай має 7 днів.",
    claims: [
      {
        id: "classify-the-act",
        kind: "requires-verification",
        text: "Назва акта, доступний засіб, строк і виконуваність визначаються за змістом рішення та його правовою підставою.",
        basis: [{ reference: kpaSourceReference, locator: "Art. 104–144" }],
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
      title: "Decyzja, postanowienie, odwołanie",
      polish: kpaLaw.text`${kpaLaw.articleRange("104", "144", { start: "art. 104", end: "144" })} KPA`,
      sources: [mapTopicSources.kpa],
      guide: {
        introduction: [
          kpaLaw.text`${kpaLaw.articleRange("104", "144", { start: "Art. 104", end: "144" })} KPA охоплюють decyzje, postanowienia, odwołania і zażalenia. Вид акту визначає його функцію, зміст і доступний засіб контролю.`,
        ],
        regulated: [
          "Рішення справи по суті або завершення інстанції, процесуальні postanowienia, обов’язкові елементи актів, виконуваність і адміністративний перегляд.",
        ],
        appliesWhen: [
          "Після отримання документа, який формально або фактично розв’язує справу, завершує її чи вирішує окреме процесуальне питання.",
        ],
        conditions: [
          kpaLaw.text`За ${kpaLaw.article("104", "art. 104")} KPA decyzja вирішує справу по суті повністю чи частково або іншим чином завершує її в даній інстанції.`,
          "Postanowienie стосується окремого процесуального питання; zażalenie на нього існує лише коли KPA або спеціальний закон прямо це передбачає.",
        ],
        exceptions: [
          "Назва листа не є вирішальною: юридична кваліфікація залежить від змісту, наслідку й правової підстави акту.",
          "Не кожна дія або лист organu є decyzją чи postanowieniem і не кожен такий акт оскаржується окремо.",
        ],
        consequences: [
          "Помилковий вибір між odwołaniem, zażaleniem, ponagleniem і skargą може спричинити недопустимість або пропуск строку.",
        ],
        procedure: [
          "Акт класифікується за тим, що він вирішує, якою нормою виданий, чи завершує інстанцію, який засіб указано в pouczeniu та який строк запускає doręczenie.",
        ],
        foreignersContext: [
          "У справах cudzoziemców decyzja про дозвіл або відмову відрізняється від postanowienia про zawieszenie, odmowę wszczęcia чи окрему доказову дію; кожен акт має власний шлях контролю.",
        ],
      } satisfies LegalNodeGuide,
      why: "Назва акта визначає доступний засіб, строк і те, чи зупиняється виконання. Неправильно обраний засіб може коштувати права на контроль.",
      checkpoints: [
        "Що це за акт: decyzja чи postanowienie?",
        "Коли і як його вручено?",
        "Який organ другої інстанції?",
        "Що саме оскаржується: факти, право, процедура?",
      ],
    },
  })

export default decisionAppealTopic

export const decisionAppealMapNode: LegalNode = {
  id: "decision-appeal",
  title: decisionAppealTopic.body.title,
  polish: decisionAppealTopic.body.polish,
  summary: decisionAppealTopic.summary,
  why: decisionAppealTopic.body.why,
  checkpoints: [...(decisionAppealTopic.body.checkpoints ?? [])],
  sources: [...decisionAppealTopic.body.sources],
}
