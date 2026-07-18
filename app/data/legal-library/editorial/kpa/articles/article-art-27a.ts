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
      article: "27a",
      provisionId: "kpa-art-27a",
      reviewStatus: "reviewed",
      summary:
        "Статтю скасовано. У чинному тексті KPA вона не встановлює жодного процесуального правила.",
      rules: [],
      legalEffect: kpaLaw.text`На ${kpaLaw.article("27a", "art. 27a")} не можна спирати чинну процесуальну дію або право.`,
      foreignersCase: kpaLaw.text`Якщо старий документ у справі іноземця посилається на ${kpaLaw.article("27a", "art. 27a")}, потрібно перевірити редакцію закону на дату тієї дії та знайти нині чинну основу.`,
    },
  ],
})
