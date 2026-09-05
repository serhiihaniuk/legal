import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "trainee-volunteer-annex",
  title: "Додаток для stażysty або wolontariusza",
  category: "procedure",
  aliases: [],
  description:
    "Форма з даними організатора стажування або установи, для якої іноземець виконуватиме волонтерські послуги.",
  preparedBy:
    "Заповнює і підписує організатор stażu або уповноважена особа приймаючої установи через MOS.",
  purpose: [
    "Ідентифікує установу, яка приймає іноземця за конкретною метою перебування.",
  ],
  doesNotProve: [
    "Не замінює договір, програму stażu чи інші докази умов вибраної підстави.",
  ],
  keyChecks: [
    "Визначте, це staż чи wolontariat.",
    "Звірте установу, REGON, контакти та повноваження підписанта.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Офіційний взірець: додаток 4 до розпорядження",
      parts: [
        {
          text: "Офіційний взірець: додаток 4 до розпорядження",
          target: {
            kind: "legal-provision",
            documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
            provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-4",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 106 ustawy o cudzoziemcach",
      parts: [
        {
          text: "Art. 106 ustawy o cudzoziemcach",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-106",
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
  relatedDocuments: ["mos-application"],
  explanation: [
    {
      id: "read-form",
      title: "Як працювати з формою",
      paragraphs: [
        "На формі це додаток 3 до заяви, а в розпорядженні додаток 4. MOS надсилає установі посилання для заповнення.",
        "Застосовуйте форму лише до відповідного маршруту стажування або волонтерства. Назва посади «стажер» у трудовому договорі сама по собі не визначає цю підставу pobytu.",
      ],
    },
  ],
}
export const traineeVolunteerAnnexDocumentTopic = defineDocumentTopic(guide)
export default traineeVolunteerAnnexDocumentTopic
