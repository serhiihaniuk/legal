import type { LegalTextValue } from "~/data/legal-library/legal-text"
import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { OfficialSource, LegalNode } from "~/data/shared/legal-types"

import { kpaLaw, mapTopicSources } from "../authoring"

const kpaArticle6 = {
  kind: "legal-provision",
  documentId: "kpa",
  provisionId: "kpa-art-6",
  editionId: "kpa-2025-1691",
} as const

const kpaArticle7 = {
  kind: "legal-provision",
  documentId: "kpa",
  provisionId: "kpa-art-7",
  editionId: "kpa-2025-1691",
} as const

export type LegalMapTopicBody = {
  title: string
  polish: LegalTextValue
  sources: readonly OfficialSource[]
  guide: LegalNodeGuide
  why?: LegalTextValue
  checkpoints?: readonly LegalTextValue[]
  steps?: readonly LegalTextValue[]
  documents?: readonly LegalTextValue[]
}

export const principleLegalityTopic: KnowledgeUnit<LegalMapTopicBody> =
  defineKnowledgeUnit({
    id: "map-topic:principle-legality",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "principle-legality" },
    },
    summary:
      "Organ діє на підставі права та вживає дій для точного з’ясування фактичного стану.",
    claims: [
      {
        id: "legal-basis-and-facts",
        kind: "statute-text",
        text: kpaLaw.text`${kpaLaw.article("6", "Art. 6")} KPA зобов’язує орган діяти на підставі права, а ${kpaLaw.article("7", "art. 7")} KPA — вживати необхідних дій для точного з’ясування фактичного стану.`,
        basis: [
          { reference: kpaArticle6, locator: "Art. 6" },
          { reference: kpaArticle7, locator: "Art. 7" },
        ],
      },
      {
        id: "practical-legal-test",
        kind: "practical-inference",
        text: "Кожна вимога органу повинна мати зв’язок із конкретною нормою та фактом, який ця норма робить юридично істотним.",
        basis: [
          { reference: kpaArticle6, locator: "Art. 6" },
          { reference: kpaArticle7, locator: "Art. 7" },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
      sourceEditionId: "kpa-2025-1691",
    },
    body: {
      title: "Законність і факти",
      polish: kpaLaw.text`${kpaLaw.articleRange("6", "7", { start: "art. 6", end: "7" })} KPA`,
      sources: [mapTopicSources.kpa],
      guide: {
        introduction: [
          kpaLaw.text`${kpaLaw.article("6", "Art. 6")} KPA зобов’язує орган діяти на підставі права, а ${kpaLaw.article("7", "art. 7")} KPA — вживати необхідних дій для точного з’ясування фактичного стану та вирішення справи з урахуванням interes społeczny і słuszny interes obywateli.`,
        ],
        regulated: [
          "Правова підстава компетенції, процедури й рішення, а також обов’язок органу встановити всі істотні для матеріальної норми факти.",
        ],
        appliesWhen: [
          "Коли орган вимагає документ, відмовляє в прийнятті доказу, визначає предмет справи, застосовує негативну передумову або формулює rozstrzygnięcie.",
        ],
        conditions: [
          "Кожна вимога органу повинна мати зв’язок із конкретною нормою та фактом, який ця норма робить юридично істотним.",
          "Орган оцінює не назву документа, а факт, який він підтверджує, разом з усім матеріалом справи.",
        ],
        exceptions: [
          kpaLaw.text`${kpaLaw.article("7", "Art. 7")} KPA не переносить на орган обов’язок доводити за сторону факти, які за спеціальним законом або характером права має довести сама сторона.`,
        ],
        consequences: [
          "Рішення без достатньої правової підстави або без встановлення істотних фактів може бути скасоване в адміністративному чи судовому контролі; кваліфіковані вади можуть вести до stwierdzenie nieważności.",
        ],
        procedure: [
          "Спочатку визначається матеріальна умова, потім факти, докази, компетенція органу та процесуальна норма, на підставі якої здійснено спірну дію.",
        ],
        foreignersContext: [
          kpaLaw.text`У справі про pobyt czasowy ${kpaLaw.articleRange("6", "7", { start: "art. 6", end: "7" })} KPA не створюють права на дозвіл; це право залежить від передумов ustawy o cudzoziemcach. KPA вимагає, щоб орган правильно встановив факти щодо мети pobytu, доходу, страхування, роботи та негативних передумов.`,
        ],
      },
    },
  })

/** Projection consumed by the legacy map tree while the family migrates. */
export default principleLegalityTopic

export const principleLegalityMapNode: LegalNode = {
  id: "principle-legality",
  title: principleLegalityTopic.body.title,
  polish: principleLegalityTopic.body.polish,
  summary: principleLegalityTopic.summary,
  ...(principleLegalityTopic.body.why
    ? { why: principleLegalityTopic.body.why }
    : {}),
  ...(principleLegalityTopic.body.checkpoints
    ? { checkpoints: [...principleLegalityTopic.body.checkpoints] }
    : {}),
  ...(principleLegalityTopic.body.steps
    ? { steps: [...principleLegalityTopic.body.steps] }
    : {}),
  ...(principleLegalityTopic.body.documents
    ? { documents: [...principleLegalityTopic.body.documents] }
    : {}),
  sources: [...principleLegalityTopic.body.sources],
}
