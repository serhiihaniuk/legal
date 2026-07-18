import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources, foreignersLaw } from "../authoring"

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
    foreignersLaw.text`${foreignersLaw.article("106d", "Art. 106d ust. 5–6")} ustawy o cudzoziemcach — автоматичне формування UPO та момент належного подання заяви.`,
  ],
  keyChecks: [
    "Збережені UPO, PDF і XML тієї самої версії.",
    "Документ не є лише статусом «przesłany» або скриншотом.",
  ],
  sources: [documentSources.mosQa, documentSources.aliens],
  verifiedAt: "2026-07-18",
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
      id: "upo-generation-and-filing",
      kind: "statute-text",
      text: "MOS автоматично формує UPO, а заява вважається поданою після наявності потрібних підписів і UPO.",
      basis: [
        {
          reference: {
            kind: "official-source",
            sourceId: "eli-ustawa-o-cudzoziemcach",
          },
          locator: "Art. 106d ust. 5–6",
        },
      ],
    },
    {
      id: "upo-technical-scope",
      kind: "official-guidance",
      text: "UPO підтверджує технічну правильність і прийняття документа системою; працівник organu окремо перевіряє дані та додатки.",
      basis: [
        {
          reference: { kind: "official-source", sourceId: "udsc-mos-qa" },
          locator: "pytania 35, 37, 39 i 61",
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

export default upoTopic
