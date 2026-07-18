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
      provisionId: "powierzanie-pracy-art-38",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("38", "Art. 38")} обмежує одним роком строк дозволу на роботу у зв’язку з визначеною корпоративною функцією, якщо польський суб’єкт веде діяльність у Польщі менш як рік або не виконує умов частини 2 ${workLaw.article("36", "ст. 36")}.`,
          sourceLocator: "Art. 38",
        },
      ],
      summary: workLaw.text`Суб’єкт, який веде діяльність менш як рік або не відповідає стандартним показникам частини 2 ${workLaw.article("36", "ст. 36")}, може отримати дозвіл на виконання функції не довше ніж на один рік.`,
      rules: [
        {
          locator: "Art. 38",
          explanation: workLaw.text`Перевірте тривалість діяльності, дохід і працевлаштування за частиною 2 ${workLaw.article("36", "ст. 36")}. Якщо хоча б одна з передбачених обставин наявна, строк дозволу не може перевищувати одного року.`,
        },
      ],
      legalEffect:
        "Обмеження стосується строку дозволу на виконання функції, а не строку законного перебування. Після закінчення дозволу не можна продовжувати виконувати функцію лише на підставі чинної карти перебування.",
      foreignersCase: workLaw.text`Зафіксуйте дату початку діяльності суб’єкта і документи щодо частини 2 ${workLaw.article("36", "ст. 36")}. Установіть окремі контрольні дати для дозволу на роботу та документа про перебування.`,
    },
  ],
})
