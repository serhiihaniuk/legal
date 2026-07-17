import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-14",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("14", "Art. 14")} дозволяє відмовити у видачі zezwolenie, якщо інформація органу вказує, що podmiot powierzający працю не виконав обов'язків, пов'язаних із powierzenie роботи cudzoziemcom або іншим особам, чи обов'язків, пов'язаних із веденням діяльності.`,
          sourceLocator: "Art. 14",
        },
      ],
      summary: workLaw.text`Це fakultatywna підстава відмови, пов'язана з інформацією про попередню поведінку або діяльність podmiot. Вона відрізняється від конкретних обов'язкових підстав ${workLaw.article("13", "art. 13")} і потребує оцінки даних, якими володіє орган.`,
      rules: [
        {
          locator: "Art. 14",
          explanation:
            "Орган може відмовити, коли з наявної інформації випливає невиконання обов'язків щодо праці або діяльності. Текст не називає автоматичної відмови за кожну недосконалість без оцінки обставин.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("14", "Art. 14")} може перешкодити видачі дозволу на роботу, але не визначає legalny pobyt cudzoziemiec і не доводить сам по собі незаконність роботи без аналізу інших норм.`,
      foreignersCase:
        "Попросіть ідентифікувати конкретний обов'язок та джерело інформації органу. Перевірте, чи стосується закид podmiot, фактичної роботи або діяльності; паралельно перевірте власний документ pobyt і підставу роботи.",
    },
  ],
})
