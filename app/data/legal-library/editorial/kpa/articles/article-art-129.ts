import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "129",
      provisionId: "kpa-art-129",
      reviewStatus: "reviewed",
      summary:
        "Норма визначає шлях і строк подання odwołania: до органу odwoławczego через орган, який видав decyzję.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Письмо адресують апеляційному органу, але вносять через першу інстанцію.",
        },
        {
          locator: "§ 2",
          explanation:
            "Загальний строк — чотирнадцять днів від doręczenia або усного ogłoszenia stronie.",
        },
        {
          locator: "§ 3",
          explanation: "Спеціальний закон може встановити інший строк.",
        },
      ],
      legalEffect:
        "Своєчасне внесення правильним шляхом запускає апеляційне провадження.",
      foreignersCase:
        "У справі іноземця строк рахується від юридичної дати вручення decyzji, а odwołanie подається через орган, що її видав.",
    },
  ],
})
