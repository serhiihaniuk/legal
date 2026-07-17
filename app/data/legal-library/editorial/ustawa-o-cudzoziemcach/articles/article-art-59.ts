import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-59",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("59", "Art. 59")} ust. 1 визначає, що wiza krajowa дозволяє в’їзд і безперервний або кілька послідовних pobyt на території RP загально довше 90 днів у період чинності візи; ust. 2 пов’язує період pobyt із cel pobytu, а ust. 3 обмежує okres ważności одним роком.`,
          sourceLocator: "Art. 59 ust. 1–3",
        },
        {
          kind: "practical-inference",
          text: "Okres ważności wizy і дозволена кількість днів pobyt — різні параметри; їх треба читати разом із наклейкою та конкретним cel.",
          sourceLocator: "Art. 59 ust. 1–3",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("59", "Art. 59")} описує функцію wiza krajowa: вона охоплює в’їзд і побyt понад 90 днів сумарно в межах своєї чинності, але період побиту визначається відповідно до заявленої мети, а строк чинності не може перевищувати року.`,
      rules: [
        {
          locator: "Art. 59 ust. 1",
          explanation:
            "Віза може передбачати один безперервний або кілька послідовних pobyt; їхня сумарна тривалість має бути понад 90 днів і залишатися в періоді чинності візи.",
        },
        {
          locator: "Art. 59 ust. 2–3",
          explanation:
            "Орган визначає дозволений період у межах ust. 1 відповідно до cel pobytu, але okres ważności wiza krajowa не може перевищити 1 року.",
        },
      ],
      legalEffect:
        "Чинна wiza krajowa створює візову підставу для в’їзду і побиту лише в межах зазначених строків, кількості в’їздів і мети. Вона не скасовує прикордонних умов і не є універсальним дозволом на роботу.",
      foreignersCase:
        "Зіставте на наклейці typ wiza, okres ważności, кількість в’їздів і dozwolony okres pobytu з фактичними датами та cel; не рахуйте весь строк чинності як дозволені дні.",
    },
  ],
})
