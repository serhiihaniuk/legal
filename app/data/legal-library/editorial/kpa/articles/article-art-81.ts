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
      article: "81",
      provisionId: "kpa-art-81",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Стаття забороняє визнати обставину доведеною, якщо сторона не мала можливості висловитися щодо доказів, крім виняткових випадків ${kpaLaw.article("10", "art. 10 § 2")}.`,
      rules: [
        {
          locator: "całość",
          explanation: kpaLaw.text`Okoliczność faktyczna може бути uznana za udowodnioną лише після надання стороні можливості wypowiedzenia się co do dowodów, якщо не діє ${kpaLaw.article("10", "art. 10 § 2")}.`,
        },
      ],
      legalEffect:
        "Матеріал, щодо якого стороні не дали можливості зайняти позицію, за загальним правилом не може стати встановленим фактом.",
      foreignersCase:
        "Перед використанням нового документа або відомості проти іноземця organ зазвичай має дати йому можливість відповісти.",
    },
  ],
})
