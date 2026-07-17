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
      provisionId: "powierzanie-pracy-art-29",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("29", "Art. 29")} дозволяє ministrowi właściwemu do spraw pracy у porozumieniu з ministrem gospodarki та ministrem spraw wewnętrznych визначити rozporządzenie wykaz груп zawodów із кадровим дефіцитом. Перелік формується на підставі досліджень, аналізу та оцінки потреб krajowy rynek pracy, включно з моніторингом zawodów deficytowych i nadwyżkowych.`,
          sourceLocator: "Art. 29 ust. 1–2",
        },
      ],
      summary:
        "Стаття дає правову основу для переліку дефіцитних професій. Вона не називає конкретних zawodów у своєму тексті: їх треба перевіряти в чинному rozporządzenie.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Wykaz може бути встановлений лише у drodze rozporządzenia після узгодження трьох міністрів.",
        },
        {
          locator: "ust. 2",
          explanation:
            "При підготовці wykaz враховуються дослідження потреб ринку та національний моніторинг за участю wojewódzkie і powiatowe urzędy pracy.",
        },
      ],
      legalEffect: workLaw.text`Конкретний запис у wykaz може дати wniosek пріоритет за ${workLaw.article("27", "art. 27")} pkt 3, але ${workLaw.article("29", "art. 29")} сам по собі не надає дозволу, legalnego pobytu чи права працювати.`,
      foreignersCase:
        "На дату подання wniosek звірте назву професії з чинним wykaz, а не лише з описом посади роботодавця. Паралельно встановіть документ legalnego pobytu та інше потрібне uprawnienie do pracy.",
    },
  ],
})
