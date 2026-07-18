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
      provisionId: "ustawa-o-cudzoziemcach-art-346",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("346", "Art. 346")} є скасованим: у тексті стоїть позначка «uchylony».`,
          sourceLocator: "Art. 346",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("346", "Art. 346")} скасовано, тому він не містить чинного правила про koszty або їх стягнення.`,
      rules: [
        {
          locator: "całość",
          explanation:
            "Позначка «uchylony» означає, що застосовувати цю статтю як самостійну підставу не можна.",
        },
      ],
      legalEffect: foreignersLaw.text`Чинний правовий наслідок треба шукати в сусідніх нормах і чинному тексті закону, а не в ${foreignersLaw.article("346", "Art. 346")}.`,
      foreignersCase: foreignersLaw.text`Якщо ${foreignersLaw.article("346", "Art. 346")} наведено у старому документі, перевірте дату документа та актуальну норму, яка регулює відповідне питання.`,
    },
  ],
})
