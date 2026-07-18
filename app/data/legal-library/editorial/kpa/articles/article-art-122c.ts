import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "122c",
      provisionId: "kpa-art-122c",
      reviewStatus: "reviewed",
      summary:
        "Норма встановлює момент milczącego załatwienia та правила початку строку після усунення braków або повернення справи першій інстанції.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Результат виникає наступного дня після спливу строку або в день вручення раннього повідомлення про відсутність sprzeciwu.",
        },
        {
          locator: "§ 2",
          explanation:
            "За brakami або неясним żądaniem строк починається після їх усунення чи уточнення.",
        },
        {
          locator: "§ 3",
          explanation:
            "Після kasacyjnej decyzji строк іде від вручення органу першої інстанції akt разом із цією decyzją.",
        },
      ],
      legalEffect:
        "Точна дата позитивного мовчазного результату залежить від стану podania і попереднього апеляційного перебігу.",
      foreignersCase:
        "У допустимій мовчазній справі іноземця неповне podanie не запускає строк до моменту належного доповнення.",
    },
  ],
})
