import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "187",
      provisionId: "kpa-art-187",
      reviewStatus: "reviewed",
      summary:
        "Норма зобов'язує орган одразу оцінити, чи потрібно зупинити виконання рішення після sprzeciwu прокурора. Це окрема запобіжна оцінка, а не автоматичне зупинення.",
      rules: [
        {
          locator: "одне речення",
          explanation:
            "Орган, до якого внесено sprzeciw, невідкладно перевіряє, чи є підстави для wstrzymania wykonania decyzji до завершення справи.",
        },
      ],
      legalEffect:
        "Виконання може бути тимчасово зупинене, але сам sprzeciw не робить це автоматично.",
      foreignersCase:
        "Коли sprzeciw стосується рішення щодо іноземця, потрібно окремо перевірити, чи орган постановив wstrzymanie wykonania; сам факт участі прокурора цього не гарантує.",
    },
  ],
})
