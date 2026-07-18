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
      provisionId: "ustawa-o-cudzoziemcach-art-139d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139d", "Art. 139d")} встановлює, що zezwolenie за ${foreignersLaw.article("139a", "art. 139a")} не звільняє від окремих вимог до zawodów regulowanych або działalności.`,
          sourceLocator: "Art. 139d",
        },
      ],
      summary:
        "ICT-zezwolenie не замінює професійні або діяльнісні допуски, встановлені іншими приписами.",
      rules: [
        {
          locator: "Art. 139d",
          explanation:
            "Для виконання zawód regulowany або діяльності потрібно додатково виконати вимоги odrębnych przepisów.",
        },
      ],
      legalEffect: foreignersLaw.text`Стаття розмежовує право на pobyt за ${foreignersLaw.article("139a", "art. 139a")} та інші вимоги до фактичного виконання роботи.`,
      foreignersCase:
        "Перевірте спеціальні вимоги до професії чи діяльності окремо від рішення про ICT-pobyt.",
    },
  ],
})
