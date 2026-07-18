import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { foreignersLaw, mapTopicSources } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import type { LegalMapTopicBody } from "./principle-legality"

const ukraineReference = {
  kind: "external",
  url: "https://eli.gov.pl/eli/DU/2026/203/ogl",
} as const

const specustawaReference = {
  kind: "external",
  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
} as const

type UkraineRoutesBody = LegalMapTopicBody

export const ukraineRoutesTopic: KnowledgeUnit<UkraineRoutesBody> =
  defineKnowledgeUnit({
    id: "map-topic:ukraine-routes-2026",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "ukraine-routes-2026" },
    },
    summary:
      "Для особи з PESEL UKR спочатку існують три окремі правові варіанти: залишатися на тимчасовому захисті, перейти на CUKR або подати одну з дозволених звичайних заяв. Робота за umowa o pracę не обирає маршрут автоматично.",
    claims: [
      {
        id: "ukraine-route-choice",
        kind: "requires-verification",
        text: "Маршрут UKR, CUKR або звичайного pobytu має окремі умови, момент виникнення права та наслідки для незавершених справ.",
        basis: [
          { reference: ukraineReference, locator: "Dz.U. 2026 poz. 203" },
          { reference: specustawaReference, locator: "Art. 42c–42u" },
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
      title: "Україна 2026: UKR → CUKR чи звичайний pobyt",
      polish: "status UKR / karta CUKR / zezwolenie zwykłe",
      sources: [
        mapTopicSources.ukraineSpecialCurrent,
        mapTopicSources.ukraine2026,
        mapTopicSources.cukr,
        mapTopicSources.cukrQa,
        mapTopicSources.ukraineChanges,
      ],
      guide: {
        introduction: [
          foreignersLaw.text`У 2026 році osoba зі status UKR може залишатися в режимі ochrony czasowej, перейти на спеціальний CUKR або, у межах дозволених ${foreignersLaw.external("art. 45", "https://eli.gov.pl/eli/DU/2026/203/ogl")} ustawy z 23.01.2026 категорій, подати звичайну заяву pobytową.`,
        ],
        regulated: [
          foreignersLaw.text`Маршрути визначають specustawa ukraińska, ustawa Dz.U. 2026 poz. 203, ${foreignersLaw.external("art. 42c", "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf")}–${foreignersLaw.external("42u", "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf")} та загальні норми ustawy o cudzoziemcach.`,
        ],
        appliesWhen: [
          "Розвилка стосується beneficjenta ochrony czasowej з PESEL UKR, який планує статус після поточного режиму або вже має іншу справу.",
        ],
        conditions: [
          "Кожен маршрут має власні умови: для UKR — збереження statusu; для CUKR — чотири спеціальні реєстрові умови; для звичайного pobytu — повні матеріальні умови обраного дозволу.",
        ],
        exceptions: [
          "Umowa o pracę не є умовою CUKR і не змушує подавати звичайний pobyt; доступність звичайної заяви під час ochrony czasowej існує лише у визначених законом категоріях.",
        ],
        consequences: [
          "Маршрут змінює момент виникнення zezwolenia, обсяг прав, долю UKR, доступ до świadczeń, правила pracy та наслідки незавершених справ.",
        ],
        procedure: [
          "Перед поданням порівнюються поточний status, історія UKR, відкриті справи, строки, матеріальні умови та момент переходу для кожного режиму.",
        ],
        foreignersContext: [
          "Станом на 18.07.2026 офіційна інформація вказує на ochronę czasową до 04.03.2027, а заяву CUKR можна подати через MOS до цієї самої дати.",
        ],
      } satisfies LegalNodeGuide,
      why: "Помилка в цій розвилці змінює умови, документи, момент виникнення дозволу, право до праці та долю status UKR. Подання CUKR також припиняє незавершену стандартну справу.",
      checkpoints: [
        "Чи PESEL UKR активний зараз і був активний 04.06.2025?",
        "Чи status UKR безперервний щонайменше 365 днів?",
        "Чи дані паспорта, підпис і відбитки повні в реєстрі?",
        "Чи вже триває інша справа pobytowa?",
        "Чи клієнт розуміє момент втрати UKR у кожному маршруті?",
      ],
      steps: [
        "Зафіксуй поточний UKR і законність роботи через powiadomienie.",
        "Перевір чотири умови CUKR та ризик припинення іншої справи.",
        foreignersLaw.text`Окремо перевір доступність звичайної заяви за ${foreignersLaw.external("art. 45", "https://eli.gov.pl/eli/DU/2026/203/ogl")} ustawy z 23.01.2026.`,
        "Порівняй момент виникнення права: odbiór CUKR проти ostatecznej decyzji zwykłej.",
        "Обери маршрут лише після письмової матриці наслідків.",
      ],
      documents: [
        "паспорт і дані PESEL",
        "історія status UKR",
        "дати виїздів",
        "powiadomienie PUP",
        "інформація про поточні справи",
        "umowa o pracę — для звичайного маршруту, не для CUKR",
      ],
    },
  })

export default ukraineRoutesTopic

export const ukraineRoutesMapNode: LegalNode = {
  id: "ukraine-routes-2026",
  title: ukraineRoutesTopic.body.title,
  polish: ukraineRoutesTopic.body.polish,
  summary: ukraineRoutesTopic.summary,
  why: ukraineRoutesTopic.body.why,
  checkpoints: [...(ukraineRoutesTopic.body.checkpoints ?? [])],
  steps: [...(ukraineRoutesTopic.body.steps ?? [])],
  documents: [...(ukraineRoutesTopic.body.documents ?? [])],
  sources: [...ukraineRoutesTopic.body.sources],
}
