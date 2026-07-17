import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "17",
      provisionId: "kpa-art-17",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає, які органи вважаються organami wyższego stopnia щодо різних категорій адміністративних органів.",
      rules: [
        {
          locator: "pkt 1–4",
          explanation:
            "Норма встановлює загальну систему органів вищого рівня для самоврядування, wojewodów, інших адміністративних органів та громадських організацій, із застереженням спеціальних законів.",
        },
      ],
      legalEffect:
        "Визначення organu wyższego stopnia впливає, зокрема, на належний адміністративний контроль і розгляд ponaglenia чи odwołania.",
      foreignersCase: kpaLaw.text`У справі іноземця не можна визначати другу інстанцію лише з ${kpaLaw.article("17", "art. 17")}: спочатку треба перевірити спеціальний закон, який може встановлювати іншу систему.`,
    },
  ],
})
