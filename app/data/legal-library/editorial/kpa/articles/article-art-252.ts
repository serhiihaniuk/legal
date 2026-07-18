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
      article: "252",
      provisionId: "kpa-art-252",
      reviewStatus: "reviewed",
      summary:
        "Стаття скасована. Вона не містить чинного правила про участь преси або організацій у процедурі skarg і wniosków.",
      rules: [],
      legalEffect: kpaLaw.text`${kpaLaw.article("252", "Art. 252")} не породжує процесуального наслідку; правову підставу слід шукати в чинних статтях.`,
      foreignersCase: kpaLaw.text`У sprawie cudzoziemca ${kpaLaw.article("252", "art. 252")} KPA не може бути самостійною підставою звернення або вимоги, оскільки jest uchylony.`,
    },
  ],
})
