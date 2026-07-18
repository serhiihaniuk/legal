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
      provisionId: "ustawa-o-cudzoziemcach-art-125",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("125", "Art. 125")} у тексті редакції позначено як uchylony.`,
          sourceLocator: "Art. 125",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("125", "Art. 125")} скасована (uchylony) і в поточному тексті не містить чинного правила.`,
      rules: [
        {
          locator: "Art. 125",
          explanation: "Текст містить лише позначення «(uchylony)».",
        },
      ],
      legalEffect:
        "На підставі поточної редакції цієї статті не можна вивести самостійну чинну підставу чи обов’язок.",
      foreignersCase: foreignersLaw.text`Не посилайтеся на ${foreignersLaw.article("125", "Art. 125")} як на чинне правило; шукайте актуальну норму, яка регулює потрібне питання.`,
    },
  ],
})
