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
      provisionId: "powierzanie-pracy-art-46",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("46", "Art. 46")} встановлює, що сезонний дозвіл на роботу (zezwolenie na pracę sezonową) видає староста (starosta), компетентний за місцезнаходженням або місцем постійного проживання польського суб’єкта, який доручає роботу іноземцеві.`,
          sourceLocator: "Art. 46",
        },
      ],
      summary:
        "Сезонну справу веде не воєвода, а відповідний староста. Орган визначають за даними польського суб’єкта, а не за місцем проживання іноземця чи довільно обраним місцем роботи.",
      rules: [
        {
          locator: "Art. 46",
          explanation:
            "Якщо польський суб’єкт є організацією, перевірте його місцезнаходження (siedziba); якщо фізичною особою — місце постійного проживання (miejsce stałego pobytu). За цим критерієм визначають старосту для подання заяви.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("46", "Art. 46")} лише визначає компетентний орган. Вона не створює права на законне перебування (legalny pobyt) і не дозволяє автоматично почати роботу.`,
      foreignersCase:
        "Звірте реєстрові дані польського суб’єкта та визначте правильний повіт. Окремо підтвердьте документ перебування, сезонну підставу роботи й строк дозволу.",
    },
  ],
})
