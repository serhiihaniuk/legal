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
      article: "29",
      provisionId: "kpa-art-29",
      reviewStatus: "reviewed",
      summary:
        "Стаття перелічує категорії суб’єктів, які можуть бути сторонами адміністративного провадження.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Сторонами можуть бути фізичні та юридичні особи, а також названі державні, самоврядні одиниці й громадські організації без правосуб’єктності.",
        },
      ],
      legalEffect: kpaLaw.text`Норма визначає допустимі організаційні форми strony, але наявність interesu prawnego все одно оцінюється за ${kpaLaw.article("28", "art. 28")}.`,
      foreignersCase:
        "Іноземець як фізична особа може бути стороною; окрема компанія-роботодавець потребує власної правової підстави для статусу strony.",
    },
  ],
})
