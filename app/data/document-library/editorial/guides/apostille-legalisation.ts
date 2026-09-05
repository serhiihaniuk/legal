import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"

const guide: DocumentGuide = {
  id: "apostille-legalisation",
  title: "Apostille і legalizacja іноземного документа",
  category: "other",
  kind: "document",
  aliases: [],
  description:
    "Посвідчення допомагає підтвердити офіційне походження документа для використання в іншій державі. Потребу в ньому визначають за країною, видом документа та застосовними звільненнями.",
  preparedBy:
    "Компетентний орган держави походження документа або відповідні органи процедури legalizacji.",
  purpose: [
    "Посвідчує підпис, статус підписанта та печатку в межах застосовної процедури.",
  ],
  doesNotProve: [
    "Не підтверджує правдивість кожного факту в документі, не перекладає його і не визнає диплом автоматично.",
  ],
  keyChecks: [
    "Встановлено державу походження та державу використання.",
    "Перевірено міжнародну угоду або інше звільнення до замовлення посвідчення.",
    "Переклад охоплює потрібні посвідчення та узгоджений з оригіналом.",
  ],
  relatedDocuments: [
    "civil-status-record",
    "qualification-evidence",
    "sworn-translation",
  ],
  sources: [
    {
      label: "MSZ: apostille",
      url: "https://www.gov.pl/web/dyplomacja/apostille",
      note: "Що посвідчує apostille та коли посвідчення може не вимагатися.",
    },
  ],
  verifiedAt: "2026-09-05",
  explanation: [
    {
      id: "choose-authentication",
      title: "Не замовляти apostille за звичкою",
      paragraphs: [
        "Спочатку визначте, чи потрібне посвідчення взагалі. Для окремих документів діють міжнародні або європейські звільнення. Якщо посвідчення потрібне, оберіть процедуру для держави походження; польська інструкція видачі apostille на польські документи не описує автоматично порядок для іноземного акта.",
      ],
      example: {
        title: "Диплом із apostille",
        facts: [
          "Умовний приклад. До пакета додано диплом, apostille та переклад. Посада потребує окремої перевірки професійних кваліфікацій.",
        ],
        reasoning: [
          "Працівник відокремив посвідчення походження документа від його значення для професії. Apostille не використано як доказ професійного допуску.",
        ],
        conclusion:
          "Документ має посвідчення, але питання визнання кваліфікації перевіряється окремо.",
      },
    },
  ],
  legalBasis: [
    "Застосовують правила посвідчення та відповідні звільнення для країни й виду документа. Офіційне пояснення наведено в джерелах.",
  ],
}

export const apostilleLegalisationDocumentTopic = defineDocumentTopic(guide)
export default apostilleLegalisationDocumentTopic
