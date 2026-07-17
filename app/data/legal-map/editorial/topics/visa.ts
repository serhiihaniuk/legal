import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { foreignersLaw } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import type { LegalMapTopicBody } from "./principle-legality"

const aliensSourceReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const

const udscVisaReference = {
  kind: "external",
  url: "https://www.gov.pl/web/udsc/wizy",
} as const

type VisaBody = LegalMapTopicBody

export const visaTopic: KnowledgeUnit<VisaBody> = defineKnowledgeUnit({
  id: "map-topic:visa",
  subject: {
    family: "map-topic",
    reference: { kind: "map-node", nodeId: "visa" },
  },
  summary:
    "Перевір rodzaj, cel, okres ważności, liczbę wjazdów, використані дні та те, чи конкретна віза дозволяє працювати.",
  claims: [
    {
      id: "visa-is-bounded",
      kind: "requires-verification",
      text: "Wiza створює лише визначену документом підставу в’їзду та перебування, а право до праці перевіряється окремо.",
      basis: [
        { reference: aliensSourceReference, locator: "Art. 58–97" },
        { reference: udscVisaReference, locator: "official visa guidance" },
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
    title: "Wiza C / D",
    polish: foreignersLaw.text`${foreignersLaw.articleRange("58", "97", { start: "art. 58", end: "97" })} ustawy o cudzoziemcach`,
    sources: [
      {
        label: "Ustawa o cudzoziemcach — ELI",
        url: "https://eli.gov.pl/eli/DU/2025/1079/ogl",
        note: "Dz.U. 2025 poz. 1079 · перевіряй разом зі змінами 2025–2026",
      },
      {
        label: "UdSC — Wizy",
        url: "https://www.gov.pl/web/udsc/wizy",
        note: "Офіційне практичне пояснення візових процедур",
      },
    ],
    guide: {
      introduction: [
        "Wiza є дозволом на в’їзд і перебування в указаних межах, а не універсальним дозволом на працю. Wiza Schengen C і wiza krajowa D мають різний територіальний та часовий режим.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("58", "97", { start: "Art. 58", end: "97" })} ustawy o cudzoziemcach регулюють польські візи, їх цілі, видачу, przedłużenie, unieważnienie та cofnięcie; правила Schengen доповнюють режим wizy C.`,
      ],
      appliesWhen: [
        "Режим застосовується відповідно до типу, celu wydania, строку, кількості в’їздів і використаних днів.",
      ],
      conditions: [
        "Чинність оцінюється за наклейкою, документом подорожі, територією, датами «od–do» та допустимою кількістю днів pobytu.",
      ],
      exceptions: [
        "Окремі цілі візи або спеціальний статус можуть давати інші наслідки для праці; їх не можна виводити лише з літери C або D.",
      ],
      consequences: [
        "Закінчення строку або використання допустимих днів припиняє цю підставу pobytu, якщо до того не виникла інша.",
      ],
      procedure: [
        "Перед дією зчитуються всі поля wizy, перевіряються штампи й дні, а право до праці встановлюється окремо.",
      ],
      foreignersContext: [
        "Подання заяви pobytowej не продовжує самої wizy; воно може створити окрему легальність pobytu в Польщі за умовами спеціальної норми.",
      ],
    } satisfies LegalNodeGuide,
  },
})

export default visaTopic

export const visaMapNode: LegalNode = {
  id: "visa",
  title: visaTopic.body.title,
  polish: visaTopic.body.polish,
  summary: visaTopic.summary,
  sources: [...visaTopic.body.sources],
}
