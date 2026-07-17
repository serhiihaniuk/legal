import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "115",
      provisionId: "kpa-art-115",
      reviewStatus: "reviewed",
      summary:
        "Ugoda може бути укладена перед органом першої або апеляційної інстанції до видання decyzji.",
      rules: [
        {
          locator: "єдиний блок",
          explanation:
            "Межа часу — момент видачі decyzji у провадженні, що триває перед відповідним органом.",
        },
      ],
      legalEffect:
        "Після видання decyzji в цій інстанції звичайний шлях укладення ugody за цією нормою закривається.",
      foreignersCase:
        "Якщо ugoda взагалі допустима у справі іноземця, ініціювати її треба до decyzji відповідної інстанції.",
    },
  ],
})
