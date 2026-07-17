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
      provisionId: "ustawa-o-cudzoziemcach-art-146",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("146", "Art. 146")} має в локальному офіційному corpus позначку «(uchylony)».`,
          sourceLocator: "Art. 146",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("146", "Art. 146")} скасована і не містить чинної нормативної диспозиції.`,
      rules: [
        {
          locator: "cały przepis",
          explanation: foreignersLaw.text`Не використовуйте ${foreignersLaw.article("146", "Art. 146")} як самостійну чинну підставу; перевіряйте актуальні сусідні положення та перехідні правила, якщо документ посилається на цей номер.`,
        },
      ],
      legalEffect: foreignersLaw.text`Позначка «(uchylony)» означає, що в актуальному тексті немає чинного правила, яке можна застосувати як ${foreignersLaw.article("146", "Art. 146")}.`,
      foreignersCase: foreignersLaw.text`Встановіть дату і контекст старого посилання на ${foreignersLaw.article("146", "Art. 146")} та зіставте його з редакцією акта, чинною на відповідну подію.`,
    },
  ],
})
