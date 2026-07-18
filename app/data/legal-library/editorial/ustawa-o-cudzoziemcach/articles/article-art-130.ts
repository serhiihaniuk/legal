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
      provisionId: "ustawa-o-cudzoziemcach-art-130",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("130", "Art. 130")} прямо встановлює, що отримання zezwolenia за ${foreignersLaw.article("127", "art. 127")} не звільняє від вимог інших положень щодо wykonywania zawodów regulowanych або działalności.`,
          sourceLocator: "Art. 130",
        },
      ],
      summary:
        "Підстава Niebieskiej Karty UE сама по собі не замінює окремі вимоги до регульованої професії або діяльності.",
      rules: [
        {
          locator: "Art. 130",
          explanation:
            "Після отримання zezwolenia залишаються застосовними вимоги, встановлені odrębnymi przepisami для відповідної професії чи діяльності.",
        },
      ],
      legalEffect:
        "Стаття відмежовує дозвіл на pobyt від окремого допуску до регульованої професії або діяльності.",
      foreignersCase:
        "Перевірте не лише decyzja про pobyt, а й окремі вимоги до планованої професії або діяльності, якщо вони є регульованими.",
    },
  ],
})
