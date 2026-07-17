import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-2",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 2 встановлює: «Do rozpoznawania spraw sądowoadministracyjnych powołane są sądy administracyjne».",
          sourceLocator: "Art. 2",
        },
      ],
      summary:
        "Стаття відносить розгляд справ sądowoadministracyjnych до sądów administracyjnych.",
      rules: [
        {
          locator: "Art. 2",
          explanation:
            "Судом для такого виду справ є sąd administracyjny; конкретну właściwość треба окремо перевірити за матеріалами справи.",
        },
      ],
      legalEffect:
        "Стаття визначає судову систему для справ цього виду, але сама не вирішує питання територіальної чи функціональної właściwości.",
      foreignersCase:
        "Якщо іноземець планує оскаржувати дію органу у справі про pobyt, спочатку перевірте, чи належить спір до справи sądowoadministracyjnej, а потім — який саме sąd є właściwy.",
    },
  ]),
})
