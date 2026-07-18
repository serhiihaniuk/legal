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
      article: "268",
      provisionId: "kpa-art-268",
      reviewStatus: "reviewed",
      summary:
        "Стаття скасована. У цьому номері KPA немає чинної кінцевої норми.",
      rules: [],
      legalEffect: kpaLaw.text`${kpaLaw.article("268", "Art. 268")} не створює актуального права, обов'язку або компетенції.`,
      foreignersCase: kpaLaw.text`У sprawie cudzoziemca посилання лише на ${kpaLaw.article("268", "art. 268")} KPA є посиланням на uchylony przepis і не обґрунтовує дію органу чи сторони.`,
    },
  ],
})
