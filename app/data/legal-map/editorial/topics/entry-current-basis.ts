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

type EntryCurrentBasisBody = LegalMapTopicBody

export const entryCurrentBasisTopic: KnowledgeUnit<EntryCurrentBasisBody> =
  defineKnowledgeUnit({
    id: "map-topic:entry-current-basis",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "entry-current-basis" },
    },
    summary:
      "Розділяй право в’їзду, право перебування та право повторного в’їзду. Віза C, віза D, ruch bezwizowy та karta pobytu мають різну логіку.",
    claims: [
      {
        id: "entry-stay-return",
        kind: "requires-verification",
        text: "Право в’їзду, поточний pobyt і можливість повторного в’їзду після виїзду перевіряються як окремі правові питання.",
        basis: [
          { reference: aliensSourceReference, locator: "stay documents" },
          { reference: schengenReference, locator: "entry conditions" },
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
      title: "В’їзд і поточна підстава",
      polish: "wjazd i legalny pobyt",
      sources: [mapTopicSources.aliens, mapTopicSources.schengen],
      guide: {
        introduction: [
          "Право в’їзду, право залишатися в Польщі та право повторно в’їхати після виїзду є різними питаннями. Поточна підстава визначається за документом, строком, використаними днями та подіями після в’їзду.",
        ],
        regulated: [
          "В’їзд регулюють Schengen Borders Code, правила віз і ustawa o cudzoziemcach; перебування може випливати з wizy, ruchu bezwizowego, zezwolenia, ochrony або спеціальної норми.",
        ],
        appliesWhen: [
          "Аналіз проводиться при кожній новій справі, перед виїздом, після закінчення документа та при переході між статусами.",
        ],
        conditions: [
          "Потрібні чинний документ подорожі, точна підстава, період її дії та відсутність події, що її припинила.",
        ],
        exceptions: [
          "Легальність pobytu під час очікування на decyzję може діяти лише в Польщі й не є самостійним документом для повторного в’їзду.",
        ],
        consequences: [
          "Неправильний розрахунок строку змінює допустимість заяви, ризик odmowy wszczęcia та можливість законного повернення після подорожі.",
        ],
        procedure: [
          "Будується хронологія в’їздів і виїздів, перевіряються wiza/karta/decyzja, а потім окремо оцінюються pobyt, praca і powrót.",
        ],
        foreignersContext: [
          "Для osoby з UKR виїзд і реєстровий status оцінюються за спеціальними правилами, а після CUKR — за правилами zezwolenia na pobyt czasowy та документа podroży.",
        ],
      } satisfies LegalNodeGuide,
      why: "Перш ніж готувати нову заяву, треба знати, на якій підставі особа перебуває сьогодні й до якої дати.",
      checkpoints: [
        "Який документ був підставою в’їзду?",
        "Скільки днів використано?",
        "Чи є заборона/відмова?",
        "Чи виїзд під час процедури дозволить повернутися?",
      ],
      documents: [
        "паспорт",
        "віза",
        "штампи/дані перетину",
        "карта pobytu",
        "рішення",
        "довідка про trwającą procedurę",
      ],
    },
  })

export default entryCurrentBasisTopic

export const entryCurrentBasisMapNode: LegalNode = {
  id: "entry-current-basis",
  title: entryCurrentBasisTopic.body.title,
  polish: entryCurrentBasisTopic.body.polish,
  summary: entryCurrentBasisTopic.summary,
  why: entryCurrentBasisTopic.body.why,
  checkpoints: [...(entryCurrentBasisTopic.body.checkpoints ?? [])],
  documents: [...(entryCurrentBasisTopic.body.documents ?? [])],
  sources: [...entryCurrentBasisTopic.body.sources],
}
