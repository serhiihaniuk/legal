import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import { mapTopicSources } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const ukraineReference = {
  kind: "external",
  url: "https://eli.gov.pl/eli/DU/2026/203/ogl",
} as const

const ukrainianWorkReference = {
  kind: "external",
  url: "https://psz.praca.gov.pl/web/8188476/powiadomienie-o-podjeciu-pracy-przez-obywatela-ukrainy",
} as const

type UkrBaselineBody = LegalMapTopicBody

export const ukrBaselineTopic: KnowledgeUnit<UkrBaselineBody> =
  defineKnowledgeUnit({
    id: "map-topic:ukr-baseline-2026",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "ukr-baseline-2026" },
    },
    summary:
      "Заява на карту не є обов’язковою лише через umowa o pracę. До 04.03.2027 status UKR може легалізувати перебування, а роботу — powiadomienie роботодавця, якщо всі умови збережені.",
    claims: [
      {
        id: "ukr-baseline",
        kind: "requires-verification",
        text: "Збереження status UKR і легалізація роботи через powiadomienie роботодавця — окремі умови, які залежать від актуального реєстрового статусу та спеціальних правил.",
        basis: [
          {
            reference: ukraineReference,
            locator: "current transitional rules",
          },
          { reference: ukrainianWorkReference, locator: "work notification" },
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
      title: "Залишитися на status UKR",
      polish: "tymczasowa ochrona do 04.03.2027",
      sources: [mapTopicSources.ukraine2026, mapTopicSources.ukrainianWork],
      guide: {
        introduction: [
          "Збереження status UKR є самостійним законним маршрутом і не вимагає отримання карти лише через наявність роботи.",
        ],
        regulated: [
          "Specustawa ukraińska та ustawa Dz.U. 2026 poz. 203 визначають legalność pobytu, реєстровий status UKR і перехідні права beneficjentów ochrony czasowej.",
        ],
        appliesWhen: [
          "Режим діє, поки особа належить до охопленої групи, має aktywny status UKR і не настала подія його припинення.",
        ],
        conditions: [
          "Дані в PESEL повинні бути актуальними, а праця легалізується окремо відповідно до спеціальних правил, зокрема через належне powiadomienie роботодавця.",
        ],
        exceptions: [
          "Тривалий виїзд, отримання іншого статусу або інша визначена законом подія може припинити UKR; номер PESEL без активної ознаки UKR не дає цього режиму.",
        ],
        consequences: [
          "Особа зберігає права ochrony czasowej до законного припинення режиму; отримання CUKR або звичайного дозволу змінює правову підставу й пов’язані права.",
        ],
        procedure: [
          "Перевіряються aktualny zapis PESEL, історія statusu, виїзди, dokument podróży та виконання роботодавцем obowiązków pracy.",
        ],
        foreignersContext: [
          "Офіційна інформація UdSC станом на 14.07.2026 визначає поточний горизонт statusu UKR до 04.03.2027.",
        ],
      } satisfies LegalNodeGuide,
      checkpoints: [
        "Чи UKR активний?",
        "Чи не було виїзду понад 30 днів?",
        "Чи powiadomienie подано в 7-денний строк?",
        "Чи треба оновити документ із фото до 31.08.2026?",
      ],
    },
  })

export default ukrBaselineTopic

export const ukrBaselineMapNode: LegalNode = {
  id: "ukr-baseline-2026",
  title: ukrBaselineTopic.body.title,
  polish: ukrBaselineTopic.body.polish,
  summary: ukrBaselineTopic.summary,
  checkpoints: [...(ukrBaselineTopic.body.checkpoints ?? [])],
  sources: [...ukrBaselineTopic.body.sources],
}
