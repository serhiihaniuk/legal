import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { mapTopicSources } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import type { LegalMapTopicBody } from "./principle-legality"

const aliensSourceReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const

type TemporaryGoalsBody = LegalMapTopicBody

export const temporaryGoalsTopic: KnowledgeUnit<TemporaryGoalsBody> =
  defineKnowledgeUnit({
    id: "map-topic:temporary-goals",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "temporary-goals" },
    },
    summary:
      "Кожна ціль має власний набір позитивних умов, відмов, документів, обов’язків і правил доступу до праці. Порівнюй їх за однаковим шаблоном.",
    claims: [
      {
        id: "compare-goals",
        kind: "practical-inference",
        text: "Цілі pobytu czasowego треба порівнювати за спеціальними умовами, доступом до праці, ресурсами, строками, документами та стабільністю підстави.",
        basis: [
          {
            reference: aliensSourceReference,
            locator: "Dział V, rozdziały 2–11",
          },
        ],
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
      title: "Головні цілі pobytu czasowego",
      polish: "rozdziały 2–11 ustawy o cudzoziemcach",
      sources: [mapTopicSources.aliens],
      guide: {
        introduction: [
          "Цілі pobytu czasowego утворюють окремі правові маршрути, а не рівні одного списку. Кожен маршрут має власного адресата, умови, строк, відмови й наслідки зміни обставин.",
        ],
        regulated: [
          "Розділи 2–11 działu V ustawy o cudzoziemcach охоплюють працю, Blue Card, бізнес, навчання, дослідження, сім’ю та інші обставини.",
        ],
        appliesWhen: [
          "Маршрут обирається за домінуючою фактичною метою та żądaniem заявника.",
        ],
        conditions: [
          "Порівняння охоплює спеціальні przesłanki, доступ до праці, потрібні ресурси, строки, документи та stabilność підстави.",
        ],
        exceptions: [
          "Одна й та сама обставина може мати різне значення в різних маршрутах; наприклад дохід може бути метою праці або лише засобом утримання в сімейній справі.",
        ],
        consequences: [
          "Вибір визначає treść decyzji, тривалість, zakres dostępu do pracy та обов’язки при зміні фактичної ситуації.",
        ],
        procedure: [
          "Спочатку відсіюються недоступні підстави, потім повністю аналізуються реально відповідні глави й докази.",
        ],
        foreignersContext: [
          "Для osoby зі status UKR додатково перевіряється, чи закон у 2026 році дозволяє подати саме цю звичайну категорію під час ochrony czasowej.",
        ],
      } satisfies LegalNodeGuide,
      why: "Цілі не мають універсального рейтингу. «Пріоритет» залежить від правдивих фактів і того, яка спеціальна підстава найбільш точно їх охоплює.",
    },
  })

export default temporaryGoalsTopic

export const temporaryGoalsMapNode: LegalNode = {
  id: "temporary-goals",
  title: temporaryGoalsTopic.body.title,
  polish: temporaryGoalsTopic.body.polish,
  summary: temporaryGoalsTopic.summary,
  why: temporaryGoalsTopic.body.why,
  sources: [...temporaryGoalsTopic.body.sources],
}
