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

const ppsaSourceReference = {
  kind: "official-source",
  sourceId: "eli-ppsa",
} as const

type PrincipleTwoInstanceBody = LegalMapTopicBody

export const principleTwoInstanceTopic: KnowledgeUnit<PrincipleTwoInstanceBody> =
  defineKnowledgeUnit({
    id: "map-topic:principle-two-instance",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "principle-two-instance" },
    },
    summary:
      "Звичайний контроль відбувається в адміністративній другій інстанції, а остаточне рішення може перейти під контроль суду.",
    claims: [
      {
        id: "two-instance-review",
        kind: "requires-verification",
        text: "Двоінстанційність і стабільність остаточного рішення визначають доступний шлях адміністративного або судового контролю.",
        basis: [
          { reference: kpaSourceReference, locator: "Art. 15–16" },
          { reference: ppsaSourceReference, locator: "judicial review" },
        ],
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
      title: "Дві інстанції та остаточність",
      polish: kpaLaw.text`${kpaLaw.articleRange("15", "16", { start: "art. 15", end: "16" })} KPA`,
      sources: [mapTopicSources.kpa, mapTopicSources.ppsa],
      guide: {
        introduction: [
          kpaLaw.text`${kpaLaw.article("15", "Art. 15")} KPA закріплює двоінстанційність, якщо спеціальний закон не встановлює іншого. ${kpaLaw.article("16", "Art. 16")} KPA розрізняє decyzję ostateczną і decyzję prawomocną та захищає стабільність остаточного розв’язання.`,
        ],
        regulated: [
          "Право на один адміністративний перегляд рішення першої інстанції, момент остаточності та допустимі способи зміни остаточного рішення.",
        ],
        appliesWhen: [
          "Після вручення decyzji першої інстанції, при визначенні właściwego organu odwoławczego та при оцінці допустимості надзвичайного перегляду.",
        ],
        conditions: [
          "Odwołanie існує лише від рішення першої інстанції та лише до однієї адміністративної інстанції; компетентний орган визначає KPA або lex specialis.",
          "Остаточне рішення змінюється тільки у випадках, передбачених KPA або спеціальним законом, або внаслідок судового контролю.",
        ],
        exceptions: [
          kpaLaw.text`Від рішення міністра або SKO першої інстанції звичайне odwołanie не подається; ${kpaLaw.article("127", "art. 127 § 3")} KPA передбачає wniosek o ponowne rozpatrzenie sprawy.`,
          "Спеціальна норма може прямо виключити другу інстанцію або встановити інший засіб.",
        ],
        consequences: [
          "Після остаточності звичайне odwołanie стає недопустимим; можливими залишаються судовий контроль або надзвичайні режими за їх окремими передумовами.",
        ],
        procedure: [
          "Статус рішення визначається за видом органу, датою вручення, наявністю і строком засобу оскарження, відмовою від odwołania та результатом другої інстанції.",
        ],
        foreignersContext: [
          "У типових справах дозволів на pobyt рішення wojewody оскаржується до Szefa Urzędu do Spraw Cudzoziemców через wojewodę. Спеціальні категорії рішень можуть мати інший орган і порядок, тому pouczenie співвідноситься з актуальним lex specialis.",
        ],
      } satisfies LegalNodeGuide,
    },
  })

export default principleTwoInstanceTopic

export const principleTwoInstanceMapNode: LegalNode = {
  id: "principle-two-instance",
  title: principleTwoInstanceTopic.body.title,
  polish: principleTwoInstanceTopic.body.polish,
  summary: principleTwoInstanceTopic.summary,
  sources: [...principleTwoInstanceTopic.body.sources],
}
