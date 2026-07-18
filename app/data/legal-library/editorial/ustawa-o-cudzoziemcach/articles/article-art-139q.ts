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
      provisionId: "ustawa-o-cudzoziemcach-art-139q",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139q", "Art. 139q")} встановлює, що zezwolenie за ${foreignersLaw.article("139o", "art. 139o")} не звільняє від окремих вимог до zawodów regulowanych або działalności.`,
          sourceLocator: "Art. 139q",
        },
      ],
      summary:
        "Довгострокове ICT-zezwolenie не замінює професійні вимоги інших przepisów.",
      rules: [
        {
          locator: "Art. 139q",
          explanation:
            "Окремі вимоги щодо виконання zawód regulowany або діяльності залишаються чинними.",
        },
      ],
      legalEffect:
        "Стаття відділяє дозвіл на pobyt від дозволу виконувати регульовану професію або діяльність.",
      foreignersCase: foreignersLaw.text`Перевірте спеціальний допуск до роботи окремо від zezwolenie за ${foreignersLaw.article("139o", "art. 139o")}.`,
    },
  ],
})
