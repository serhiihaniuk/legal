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
      article: "103",
      provisionId: "kpa-art-103",
      reviewStatus: "reviewed",
      summary: "Zawieszenie зупиняє перебіг строків, установлених KPA.",
      rules: [
        {
          locator: "єдиний блок",
          explanation:
            "Йдеться саме про строки, передбачені кодексом, на час формального zawieszenia.",
        },
      ],
      legalEffect:
        "Кодексні строки не продовжують спливати під час зупинення провадження.",
      foreignersCase: kpaLaw.text`У справі іноземця окремо треба перевірити, чи конкретний строк походить із KPA чи зі спеціального закону, бо ${kpaLaw.article("103", "art. 103")} прямо говорить про строки кодексу.`,
    },
  ],
})
