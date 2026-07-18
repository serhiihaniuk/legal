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
      provisionId: "ustawa-o-cudzoziemcach-art-445",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("445", "Art. 445")}: «(uchylony)».`,
          sourceLocator: "Art. 445",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`У чинному тексті ${foreignersLaw.article("445", "Art. 445")} немає самостійного правила, яке можна застосувати до справи без іншого перехідного або спеціального положення.`,
          sourceLocator: "Art. 445",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("445", "Art. 445")} втратила чинність: у чинному тексті corpus зазначено лише «(uchylony)».`,
      rules: [
        {
          locator: "Art. 445",
          explanation:
            "Стаття не містить чинних ust., пунктів або іншого нормативного тексту.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("445", "Art. 445")} не встановлює чинного правила для нової індивідуальної справи. Якщо документ посилається на неї, треба перевірити дату та перехідні положення відповідної зміни.`,
      foreignersCase: foreignersLaw.text`Не будуйте висновок лише на посиланні на ${foreignersLaw.article("445", "Art. 445")}; попросіть орган уточнити чинну правову підставу та перевірте редакцію на релевантну дату.`,
    },
  ],
})
