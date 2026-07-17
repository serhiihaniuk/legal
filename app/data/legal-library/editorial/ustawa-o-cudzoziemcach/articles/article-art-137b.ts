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
      provisionId: "ustawa-o-cudzoziemcach-art-137b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("137b", "Art. 137b")} встановлює, що zezwolenie за ${foreignersLaw.article("137a", "art. 137a")} не звільняє від окремих вимог до zawodów regulowanych або działalności.`,
          sourceLocator: "Art. 137b",
        },
      ],
      summary:
        "Довгострокова мобільність та допуск до регульованої професії є різними питаннями.",
      rules: [
        {
          locator: "Art. 137b",
          explanation:
            "Після отримання zezwolenia все одно застосовуються wymogi, встановлені odrębnymi przepisami.",
        },
      ],
      legalEffect:
        "Стаття не надає загального звільнення від професійних чи діяльнісних вимог.",
      foreignersCase: foreignersLaw.text`Окремо перевірте право виконувати регульовану професію або діяльність; не вважайте zezwolenie за ${foreignersLaw.article("137a", "art. 137a")} достатнім доказом такого допуску.`,
    },
  ],
})
