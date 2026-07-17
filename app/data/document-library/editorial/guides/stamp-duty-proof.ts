import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources } from "../authoring"

const guide: DocumentGuide = {
  id: "stamp-duty-proof",
  title: "Dowód opłaty skarbowej za zezwolenie",
  category: "financial",
  aliases: ["підтвердження opłaty skarbowej", "оплата скарбова за дозвіл"],
  documentType:
    "Підтвердження сплати opłaty skarbowej за конкретну адміністративну дію.",
  description:
    "Це доказ платежу, а не універсальна квитанція. Сума, одержувач і призначення залежать від виду заяви; тому не можна переносити ставку з іншої процедури лише через подібну назву справи.",
  preparedBy:
    "Платіж здійснює заявник або інша особа на належний рахунок; підтвердження формує банк або платіжний сервіс.",
  howToObtain: [
    "На сторінці właściwego urzędu або UdSC визначити ставку для точної процедури.",
    "Перевірити одержувача, рахунок, суму й призначення платежу до оплати.",
    "Зберегти повне підтвердження з датою, сумою, даними платника й ідентифікацією справи або заявника.",
  ],
  formAndValidity: [
    "Підтвердження має дозволяти однозначно пов’язати платіж із заявником і видом czynności.",
    "Ставку та можливе zwolnienie перевіряють на дату виникнення обов’язку.",
  ],
  purpose: [
    "Підтверджує здійснення конкретної opłaty у визначеній сумі та даті.",
  ],
  doesNotProve: [
    "Не підтверджує комплектність заяви або виконання матеріальних умов дозволу.",
    "Сплата неправильної суми чи на неправильний рахунок не виконує автоматично належного обов’язку.",
  ],
  legalBasis: [
    "Ustawa o opłacie skarbowej разом із додатком.",
    "Офіційна інформація UdSC про актуальні ставки в справах cudzoziemców.",
  ],
  keyChecks: [
    "Вид заяви, правильна ставка, рахунок, одержувач, дата, призначення й дані заявника.",
  ],
  relatedDocuments: ["mos-application", "residence-card-fee-proof"],
  sources: [documentSources.stampFee, documentSources.payments],
  verifiedAt: "2026-07-14",
}

export const stampDutyProofTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:stamp-duty-proof",
    subject: {
      family: "evidence-document",
      reference: { kind: "evidence-document", documentId: "stamp-duty-proof" },
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
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default stampDutyProofTopic
