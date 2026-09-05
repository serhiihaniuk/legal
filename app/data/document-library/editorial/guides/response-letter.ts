import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "response-letter",
  title: "Відповідь на wezwanie",
  category: "evidence",
  aliases: [],
  description:
    "Письмо пов’язує кожну вимогу органу з поясненням і конкретним додатком. Читач має бачити, на який пункт ви відповіли й що саме цей документ підтверджує.",
  preparedBy: "Готує і підписує заявник або належний представник.",
  purpose: ["Формулює позицію сторони та вказує подані докази."],
  doesNotProve: [
    "Перелік додатків не доводить їх фактичного подання, а обіцянка надати документ не усуває прогалину.",
  ],
  keyChecks: [
    "Збережіть нумерацію пунктів wezwania.",
    "Назвіть факт, період і додаток для кожної відповіді.",
    "Перевірте підпис, канал подання і підтвердження відправлення.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Art. 63 KPA",
      parts: [
        {
          text: "Art. 63 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-63",
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
  relatedDocuments: [
    "authority-summons",
    "requirements-table",
    "case-file-index",
    "dispatch-proof",
  ],
  explanation: [
    {
      id: "point-by-point",
      title: "Вимога, відповідь і додаток",
      paragraphs: [
        "Почніть із того, яке wezwanie й яку справу стосується відповідь. Далі рухайтеся за пунктами органу. Назва файла має допомагати знайти доказ, а пояснення має показати його значення.",
        "Якщо документа поки немає, опишіть причину й наявні підтвердження. Прохання дати більше часу не означає, що строк уже продовжено.",
      ],
      example: {
        title: "Дві вимоги, один отриманий документ",
        facts: [
          "Умовний приклад. Орган просить актуальний договір і підтвердження страхування. Працівник отримав лише підписаний aneks.",
        ],
        rows: [
          {
            label: "Договір",
            evidence: "Aneks разом з основним договором",
            meaning: "Пояснює змінені умови праці.",
          },
          {
            label: "Страхування",
            evidence: "Підтвердження ще відсутнє",
            meaning: "Aneks сам по собі не підтверджує страховий статус.",
          },
        ],
        reasoning: [
          "У відповіді кожний пункт отримує окреме пояснення. Для страхування вказано фактичний стан отримання документа, а не позначку «виконано».",
        ],
        conclusion:
          "Пакет містить часткову відповідь. Невирішена вимога залишається видимою для подальшої роботи.",
      },
    },
  ],
}
export const responseLetterDocumentTopic = defineDocumentTopic(guide)
export default responseLetterDocumentTopic
