import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "117",
      provisionId: "kpa-art-117",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає письмову форму, обов’язкові реквізити та порядок підписання ugody.",
      rules: [
        {
          locator: "§ 1–1a",
          explanation:
            "Уповноважений працівник складає ugodę зі згідних заяв сторін; документ ідентифікує орган, сторони, дату, предмет, зміст і підписи.",
        },
        {
          locator: "§ 2",
          explanation:
            "Перед підписанням текст зачитується, крім електронного укладення; ugoda долучається до akt.",
        },
      ],
      legalEffect:
        "Лише належно оформлена й підписана домовленість стає процесуальною ugodą.",
      foreignersCase:
        "Якщо ugoda стосується справи іноземця, треба звірити точний предмет і зміст, а не лише факт підписання документа.",
    },
  ],
})
