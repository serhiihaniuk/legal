import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "67",
      provisionId: "kpa-art-67",
      reviewStatus: "reviewed",
      summary:
        "Стаття зобов’язує складати protokół з кожної істотної для вирішення справи дії, якщо її не зафіксовано іншим письмовим способом.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Protokół складається стисло з кожної czynności postępowania, що має істотне значення для rozstrzygnięcia, якщо її не utrwalono inaczej na piśmie.",
        },
        {
          locator: "§ 2 pkt 1–5",
          explanation:
            "Обов’язково протоколюються, зокрема, усне podanie, допит сторони, свідка й biegłego, огляд, rozprawa та усне оголошення decyzji або postanowienia.",
        },
      ],
      legalEffect:
        "Істотна усна або доказова дія отримує офіційний письмовий запис, який входить до akt sprawy.",
      foreignersCase:
        "Пояснення іноземця, допит свідка чи огляд у справі pobytowej мають бути відтворені у protokole, якщо закон не передбачає інше письмове закріплення.",
    },
  ],
})
