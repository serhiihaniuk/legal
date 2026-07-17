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
      article: "162",
      provisionId: "kpa-art-162",
      reviewStatus: "reviewed",
      summary:
        "Норма регулює wygaśnięcie або uchylenie рішення після його видання, коли воно стало безпредметним, не виконано умову чи адресат не виконав установлених дій. Орган оформлює цей наслідок окремим рішенням.",
      rules: [
        {
          locator: "§ 1 pkt 1",
          explanation:
            "Wygaśnięcie встановлюють, коли рішення стало безпредметним, а закон наказує це зробити або цього вимагає інтерес суспільства чи сторони.",
        },
        {
          locator: "§ 1 pkt 2",
          explanation:
            "Wygaśnięcie також встановлюють, коли рішення видано під умовою, а умову не виконано.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Рішення скасовують, якщо сторона не виконала визначених у ньому дій у строк; і wygaśnięcie, і uchylenie відбуваються у формі decyzji.",
        },
      ],
      legalEffect:
        "Первинне рішення перестає діяти або скасовується лише після видання нової decyzji на одній із названих підстав.",
      foreignersCase: kpaLaw.text`У дозволі на pobyt або іншому адміністративному дозволі треба перевірити, чи була в ньому умова або обов'язок із конкретним строком. Сам орган має назвати підставу ${kpaLaw.article("162", "art. 162")} і видати окреме рішення.`,
    },
  ],
})
