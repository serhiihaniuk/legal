import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "family-evidence",
  title: "Статус sponsora і докази сімейного життя",
  category: "evidence",
  aliases: [],
  description:
    "Набір матеріалів про правовий статус члена сім’ї, юридичний зв’язок та фактичне сімейне життя. Ці питання перевіряють окремо.",
  preparedBy:
    "Документи статусу й цивільного стану видають компетентні органи; інші матеріали надає сім’я.",
  purpose: [
    "Допомагає встановити належну сімейну підставу та факти, від яких вона залежить.",
  ],
  doesNotProve: [
    "Акт шлюбу сам по собі не підтверджує потрібного статусу sponsora. Спільна адреса не замінює юридичний сімейний зв’язок.",
  ],
  keyChecks: [
    "Читайте рішення sponsora разом із картою та строками.",
    "Перевірте юридичний зв’язок за актами.",
    "Добирайте матеріали фактичного життя лише до питання, яке справді треба з’ясувати.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Art. 159 ustawy o cudzoziemcach",
      parts: [
        {
          text: "Art. 159 ustawy o cudzoziemcach",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-159",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 169 ustawy o cudzoziemcach",
      parts: [
        {
          text: "Art. 169 ustawy o cudzoziemcach",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-169",
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
  kind: "evidence-set",
  relatedDocuments: [
    "administrative-decision",
    "residence-card",
    "civil-status-record",
    "housing-evidence",
  ],
  explanation: [
    {
      id: "separate-questions",
      title: "Три різні питання до сімейних матеріалів",
      paragraphs: [
        "Рішення та документ pobytowy пояснюють статус sponsora. Акт шлюбу або народження пояснює юридичний зв’язок. Матеріали спільного життя стосуються фактичних відносин. Один із цих блоків не замінює інші.",
        "Набір документів залежить від підстави й сумнівів у конкретній справі. Не перетворюйте всі можливі приватні матеріали сім’ї на універсальний обов’язковий пакет.",
      ],
    },
  ],
}
export const familyEvidenceDocumentTopic = defineDocumentTopic(guide)
export default familyEvidenceDocumentTopic
