import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import {
  FOREIGNERS_MOS_AMENDMENT_URL,
  documentSources,
  foreignersLaw,
  kpaLaw,
  regulationLaw,
  workLaw,
} from "../authoring"

const guide: DocumentGuide = {
  id: "administrative-decision",
  title: "Decyzja administracyjna",
  category: "procedure",
  aliases: ["рішення"],
  description:
    "Владне розstrzygnięcie адміністративної справи. Її треба читати як ціле: sentencja, встановлені факти, оцінка доказів, норми, uzasadnienie і pouczenie.",
  preparedBy:
    "Видає właściwy organ; у першій інстанції в типовій справі pobytowej — wojewoda.",
  purpose: [
    "Визначає результат справи, правову підставу, мотиви та спосіб оскарження.",
  ],
  doesNotProve: [
    "Дата рішення не є датою doręczenia, а готовність карти не замінює decyzji.",
  ],
  legalBasis: [
    kpaLaw.text`${kpaLaw.articleRange("104", "113", { start: "Art. 104", end: "113" })} KPA та спеціальні норми ${foreignersLaw.document("ustawy o cudzoziemcach")}.`,
  ],
  keyChecks: [
    "Organ, strona, podstawa prawna, rozstrzygnięcie, uzasadnienie faktyczne i prawne, pouczenie, podpis, data doręczenia.",
  ],
  sources: [documentSources.kpa, documentSources.aliens],
  verifiedAt: "2026-07-14",
}

export const administrativeDecisionTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:administrative-decision",
    subject: {
      family: "evidence-document",
      reference: {
        kind: "evidence-document",
        documentId: "administrative-decision",
      },
    },
    summary: guide.description,
    claims: [
      {
        id: "document-purpose",
        kind: "requires-verification",
        text: guide.description,
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "document-specific requirements",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default administrativeDecisionTopic
