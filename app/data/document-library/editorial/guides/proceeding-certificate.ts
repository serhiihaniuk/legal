import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "proceeding-certificate",
  title: "Довідка та інформація про перебіг справи",
  category: "procedure",
  aliases: [],
  kind: "document",
  description:
    "Zaświadczenie або офіційне повідомлення підтверджує конкретні відомості про подання чи перебіг провадження. Читайте, який факт і на яку дату засвідчено.",
  preparedBy:
    "Компетентний орган видає документ; працівник справи зберігає його разом із матеріалами подання.",
  purpose: ["Підтверджує зазначений у документі факт або стан."],
  doesNotProve: [
    "Інформація про відкриту справу не дорівнює рішенню про надання дозволу.",
  ],
  keyChecks: [
    "Звірте орган, особу, вид справи і точне формулювання підтвердженого факту.",
    "Відокремте дату видачі від дати подання.",
    "Перевіряйте правові наслідки за нормою для відповідного виду заяви.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Art. 217 KPA",
      parts: [
        {
          text: "Art. 217 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-217",
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
  relatedDocuments: ["upo", "case-file-index", "administrative-decision"],
  explanation: [
    {
      id: "read-materials",
      title: "Як читати ці матеріали",
      paragraphs: [
        "UPO підтверджує певну електронну подію. Довідка органу може підтверджувати інший факт. Збережіть обидва документи й не називайте їх взаємозамінними без перевірки змісту.",
        "Екран із загальним статусом «у процесі» містить менше інформації, ніж документ із конкретним формулюванням. Якщо потрібен певний факт, спочатку визначте, яке саме підтвердження його засвідчує.",
      ],
    },
  ],
}
export const proceedingCertificateDocumentTopic = defineDocumentTopic(guide)
export default proceedingCertificateDocumentTopic
