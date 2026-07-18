import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-373",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Komendant Główny Straży Granicznej повідомляє центральний орган іншої держави-члена про надання або відмову в дозволі на tranzyt протягом 48 годин від отримання wniosek з art. 369; у виправданих випадках строк можна продовжити ще на 48 годин.",
          sourceLocator: "Art. 373 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Цей строк стосується міждержавного повідомлення про транзитний запит, а не загального строку розгляду заяви на pobyt.",
          sourceLocator: "Art. 373 ust. 1–2",
        },
      ],
      summary:
        "Стаття встановлює базовий 48-годинний строк для повідомлення про рішення щодо дозволу на повітряний tranzyt і можливе одноразове продовження ще на 48 годин.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Відлік починається від отримання wniosek, про який ідеться в art. 369, і стосується повідомлення центрального органу іншої держави-члена.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Продовження ще на 48 годин можливе лише у виправданих випадках.",
        },
      ],
      legalEffect:
        "Норма організує швидку комунікацію між державами щодо tranzyt. Вона не гарантує позитивного рішення і не встановлює строку для інших процедур.",
      foreignersCase:
        "Для перевірки затримки встановіть дату й час отримання wniosek, дату повідомлення та чи було належно пояснене продовження строку.",
    },
  ]),
})
