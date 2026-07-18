import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "111",
      provisionId: "kpa-art-111",
      reviewStatus: "reviewed",
      summary:
        "Сторона може вимагати доповнення decyzji щодо rozstrzygnięcia або засобів оскарження чи виправлення pouczenia.",
      rules: [
        {
          locator: "§ 1–1a",
          explanation:
            "Сторона і орган з urzędu мають чотирнадцять днів від doręczenia або ogłoszenia для відповідної дії.",
        },
        {
          locator: "§ 1b",
          explanation: "Доповнення або відмова оформлюється postanowieniem.",
        },
        {
          locator: "§ 2",
          explanation:
            "Після такого postanowienia строк на odwołanie, позов або skargę для сторони рахується від його вручення чи оголошення.",
        },
      ],
      legalEffect:
        "Неповний результат або pouczenie можна формально доповнити без заміни всієї decyzji, зі зміною початку строку оскарження.",
      foreignersCase:
        "Якщо decyzja у справі іноземця не вирішила частину вимоги або має неповне pouczenie, треба оцінити żądanie uzupełnienia в окремому строку.",
    },
  ],
})
