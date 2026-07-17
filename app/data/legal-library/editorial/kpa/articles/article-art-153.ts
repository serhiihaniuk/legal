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
      article: "153",
      provisionId: "kpa-art-153",
      reviewStatus: "reviewed",
      summary: "Стаття скасована і не встановлює чинного правила wznowienia.",
      rules: [],
      legalEffect: kpaLaw.text`Жодного самостійного процесуального наслідку з ${kpaLaw.article("153", "art. 153")} у чинному тексті немає.`,
      foreignersCase: kpaLaw.text`У справі іноземця старе посилання на ${kpaLaw.article("153", "art. 153")} треба перевіряти за редакцією, що діяла на дату відповідної дії або decyzji.`,
    },
  ],
})
