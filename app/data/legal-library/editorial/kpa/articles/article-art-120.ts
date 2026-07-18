import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "120",
      provisionId: "kpa-art-120",
      reviewStatus: "reviewed",
      summary:
        "Ugoda стає wykonalna в день, коли postanowienie про її затвердження стало остаточним.",
      rules: [
        {
          locator: "§ 1",
          explanation: "Виконуваність не виникає лише від підписання угоди.",
        },
        {
          locator: "§ 2",
          explanation: "Параграф скасований і не містить чинного правила.",
        },
      ],
      legalEffect:
        "До остаточності затвердження ugoda не підлягає виконанню за цим режимом.",
      foreignersCase:
        "У справі іноземця момент підпису ugody не можна плутати з моментом її wykonalności.",
    },
  ],
})
