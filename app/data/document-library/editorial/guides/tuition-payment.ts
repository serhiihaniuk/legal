import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
import { foreignersLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "tuition-payment",
  title: "Оплата навчання або підтвердження безоплатності",
  category: "financial",
  kind: "document",
  aliases: [],
  description:
    "Платіж пов’язують із конкретним студентом, програмою та періодом навчання. Якщо навчання безоплатне, важливе підтвердження цієї обставини, а не відсутня квитанція.",
  preparedBy:
    "Банк підтверджує переказ, заклад освіти підтверджує його зарахування та умови оплати.",
  purpose: [
    "Показує сплату належної оплати або відсутність такого обов’язку у визначеному навчанні.",
  ],
  doesNotProve: [
    "Не підтверджує саме по собі прийняття, відвідування чи успішність навчання.",
  ],
  keyChecks: [
    "Переказ можна однозначно пов’язати із заявником.",
    "Видно, за який період і за що сплачено.",
    "При частковій оплаті зрозумілі залишок і погоджений графік.",
  ],
  relatedDocuments: ["study-confirmation", "study-progress"],
  sources: [
    {
      label: "Podlaski UW: навчання",
      url: "https://www.gov.pl/web/uw-podlaski/studia",
      note: "Документи щодо навчання, оплати, коштів та страхування.",
    },
  ],
  verifiedAt: "2026-09-05",
  explanation: [
    {
      id: "match-payment",
      title: "Коли платить інша особа",
      paragraphs: [
        "Платником може бути не сам студент. Тоді важливо, щоб призначення переказу або підтвердження закладу пояснювало, за чиє навчання зараховано суму. Платіж без цього зв’язку залишає питання відкритим.",
      ],
    },
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.article("144")}: Містить вимогу доказу оплати для платного навчання.`,
  ],
}

export const tuitionPaymentDocumentTopic = defineDocumentTopic(guide)
export default tuitionPaymentDocumentTopic
