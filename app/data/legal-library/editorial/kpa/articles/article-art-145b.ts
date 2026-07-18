import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "145b",
      provisionId: "kpa-art-145b",
      reviewStatus: "reviewed",
      summary:
        "Судове рішення про порушення рівного ставлення відкриває wznowienie, якщо дискримінація вплинула на остаточну decyzję.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Потрібне судове встановлення порушення за вказаним законом і причинний вплив на rozstrzygnięcie.",
        },
        {
          locator: "§ 2",
          explanation:
            "Skarga подається протягом місяця від uprawomocnienia рішення суду.",
        },
      ],
      legalEffect:
        "Наслідок встановленої дискримінації може бути усунутий через повторне адміністративне провадження.",
      foreignersCase:
        "Іноземець має додати prawomocne рішення суду й пояснити, як нерівне ставлення вплинуло на зміст його decyzji.",
    },
  ],
})
