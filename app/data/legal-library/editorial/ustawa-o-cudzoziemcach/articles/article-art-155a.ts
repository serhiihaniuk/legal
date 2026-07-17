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
      provisionId: "ustawa-o-cudzoziemcach-art-155a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("155a", "Art. 155a")} має в актуальному локальному corpus позначку «(uchylony)».`,
          sourceLocator: "Art. 155a",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("155a", "Art. 155a")} скасована і не містить чинного правила для дослідницької процедури.`,
      rules: [
        {
          locator: "cały przepis",
          explanation: foreignersLaw.text`Не використовуйте ${foreignersLaw.article("155a", "Art. 155a")} як чинну підставу; перевірте дату старого документа та актуальну норму, на яку він мав посилатися.`,
        },
      ],
      legalEffect:
        "Позначка «(uchylony)» виключає самостійну нормативну дію цього номера в редакції corpus.",
      foreignersCase:
        "Визначте редакцію акта на дату події та не переносіть старе посилання на чинний аналіз без перехідної норми.",
    },
  ],
})
