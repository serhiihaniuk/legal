import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "family-application-consent",
  title: "Згода на подання сімейної заяви",
  category: "procedure",
  aliases: [],
  description:
    "Згода іноземця на подання заяви членом розділеної сім’ї. Вона стосується конкретного сімейного подання щодо особи за кордоном.",
  preparedBy:
    "Підписує особа, щодо якої подають заяву; форму додають до сімейної заяви.",
  purpose: ["Фіксує згоду на подання та називає особу, яка подає заяву."],
  doesNotProve: [
    "Не замінює pełnomocnictwo для будь-яких подальших процесуальних дій або доказ сімейного зв’язку.",
  ],
  keyChecks: [
    "Перевірте дані обох осіб і підпис.",
    "Зіставте згоду з конкретною заявою.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Офіційний взірець: додаток 9 до розпорядження",
      parts: [
        {
          text: "Офіційний взірець: додаток 9 до розпорядження",
          target: {
            kind: "legal-provision",
            documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
            provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-9",
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
  relatedDocuments: ["family-abroad-application", "power-of-attorney"],
  explanation: [
    {
      id: "read-form",
      title: "Як працювати з формою",
      paragraphs: [
        "У формулярі названо того, хто погоджується на подання, і члена сім’ї, який його здійснює. Не використовуйте згоду як довільний дозвіл представляти особу в усіх справах.",
      ],
    },
  ],
}
export const familyApplicationConsentDocumentTopic = defineDocumentTopic(guide)
export default familyApplicationConsentDocumentTopic
