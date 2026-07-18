import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { foreignersLaw, mapTopicSources } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import type { LegalMapTopicBody } from "./principle-legality"

const aliensSourceReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const

const UKRAINE_SPECIAL_ACT_URL =
  "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf"

type GoalOfStayBody = LegalMapTopicBody

export const goalOfStayTopic: KnowledgeUnit<GoalOfStayBody> =
  defineKnowledgeUnit({
    id: "map-topic:goal-of-stay",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "goal-of-stay" },
    },
    summary:
      "Ціль — це не лише бажана назва дозволу. Це головна фактична причина перебування понад 3 місяці, яка має відповідати конкретній правовій підставі та доказам.",
    claims: [
      {
        id: "actual-purpose",
        kind: "requires-verification",
        text: "Cel pobytu визначається фактичною головною причиною перебування та зіставляється з конкретними умовами й доказами доступної правової підстави.",
        basis: [
          {
            reference: aliensSourceReference,
            locator: "temporary stay purposes",
          },
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
      title: "Як визначати ціль перебування",
      polish: "cel pobytu",
      sources: [mapTopicSources.aliens],
      guide: {
        introduction: [
          "Cel pobytu — це фактична головна причина перебування, яку закон визнає підставою конкретного zezwolenia. Назва договору, заяви або бажаний напис на карті не визначають мету без реальних обставин.",
        ],
        regulated: [
          "Ustawa o cudzoziemcach розділяє тимчасові дозволи за роботою, високими кваліфікаціями, бізнесом, навчанням, дослідженнями, сім’єю та іншими обставинами.",
        ],
        appliesWhen: [
          "Вибір робиться, коли обставина обґрунтовує перебування понад три місяці й відповідає окремій матеріальній підставі.",
        ],
        conditions: [
          "Мета має бути реальною на дату рішення, а докази повинні підтверджувати як саму діяльність або зв’язок, так і спеціальні додаткові умови.",
        ],
        exceptions: [
          "Кілька одночасних життєвих обставин не створюють автоматичної суми дозволів; кожна підстава оцінюється окремо, а сторона формулює конкретне żądanie.",
        ],
        consequences: [
          "Обрана мета визначає строк і зміст дозволу, право до праці, підстави cofnięcia та обов’язки після зміни обставин.",
        ],
        procedure: [
          "Порівнюються факти, позитивні умови, odmowa wszczęcia, odmowa, документи та наслідки кожної реально доступної підстави.",
        ],
        foreignersContext: [
          foreignersLaw.text`Umowa o pracę може бути головною метою для ${foreignersLaw.external("art. 114", UKRAINE_SPECIAL_ACT_URL)}, але не є умовою CUKR; сімейний або навчальний дозвіл може окремо впливати на доступ до праці.`,
        ],
      } satisfies LegalNodeGuide,
      why: "Одна людина може одночасно працювати, навчатися й мати сім’ю. Треба зіставити факти з умовами кожної можливої підстави, її стабільністю, правом до праці й обов’язками після рішення.",
      checkpoints: [
        "Яка діяльність фактично визначає перебування?",
        "Які умови кожної можливої підстави вже виконані?",
        "Яке право до праці дає кожна підстава?",
        "Що станеться, якщо робота, навчання або сімейна підстава припиниться?",
      ],
      steps: [
        "Склади список усіх реальних цілей.",
        "Для кожної знайди окрему главу ustawy o cudzoziemcach.",
        "Порівняй позитивні умови, відмови та обов’язки.",
        "Обери підставу, яка правдиво описує головну ситуацію, а не лише здається зручнішою.",
      ],
    },
  })

export default goalOfStayTopic

export const goalOfStayMapNode: LegalNode = {
  id: "goal-of-stay",
  title: goalOfStayTopic.body.title,
  polish: goalOfStayTopic.body.polish,
  summary: goalOfStayTopic.summary,
  why: goalOfStayTopic.body.why,
  checkpoints: [...(goalOfStayTopic.body.checkpoints ?? [])],
  steps: [...(goalOfStayTopic.body.steps ?? [])],
  sources: [...goalOfStayTopic.body.sources],
}
