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
      provisionId: "ustawa-o-cudzoziemcach-art-273",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Dokument «zgoda na pobyt tolerowany» видають cudzoziemcowi, якому надано zgodę na pobyt tolerowany на території RP.",
          sourceLocator: "Art. 273",
        },
      ],
      summary:
        "Стаття пов’язує видачу документа tolerowany з уже наданою згодою на tolerowany pobyt.",
      rules: [
        {
          locator: "zdanie 1",
          explanation:
            "Спочатку має існувати рішення про udzielenie zgody na pobyt tolerowany; ця стаття описує документ, а не підстави надання згоди.",
        },
      ],
      legalEffect: foreignersLaw.text`Документ підтверджує оформлення наданої згоди, але сам текст ${foreignersLaw.article("273", "Art. 273")} не визначає строку чи права на перетин кордону.`,
      foreignersCase:
        "Зіставте документ із рішенням про udzielenie zgody. Строк, дані, odbiór та наслідки втрати перевіряйте за наступними статтями.",
    },
  ],
})
