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
      article: "160",
      provisionId: "kpa-art-160",
      reviewStatus: "reviewed",
      summary:
        "Стаття скасована. У цьому номері KPA немає чинного правила, на яке можна самостійно спирати вимогу або рішення.",
      rules: [],
      legalEffect: kpaLaw.text`${kpaLaw.article("160", "Art. 160")} не створює чинного процесуального наслідку; потрібну підставу слід шукати в актуальних нормах.`,
      foreignersCase: kpaLaw.text`У справі іноземця посилання лише на ${kpaLaw.article("160", "art. 160")} KPA є посиланням на uchylony przepis і не обґрунтовує клопотання.`,
    },
  ],
})
