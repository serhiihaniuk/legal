import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources } from "../authoring"

const guide: DocumentGuide = {
  id: "upo",
  title: "UPO — Urzędowe Poświadczenie Odbioru",
  category: "procedure",
  aliases: ["upo / urzędowe poświadczenie", "upo та akta sprawy"],
  description:
    "Системне підтвердження технічного отримання електронного документа. Його треба зберігати разом із PDF/XML надісланої заяви.",
  preparedBy: "Формує MOS після правильного технічного надсилання.",
  purpose: [
    "Підтверджує технічне прийняття заяви системою та дату надсилання.",
  ],
  doesNotProve: [
    "Не підтверджує формальну або матеріальну правильність заяви й не є позитивним рішенням.",
  ],
  legalBasis: [
    "Електронна процедура MOS; зміст заяви та її додатків регулює ustawa o cudzoziemcach.",
  ],
  keyChecks: [
    "Збережені UPO, PDF і XML тієї самої версії.",
    "Документ не є лише статусом «przesłany» або скриншотом.",
  ],
  sources: [documentSources.mosQa, documentSources.aliens],
  verifiedAt: "2026-07-14",
}

export const upoTopic: KnowledgeUnit<DocumentGuide> = defineKnowledgeUnit({
  id: "evidence-document:upo",
  subject: {
    family: "evidence-document",
    reference: { kind: "evidence-document", documentId: "upo" },
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

export default upoTopic
