import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "127a",
      provisionId: "kpa-art-127a",
      reviewStatus: "reviewed",
      summary:
        "Сторона може до спливу строку відмовитися від права на odwołanie перед органом, який видав decyzję.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Zrzeczenie подається органу першої інстанції до завершення строку odwołania.",
        },
        {
          locator: "§ 2",
          explanation:
            "Коли орган отримав заяву останньої сторони, decyzja стає остаточною і prawomocna.",
        },
      ],
      legalEffect:
        "Відмова всіх сторін достроково закриває звичайний адміністративний перегляд і стабілізує decyzję.",
      foreignersCase:
        "Іноземець має оцінити наслідок zrzeczenia перед поданням: після нього звичайне odwołanie від цієї decyzji вже недоступне.",
    },
  ],
})
