import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "signature-specimen",
  title: "Формуляр взірця підпису",
  category: "procedure",
  aliases: [],
  description:
    "Форма для взірця підпису, що використовується під час підготовки карти pobytu czasowego.",
  preparedBy:
    "Іноземець ставить взірець підпису в межах процедури органу; застосовність винятків перевіряють за формою.",
  purpose: ["Дає взірець для персоналізації документа."],
  doesNotProve: [
    "Не замінює електронного підпису заяви в MOS чи підпису роботодавця на його додатку.",
  ],
  keyChecks: [
    "Розрізняйте підпис заяви та взірець для карти.",
    "Дотримуйтеся поля й інструкції на формулярі.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Офіційний взірець: додаток 11 до розпорядження",
      parts: [
        {
          text: "Офіційний взірець: додаток 11 до розпорядження",
          target: {
            kind: "legal-provision",
            documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
            provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-11",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 106b ustawy o cudzoziemcach",
      parts: [
        {
          text: "Art. 106b ustawy o cudzoziemcach",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-106b",
          },
        },
      ],
    },
  ],
  sources: [
    {
      label: "Форми pobytu czasowego, Dz.U. 2026 poz. 553",
      url: "https://eli.gov.pl/eli/DU/2026/553/ogl",
      note: "Офіційне джерело для перевірки форми й застосування.",
    },
  ],
  verifiedAt: "2026-09-05",
  relatedDocuments: ["mos-application", "residence-card"],
  explanation: [
    {
      id: "read-form",
      title: "Як працювати з формою",
      paragraphs: [
        "Підпис у цьому полі має іншу функцію, ніж підтвердження змісту електронної заяви. Наявність підписаної заяви не доводить, що орган уже отримав потрібний взірець.",
      ],
    },
  ],
}
export const signatureSpecimenDocumentTopic = defineDocumentTopic(guide)
export default signatureSpecimenDocumentTopic
