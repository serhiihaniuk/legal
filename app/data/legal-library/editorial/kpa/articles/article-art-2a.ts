import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")

const RODO_URL = "https://eur-lex.europa.eu/eli/reg/2016/679/oj"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "2a",
      provisionId: "kpa-art-2a",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Стаття регулює виконання інформаційного обов’язку за ${kpaLaw.external("art. 13 RODO", RODO_URL)} RODO у провадженнях KPA та відділяє цей обов’язок від руху і результату справи.`,
      rules: [
        {
          locator: "§ 1",
          explanation: kpaLaw.text`KPA визначає спосіб виконання органом інформаційного обов’язку RODO у провадженнях, зазначених в ${kpaLaw.article("1", "art. 1")} і 2.`,
        },
        {
          locator: "§ 2–3",
          explanation:
            "Інформаційний обов’язок RODO виконується незалежно від інших обов’язків органу, а żądanie обмежити обробку даних не впливає на рух і результат провадження.",
        },
      ],
      legalEffect:
        "Питання інформування про обробку даних не зупиняє і саме по собі не змінює адміністративну справу.",
      foreignersCase:
        "У справі іноземця орган повідомляє про обробку персональних даних, але вимога за RODO не блокує розгляд заяви про pobyt і не визначає її результат.",
    },
  ],
})
