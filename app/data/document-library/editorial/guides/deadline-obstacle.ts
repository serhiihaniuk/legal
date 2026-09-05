import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "deadline-obstacle",
  title: "Матеріали про перешкоду для дотримання строку",
  category: "evidence",
  aliases: [],
  kind: "evidence-set",
  description:
    "Набір матеріалів пояснює, яка перешкода завадила виконати дію, коли вона тривала і коли припинилася.",
  preparedBy: "Заявник подає пояснення та доступні підтвердження.",
  purpose: ["Допомагає обґрунтувати відсутність вини у пропуску строку."],
  doesNotProve: [
    "Сам документ про хворобу або збій не гарантує поновлення строку.",
  ],
  keyChecks: [
    "Зв’яжіть перешкоду з конкретною пропущеною дією.",
    "Зафіксуйте початок і припинення перешкоди.",
    "Перевірте одночасне виконання пропущеної дії разом із проханням.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Art. 58 KPA",
      parts: [
        {
          text: "Art. 58 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-58",
          },
        },
      ],
    },
  ],
  sources: [
    {
      label: "KPA: документи й доказування",
      url: "https://eli.gov.pl/eli/DU/2025/1691/ogl",
      note: "Пояснення способу читання й організації матеріалів. Конкретні матеріальні умови визначає підстава справи.",
    },
  ],
  verifiedAt: "2026-09-05",
  relatedDocuments: ["delivery-proof", "dispatch-proof"],
  explanation: [
    {
      id: "read-materials",
      title: "Як читати ці матеріали",
      paragraphs: [
        "Медичний документ, підтвердження аварії або повідомлення сервісу треба читати в контексті можливості виконати конкретну дію. Назва перешкоди без її впливу на подання залишає питання відкритим.",
        "Розрізняйте дату видачі документа й період, який він підтверджує. Для пояснення строку потрібна хронологія подій, а не лише дата довідки.",
      ],
    },
  ],
}
export const deadlineObstacleDocumentTopic = defineDocumentTopic(guide)
export default deadlineObstacleDocumentTopic
