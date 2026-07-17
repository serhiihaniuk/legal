import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
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
          explanation:
            "Вирішальною є дата поштового надсилання за підтвердженням, вручення уповноваженою особою або введення акта до системи teleinformatycznego.",
        },
      ],
      legalEffect:
        "Своєчасність дії органу оцінюється за визначеною юридичною датою, а не лише за днем отримання стороною.",
      foreignersCase:
        "Якщо спеціальна справа іноземця допускає milczenie, треба перевіряти доказ конкретної дії органу до спливу строку.",
    },
  ],
})
