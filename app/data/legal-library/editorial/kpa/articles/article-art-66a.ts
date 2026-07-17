import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "66a",
      provisionId: "kpa-art-66a",
      reviewStatus: "reviewed",
      summary:
        "Стаття вимагає вести metrykę sprawy, яка показує, хто брав участь у підготовці та прийнятті рішень і які дії виконував.",
      rules: [
        {
          locator: "§ 1–3",
          explanation:
            "Metryka є обов’язковою частиною akt sprawy, постійно актуалізується і фіксує осіб, їхні дії та посилання на документи, що їх підтверджують.",
        },
        {
          locator: "§ 4",
          explanation:
            "Спосіб ведення і форма metryki визначаються розпорядженням так, щоб можна було відтворити участь конкретних осіб у справі.",
        },
        {
          locator: "§ 5",
          explanation:
            "Розпорядження може виключити прості або повторювані категорії справ, якщо ведення metryki було б непропорційним до їх характеру.",
        },
      ],
      legalEffect:
        "Metryka забезпечує простежуваність персональної участі посадових осіб у провадженні, якщо справа не належить до виключеної категорії.",
      foreignersCase:
        "У справі cudzoziemca це загальна процесуальна гарантія прозорості akt, а не окремий доказ виконання умов pobytu.",
    },
  ],
})
