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

const aliensSourceReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const

type OrganPartyBody = LegalMapTopicBody

export const organPartyTopic: KnowledgeUnit<OrganPartyBody> =
  defineKnowledgeUnit({
    id: "map-topic:organ-party",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "organ-party" },
    },
    summary:
      "Спочатку визнач, який орган компетентний, хто має статус сторони та чи діє представник із належним повноваженням.",
    claims: [
      {
        id: "organ-and-party",
        kind: "requires-verification",
        text: "Компетенція органу, статус сторони та межі повноваження представника перевіряються окремо до аналізу матеріальної умови справи.",
        basis: [
          { reference: kpaSourceReference, locator: "Art. 17–34" },
          { reference: aliensSourceReference, locator: "competent authority" },
        ],
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
      title: "Organ, właściwość, strona",
      polish: kpaLaw.text`${kpaLaw.articleRange("17", "34", { start: "art. 17", end: "34" })} KPA`,
      sources: [mapTopicSources.kpa, mapTopicSources.aliens],
      guide: {
        introduction: [
          kpaLaw.text`${kpaLaw.articleRange("17", "34", { start: "Art. 17", end: "34" })} KPA визначають органи вищого ступеня, właściwość, виключення працівника чи органу, поняття strony та правила представництва.`,
        ],
        regulated: [
          "Предметна, місцева й інстанційна компетенція; конфлікти компетенції; безсторонність; правовий інтерес сторони; pełnomocnictwo.",
        ],
        appliesWhen: [
          "До подання справи, при зміні місця проживання або фактичної підстави, при сумніві щодо статусу учасника та при діях через представника.",
        ],
        conditions: [
          kpaLaw.text`За ${kpaLaw.article("28", "art. 28")} KPA стороною є особа, чиїх правового інтересу або обов’язку стосується провадження, або яка вимагає дії органу на підставі такого інтересу чи обов’язку.`,
          "Pełnomocnik діє у межах повноваження; документ повноваження долучається в оригіналі або належно засвідченій копії, якщо закон не звільняє від цього.",
        ],
        exceptions: [
          "Особиста дія сторони потрібна тоді, коли цього вимагає характер дії або спеціальна норма.",
          "Факт прийняття документів неналежним органом не створює йому компетенції вирішувати справу.",
        ],
        consequences: [
          kpaLaw.text`Порушення właściwości може спричинити скасування рішення, а кваліфіковане порушення правил компетенції є підставою stwierdzenie nieważności за ${kpaLaw.article("156", "art. 156 § 1")} pkt 1 KPA.`,
        ],
        procedure: [
          "Компетенція встановлюється за предметом справи, територіальним зв’язком, інстанцією та спеціальними нормами; окремо перевіряються сторона, представник і можливі підстави виключення.",
        ],
        foreignersContext: [
          "У справах pobytowych місцева компетенція wojewody зазвичай пов’язана з місцем перебування cudzoziemca, але конкретне правило встановлює ustawa o cudzoziemcach. Адреса проживання, адреса для кореспонденції та місце роботи можуть не збігатися.",
        ],
      } satisfies LegalNodeGuide,
      why: "Помилка в адресаті, статусі сторони або pełnomocnictwie може зупинити справу ще до аналізу її суті.",
      checkpoints: [
        "Який organ першої інстанції?",
        "Який organ вищого рівня?",
        "Хто має інтерес правний?",
        "Чи повноваження охоплює цю дію?",
      ],
      documents: [
        "pełnomocnictwo",
        "доказ сплати opłaty skarbowej, якщо потрібна",
        "документи статусу сторони",
      ],
    },
  })

export default organPartyTopic

export const organPartyMapNode: LegalNode = {
  id: "organ-party",
  title: organPartyTopic.body.title,
  polish: organPartyTopic.body.polish,
  summary: organPartyTopic.summary,
  why: organPartyTopic.body.why,
  checkpoints: [...(organPartyTopic.body.checkpoints ?? [])],
  documents: [...(organPartyTopic.body.documents ?? [])],
  sources: [...organPartyTopic.body.sources],
}
