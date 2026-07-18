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
      provisionId: "ustawa-o-cudzoziemcach-art-120c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("120c", "Art. 120c")} встановлює, що належно сплачена opłata skarbowa за zmianę zezwolenia na pobyt czasowy i pracę не повертається після odmowy zmiany або umorzenia postępowania у справі про таку зміну.`,
          sourceLocator: "Art. 120c",
        },
      ],
      summary:
        "Стаття стосується збору за зміну вже наявного комбінованого дозволу, а не збору за первинне надання іншого дозволу.",
      rules: [
        {
          locator: "Art. 120c",
          explanation:
            "Спочатку встановіть предмет wniosku. Лише якщо це саме zmiana zezwolenia na pobyt czasowy i pracę та сплачено належний для неї збір, діє описане правило неповернення.",
        },
      ],
      legalEffect:
        "Odmowa zmiany або umorzenie відповідного провадження не повертає належної opłaty skarbowej.",
      foreignersCase:
        "У платіжних документах звірте, чи збір сплачено за zmianę, а не за новий wniosek. Від цього залежить, яку норму про повернення застосовувати.",
    },
  ],
})
