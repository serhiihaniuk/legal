import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-15",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("15", "Art. 15")} встановлює, що zezwolenie na pracę видається на визначений строк, який не може перевищувати 3 років.`,
          sourceLocator: "Art. 15",
        },
      ],
      summary:
        "Дозвіл має визначений строк і верхню межу три роки. Стаття не говорить, що кожен дозвіл автоматично видається на три роки.",
      rules: [
        {
          locator: "Art. 15",
          explanation:
            "Потрібно прочитати конкретний okres ważności у decyzja; максимальні три роки є межею, а не гарантованою тривалістю.",
        },
      ],
      legalEffect:
        "Закінчення строку zezwolenie припиняє саме дозвіл на роботу в його межах. Воно не відповідає автоматично на питання про legalny pobyt, який має власну підставу та строк.",
      foreignersCase:
        "Занесіть у календар дату початку й кінця zezwolenie та перевірте, чи охоплює воно фактичну роботу. Окремо контролюйте строк візи або документа pobyt і не продовжуйте роботу лише через чинний pobyt.",
    },
  ],
})
