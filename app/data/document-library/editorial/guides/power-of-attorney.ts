import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources, kpaLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "power-of-attorney",
  title: "Pełnomocnictwo",
  category: "procedure",
  aliases: ["pełnomocnictwo"],
  description:
    "Документ, яким mocodawca уповноважує конкретну фізичну особу діяти від його імені у визначеному обсязі.",
  preparedBy:
    "Підписує mocodawca; представник долучає оригінал або допустиму засвідчену копію.",
  purpose: [
    "Підтверджує право представника отримувати письма й виконувати дії в межах повноваження.",
  ],
  doesNotProve: [
    "Не дозволяє замінити заявника в особистих діях, які спеціальний закон залишає за ним.",
  ],
  legalBasis: [
    kpaLaw.text`${kpaLaw.articleRange("32", "33", { start: "Art. 32", end: "33" })} KPA.`,
    "Оплата — ustawa o opłacie skarbowej, якщо немає звільнення.",
  ],
  keyChecks: [
    "Особа mocodawcy і представника, підпис, дата, обсяг, форма копії та opłata skarbowa.",
  ],
  sources: [
    documentSources.kpa,
    {
      label: "MOS — osobiste działanie i pełnomocnictwo",
      url: "https://mos.cudzoziemcy.gov.pl/kategorie-informacji/procedury/osobiste-dzia-anie-i-pe-nomocnictwo/",
      note: "Офіційне пояснення представництва в справах cudzoziemców.",
    },
  ],
  verifiedAt: "2026-07-14",
}

export const powerOfAttorneyTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:power-of-attorney",
    subject: {
      family: "evidence-document",
      reference: { kind: "evidence-document", documentId: "power-of-attorney" },
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
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default powerOfAttorneyTopic
