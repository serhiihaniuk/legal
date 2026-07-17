import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "28",
      provisionId: "kpa-art-28",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає stronę через її interes prawny або obowiązek, якого стосується провадження, чи через вимогу дії органу, засновану на такому інтересі або обов’язку.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Статус сторони випливає з правового, а не лише фактичного інтересу або обов’язку, пов’язаного з предметом справи.",
        },
      ],
      legalEffect:
        "Особа зі статусом strony отримує процесуальні права KPA; сама зацікавленість результатом без interesu prawnego цього статусу не створює.",
      foreignersCase:
        "Заявник у справі про власний pobyt є стороною через свій правовий інтерес; роботодавець чи інша особа не стає стороною лише тому, що результат економічно її стосується.",
    },
  ],
})
