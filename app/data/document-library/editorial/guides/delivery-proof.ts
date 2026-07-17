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
  id: "delivery-proof",
  title: "Dowód doręczenia",
  category: "procedure",
  aliases: [
    "підтвердження doręczenia",
    "конверт і awizo",
    "підтвердження e-doręczenia",
  ],
  description:
    "Доказ способу й юридичної дати вручення листа. Саме з цією датою закон часто пов’язує початок процесуального строку.",
  preparedBy:
    "Залежно від каналу це UPO/UPD, dowód e-Doręczenia, zwrotne potwierdzenie odbioru, koperta або awizo.",
  purpose: [
    "Підтверджує спосіб і дату doręczenia конкретного письма конкретному адресату.",
  ],
  doesNotProve: ["Не підтверджує правильність змісту wezwania або decyzji."],
  legalBasis: [
    kpaLaw.text`${kpaLaw.articleRange("39", "49b", { start: "Art. 39", end: "49b" })} KPA.`,
  ],
  keyChecks: [
    "Правильний адресат або pełnomocnik, канал, фактична й юридична дата, умови fikcji doręczenia.",
  ],
  sources: [
    documentSources.kpa,
    {
      label: "gov.pl — e-Doręczenia",
      url: "https://www.gov.pl/web/e-doreczenia",
      note: "Офіційний портал електронного вручення.",
    },
  ],
  verifiedAt: "2026-07-14",
}

export const deliveryProofTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:delivery-proof",
    subject: {
      family: "evidence-document",
      reference: { kind: "evidence-document", documentId: "delivery-proof" },
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

export default deliveryProofTopic
