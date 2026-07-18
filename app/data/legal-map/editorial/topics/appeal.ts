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

type AppealBody = LegalMapTopicBody

export const appealTopic: KnowledgeUnit<AppealBody> = defineKnowledgeUnit({
  id: "map-topic:appeal",
  subject: {
    family: "map-topic",
    reference: { kind: "map-node", nodeId: "appeal" },
  },
  summary:
    "Подання через organ першої інстанції, загальний строк 14 днів. Будуй zarzuty окремо для фактів, доказів, процедури та матеріального права.",
  claims: [
    {
      id: "appeal-route",
      kind: "requires-verification",
      text: "Odwołanie подається через орган першої інстанції та має бути пов’язане з окремими фактичними, доказовими, процесуальними й матеріально-правовими zarzuty.",
      basis: [{ reference: kpaSourceReference, locator: "Art. 127–140" }],
    },
  ],
  relationships: [],
  review: {
      reviewStatus: "reviewed",
    language: "uk",
    legalStateDate: "2026-07-14",
    verifiedAt: "2026-07-14",
  },
  body: {
    title: "Odwołanie",
    polish: kpaLaw.text`${kpaLaw.articleRange("127", "140", { start: "art. 127", end: "140" })} KPA`,
    sources: [mapTopicSources.kpa],
    guide: {
      introduction: [
        kpaLaw.text`${kpaLaw.articleRange("127", "140", { start: "Art. 127", end: "140" })} KPA регулюють odwołanie від decyzji першої інстанції. Це повний адміністративний перегляд справи, а не лише перевірка формальних помилок.`,
      ],
      regulated: [
        "Допустимість, зміст і строк odwołania, подання через першу інстанцію, зупинення виконання, autokontrola, доповнення доказів і види рішення органу другої інстанції.",
      ],
      appliesWhen: [
        "Після doręczenia decyzji першої інстанції, якщо спеціальний закон не виключає odwołania і сторона не відмовилася від нього.",
      ],
      conditions: [
        "Odwołanie подається до właściwego organu odwoławczego через organ, який видав рішення, у 14-денний строк від doręczenia або усного оголошення, якщо lex specialis не встановлює інший строк.",
        kpaLaw.text`За ${kpaLaw.article("128", "art. 128")} KPA детальне обґрунтування загалом не є обов’язковим; достатньо вираження незгоди, але спеціальні положення можуть вимагати більше.`,
        kpaLaw.text`Орган другої інстанції може залишити рішення в силі, скасувати його і вирішити справу, припинити провадження або за умов ${kpaLaw.article("138", "art. 138 § 2")} повернути справу на новий розгляд.`,
      ],
      exceptions: [
        kpaLaw.text`${kpaLaw.article("130", "Art. 130")} KPA не зупиняє виконання, якщо надано rygor natychmiastowej wykonalności або негайне виконання випливає із закону; рішення також виконується до завершення строку, якщо відповідає вимогам усіх сторін або всі відмовилися від odwołania.`,
        kpaLaw.text`Заборона погіршення становища сторони за ${kpaLaw.article("139", "art. 139")} KPA не діє, коли рішення rażąco narusza prawo або rażąco narusza interes społeczny.`,
      ],
      consequences: [
        "Вчасне odwołanie за загальним правилом зупиняє виконання та переносить розгляд до другої інстанції. Пропуск строку встановлюється остаточним postanowieniem, із можливістю окремого аналізу przywrócenia terminu.",
      ],
      procedure: [
        kpaLaw.text`Перша інстанція повідомляє сторони, оцінює можливість autokontroli за ${kpaLaw.article("132", "art. 132")} KPA і за її відсутності передає odwołanie з актами протягом семи днів; друга інстанція перевіряє допустимість, доповнює матеріал за потреби та видає рішення.`,
      ],
      foreignersContext: [
        "В odwołaniu у справі pobytowej значення мають не лише документи, подані після рішення, а й точне спростування висновків wojewody щодо кожної матеріальної умови, фактичного періоду та негативної передумови.",
      ],
    } satisfies LegalNodeGuide,
    steps: [
      "Зафіксуй строк.",
      "Розклади мотиви decyzji.",
      "Сформулюй порушення й їх вплив.",
      "Вкажи бажаний результат.",
    ],
  },
})

export default appealTopic

export const appealMapNode: LegalNode = {
  id: "appeal",
  title: appealTopic.body.title,
  polish: appealTopic.body.polish,
  summary: appealTopic.summary,
  steps: [...(appealTopic.body.steps ?? [])],
  sources: [...appealTopic.body.sources],
}
