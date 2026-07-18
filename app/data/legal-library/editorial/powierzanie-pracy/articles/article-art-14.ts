import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-14",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("14", "Art. 14")} дозволяє відмовити у видачі дозволу, якщо інформація, якою володіє орган, указує, що суб’єкт не виконав обов’язків, пов’язаних із дорученням роботи іноземцям або іншим особам, чи обов’язків, пов’язаних із веденням діяльності.`,
          sourceLocator: "Art. 14",
        },
      ],
      summary: workLaw.text`Це факультативна, а не автоматична підстава відмови, пов’язана з інформацією про попередню поведінку або діяльність суб’єкта. Вона відрізняється від обов’язкових підстав із ${workLaw.article("13", "ст. 13")} і потребує оцінки конкретних даних, якими володіє орган.`,
      rules: [
        {
          locator: "Art. 14",
          explanation:
            "Орган може відмовити, коли з наявної інформації випливає невиконання обов'язків щодо праці або діяльності. Текст не називає автоматичної відмови за кожну недосконалість без оцінки обставин.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("14", "Ст. 14")} може перешкодити видачі дозволу на роботу, але не визначає законність перебування іноземця і сама по собі не доводить незаконності роботи без аналізу інших норм.`,
      foreignersCase:
        "Перевірте, який саме невиконаний обов’язок і яке джерело інформації назвав орган. Встановіть, чи закид стосується суб’єкта, фактичної роботи або ведення діяльності. Окремо перевірте документ іноземця про перебування та підставу роботи.",
    },
  ],
})
