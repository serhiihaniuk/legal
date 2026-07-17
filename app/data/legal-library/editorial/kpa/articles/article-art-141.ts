import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "141",
      provisionId: "kpa-art-141",
      reviewStatus: "reviewed",
      summary:
        "Zażalenie на postanowienie доступне лише тоді, коли KPA прямо це передбачає, і подається у семиденний строк.",
      rules: [
        {
          locator: "§ 1",
          explanation: "Загального zażalenia на кожне postanowienie не існує.",
        },
        {
          locator: "§ 2",
          explanation:
            "Строк рахується від doręczenia або усного ogłoszenia stronie.",
        },
      ],
      legalEffect:
        "Лише прямо оскаржуване postanowienie відкриває окремий інстанційний контроль у короткому строку.",
      foreignersCase:
        "У справі іноземця перед zażaleniem треба знайти норму, яка прямо його допускає, і зафіксувати дату отримання postanowienia.",
    },
  ],
})
