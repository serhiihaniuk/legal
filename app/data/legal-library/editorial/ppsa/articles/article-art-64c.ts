import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-64c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sprzeciw od decyzji подається через орган протягом чотирнадцяти днів від doręczenie; пряме подання до sąd зберігає строк, але тоді sąd закликає орган передати akta. Орган має передати sprzeciw і akta у визначеному випадку протягом чотирнадцяти днів та може повністю врахувати sprzeciw лише у межах art. 138 § 1 або § 4 KPA; за невиконання після grzywna sąd розглядає справу за odpis sprzeciw.",
          sourceLocator: "Art. 64c § 1–7",
        },
      ],
      summary:
        "Sprzeciw має спеціальний чотирнадцятиденний строк і канал подання через орган, із резервом прямого подання до sąd; для прямого подання діє окремий обов’язок органу щодо akt.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Строк рахується від doręczenie decyzja, а sprzeciw подається за посередництвом органу, рішення якого оскаржується.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Пряме подання до sąd до спливу строку його зберігає; тоді sąd закликає орган передати kompletne i uporządkowane akta, а орган робить це протягом чотирнадцяти днів від отримання wezwanie. При звичайному поданні орган передає sprzeciw і akta протягом чотирнадцяти днів від його отримання.",
        },
        {
          locator: "§ 5",
          explanation:
            "Орган може протягом чотирнадцяти днів повністю врахувати sprzeciw, uchylając decyzja і видаючи нову на підставі art. 138 § 1 або § 4 KPA.",
        },
        {
          locator: "§ 6–7",
          explanation:
            "За невиконання обов’язку § 4 sąd на wniosek skarżący може накласти grzywna; якщо орган і після неї не передав sprzeciw, sąd розглядає справу за надісланим skarżący odpis sprzeciw.",
        },
      ],
      legalEffect:
        "Норма визначає строки й рух sprzeciw, але не гарантує повного врахування його органом або позитивного результату судового контролю.",
      foreignersCase:
        "У ситуації art. 138 § 2 у справі pobyt зафіксуйте doręczenie, відрахуйте чотирнадцять днів і збережіть підтвердження передачі.",
    },
  ]),
})
