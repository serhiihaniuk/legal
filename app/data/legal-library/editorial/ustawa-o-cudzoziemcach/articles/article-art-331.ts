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
      provisionId: "ustawa-o-cudzoziemcach-art-331",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("331", "Art. 331")} є скасованим: у тексті стоїть позначка «uchylony».`,
          sourceLocator: "Art. 331",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("331", "Art. 331")} скасовано. Чинного правила, яке можна застосувати до виконання рішення про zobowiązaniu cudzoziemca do powrotu, ця стаття не містить.`,
      rules: [
        {
          locator: "całość",
          explanation:
            "Позначка «uchylony» означає, що статтю не слід читати як чинну матеріальну або процедурну підставу.",
        },
      ],
      legalEffect:
        "Сама стаття не створює чинного правового наслідку; треба перевіряти актуальну норму, на яку посилається рішення.",
      foreignersCase: foreignersLaw.text`Якщо в рішенні є посилання на ${foreignersLaw.article("331", "Art. 331")}, не робіть висновок із номера статті: перевірте, чи посилання не є застарілим і які чинні положення наведені поруч.`,
    },
  ],
})
