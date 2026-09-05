import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "visa",
  title: "Віза у паспорті",
  category: "identity",
  aliases: [],
  description:
    "Візова наліпка містить тип візи, територіальну чинність, період дії, кількість в’їздів і дозволену тривалість перебування. Ці поля читають разом з історією поїздок.",
  preparedBy:
    "Видає компетентний орган; перевіряють оригінальний документ подорожі.",
  purpose: ["Показує надані візові умови."],
  doesNotProve: [
    "Дати чинності не означають автоматичного права перебувати весь проміжок. Наліпка сама по собі не дає відповіді про право працювати.",
  ],
  keyChecks: [
    "Зіставте строк чинності, дозволені дні та використані в’їзди.",
    "Перевірте тип, мету та актуальний статус візи.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Art. 59 ustawy o cudzoziemcach",
      parts: [
        {
          text: "Art. 59 ustawy o cudzoziemcach",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-59",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 60 ustawy o cudzoziemcach",
      parts: [
        {
          text: "Art. 60 ustawy o cudzoziemcach",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-60",
          },
        },
      ],
    },
  ],
  sources: [
    {
      label: "Ustawa o cudzoziemcach",
      url: "https://eli.gov.pl/eli/DU/2025/1079/ogl",
      note: "Офіційне джерело для перевірки форми й застосування.",
    },
  ],
  verifiedAt: "2026-09-05",
  relatedDocuments: ["passport", "stay-history"],
}
export const visaDocumentTopic = defineDocumentTopic(guide)
export default visaDocumentTopic
