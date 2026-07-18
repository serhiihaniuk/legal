import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-140",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("140", "Art. 140")} ust. 1 встановлює сукупні умови zezwolenie на pobyt czasowy для роботи cudzoziemiec, delegowany przez pracodawcę zagranicznego: zezwolenie na pracę або письмову заяву роботодавця, страхування, стабільний і регулярний дохід та місце проживання в Польщі.`,
          sourceLocator: "Art. 140 ust. 1 pkt 1–4",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`За ${foreignersLaw.article("140", "art. 140")} ust. 2 щомісячний дохід має перевищувати поріг, що дає право на świadczenia pieniężne z pomocy społecznej, щодо cudzoziemiec і кожного члена сім’ї на його утриманні.`,
          sourceLocator: "Art. 140 ust. 2",
        },
      ],
      summary:
        "Для тимчасово делегованого працівника потрібні не лише документи про роботу, а й страхування, стабільний дохід і забезпечене місце проживання.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Cudzoziemiec має мати zezwolenie na pracę за відповідним законом або письмову заяву pracodawca про намір працевлаштувати, якщо zezwolenie na pracę не вимагається.",
        },
        {
          locator: "ust. 1 pkt 2–4",
          explanation:
            "Потрібні ubezpieczenie zdrowotne або підтвердження покриття лікування, джерело стабільного і регулярного доходу та забезпечене місце проживання в Польщі.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Дохід порівнюється з порогом соціальної допомоги окремо щодо cudzoziemiec і кожного утримуваного члена сім’ї.",
        },
      ],
      legalEffect:
        "Умови оцінюються сукупно; документ про роботу сам по собі не гарантує udzielenie zezwolenie.",
      foreignersCase:
        "Окремо підтвердьте делегування, право на роботу, страхування, дохід і житло. Перевірте період делегування та склад сім’ї на момент оцінки заяви.",
    },
  ],
})
