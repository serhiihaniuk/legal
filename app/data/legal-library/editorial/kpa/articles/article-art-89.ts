import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "89",
      provisionId: "kpa-art-89",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає ситуації, у яких орган проводить rozprawę для прискорення, спрощення, виконання прямої вимоги закону або спільного з’ясування справи.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Розправа проводиться з urzędu або на вимогу сторони, якщо це прискорить чи спростить провадження або цього вимагає закон.",
        },
        {
          locator: "§ 2",
          explanation:
            "Орган повинен використати rozprawę для узгодження інтересів сторін або з’ясування справи за участю свідків, експертів чи через oględziny.",
        },
      ],
      legalEffect:
        "Доказові та позиційні дії можуть бути зосереджені в одному формалізованому засіданні.",
      foreignersCase:
        "У справі іноземця rozprawa не є стандартним етапом, але може бути потрібна при конфліктних фактах, свідках, експерті або необхідності огляду.",
    },
  ],
})
