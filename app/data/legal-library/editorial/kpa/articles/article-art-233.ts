import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "233",
      provisionId: "kpa-art-233",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає наслідок skargi щодо індивідуальної справи, яка ще не була предметом адміністративного провадження. Скарга сторони відкриває провадження, а скарга іншої особи може лише спонукати орган діяти з уряду.",
      rules: [
        {
          locator: "перше речення",
          explanation:
            "Якщо таку skargę подала сторона, вона спричиняє wszczęcie postępowania administracyjnego.",
        },
        {
          locator: "друге речення",
          explanation:
            "Skarga іншої особи може спричинити відкриття z urzędu, крім справ, які закон дозволяє почати лише на żądanie strony.",
        },
      ],
      legalEffect:
        "Зміст skargi переходить у режим індивідуального адміністративного провадження, якщо виконані умови статті.",
      foreignersCase:
        "У sprawie pobytowej, яка починається лише на заяву іноземця, скарга сторонньої особи не замінить його wniosku. Якщо звертається сама сторона і зміст створює належну вимогу, орган оцінює його як початок справи.",
    },
  ],
})
