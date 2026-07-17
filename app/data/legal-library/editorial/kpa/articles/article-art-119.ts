import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "119",
      provisionId: "kpa-art-119",
      reviewStatus: "reviewed",
      summary:
        "Затвердження або відмова щодо ugody оформлюється оскаржуваним postanowieniem із врученням самої ugody.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Postanowienie видається протягом семи днів від укладення, і на нього є zażalenie.",
        },
        {
          locator: "§ 2",
          explanation:
            "В апеляційному провадженні остаточне затвердження позбавляє сили decyzję першої інстанції.",
        },
        {
          locator: "§ 3",
          explanation:
            "Разом із zatwierdzeniem сторонам вручають ugodę або її відпис.",
        },
      ],
      legalEffect:
        "Остаточне zatwierdzenie активує ugodę та в апеляції замінює попередню decyzję.",
      foreignersCase:
        "Учасник справи іноземця повинен отримати і postanowienie, і текст ugody, щоб перевірити зміст та строк zażalenia.",
    },
  ],
})
