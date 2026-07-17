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
      provisionId: "powierzanie-pracy-art-43",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("43", "Art. 43")} обмежує строк zezwolenie при delegowanie до oddział, zakład, przedstawicielstwo або пов'язаного podmiot, який веде діяльність у Польщі менш як рік: такий дозвіл видається на визначений строк не довший за 1 рік.`,
          sourceLocator: "Art. 43",
        },
      ],
      summary:
        "Молодий приймаючий podmiot обмежує максимальний строк дозволу при відповідній моделі delegowanie. Один рік є верхньою межею, а не гарантованою тривалістю.",
      rules: [
        {
          locator: "Art. 43",
          explanation:
            "З'ясуйте, чи йдеться про названий oddział, zakład, przedstawicielstwo або пов'язаний podmiot і чи його діяльність у Польщі коротша за рік; тоді строк zezwolenie не може перевищити року.",
        },
      ],
      legalEffect:
        "Обмеження стосується строку права працювати за delegowanie, а не строку legalnego pobytu. Після закінчення дозволу чинний документ pobyt не замінює нової правової підстави роботи.",
      foreignersCase:
        "Перевірте дату початку діяльності приймаючого podmiot і точну модель delegowanie. Порівняйте кінцеві дати zezwolenie та pobyt у різних календарях.",
    },
  ],
})
