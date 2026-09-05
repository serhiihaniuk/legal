import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "study-annex",
  title: "Додаток навчального закладу до заяви",
  category: "procedure",
  aliases: [],
  description:
    "Електронна форма навчального закладу з даними студента, навчання та установи. Це окремий елемент заяви на pobyt w celu kształcenia się na studiach.",
  preparedBy:
    "Заповнює і підписує jednostka prowadząca studia через отримане з MOS посилання.",
  purpose: ["Підтверджує дані навчання в передбаченій для заяви формі."],
  doesNotProve: [
    "Звичайна довідка з деканату не замінює електронний додаток; сам додаток не доводить оплату, страхування та достатні кошти.",
  ],
  keyChecks: [
    "Зіставте напрям, форму навчання та дати з довідкою закладу.",
    "Перевірте адресу e-mail закладу та завершення підписання.",
    "Окремо перевірте оплату й поточний статус студента.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Офіційний взірець: додаток 6 до розпорядження",
      parts: [
        {
          text: "Офіційний взірець: додаток 6 до розпорядження",
          target: {
            kind: "legal-provision",
            documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
            provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-6",
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
  relatedDocuments: ["study-confirmation", "tuition-payment", "study-progress"],
  explanation: [
    {
      id: "read-form",
      title: "Як працювати з формою",
      paragraphs: [
        "На формі це додаток 5 до заяви, у розпорядженні додаток 6. Її заповнює заклад, тому завантажений заявником скан довідки не виконує цю дію.",
        "Якщо після подання змінено напрям або статус навчання, зіставте нові дані з уже поданим додатком і документами справи.",
      ],
    },
  ],
}
export const studyAnnexDocumentTopic = defineDocumentTopic(guide)
export default studyAnnexDocumentTopic
