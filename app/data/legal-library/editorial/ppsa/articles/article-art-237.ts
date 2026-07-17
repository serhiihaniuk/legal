import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-237",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("237", "Art. 237 § 1–3")} зобов’язує сторону, яка просить про czynność, пов’язану з wydatki, внести zaliczkę; якщо просять кілька сторін або суд діє з urzędu, суд визначає частки, розмір zaliczka і строк її сплати та може вимагати доплату, коли витрати більші.`,
          sourceLocator: "Art. 237 § 1–3",
        },
      ],
      summary:
        "Залучення дії, що спричиняє wydatki, може вимагати zaliczka; суд визначає її розмір і строк та може наказати доплату.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Встановіть, хто просив про czynność і чи є кілька зацікавлених сторін або дія суду з urzędu; від цього залежить розподіл zaliczka.",
        },
        {
          locator: "§ 3",
          explanation:
            "Дотримайтеся розміру та строку, визначених судом, і відстежуйте wezwanie про uzupełnienie, якщо прогнозовані wydatki зросли.",
        },
      ],
      legalEffect:
        "Стаття регулює авансування конкретних wydatki, але не встановлює наперед, що будь-яке прохання сторони обов’язково потребує zaliczka.",
      foreignersCase:
        "У спорі іноземця про pobyt перевірте, чи судова czynność справді пов’язана з wydatki, хто має внести zaliczka і який строк вказано в zarządzenie.",
    },
  ],
})
