import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-216",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Коли предметом оскарження є грошова вимога, саме її сума становить вартість предмета оскарження.",
          sourceLocator: "Art. 216",
        },
      ],
      summary: "Стаття дає просте правило для грошових спорів.",
      rules: [
        {
          locator: "Art. 216",
          explanation:
            "Визначте основну грошову належність, яка є предметом рішення органу, а не загальні фінансові наслідки для сторони.",
        },
      ],
      legalEffect:
        "Ця сума стає базою для процесуального розрахунку вартості предмета оскарження.",
      foreignersCase:
        "Якщо справа іноземця стосується грошового обов’язку, беріть суму самого обов’язку; втрачений дохід через відмову в дозволі не стає автоматично предметом оскарження.",
    },
  ],
})
