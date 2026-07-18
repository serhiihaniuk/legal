import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "96l",
      provisionId: "kpa-art-96l",
      reviewStatus: "reviewed",
      summary:
        "Стаття регулює право mediatora на винагороду й витрати та визначає, хто їх покриває.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Mediator має право на оплату і відшкодування, якщо не погодився працювати безоплатно.",
        },
        {
          locator: "§ 2",
          explanation:
            "Загалом платить орган, а у справах, де можлива ugoda, — сторони порівну, якщо не домовилися інакше.",
        },
        {
          locator: "§ 3",
          explanation:
            "Витрати покриваються негайно після завершення mediacji.",
        },
      ],
      legalEffect:
        "Виникає визначений законом обов’язок оплатити mediację після її завершення.",
      foreignersCase:
        "Перед згодою на mediację у справі іноземця потрібно встановити, чи справа допускає ugodę і хто фактично нестиме витрати.",
    },
  ],
})
