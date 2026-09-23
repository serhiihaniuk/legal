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
      article: "122b",
      provisionId: "kpa-art-122b",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає, яку дату вважати днем видання акта або внесення sprzeciwu для перевірки, чи настав мовчазний результат.",
      rules: [
        {
          locator: "pkt 1–3",
          explanation: kpaLaw.text`Залежно від способу дії враховують дату поштового відправлення за підтвердженням, вручення за підтвердженням працівником органу чи іншою уповноваженою особою або введення акта до інформаційної системи у випадку, визначеному ${kpaLaw.article("39-1", "art. 39¹")}. Останнє правило не стосується будь-якого внутрішнього запису в системі установи.`,
        },
      ],
      legalEffect:
        "Своєчасність дії органу оцінюється за визначеною юридичною датою, а не лише за днем отримання стороною.",
      foreignersCase:
        "Якщо спеціальна справа іноземця допускає milczenie, треба перевіряти доказ конкретної дії органу до спливу строку.",
    },
  ],
})
