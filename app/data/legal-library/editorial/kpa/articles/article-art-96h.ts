import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "96h",
      provisionId: "kpa-art-96h",
      reviewStatus: "reviewed",
      summary:
        "Орган негайно передає mediatorowi наявні контактні дані учасників і їхніх pełnomocników.",
      rules: [
        {
          locator: "єдиний блок",
          explanation:
            "Серед названих даних — номери телефонів та адреси електронної пошти, якщо орган ними володіє.",
        },
      ],
      legalEffect:
        "Mediator отримує можливість безпосередньо організувати контакти з учасниками.",
      foreignersCase:
        "У справі іноземця актуальні дані заявника і pełnomocnika дозволяють уникнути організаційного зриву mediacji.",
    },
  ],
})
