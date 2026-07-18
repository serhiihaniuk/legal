import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-73",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо вручення способами art. 65–68, art. 69 § 1 і art. 70–72 неможливе, pismo зберігають чотирнадцять днів у placówka pocztowa або urzędzie gminy із повідомленнями; після цього doręczenie вважається здійсненим.",
          sourceLocator: "Art. 73 § 1–5",
        },
      ],
      summary:
        "Це процедура zastępcze doręczenie з awizo, першим і повторним повідомленням та наслідком після встановленого періоду зберігання.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Після невдалої спроби pismo зберігається чотирнадцять днів, а повідомлення дає сім днів для першого odbiór.",
        },
        {
          locator: "§ 3",
          explanation:
            "За неприбуття залишають повторне повідомлення про можливість отримання у строк не довший за чотирнадцять днів від першого повідомлення.",
        },
        {
          locator: "§ 4–5",
          explanation:
            "Doręczenie вважається здійсненим в останній день періоду; для skrytka art. 69 § 2 застосовуються § 3–4 відповідно.",
        },
      ],
      legalEffect:
        "Фіктивне doręczenie може запустити строк без фактичного отримання, тому вирішальними є дати й правильність повідомлень.",
      foreignersCase:
        "У справі pobyt перевірте обидва awizo, адресу та останній день зберігання; відсутність вдома не скасовує автоматично наслідок art. 73.",
    },
  ]),
})
