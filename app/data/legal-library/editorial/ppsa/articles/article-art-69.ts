import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-69",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Doręczenia здійснюється в mieszkanie, місці pracy або там, де адресата застали; на його wniosek pismo може бути направлене до skrytka pocztowa, із повідомленням про семиденний строк отримання.",
          sourceLocator: "Art. 69 § 1–2",
        },
      ],
      summary:
        "Суд може вручати pismo за місцем проживання, роботи або перебування, а за заявою — через поштову скриньку.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Місце вручення не обмежене лише адресою mieszkanie: закон називає також miejsce pracy та фактичне місце перебування.",
        },
        {
          locator: "§ 2",
          explanation:
            "Для skrytka pocztowa pismo зберігається у відділенні, а повідомлення визначає сім днів для отримання.",
        },
      ],
      legalEffect:
        "Спосіб doręczenia впливає на докази та строки, але треба встановити, який саме спосіб був застосований.",
      foreignersCase:
        "Якщо cudzoziemiec часто змінює адресу або працює поза домом, вкажіть sąd надійну адресу do doręczeń і відстежуйте awizo та skrytka.",
    },
  ]),
})
