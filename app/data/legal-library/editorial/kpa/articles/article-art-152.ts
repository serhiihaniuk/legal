import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "152",
      provisionId: "kpa-art-152",
      reviewStatus: "reviewed",
      summary:
        "Орган зупиняє виконання decyzji, якщо обставини вказують на ймовірність її uchylenia внаслідок wznowienia.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Wstrzymanie відбувається з urzędu або на вимогу сторони за оцінкою ймовірності uchylenia.",
        },
        {
          locator: "§ 2",
          explanation:
            "На postanowienie є zażalenie, крім акта міністра або SKO.",
        },
      ],
      legalEffect:
        "Виконання сумнівної остаточної decyzji тимчасово припиняється до результату wznowienia.",
      foreignersCase:
        "Іноземець може просити wstrzymanie, конкретно показавши, чому встановлена підстава робить uchylenie decyzji імовірним.",
    },
  ],
})
