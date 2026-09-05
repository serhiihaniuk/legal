import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "resident-application",
  title: "Заява на pobyt rezydenta długoterminowego UE",
  category: "procedure",
  aliases: [],
  description:
    "Окрема заява через MOS, яка описує періоди перебування, відсутності, дохід, страхування та підтвердження мови. Назва сервісу MOS не означає, що всі дозволи мають один формуляр.",
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
      plainText: "Art. 219 ustawy o cudzoziemcach",
      parts: [
        {
          text: "Art. 219 ustawy o cudzoziemcach",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-219",
          },
        },
      ],
    },
  ],
  sources: [
    {
      label: "Формуляр, Dz.U. 2026 poz. 487",
      url: "https://eli.gov.pl/eli/DU/2026/487/ogl",
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
    "stay-history",
    "income-evidence",
    "polish-language-proof",
    "housing-evidence",
    "upo",
    "passport",
  ],
}
export const residentApplicationDocumentTopic = defineDocumentTopic(guide)
export default residentApplicationDocumentTopic
