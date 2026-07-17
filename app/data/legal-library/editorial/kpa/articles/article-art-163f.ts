import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "163f",
      provisionId: "kpa-art-163f",
      reviewStatus: "reviewed",
      summary:
        "Норма дозволяє скоротити uzasadnienie рішення у спрощеному провадженні. Орган може обмежитися фактами, які визнав доведеними, і правовими нормами, що застосував.",
      rules: [
        {
          locator: "одне речення",
          explanation:
            "Фактичне обґрунтування може містити лише встановлені факти, а правове — лише норми, які стали підставою рішення.",
        },
      ],
      legalEffect:
        "Uzasadnienie може бути коротшим за стандартне, але має показати встановлені факти і правову підставу.",
      foreignersCase:
        "Коротке обґрунтування у справі іноземця саме по собі не доводить порушення, якщо справа справді велася у спрощеному режимі й містить мінімум, названий у статті.",
    },
  ],
})
