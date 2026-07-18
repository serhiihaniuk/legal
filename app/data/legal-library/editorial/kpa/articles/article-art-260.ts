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
      article: "260",
      provisionId: "kpa-art-260",
      reviewStatus: "reviewed",
      summary:
        "Стаття скасована. Вона не встановлює чинного правила про нагляд чи контроль за skargami і wnioskami.",
      rules: [],
      legalEffect: kpaLaw.text`${kpaLaw.article("260", "Art. 260")} не породжує правового наслідку; застосовуються чинні норми розділу.`,
      foreignersCase: kpaLaw.text`У справі іноземця ${kpaLaw.article("260", "art. 260")} KPA не може бути підставою вимоги або скарги, оскільки jest uchylony.`,
    },
  ],
})
