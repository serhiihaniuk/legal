import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-170",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Prawomocne orzeczenie пов’язує не лише сторони та суд, який його видав, а й інші суди та державні органи, а у випадках, передбачених законом, також інших осіб.",
          sourceLocator: "Art. 170",
        },
      ],
      summary:
        "Стаття окреслює коло адресатів, яких пов’язує prawomocne orzeczenie.",
      rules: [
        {
          locator: "Art. 170",
          explanation:
            "Відрізняйте загальне коло — сторони, суд і державні органи — від випадків, коли закон окремо поширює дію на інших осіб.",
        },
      ],
      legalEffect:
        "Пов’язаність виникає для prawomocne orzeczenie; стаття сама не розшифровує межі кожного конкретного предмета рішення.",
      foreignersCase: ppsaLaw.text`У справі іноземця посилайтеся на ${ppsaLaw.article("170", "art. 170")} лише разом із конкретним prawomocne orzeczenie та його предметом. Це не означає, що будь-який орган має виконати вимогу, якої в sentencja немає.`,
    },
  ],
})
