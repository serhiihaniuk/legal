import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "133",
      provisionId: "kpa-art-133",
      reviewStatus: "reviewed",
      summary:
        "Якщо autokontrola не завершилася новою decyzją, орган першої інстанції передає odwołanie й акти органу odwoławczemu протягом семи днів.",
      rules: [
        {
          locator: "єдиний блок",
          explanation:
            "Строк іде від дня отримання odwołania органом першої інстанції.",
        },
      ],
      legalEffect:
        "Матеріали справи переходять до компетентної апеляційної інстанції.",
      foreignersCase:
        "Для строку передання потрібна дата фактичного отримання odwołania органом, який видав рішення. Вона може відрізнятися від дати, за якою сторона зберегла свій строк подання, наприклад належним поштовим відправленням.",
    },
  ],
})
