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
} from "../authoring"

const guide: DocumentGuide = {
  id: "authority-summons",
  title: "Wezwanie organu",
  category: "procedure",
  aliases: ["wezwanie"],
  description:
    "Офіційне письмо органу, яке вимагає конкретної дії, документа, пояснення або особистої явки у визначеній справі.",
  preparedBy:
    "Видає organ, який веде справу; адресат виконує вимогу або подає обґрунтовану відповідь.",
  purpose: [
    "Повідомляє, що саме, у який спосіб і до якого строку вимагає organ.",
  ],
  doesNotProve: [
    "Не кожне wezwanie означає brak formalny і не кожна вимога автоматично є правомірною.",
  ],
  legalBasis: [
    kpaLaw.text`${kpaLaw.articleRange("50", "56", { start: "Art. 50", end: "56" })} KPA.`,
    kpaLaw.text`${kpaLaw.article("64", "Art. 64 § 2 KPA")} — усунення формальних недоліків.`,
    foreignersLaw.text`У справах pobytowych також спеціальні ${foreignersLaw.external("art. 106e ustawy o cudzoziemcach", FOREIGNERS_MOS_AMENDMENT_URL)}, ${foreignersLaw.external("art. 106f ustawy o cudzoziemcach", FOREIGNERS_MOS_AMENDMENT_URL)} і ${foreignersLaw.external("art. 106i ustawy o cudzoziemcach", FOREIGNERS_MOS_AMENDMENT_URL)}.`,
  ],
  keyChecks: [
    "Organ, адресат, номер справи, кожне żądanie, правова підстава, строк, спосіб виконання, наслідок і підпис.",
  ],
  sources: [documentSources.kpa, documentSources.aliens],
  verifiedAt: "2026-07-14",
}

export const authoritySummonsTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:authority-summons",
    subject: {
      family: "evidence-document",
      reference: { kind: "evidence-document", documentId: "authority-summons" },
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

export default authoritySummonsTopic
