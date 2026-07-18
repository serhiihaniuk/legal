import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "123",
      provisionId: "kpa-art-123",
      reviewStatus: "reviewed",
      summary:
        "Postanowienia вирішують окремі процесуальні питання під час провадження і загалом не вирішують суті справи.",
      rules: [
        {
          locator: "§ 1",
          explanation: "Орган видає postanowienia в toku postępowania.",
        },
        {
          locator: "§ 2",
          explanation: "Виняток щодо вирішення суті має прямо випливати з KPA.",
        },
      ],
      legalEffect:
        "Окреме процесуальне питання отримує формальний акт, відмінний від decyzji по суті.",
      foreignersCase:
        "У справі іноземця треба спочатку визначити, чи отримане postanowienie лише організує процедуру, чи KPA надає йому інший ефект.",
    },
  ],
})
