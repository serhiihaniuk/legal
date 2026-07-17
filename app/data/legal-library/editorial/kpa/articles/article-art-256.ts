import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "256",
      provisionId: "kpa-art-256",
      reviewStatus: "reviewed",
      summary:
        "Стаття забороняє працівникові самому розглядати skargę на власну діяльність. Він зобов'язаний невідкладно передати її службовому керівнику.",
      rules: [
        {
          locator: "одне речення",
          explanation:
            "Працівник, який отримав skargę dotyczącą jego działalności, негайно передає її przełożonemu służbowemu.",
        },
      ],
      legalEffect:
        "Скарга виходить з-під контролю особи, чиї дії оскаржуються, і переходить до її керівника.",
      foreignersCase:
        "Якщо іноземець скаржиться на конкретного інспектора, цей інспектор не повинен сам завершувати звернення; він має передати його керівнику.",
    },
  ],
})
