import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "case-assessment",
  title: "Робочий висновок і план ведення справи",
  category: "evidence",
  aliases: [],
  description:
    "Короткий запис пояснює, чому обрано певну підставу, які факти ще невідомі та які дії потрібні після рішення.",
  preparedBy: "Працівник, який аналізує справу.",
  purpose: ["Зберігає логіку вибору підстави та подальшої роботи."],
  doesNotProve: ["Не є рішенням органу, доказом статусу або офіційною формою."],
  keyChecks: [
    "Відділіть перевірені факти від припущень.",
    "Для невирішеного питання назвіть потрібний матеріал.",
    "Після рішення звірте план з його фактичним змістом.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Art. 77 KPA",
      parts: [
        {
          text: "Art. 77 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-77",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 107 KPA",
      parts: [
        {
          text: "Art. 107 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-107",
          },
        },
      ],
    },
  ],
  sources: [
    {
      label: "Kodeks postępowania administracyjnego",
      url: "https://eli.gov.pl/eli/DU/2025/1691/ogl",
      note: "Офіційне джерело для перевірки форми й застосування.",
    },
  ],
  verifiedAt: "2026-09-05",
  kind: "working-record",
  relatedDocuments: ["evidence-matrix", "administrative-decision"],
  explanation: [
    {
      id: "record-reasoning",
      title: "Висновок, який можна перевірити",
      paragraphs: [
        "До подання записують факти, обрану норму, підтверджені умови й прогалини. Пояснення «людина працює» замале, якщо не встановлено вид роботи, договір і доступність маршруту.",
        "Після рішення робочий план починається з наданого дозволу та його умов. Для кожного обов’язку записують подію, строк, відповідального і документ, який треба зберегти. Сам план не створює нових юридичних обов’язків.",
      ],
    },
  ],
}
export const caseAssessmentDocumentTopic = defineDocumentTopic(guide)
export default caseAssessmentDocumentTopic
