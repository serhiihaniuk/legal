import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "121a",
      provisionId: "kpa-art-121a",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`До ugody, укладеної перед mediatorem, відповідно застосовуються ${kpaLaw.articleRange("117", "121", { start: "art. 117", end: "121" })}.`,
      rules: [
        {
          locator: "єдиний блок",
          explanation:
            "Медіаційна ugoda проходить правила форми, затвердження, виконуваності та наслідків адміністративної ugody.",
        },
      ],
      legalEffect:
        "Домовленість із mediacji не діє самостійно поза процедурою затвердження.",
      foreignersCase: kpaLaw.text`У справі іноземця protokół mediacji треба відрізняти від ugody, яка ще повинна пройти відповідні етапи ${kpaLaw.articleRange("117", "121", { start: "art. 117", end: "121" })}.`,
    },
  ],
})
