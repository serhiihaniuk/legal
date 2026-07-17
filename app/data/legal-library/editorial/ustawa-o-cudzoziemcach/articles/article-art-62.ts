import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-62",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("62", "Art. 62")} встановлює, що документи, про які йдеться в ${foreignersLaw.article("61", "Art. 61")}, уповноважують на в’їзд на територію RP і pobyt на цій території.`,
          sourceLocator: "Art. 62 у zw. z Art. 61",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`Підставою є саме належний і чинний документ спеціального статусу; ${foreignersLaw.article("62", "Art. 62")} не поширюється на будь-який документ, який лише зовні схожий на нього.`,
          sourceLocator: "Art. 62",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("62", "Art. 62")} надає документам ${foreignersLaw.article("61", "Art. 61")} функцію підстави для в’їзду і побиту на території Польщі.`,
      rules: [
        {
          locator: "Art. 62",
          explanation: foreignersLaw.text`Спочатку встановіть, що документ справді належить до документів ${foreignersLaw.article("61", "Art. 61")}; лише тоді діє спеціальна підстава в’їзду і pobyt.`,
        },
      ],
      legalEffect: foreignersLaw.text`Чинний документ ${foreignersLaw.article("61", "Art. 61")} може підтверджувати право в’їзду та pobyt у межах спеціального режиму. Стаття не створює окремого права на pracę для осіб, які не мають відповідної підстави.`,
      foreignersCase: foreignersLaw.text`Перевірте вид, строк і власника документа, його зв’язок із функцією або status за ${foreignersLaw.article("61", "Art. 61")} та фактичні дати в’їзду й pobyt.`,
    },
  ],
})
