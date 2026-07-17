import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "148",
      provisionId: "kpa-art-148",
      reviewStatus: "reviewed",
      summary:
        "Podanie o wznowienie подається органу першої інстанції протягом місяця від дізнання про підставу.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Адресат — орган, що видав decyzję в першій інстанції; початок строку — знання про обставину wznowienia.",
        },
        {
          locator: "§ 2",
          explanation:
            "При неучасті без вини строк іде від дня, коли сторона дізналася про decyzję.",
        },
      ],
      legalEffect:
        "Запізніле або неправильно спрямоване żądanie ризикує не відкрити надзвичайний перегляд.",
      foreignersCase:
        "Іноземець має документувати не лише підставу, а й дату, коли про неї або про decyzję фактично дізнався.",
    },
  ],
})
