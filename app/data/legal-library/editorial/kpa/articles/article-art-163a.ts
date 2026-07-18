import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "163a",
      provisionId: "kpa-art-163a",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Стаття виключає milczące załatwienie sprawy для виняткових проваджень, урегульованих ${kpaLaw.articleRange("161", "163", { start: "art. 161", end: "163" })} KPA. Бездіяльність органу не означає зміни, скасування чи припинення рішення.`,
      rules: [
        {
          locator: "одне речення",
          explanation: kpaLaw.text`У справах за ${kpaLaw.articleRange("161", "163", { start: "art. 161", end: "163" })} KPA інститут мовчазного вирішення не застосовується.`,
        },
      ],
      legalEffect:
        "Потрібна виразна decyzja; сплив строку без відповіді не змінює чинного рішення.",
      foreignersCase:
        "Іноземець не може вважати дозвіл зміненим або скасованим лише тому, що орган не відповів на клопотання в одному з цих режимів.",
    },
  ],
})
