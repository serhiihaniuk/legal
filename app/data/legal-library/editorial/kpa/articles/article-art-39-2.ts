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
      article: "39²",
      provisionId: "kpa-art-39-2",
      reviewStatus: "reviewed",
      summary:
        "Статтю скасовано. У чинному KPA вона не містить правила про doręczenia.",
      rules: [],
      legalEffect: kpaLaw.text`${kpaLaw.article("39-2", "Art. 39²")} не може бути чинною підставою вручення або обчислення його наслідків.`,
      foreignersCase: kpaLaw.text`Старе посилання на ${kpaLaw.article("39-2", "art. 39²")} у матеріалах справи іноземця потрібно перевіряти за редакцією, чинною на дату вручення.`,
    },
  ],
})
