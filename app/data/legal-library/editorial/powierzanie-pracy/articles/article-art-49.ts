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
      provisionId: "powierzanie-pracy-art-49",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("49", "Art. 49")} встановлює, що коли cudzoziemiec у Польщі перебуває на іншому документі, ніж сезонна робоча віза або ruch bezwizowy, не пов'язаний із wniosek, робота на умовах сезонного wniosku є legalna від дня подання wniosku без braków formalnych до doręczenia decyzja starosty, але не довше 30 днів.`,
          sourceLocator: "Art. 49",
        },
      ],
      summary:
        "Для cudzoziemiec, який уже перебуває в Польщі на іншій підставі, закон створює обмежений період legalnej pracy за умовами сезонного wniosek. Період починається лише після повного подання й у будь-якому разі має максимум 30 днів.",
      rules: [
        {
          locator: "Art. 49",
          explanation:
            "Перевірте, що документ pobyt не є сезонною візою або відповідним безвізовим в'їздом, wniosek не має braków formalnych, а робота відповідає умовам wniosek. Захист триває до doręczenia рішення, але не довше 30 днів.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("49", "Art. 49")} легалізує лише роботу в прямо визначеному проміжку та межах wniosek; він не подовжує документ legalnego pobytu, не замінює його підставу і не гарантує позитивну decyzja.`,
      foreignersCase:
        "Збережіть підтвердження повного подання та порахуйте 30 днів і дату doręczenia decyzja. Одночасно перевірте, чи чинний документ дає право перебувати в Польщі та чи потрібне інше uprawnienie do pracy.",
    },
  ],
})
