import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import {
  FOREIGNERS_MOS_AMENDMENT_URL,
  documentSources,
  foreignersLaw,
  regulationLaw,
} from "../authoring"

const guide: DocumentGuide = {
  id: "passport",
  title: "Ważny dokument podróży / закордонний паспорт",
  category: "identity",
  aliases: [
    "паспорт",
    "дійсний закордонний паспорт",
    "скани всіх сторінок дійсного паспорта",
    "паспорт або документ подорожі",
    "паспорт і фото",
  ],
  description:
    "Основний документ для встановлення особи, громадянства і реквізитів документа подорожі. У MOS потрібні цифрові копії всіх сторінок, а оригінал показують органу.",
  preparedBy:
    "Видає компетентний орган держави громадянства; заявник додає цифрові копії та показує оригінал.",
  purpose: ["Підтверджує особу, громадянство та реквізити документа."],
  doesNotProve: [
    "Сам по собі не підтверджує поточну підставу перебування або право працювати.",
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.external("Art. 106e ustawy o cudzoziemcach", FOREIGNERS_MOS_AMENDMENT_URL)}.`,
    regulationLaw.text`${regulationLaw.paragraph("6", "§ 6")} rozporządzenia Dz.U. 2026 poz. 553.`,
  ],
  keyChecks: [
    "Чинність документа й усі сторінки без обрізання.",
    "Однакове написання даних у паспорті, PESEL, заяві та договорі.",
    "Наявність оригіналу для пред’явлення.",
  ],
  sources: [
    documentSources.aliens,
    documentSources.regulation553,
    documentSources.mosQa,
  ],
  verifiedAt: "2026-07-18",
}

export const passportTopic: KnowledgeUnit<DocumentGuide> = defineKnowledgeUnit({
  id: "evidence-document:passport",
  subject: {
    family: "evidence-document",
    reference: { kind: "evidence-document", documentId: "passport" },
  },
  summary: guide.description,
  claims: [
    {
      id: "document-purpose",
      kind: "requires-verification",
      text: guide.description,
      basis: [
        {
          reference: {
            kind: "official-source",
            sourceId: "eli-ustawa-o-cudzoziemcach",
          },
          locator: "document-specific requirements",
        },
      ],
    },
  ],
  relationships: [],
  review: {
    reviewStatus: "reviewed",
    language: "uk",
    legalStateDate: "2026-07-18",
    verifiedAt: guide.verifiedAt,
  },
  body: guide,
})

export default passportTopic
