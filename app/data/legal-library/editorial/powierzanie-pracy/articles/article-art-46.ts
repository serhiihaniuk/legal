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
      provisionId: "powierzanie-pracy-art-46",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("46", "Art. 46")} встановлює, що zezwolenie na pracę sezonową видає starosta, właściwość якого визначається siedziba або місцем stałego pobytu polski podmiot powierzający pracę cudzoziemcowi.`,
          sourceLocator: "Art. 46",
        },
      ],
      summary:
        "Для сезонного дозволу компетентним є starosta за місцем польського podmiot. Це відрізняється від загального правила про wojewoda для звичайного zezwolenie.",
      rules: [
        {
          locator: "Art. 46",
          explanation:
            "Визначте siedziba або місце stałego pobytu polski podmiot; саме це встановлює właściwy starosta для wniosek.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("46", "Art. 46")} розподіляє компетенцію у справі сезонної роботи, але не створює права на legalny pobyt чи фактичний початок роботи.`,
      foreignersCase:
        "Перевірте реєстрові дані podmiot і правильний powiat. Окремо підтвердьте документ pobyt, сезонну підставу роботи та строк дозволу.",
    },
  ],
})
