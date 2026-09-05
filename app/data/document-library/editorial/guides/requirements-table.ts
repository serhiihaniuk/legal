import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "requirements-table",
  title: "Таблиця вимог із wezwania",
  category: "evidence",
  aliases: [],
  description:
    "Робоча таблиця розкладає отримане wezwanie на окремі пункти. Для кожного видно вимогу, строк, доказ і стан підготовки відповіді.",
  preparedBy: "Працівник справи складає її за отриманим письмом.",
  purpose: [
    "Показує, які пункти відповіді готові, а які ще потребують матеріалу.",
  ],
  doesNotProve: [
    "Це спосіб організації роботи, а не обов’язковий державний формуляр або самостійний доказ виконання умов.",
  ],
  keyChecks: [
    "Не об’єднуйте різні вимоги в один рядок.",
    "Зберігайте текст вимоги і свою інтерпретацію окремо.",
    "Вказуйте фактично поданий додаток, а не лише запланований.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Art. 54 KPA",
      parts: [
        {
          text: "Art. 54 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-54",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 64 KPA",
      parts: [
        {
          text: "Art. 64 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-64",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 77 KPA",
      parts: [
        {
          text: "Art. 77 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-77",
          },
        },
      ],
    },
  ],
  sources: [
    {
      label: "Kodeks postępowania administracyjnego",
      url: "https://eli.gov.pl/eli/DU/2025/1691/ogl",
      note: "Офіційне джерело для перевірки форми й застосування.",
    },
  ],
  verifiedAt: "2026-09-05",
  kind: "working-record",
  relatedDocuments: ["authority-summons", "evidence-matrix", "response-letter"],
  explanation: [
    {
      id: "table-columns",
      title: "Що записувати в рядку",
      paragraphs: [
        "Запишіть номер і текст пункту, що треба встановити, строк і його джерело, потрібний доказ, відповідального та фактичний результат. Робочу позначку «отримано» відрізняйте від «подано».",
        "Матриця умов починається з правової підстави дозволу. Таблиця вимог починається з конкретного листа органу. Вони можуть посилатися на ті самі докази, але відповідають на різні питання.",
      ],
    },
  ],
}
export const requirementsTableDocumentTopic = defineDocumentTopic(guide)
export default requirementsTableDocumentTopic
