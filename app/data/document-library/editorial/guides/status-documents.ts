import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "status-documents",
  title: "Документи правового статусу і підстави перебування",
  category: "identity",
  aliases: [],
  kind: "evidence-set",
  description:
    "Паспорт, рішення, karta pobytu, документ члена сім’ї UE або підтвердження спеціального статусу відповідають на різні питання. Спочатку визначте точний вид документа.",
  preparedBy:
    "Видає компетентний орган; заявник надає чинні й попередні документи, потрібні для хронології.",
  purpose: ["Допомагає встановити статус особи та його документальне джерело."],
  doesNotProve: [
    "Схожий вигляд карток не означає однакових прав. Документ заявника не замінює перевірки статусу sponsora.",
  ],
  keyChecks: [
    "Запишіть повну польську назву документа, видавця та підставу.",
    "Зіставте карту з рішенням, якщо статус надано рішенням.",
    "Перевірте, чи документ підтверджує громадянство, сімейний статус, дозвіл або іншу обставину.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Art. 76 KPA",
      parts: [
        {
          text: "Art. 76 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-76",
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
    "passport",
    "residence-card",
    "administrative-decision",
    "pesel-ukr-confirmation",
    "family-evidence",
  ],
  explanation: [
    {
      id: "read-materials",
      title: "Як читати ці матеріали",
      paragraphs: [
        "Для документа члена сім’ї UE спочатку встановіть, у межах якого режиму його видано. Не переносіть автоматично правила звичайної карти pobytu на документ з іншою правовою підставою.",
        "У справі про pobyt stały назва «документ підстави» потребує уточнення: це може бути Karta Polaka, акт цивільного стану або рішення залежно від вибраної норми. Список визначає ця норма, а не загальний заголовок каталогу.",
      ],
    },
  ],
}
export const statusDocumentsDocumentTopic = defineDocumentTopic(guide)
export default statusDocumentsDocumentTopic
