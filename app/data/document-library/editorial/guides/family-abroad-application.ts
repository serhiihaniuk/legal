import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "family-abroad-application",
  title: "Заява для члена сім’ї за кордоном",
  category: "procedure",
  aliases: [],
  description:
    "Паперова заява, яку член розділеної сім’ї подає щодо іноземця за межами Польщі в передбачених законом сімейних маршрутах.",
  preparedBy: "Подає członek rodziny rozdzielonej.",
  purpose: [
    "Пов’язує статус особи в Польщі, сімейний зв’язок і прохання про дозвіл для особи за кордоном.",
  ],
  doesNotProve: [
    "Не підходить автоматично для всіх сімейних справ і не замінює згоду особи, якої стосується подання.",
  ],
  keyChecks: [
    "Встановіть, де перебуває особа на час подання.",
    "Звірте точну сімейну підставу.",
    "Додайте належну згоду і документи особи та зв’язку.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Офіційний взірець: додаток 8 до розпорядження",
      parts: [
        {
          text: "Офіційний взірець: додаток 8 до розпорядження",
          target: {
            kind: "legal-provision",
            documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
            provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-8",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 106l ustawy o cudzoziemcach",
      parts: [
        {
          text: "Art. 106l ustawy o cudzoziemcach",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-106l",
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
  relatedDocuments: [
    "family-application-consent",
    "civil-status-record",
    "passport",
  ],
  explanation: [
    {
      id: "read-form",
      title: "Як працювати з формою",
      paragraphs: [
        "Місцеперебування особи змінює вибір форми й автора подання. Не переносіть сюди автоматично інструкцію особистого електронного подання в MOS.",
        "Розрізняйте особу, яка подає заяву, та особу, якій мають надати дозвіл. Їхні дані заповнюються у відповідних частинах формуляра.",
      ],
    },
  ],
}
export const familyAbroadApplicationDocumentTopic = defineDocumentTopic(guide)
export default familyAbroadApplicationDocumentTopic
