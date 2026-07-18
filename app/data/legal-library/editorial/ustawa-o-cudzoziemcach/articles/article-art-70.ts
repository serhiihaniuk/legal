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
      provisionId: "ustawa-o-cudzoziemcach-art-70",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("70", "Art. 70")} ust. 1 дозволяє Szef Urzędu за своєчасним wniosek органу продовжити на 20 днів п’ятиденний строк для інформації про wiza Schengen або національну візу за названими підставами; ust. 1a дозволяє продовжити на 25 днів двадцятиденний строк ${foreignersLaw.article("69", "Art. 69")} ust. 7.`,
          sourceLocator: "Art. 70 ust. 1–1a",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("70", "Art. 70")} ust. 2–3 встановлює максимальні строки відповіді Szef Urzędu — 30 або 55 днів — і обов’язок повідомити konsul про продовження.`,
          sourceLocator: "Art. 70 ust. 2–3",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("70", "Art. 70")} регулює лише продовження строків міжвідомчої перевірки у візовій справі. За належним запитом п’ятиденний строк може бути збільшений на 20 днів, двадцятиденний — на 25, а загальний строк відповіді Szef Urzędu може досягти 30 або 55 днів.`,
      rules: [
        {
          locator: "Art. 70 ust. 1",
          explanation: foreignersLaw.text`Запит на продовження п’ятиденного строку подається до його спливу і стосується інформації за ${foreignersLaw.article("69", "Art. 69")} про визначені підстави wiza Schengen або krajowa; продовження — 20 днів.`,
        },
        {
          locator: "Art. 70 ust. 1a",
          explanation: foreignersLaw.text`Запит до спливу 20-денного строку ${foreignersLaw.article("69", "Art. 69")} ust. 7 може дати продовження на 25 днів.`,
        },
        {
          locator: "Art. 70 ust. 2–3",
          explanation:
            "За продовження або додаткове wyjaśniające postępowanie строк передачі konsul інформації становить не довше 30 днів або 55 днів у спеціальному випадку; про це повідомляють konsul.",
        },
      ],
      legalEffect:
        "Стаття змінює процесуальний календар консультацій, але не встановлює матеріальної підстави для видачі чи відмови у візі і не легалізує очікування заявника.",
      foreignersCase: foreignersLaw.text`Побудуйте календар від дати запиту: первинний строк, своєчасність клопотання про продовження, новий максимум і повідомлення konsul; не рахуйте продовження як строк розгляду заяви за ${foreignersLaw.article("74a", "Art. 74a")}.`,
    },
  ],
})
