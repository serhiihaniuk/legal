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
      article: "36",
      provisionId: "kpa-art-36",
      reviewStatus: "reviewed",
      summary:
        "Стаття зобов’язує organ повідомити сторону про кожне невирішення справи у строк, пояснити причину, назвати новий строк і pouczyć про ponaglenie.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "При пропуску строку organ надсилає повідомлення з причиною zwłoki, новим terminem załatwienia sprawy та інформацією про право на ponaglenie.",
        },
        {
          locator: "§ 2",
          explanation:
            "Той самий обов’язок існує, навіть коли затримка виникла з причин, незалежних від органу.",
        },
      ],
      legalEffect:
        "Сплив строку не дозволяє organowi мовчати: він повинен формально пояснити затримку й визначити новий строк.",
      foreignersCase: kpaLaw.text`У справі іноземця лист за ${kpaLaw.article("36", "art. 36")} не завершує справу і не є decyzją; він документує затримку та має містити pouczenie про ponaglenie.`,
    },
  ],
})
