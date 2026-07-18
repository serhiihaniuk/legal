import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-159",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Заява про виправлення, доповнення або тлумачення рішення не впливає на перебіг строку для подання засобу оскарження.",
          sourceLocator: "Art. 159",
        },
      ],
      summary:
        "Стаття розділяє допоміжні заяви щодо рішення та строк його оскарження.",
      rules: [
        {
          locator: "Art. 159",
          explanation:
            "Паралельно рахуйте строк оскарження від належної початкової події. Очікування відповіді на заяву не зупиняє й не поновлює цей строк.",
        },
      ],
      legalEffect:
        "Пропуск строку не можна виправдати самим фактом подання заяви про виправлення, доповнення чи тлумачення (sprostowanie, uzupełnienie, wykładnia).",
      foreignersCase:
        "У справі про перебування ведіть дві окремі дати: строк допоміжної заяви та строк касаційного чи іншого засобу оскарження.",
    },
  ],
})
