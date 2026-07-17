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
      provisionId: "powierzanie-pracy-art-38",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("38", "Art. 38")} передбачає строк zezwolenie на роботу у зв'язку з określona funkcja не довший за 1 рік, якщо polski podmiot веде działalność у Польщі менш як рік або не виконує умови ${workLaw.article("36", "art. 36")} ust. 2.`,
          sourceLocator: "Art. 38",
        },
      ],
      summary: workLaw.text`Молодий podmiot або podmiot, який не відповідає стандартним показникам ${workLaw.article("36", "art. 36")} ust. 2, отримує функціональний дозвіл з верхньою межею один рік.`,
      rules: [
        {
          locator: "Art. 38",
          explanation: workLaw.text`Перевірте тривалість діяльності та умови доходу й zatrudnienie за ${workLaw.article("36", "art. 36")} ust. 2; за наявності відповідної обставини строк дозволу не може перевищувати року.`,
        },
      ],
      legalEffect:
        "Обмеження стосується строку дозволу на виконання функції, а не строку legalnego pobytu. Після спливу дозволу не можна продовжувати функцію лише на підставі чинної карти pobytu.",
      foreignersCase: workLaw.text`Зафіксуйте дату початку діяльності podmiot і документи щодо ${workLaw.article("36", "art. 36")} ust. 2. Поставте окремі контрольні дати для zezwolenie та документа pobyt.`,
    },
  ],
})
