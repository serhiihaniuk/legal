import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "250",
      provisionId: "kpa-art-250",
      reviewStatus: "reviewed",
      summary:
        "Стаття скасована. У цьому номері KPA немає чинної норми щодо участі преси чи суспільних організацій.",
      rules: [],
      legalEffect: kpaLaw.text`${kpaLaw.article("250", "Art. 250")} не створює прав, обов'язків або строків; застосовуються інші чинні статті розділу.`,
      foreignersCase: kpaLaw.text`У справі іноземця посилання лише на ${kpaLaw.article("250", "art. 250")} KPA не обґрунтовує жодного процесуального кроку, бо przepis jest uchylony.`,
    },
  ],
})
