import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-15",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("15", "Art. 15")} встановлює, що дозвіл на роботу видають на визначений строк, який не може перевищувати трьох років.`,
          sourceLocator: "Art. 15",
        },
      ],
      summary:
        "Дозвіл має визначений строк і верхню межу три роки. Стаття не говорить, що кожен дозвіл автоматично видається на три роки.",
      rules: [
        {
          locator: "Art. 15",
          explanation:
            "Потрібно прочитати конкретний строк чинності («okres ważności») в адміністративному рішенні: три роки є верхньою межею, а не гарантованою тривалістю.",
        },
      ],
      legalEffect:
        "Закінчення строку дозволу припиняє право працювати на його підставі. Це не відповідає автоматично на питання про законність перебування, яке має власну підставу та строк.",
      foreignersCase:
        "Занесіть у календар початок і кінець строку чинності дозволу та перевірте, чи охоплює документ фактичну роботу. Окремо контролюйте строк візи або документа про перебування: саме по собі законне перебування не продовжує дозволу на роботу.",
    },
  ],
})
