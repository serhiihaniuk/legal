import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-199",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Кожна сторона несе витрати провадження, пов’язані зі своєю участю, якщо спеціальна норма не передбачає іншого розподілу.",
          sourceLocator: "Art. 199",
        },
      ],
      summary:
        "Це початкове правило, від якого подальші статті встановлюють винятки залежно від результату та поведінки сторін.",
      rules: [
        {
          locator: "Art. 199",
          explanation:
            "Спершу встановіть фактичну витрату та хто її поніс, а потім шукайте спеціальну підставу для її повернення іншою стороною.",
        },
      ],
      legalEffect:
        "Сам факт участі в справі не створює автоматичного права перекласти всі витрати на орган або опонента.",
      foreignersCase:
        "У справі про перебування зберігайте докази кожної витрати, але оцінюйте її повернення лише за конкретною нормою та результатом справи.",
    },
  ],
})
