import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "104",
      provisionId: "kpa-art-104",
      reviewStatus: "reviewed",
      summary:
        "Орган завершує адміністративну справу decyzją, якщо KPA не передбачає іншої форми.",
      rules: [
        {
          locator: "§ 1",
          explanation: "Decyzja є загальним способом załatwienia sprawy.",
        },
        {
          locator: "§ 2",
          explanation:
            "Вона вирішує суть справи повністю чи частково або іншим способом завершує провадження в цій інстанції.",
        },
      ],
      legalEffect:
        "Decyzja створює владне розв’язання предмета справи або завершує її в конкретній інстанції.",
      foreignersCase:
        "Рішення про дозвіл чи відмову у справі іноземця має бути decyzją, якщо спеціальний режим не встановлює іншої форми завершення.",
    },
  ],
})
