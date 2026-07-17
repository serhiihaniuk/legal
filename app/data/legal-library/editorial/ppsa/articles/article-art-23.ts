import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-23",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 23 містить текст: «Art. 23. (uchylony)».",
          sourceLocator: "Art. 23",
        },
      ],
      summary: "Art. 23 позначена як uchylony — скасована.",
      rules: [
        {
          locator: "Art. 23",
          explanation:
            "У цій редакції текст статті — «uchylony», тому вона не містить operative rule для нового процесуального кроку.",
        },
      ],
      legalEffect:
        "Для Art. 23 немає чинного operative rule, на якому можна будувати висновок у справі.",
      foreignersCase:
        "У справі іноземця не посилайтеся на Art. 23 як на діючу підставу; якщо старий документ містить це посилання, перевірте його контекст і актуальну норму окремо.",
    },
  ]),
})
