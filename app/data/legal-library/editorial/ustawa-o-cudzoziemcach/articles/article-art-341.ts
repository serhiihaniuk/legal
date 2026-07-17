import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-341",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("341", "Art. 341")} визначає Komendant Główny Straży Granicznej як organ wyższego stopnia у справах про koszty з ${foreignersLaw.article("336", "Art. 336")} та встановлює 7-денний строк odwołanie.`,
          sourceLocator: "Art. 341 ust. 1–2",
        },
      ],
      summary:
        "У спорах про суму витрат або її зміну вищим органом для командира відділу чи placówka Straży Granicznej є головний комендант SG.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Komendant Główny Straży Granicznej є organ wyższego stopnia щодо відповідного komendant oddziału або placówki у справах ${foreignersLaw.article("336", "Art. 336")}.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Odwołanie від рішення подається протягом 7 днів від doręczenie decyzja.",
        },
      ],
      legalEffect:
        "Норма встановлює орган і строк оскарження, але не скасовує вимоги до змісту та способу подання odwołanie за KPA.",
      foreignersCase:
        "На копії decyzja зафіксуйте дату doręczenie, обчисліть 7 днів і подайте odwołanie через орган, який видав рішення, якщо саме так вказано в pouczenie.",
    },
  ],
})
