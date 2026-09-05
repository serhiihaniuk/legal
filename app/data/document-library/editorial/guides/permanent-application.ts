import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "permanent-application",
  title: "Заява на pobyt stały",
  category: "procedure",
  aliases: [],
  description:
    "Окрема заява через MOS, яка описує конкретну підставу постійного перебування, її факти та документи. Назва сервісу MOS не означає, що всі дозволи мають один формуляр.",
  preparedBy: "Заявник заповнює належний тип заяви в MOS, підписує і надсилає.",
  purpose: ["Фіксує прохання про конкретний вид дозволу та заявлені факти."],
  doesNotProve: ["Не замінює доказів виконання матеріальних умов дозволу."],
  keyChecks: [
    "Перевірте вид заяви до заповнення.",
    "Зіставте дати й дані з документами.",
    "Збережіть подану версію і підтвердження.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Art. 203 ustawy o cudzoziemcach",
      parts: [
        {
          text: "Art. 203 ustawy o cudzoziemcach",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-203",
          },
        },
      ],
    },
  ],
  sources: [
    {
      label: "Формуляр, Dz.U. 2026 poz. 488",
      url: "https://eli.gov.pl/eli/DU/2026/488/ogl",
      note: "Офіційне джерело для перевірки форми й застосування.",
    },
    {
      label: "UdSC: запуск MOS",
      url: "https://www.gov.pl/web/udsc/info-mos",
      note: "Офіційне джерело для перевірки форми й застосування.",
    },
  ],
  verifiedAt: "2026-09-05",
  relatedDocuments: [
    "settlement-intention",
    "civil-status-record",
    "upo",
    "passport",
  ],
}
export const permanentApplicationDocumentTopic = defineDocumentTopic(guide)
export default permanentApplicationDocumentTopic
