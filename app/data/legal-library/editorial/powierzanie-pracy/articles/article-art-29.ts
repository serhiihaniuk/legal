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
      provisionId: "powierzanie-pracy-art-29",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("29", "Art. 29")} дозволяє міністрові, відповідальному за питання праці, за погодженням із міністрами економіки та внутрішніх справ визначити виконавчим приписом перелік груп професій із кадровим дефіцитом. Перелік має спиратися на дослідження, аналіз та оцінку потреб національного ринку праці, зокрема моніторинг дефіцитних і надлишкових професій.`,
          sourceLocator: "Art. 29 ust. 1–2",
        },
      ],
      summary:
        "Стаття дає правову основу для переліку дефіцитних професій. Вона не називає конкретних професій у своєму тексті: їх треба перевіряти у виконавчому приписі («rozporządzenie»), чинному на потрібну дату.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Перелік може бути встановлений лише виконавчим приписом після погодження трьох міністрів.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Під час підготовки переліку враховують дослідження потреб ринку та національний моніторинг, у якому беруть участь воєводські й повітові управління праці.",
        },
      ],
      legalEffect: workLaw.text`Належність професії до переліку може надати заяві пріоритет за пунктом 3 ${workLaw.article("27", "ст. 27")}, але сама ${workLaw.article("29", "ст. 29")} не надає дозволу, законного перебування чи права працювати.`,
      foreignersCase:
        "На дату подання заяви звірте назву професії з чинним переліком, а не лише з описом посади роботодавця. Паралельно встановіть документ про законне перебування та іншу потрібну підставу права на роботу.",
    },
  ],
})
