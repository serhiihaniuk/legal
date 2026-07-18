import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-288",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 288 зобов’язує cudzoziemca протягом перебування в Польщі мати ważny dokument podróży та документи, що дають право на pobyt, якщо такі документи вимагаються.",
          sourceLocator: "Art. 288",
        },
      ],
      summary:
        "Під час pobytu іноземець повинен мати чинний документ подорожі та, коли це потрібно, документ, що підтверджує право перебування.",
      rules: [
        {
          locator: "Art. 288",
          explanation:
            "Обов’язок стосується самого періоду перебування, а вимогу щодо документа pobyt треба оцінювати з урахуванням того, чи вимагається він у конкретному режимі.",
        },
      ],
      legalEffect:
        "Норма визначає документальний обов’язок cudzoziemca під час перебування, але не замінює перевірку чинності та правової підстави кожного документа.",
      foreignersCase:
        "Зберігайте доступними ważny dokument podróży та документ pobyt, якщо він потрібен; перевірте їхні строки дії перед поїздкою або контролем.",
    },
  ]),
})
