import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import { mapTopicSources } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const aliensChangeReference = {
  kind: "external",
  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
} as const

const mosReference = {
  kind: "external",
  url: "https://www.gov.pl/web/udsc/info-mos",
} as const

const mosQaReference = {
  kind: "external",
  url: "https://www.gov.pl/web/udsc/mos-qa",
} as const

type MosProcedureBody = LegalMapTopicBody

export const mosProcedureTopic: KnowledgeUnit<MosProcedureBody> =
  defineKnowledgeUnit({
    id: "map-topic:mos-procedure",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "mos-procedure" },
    },
    summary:
      "З 27 квітня 2026 року заяви на pobyt czasowy, stały та rezydenta UE загалом подаються електронно через MOS, з передбаченими законом винятками.",
    claims: [
      {
        id: "mos-entry",
        kind: "requires-verification",
        text: "Спосіб подання є частиною юридичної правильності заяви; електронний маршрут, підпис, UPO та наступні особисті дії перевіряються окремо.",
        basis: [
          {
            reference: aliensChangeReference,
            locator: "27.04.2026 amendments",
          },
          { reference: mosReference, locator: "MOS procedure" },
          { reference: mosQaReference, locator: "official MOS answers" },
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
      title: "Подання через MOS",
      polish: "Moduł Obsługi Spraw · від 27.04.2026",
      sources: [
        mapTopicSources.aliensChange,
        mapTopicSources.mos,
        mapTopicSources.mosQa,
      ],
      guide: {
        introduction: [
          "Від 27.04.2026 заяви про pobyt czasowy, pobyt stały та rezydenta długoterminowego UE подаються електронно через MOS. Електронна форма стала елементом skutecznego wniesienia заяви.",
        ],
        regulated: [
          "Zmiana ustawy o cudzoziemcach Dz.U. 2025 poz. 1794, відповідні норми ustawy o cudzoziemcach і rozporządzenia 2026 визначають електронну заяву, додатки, підпис і наступні особисті дії.",
        ],
        appliesWhen: [
          "Новий порядок застосовується до заяв, поданих від 27.04.2026; справи, що належно надійшли раніше, продовжуються за перехідними правилами.",
        ],
        conditions: [
          "Заявник входить особисто через login.gov.pl, заповнює właściwy formularz, додає цифрові документи, підписує допустимим електронним підписом і отримує UPO.",
        ],
        exceptions: [
          "Za małoletniego або особу без повної zdolności діє właściwy przedstawiciel ustawowy; повірений не підписує заяву замість повністю дієздатного cudzoziemca.",
        ],
        consequences: [
          "Надсилання створює електронний слід, але не усуває braków, не доводить матеріальних умов і не замінює пред’явлення паспорта, відбитків або wzoru podpisu, якщо вони потрібні.",
        ],
        procedure: [
          "Після wysłania зберігаються PDF, XML і UPO; далі виконується wezwanie organu та доповнюються докази в elektronicznych aktach sprawy.",
        ],
        foreignersContext: [
          "Для CUKR діє окремий formularz MOS від 04.05.2026; звичайна заява і CUKR мають різні умови й наслідки.",
        ],
      } satisfies LegalNodeGuide,
      why: "Спосіб подання став частиною юридичної правильності заяви. Паперова форма після цієї дати може не запустити процедуру, якщо не діє виняток.",
      checkpoints: [
        "Яка дата подання?",
        "Чи діє обов’язок MOS або виняток?",
        "Чи додані всі сторінки паспорта, фото й додатки?",
        "Чи заява підписана електронно?",
        "Чи виконано wezwanie до особистої явки?",
      ],
      steps: [
        "Заповни електронну форму.",
        "Додай фото, скани паспорта, докази й оплату.",
        "Підпиши та відправ.",
        "Збережи urzędowe poświadczenie.",
        "Виконай wezwanie: паспорт, odciski, wzór podpisu.",
      ],
    },
  })

export default mosProcedureTopic

export const mosProcedureMapNode: LegalNode = {
  id: "mos-procedure",
  title: mosProcedureTopic.body.title,
  polish: mosProcedureTopic.body.polish,
  summary: mosProcedureTopic.summary,
  why: mosProcedureTopic.body.why,
  checkpoints: [...(mosProcedureTopic.body.checkpoints ?? [])],
  steps: [...(mosProcedureTopic.body.steps ?? [])],
  sources: [...mosProcedureTopic.body.sources],
}
