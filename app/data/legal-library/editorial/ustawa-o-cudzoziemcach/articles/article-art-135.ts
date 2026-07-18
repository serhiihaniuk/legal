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
      provisionId: "ustawa-o-cudzoziemcach-art-135",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("135", "Art. 135")} у тексті редакції позначено як uchylony.`,
          sourceLocator: "Art. 135",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("135", "Art. 135")} скасована (uchylony) і не містить чинного правила для пояснення за цією редакцією.`,
      rules: [
        {
          locator: "Art. 135",
          explanation:
            "Джерельний текст складається з позначення «(uchylony)».",
        },
      ],
      legalEffect:
        "Поточний текст статті не дає самостійної чинної підстави, строку чи обов’язку.",
      foreignersCase: foreignersLaw.text`Не використовуйте ${foreignersLaw.article("135", "Art. 135")} як чинну правову підставу; перевірте інші положення, що прямо регулюють питання.`,
    },
  ],
})
