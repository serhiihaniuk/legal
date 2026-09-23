import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "44",
      provisionId: "kpa-art-44",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Стаття встановлює awizo і fikcję doręczenia після чотирнадцятиденного зберігання письма, якщо вручення за ${kpaLaw.article("42", "art. 42")} і ${kpaLaw.article("43", "art. 43")} неможливе.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Письмо зберігається чотирнадцять днів у placówce pocztowej або właściwym urzędzie gminy залежно від способу вручення.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Перше повідомлення визначає можливість отримати лист протягом семи днів. Якщо його не отримано, залишають повторне повідомлення про можливість отримання не пізніше чотирнадцяти днів від першого повідомлення. Новий чотирнадцятиденний строк не починається.",
        },
        {
          locator: "§ 4",
          explanation:
            "Вручення вважається здійсненим зі спливом останнього дня чотирнадцятиденного періоду зберігання, а лист залишається в матеріалах справи.",
        },
      ],
      legalEffect:
        "Строк може початися без фактичного отримання письма, якщо процедура awizo виконана належно.",
      foreignersCase:
        "У справі іноземця потрібно перевірити адресу, обидва повідомлення й період зберігання; сама відсутність фактичного odbioru не усуває fikcji doręczenia.",
    },
  ],
})
