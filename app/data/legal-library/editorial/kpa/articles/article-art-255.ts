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
      article: "255",
      provisionId: "kpa-art-255",
      reviewStatus: "reviewed",
      summary:
        "Стаття скасована. У ній немає чинного правила про прийняття або реєстрацію skarg і wniosków.",
      rules: [],
      legalEffect: kpaLaw.text`${kpaLaw.article("255", "Art. 255")} не встановлює жодного актуального обов'язку органу чи заявника.`,
      foreignersCase: kpaLaw.text`У справі іноземця посилання на ${kpaLaw.article("255", "art. 255")} KPA не створює процесуальної вимоги, бо przepis jest uchylony.`,
    },
  ],
})
