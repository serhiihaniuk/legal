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
      provisionId: "ustawa-o-cudzoziemcach-art-209",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("209", "Art. 209")} має позначку «uchylony» і не містить чинного правила про pobyt stały або іншу процедуру.`,
          sourceLocator: "Art. 209",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("209", "Art. 209")} є uchylony у чинному тексті; його не можна використовувати як самостійну правову підставу.`,
      rules: [
        {
          locator: "Art. 209",
          explanation:
            "Для актуального висновку перейдіть до чинної статті, що регулює потрібне питання, і не відновлюйте норму за старими шаблонами.",
        },
      ],
      legalEffect: foreignersLaw.text`У чинній редакції ${foreignersLaw.article("209", "Art. 209")} не встановлює правового наслідку, який можна було б застосувати до заяви.`,
      foreignersCase: foreignersLaw.text`Якщо рішення або консультація посилається на ${foreignersLaw.article("209", "Art. 209")} як на чинну норму, перевірте цитування та вимагайте аналізу актуальної правової підстави.`,
    },
  ],
})
