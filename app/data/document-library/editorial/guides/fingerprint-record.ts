import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "fingerprint-record",
  title: "Інформація про відбитки пальців",
  category: "procedure",
  aliases: [],
  description:
    "Службова форма фіксує взяття відбитків або причину їх відсутності у процедурі pobytu czasowego.",
  preparedBy: "Заповнює особа, яка бере відбитки.",
  purpose: [
    "Документує виконання біометричної дії або зазначену причину її невиконання.",
  ],
  doesNotProve: [
    "Заявник не заповнює цю форму сам замість явки. Для CUKR перевірка відбитків у реєстрі є окремим порядком.",
  ],
  keyChecks: [
    "Відрізняйте запис про відбитки від самого зображення відбитків.",
    "Звірте особу й зафіксовану причину відсутності.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Офіційний взірець: додаток 10 до розпорядження",
      parts: [
        {
          text: "Офіційний взірець: додаток 10 до розпорядження",
          target: {
            kind: "legal-provision",
            documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
            provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-10",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 106b ustawy o cudzoziemcach",
      parts: [
        {
          text: "Art. 106b ustawy o cudzoziemcach",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-106b",
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
  relatedDocuments: ["passport", "cukr-application"],
  explanation: [
    {
      id: "read-form",
      title: "Як працювати з формою",
      paragraphs: [
        "Це документ органу, який може з’явитися в матеріалах справи після особистої дії. Його місце у каталозі не означає, що заявник має підготувати його як вкладення до початкової заяви.",
      ],
    },
  ],
}
export const fingerprintRecordDocumentTopic = defineDocumentTopic(guide)
export default fingerprintRecordDocumentTopic
