import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-139",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139", "Art. 139")} у тексті редакції позначено як uchylony.`,
          sourceLocator: "Art. 139",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("139", "Art. 139")} скасована (uchylony); після неї текст переходить до Rozdział 3a.`,
      rules: [
        {
          locator: "Art. 139",
          explanation:
            "Стаття містить позначення «(uchylony)» і не встановлює чинного правила.",
        },
      ],
      legalEffect: foreignersLaw.text`Не можна вивести з поточного ${foreignersLaw.article("139", "Art. 139")} самостійну підставу для pobyt чи праці.`,
      foreignersCase: foreignersLaw.text`Не використовуйте ${foreignersLaw.article("139", "Art. 139")} як чинну норму; для przeniesienia wewnątrz przedsiębiorstwa читайте актуальні статті Rozdział 3a.`,
    },
  ],
})
