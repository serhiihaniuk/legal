import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "work-organisation-evidence",
  title: "Договори між компаніями і докази організації роботи",
  category: "company",
  aliases: [],
  kind: "evidence-set",
  description:
    "Набір матеріалів показує, хто організовує роботу, дає завдання, контролює результат і несе відповідальність за його якість.",
  preparedBy: "Компанії надають договори та матеріали фактичного виконання.",
  purpose: ["Дає фактичну основу для оцінки моделі співпраці."],
  doesNotProve: [
    "Назва outsourcing або одна умова договору не визначає правову кваліфікацію всієї моделі.",
  ],
  keyChecks: [
    "Порівняйте договір із фактичними вказівками й графіками.",
    "Перевірте, що вимірює SLA/KPI і хто приймає результат.",
    "Звірте рахунки з протоколами приймання та відповідальністю за виправлення недоліків.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Art. 75 KPA",
      parts: [
        {
          text: "Art. 75 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-75",
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
  relatedDocuments: [
    "business-register-information",
    "crbr-information",
    "employment-contract",
  ],
  explanation: [
    {
      id: "read-materials",
      title: "Як читати ці матеріали",
      paragraphs: [
        "Договір описує домовленість сторін. Протоколи, рахунки, графіки та робочі вказівки показують її виконання. Якщо ці джерела суперечать одне одному, зафіксуйте розбіжність і фактичного автора рішень.",
        "Для кожного матеріалу назвіть питання. Графік може показати, хто визначає час роботи. Протокол приймання може показати, хто оцінює результат. Жоден із цих матеріалів окремо не дає остаточної юридичної кваліфікації.",
      ],
    },
  ],
}
export const workOrganisationEvidenceDocumentTopic = defineDocumentTopic(guide)
export default workOrganisationEvidenceDocumentTopic
