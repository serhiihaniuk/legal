import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "ict-application",
  title: "Паперова заява для ICT",
  category: "procedure",
  aliases: [],
  description:
    "Окрема заява для przeniesienia wewnątrz przedsiębiorstwa та довгострокової мобільності ICT, яку подає приймаюча одиниця.",
  preparedBy: "Jednostka przyjmująca подає паперовий формуляр.",
  purpose: [
    "Описує іноземця, приймаючу одиницю, материнського роботодавця і заплановане переведення.",
  ],
  doesNotProve: [
    "Не є універсальною альтернативою електронному поданню для будь-якого працівника.",
  ],
  keyChecks: [
    "Перевірте точний вид ICT.",
    "Звірте зв’язок компаній, функцію особи та документи переведення.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Офіційний взірець: додаток 7 до розпорядження",
      parts: [
        {
          text: "Офіційний взірець: додаток 7 до розпорядження",
          target: {
            kind: "legal-provision",
            documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
            provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-7",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 106k ustawy o cudzoziemcach",
      parts: [
        {
          text: "Art. 106k ustawy o cudzoziemcach",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-106k",
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
  relatedDocuments: ["business-register-information", "passport"],
  explanation: [
    {
      id: "read-form",
      title: "Як працювати з формою",
      paragraphs: [
        "Використовується спеціальний паперовий порядок. Наявність іноземної компанії у схемі праці ще не означає przeniesienie wewnątrz przedsiębiorstwa.",
        "До заповнення визначте приймаючу одиницю та документальну підставу переведення. Заява показує дані, а відповідні договори та корпоративні матеріали їх підтверджують.",
      ],
    },
  ],
}
export const ictApplicationDocumentTopic = defineDocumentTopic(guide)
export default ictApplicationDocumentTopic
