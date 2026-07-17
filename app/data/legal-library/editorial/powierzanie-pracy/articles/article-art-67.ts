import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-67",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 67 виключає art. 37 KPA з провадження щодо wpis oświadczenie, визначає єдиною стороною podmiot, виключає застосування art. 31 KPA і вимагає подавати środek zaskarżenia через систему; органом вищого ступеня є minister właściwy do spraw pracy.",
          sourceLocator: "Art. 67 ust. 1–5",
        },
      ],
      summary:
        "У цій процедурі cudzoziemiec не є стороною: стороною є лише podmiot, який доручає роботу. Оскарження має цифровий канал; за несправності системи закон переносить крайній момент на перший робочий день після усунення несправності.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Art. 37 і art. 31 KPA не застосовуються у цьому провадженні, а стороною є виключно podmiot powierzający pracę.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Środek zaskarżenia подається тільки через визначену систему. Якщо її несправність не дала подати вчасно, подання можливе не пізніше першого робочого дня після усунення проблеми.",
        },
        {
          locator: "ust. 5",
          explanation:
            "Органом вищого ступеня для справ oświadczenie є minister właściwy do spraw pracy.",
        },
      ],
      legalEffect:
        "Процесуальний статус і канал оскарження є спеціальними; подання cudzoziemiec окремо не перетворює його на сторону цього провадження.",
      foreignersCase:
        "Podmiot має стежити за індивідуальним kontem і зберегти підтвердження цифрового подання. Cudzoziemiec може потребувати іншого правового шляху для власного pobyt, бо тут він не є стороною.",
    },
  ]),
})
