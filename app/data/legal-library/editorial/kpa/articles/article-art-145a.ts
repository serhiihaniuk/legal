import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "145a",
      provisionId: "kpa-art-145a",
      reviewStatus: "reviewed",
      summary:
        "Сторона може вимагати wznowienia, якщо Trybunał Konstytucyjny визнав неконституційним акт, на якому ґрунтувалася decyzja.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Рішення TK має стосуватися нормативного акта, що був правовою підставою decyzji.",
        },
        {
          locator: "§ 2",
          explanation:
            "Skarga подається протягом місяця від wejścia w życie рішення TK.",
        },
      ],
      legalEffect:
        "Остаточна decyzja може бути переглянута через втрату конституційної легітимності її нормативної основи.",
      foreignersCase:
        "Для decyzji щодо іноземця потрібен прямий зв’язок між нормою, оціненою TK, та правовою підставою конкретного акта.",
    },
  ],
})
