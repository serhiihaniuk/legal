import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "96n",
      provisionId: "kpa-art-96n",
      reviewStatus: "reviewed",
      summary:
        "Якщо mediacja завершилася законними домовленостями, орган вирішує справу відповідно до них і обмежує включення додаткових матеріалів до akt.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Орган пов’язаний домовленостями з protokołu настільки, наскільки вони перебувають у межах чинного права.",
        },
        {
          locator: "§ 2",
          explanation:
            "Розкриті під час mediacji матеріали, яких раніше не було в aktach, не долучаються, якщо не стали підставою узгодженого вирішення.",
        },
      ],
      legalEffect:
        "Protokół може визначити зміст завершення справи, але не легалізує домовленість поза межами закону.",
      foreignersCase:
        "У справі іноземця навіть погоджений результат не може обійти обов’язкові матеріальні умови дозволу.",
    },
  ],
})
