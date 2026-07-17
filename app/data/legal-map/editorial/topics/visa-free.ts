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

const schengenReference = {
  kind: "external",
  url: "https://eur-lex.europa.eu/eli/reg/2016/399/oj",
} as const

type VisaFreeBody = LegalMapTopicBody

export const visaFreeTopic: KnowledgeUnit<VisaFreeBody> = defineKnowledgeUnit({
  id: "map-topic:visa-free",
  subject: {
    family: "map-topic",
    reference: { kind: "map-node", nodeId: "visa-free" },
  },
  summary:
    "Дозволений короткий pobyt не означає автоматичного права до праці. Рахуй дні в рухомому 180-денному періоді й перевір інші підстави.",
  claims: [
    {
      id: "visa-free-is-short-stay",
      kind: "requires-verification",
      text: "Ruch bezwizowy має окремий календарний ліміт і не перетворюється автоматично на zezwolenie na pobyt або право до праці.",
      basis: [
        { reference: schengenReference, locator: "90/180" },
        { reference: aliensSourceReference, locator: "stay and work rules" },
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
    title: "Ruch bezwizowy",
    polish: "90/180",
    sources: [mapTopicSources.schengen, mapTopicSources.aliens],
    guide: {
      introduction: [
        "Ruch bezwizowy дозволяє короткий pobyt без wizy, але не є видом zezwolenia na pobyt і не визначає сам по собі права до праці.",
      ],
      regulated: [
        "Основне обмеження становить 90 днів у кожному рухомому 180-денному періоді в Schengen, разом з умовами в’їзду за Schengen Borders Code.",
      ],
      appliesWhen: [
        "Режим діє для громадян держав, звільнених від візового обов’язку, за наявності чинного біометричного документа та виконання умов в’їзду.",
      ],
      conditions: [
        "Кожен день присутності в Schengen входить до розрахунку, а вікно 180 днів пересувається разом із датою перевірки.",
      ],
      exceptions: [
        "Періоди на підставі певних національних дозволів або wizy D оцінюються за окремими правилами й не замінюють точного календарного розрахунку.",
      ],
      consequences: [
        "Перевищення допустимого строку створює нелегальний pobyt, якщо не виникла інша законна підстава.",
      ],
      procedure: [
        "Розрахунок робиться за всіма в’їздами й виїздами в Schengen, після чого окремо перевіряються praca і можливість повторного в’їзду.",
      ],
      foreignersContext: [
        "Для громадянина України aktywny status UKR може бути окремою підставою легальності в Польщі; його не слід змішувати з лімітом ruchu bezwizowego.",
      ],
    } satisfies LegalNodeGuide,
  },
})

export default visaFreeTopic

export const visaFreeMapNode: LegalNode = {
  id: "visa-free",
  title: visaFreeTopic.body.title,
  polish: visaFreeTopic.body.polish,
  summary: visaFreeTopic.summary,
  sources: [...visaFreeTopic.body.sources],
}
