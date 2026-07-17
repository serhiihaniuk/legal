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

type ComplaintBody = LegalMapTopicBody

export const complaintTopic: KnowledgeUnit<ComplaintBody> = defineKnowledgeUnit(
  {
    id: "map-topic:complaint",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "complaint" },
    },
    summary:
      "Окреме zażalenie можливе лише за прямою нормою. Загальний строк — 7 днів; саме подання зазвичай не зупиняє виконання.",
    claims: [
      {
        id: "complaint-limited",
        kind: "requires-verification",
        text: "Zażalenie на postanowienie доступне лише у прямо передбачених законом випадках і має окремий строк та наслідок для виконання.",
        basis: [{ reference: kpaSourceReference, locator: "Art. 141–144" }],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: {
      title: "Zażalenie",
      polish: kpaLaw.text`${kpaLaw.articleRange("141", "144", { start: "art. 141", end: "144" })} KPA`,
      sources: [mapTopicSources.kpa],
      guide: {
        introduction: [
          kpaLaw.text`${kpaLaw.articleRange("141", "144", { start: "Art. 141", end: "144" })} KPA регулюють zażalenie на postanowienie. Це окремий засіб контролю процесуального акту, доступний лише у прямо передбачених законом випадках.`,
        ],
        regulated: [
          "Допустимість zażalenia, семиденний строк, вплив на виконання postanowienia та відповідне застосування правил про odwołanie.",
        ],
        appliesWhen: [
          "Після doręczenia або оголошення postanowienia, для якого KPA чи lex specialis прямо передбачає zażalenie.",
        ],
        conditions: [
          "Строк становить сім днів від doręczenia postanowienia або його усного оголошення стороні.",
          kpaLaw.text`На postanowienie без окремого zażalenia заперечення за ${kpaLaw.article("142", "art. 142")} KPA заявляються лише в odwołaniu від decyzji.`,
        ],
        exceptions: [
          "Подання zażalenia не зупиняє виконання postanowienia; organ, який його видав, може зупинити виконання, якщо визнає це обґрунтованим.",
        ],
        consequences: [
          "Недопустиме zażalenie не створює окремої інстанційної перевірки, але процесуальна вада може бути оцінена разом із odwołaniem від кінцевої decyzji.",
        ],
        procedure: [
          "Спочатку встановлюється точна правова підстава postanowienia й норма про zażalenie, потім дата doręczenia, строк, organ właściwy та вплив акту на подальший перебіг справи.",
        ],
        foreignersContext: [
          "У справах cudzoziemców zażalenie може стосуватися, зокрема, odmowy wszczęcia або zawieszenia, якщо конкретна норма надає такий засіб. Звичайне wezwanie не стає postanowieniem лише через обов’язковий характер.",
        ],
      } satisfies LegalNodeGuide,
    },
  }
)

export default complaintTopic

export const complaintMapNode: LegalNode = {
  id: "complaint",
  title: complaintTopic.body.title,
  polish: complaintTopic.body.polish,
  summary: complaintTopic.summary,
  sources: [...complaintTopic.body.sources],
}
