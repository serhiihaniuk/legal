import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import { mapTopicSources } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const aliensSourceReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const

type PersonStatusBody = LegalMapTopicBody

export const personStatusTopic: KnowledgeUnit<PersonStatusBody> =
  defineKnowledgeUnit({
    id: "map-topic:person-status",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "person-status" },
    },
    summary:
      "Перше розгалуження: громадянин UE/EOG/Szwajcarii, громадянин третьої держави чи особа під спеціальним режимом, наприклад громадянин України з тимчасовим захистом.",
    claims: [
      {
        id: "classify-person",
        kind: "requires-verification",
        text: "Статус особи визначають до вибору дозволу, оцінки права до праці та підготовки переліку документів.",
        basis: [{ reference: aliensSourceReference, locator: "status rules" }],
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
      title: "Хто ця особа за правом",
      polish: "status cudzoziemca",
      sources: [mapTopicSources.aliens],
      guide: {
        introduction: [
          "Status cudzoziemca визначає, який правовий режим застосовується до в’їзду, перебування, праці та документів. Громадянство саме по собі не завжди дає повну відповідь, бо значення мають також сімейний зв’язок і спеціальний захисний статус.",
        ],
        regulated: [
          "Окремі режими охоплюють громадян UE/EOG/Szwajcarii та членів їхніх сімей, громадян третіх держав, beneficjentów ochrony międzynarodowej або czasowej та інші спеціальні категорії.",
        ],
        appliesWhen: [
          "Класифікація проводиться до вибору дозволу, оцінки права до праці й підготовки переліку документів.",
        ],
        conditions: [
          "Статус підтверджується документом подорожі, реєстровими даними, документом pobytowym, рішенням або документами сімейного зв’язку.",
        ],
        exceptions: [
          "Одна особа може одночасно відповідати кільком описам, але наслідки застосовуються лише за виконання умов конкретного режиму.",
        ],
        consequences: [
          "Від статусу залежать właściwy formularz, materialne przesłanki, доступ до праці, можливість подання під час ochrony czasowej та обсяг прав після рішення.",
        ],
        procedure: [
          "У справі фіксуються документ, правова підстава статусу, дата його виникнення, строк або умови збереження та події, що можуть його припинити.",
        ],
        foreignersContext: [
          "Для громадянина України окремо встановлюється, чи діє status UKR, чи вже надано CUKR або звичайний дозвіл, оскільки ці режими не є взаємозамінними.",
        ],
      } satisfies LegalNodeGuide,
      why: "Від статусу залежить, який закон і які процедури взагалі застосовуються. Не починай вибирати ціль pobytu, поки не визначено групу особи.",
      checkpoints: [
        "Яке громадянство?",
        "Чи є спеціальний захисний статус?",
        "Чи є членом сім’ї громадянина UE?",
        "Який документ це підтверджує?",
      ],
      documents: [
        "паспорт або документ подорожі",
        "карта/документ перебування",
        "документ члена сім’ї UE",
        "підтвердження спеціального статусу",
      ],
    },
  })

export default personStatusTopic

export const personStatusMapNode: LegalNode = {
  id: "person-status",
  title: personStatusTopic.body.title,
  polish: personStatusTopic.body.polish,
  summary: personStatusTopic.summary,
  why: personStatusTopic.body.why,
  checkpoints: [...(personStatusTopic.body.checkpoints ?? [])],
  documents: [...(personStatusTopic.body.documents ?? [])],
  sources: [...personStatusTopic.body.sources],
}
