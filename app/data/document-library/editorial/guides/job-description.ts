import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "job-description",
  title: "Опис посади і фактичних обов’язків",
  category: "work",
  aliases: [],
  description:
    "Матеріал роботодавця, який пояснює, що саме робитиме працівник і які знання потрібні для цих завдань.",
  preparedBy: "Роботодавець або уповноважений керівник описує реальну роботу.",
  purpose: [
    "Дає змогу зіставити посаду, кваліфікації та фактичну організацію роботи.",
  ],
  doesNotProve: [
    "Назва «спеціаліст» або «менеджер» не доводить високої кваліфікації чи конкретної правової підстави.",
  ],
  keyChecks: [
    "Звірте завдання з договором і додатком роботодавця.",
    "Відокремте обов’язкові кваліфікації від побажань роботодавця.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Art. 127 ustawy o cudzoziemcach",
      parts: [
        {
          text: "Art. 127 ustawy o cudzoziemcach",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-127",
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
  relatedDocuments: [
    "employment-contract",
    "qualification-evidence",
    "blue-card-annex",
  ],
}
export const jobDescriptionDocumentTopic = defineDocumentTopic(guide)
export default jobDescriptionDocumentTopic
