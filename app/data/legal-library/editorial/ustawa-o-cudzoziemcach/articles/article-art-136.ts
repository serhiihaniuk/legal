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
      provisionId: "ustawa-o-cudzoziemcach-art-136",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("136", "Art. 136")} у тексті редакції позначено як uchylony.`,
          sourceLocator: "Art. 136",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("136", "Art. 136")} скасована (uchylony) і в поточному тексті не встановлює чинної норми.`,
      rules: [
        {
          locator: "Art. 136",
          explanation: "Джерельний текст містить лише позначення «(uchylony)».",
        },
      ],
      legalEffect:
        "Із цієї статті не можна вивести чинне правило для справи за цією редакцією джерела.",
      foreignersCase: foreignersLaw.text`Не посилайтеся на ${foreignersLaw.article("136", "Art. 136")} як на чинну норму; знайдіть актуальний припис, що відповідає фактам.`,
    },
  ],
})
