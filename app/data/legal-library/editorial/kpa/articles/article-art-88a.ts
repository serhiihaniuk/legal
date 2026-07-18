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
      article: "88a",
      provisionId: "kpa-art-88a",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Для військовослужбовця на активній службі штраф за порушення обов’язків з ${kpaLaw.article("88", "art. 88 § 1")} замінено зверненням до командира про дисциплінарну відповідальність.`,
      rules: [
        {
          locator: "єдиний блок",
          explanation:
            "Виняток не охоплює територіальну військову службу, що виконується dyspozycyjnie.",
        },
      ],
      legalEffect:
        "Орган не накладає грошовий штраф, а ініціює дисциплінарний режим у військовій частині.",
      foreignersCase:
        "Це непряме загальне правило може мати значення, коли викликаний у справі іноземця свідок чи експерт є військовослужбовцем зазначеної категорії.",
    },
  ],
})
