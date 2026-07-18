import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-128",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("128", "Art. 128")} визначає строк zezwolenia за ${foreignersLaw.article("127", "art. 127")}: він надається на три місяці довше за період виконання роботи, але не довше трьох років.`,
          sourceLocator: "Art. 128",
        },
      ],
      summary:
        "Строк підстави Niebieskiej Karty UE розраховується від періоду роботи з верхньою межею 3 роки.",
      rules: [
        {
          locator: "Art. 128",
          explanation:
            "До періоду виконання роботи додаються 3 місяці, але загальний строк не може перевищити 3 роки.",
        },
      ],
      legalEffect:
        "Стаття обмежує строк чинності zezwolenia; вона не продовжує автоматично строк договору чи період роботи.",
      foreignersCase:
        "Порівняйте період роботи в документах із трирічною межею та перевірте, який строк фактично зазначено в decyzja.",
    },
  ],
})
