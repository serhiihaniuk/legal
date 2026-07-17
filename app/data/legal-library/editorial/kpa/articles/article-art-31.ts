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
      article: "31",
      provisionId: "kpa-art-31",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає, коли громадська організація може вимагати початку справи, бути допущена до чужої справи або подати свій погляд.",
      rules: [
        {
          locator: "§ 1–1a",
          explanation:
            "Організація може вимагати wszczęcia або допуску, якщо це відповідає її статутним цілям і суспільному інтересу; для делегованих працівників передбачено участь за згодою сторони.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Organ вирішує допуск postanowieniem, відмова підлягає zażaleniu, а допущена організація діє на правах сторони.",
        },
        {
          locator: "§ 4–5",
          explanation:
            "Organ може повідомити потенційно зацікавлену організацію; недопущена організація за згодою органу може подати статутний погляд у справі.",
        },
      ],
      legalEffect:
        "Громадська організація отримує процесуальну роль лише після виконання передумов і відповідного рішення органу.",
      foreignersCase: kpaLaw.text`У справі іноземця організація, що допомагає мігрантам, не стає автоматично стороною; вона повинна мати статутну основу й пройти процедуру ${kpaLaw.article("31", "art. 31")}.`,
    },
  ],
})
