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
      provisionId: "powierzanie-pracy-art-35",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("35", "Art. 35")} встановлює, що дозвіл на роботу у зв’язку з виконанням визначеної корпоративної функції видає воєвода, компетентний за місцезнаходженням польського суб’єкта, який доручає роботу.`,
          sourceLocator: "Art. 35",
        },
      ],
      summary:
        "У справі дозволу на виконання визначеної функції компетенція воєводи прив’язана до місцезнаходження польського суб’єкта. Стаття визначає орган, а не матеріальні умови виконання функції.",
      rules: [
        {
          locator: "Art. 35",
          explanation:
            "У заяві потрібно правильно вказати місцезнаходження польського суб’єкта, адже саме воно визначає компетентного воєводу для дозволу, пов’язаного з виконанням функції.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("35", "Ст. 35")} є правилом компетенції у справі дозволу на роботу. Вона не підтверджує законності перебування і не замінює перевірки, чи потрібен дозвіл для конкретної функції.`,
      foreignersCase:
        "Звірте місцезнаходження суб’єкта з реєстровими даними та визначте компетентного воєводу. Далі окремо перевірте функцію, документ про перебування і підставу права на роботу.",
    },
  ],
})
