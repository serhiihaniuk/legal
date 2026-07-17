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
      provisionId: "ustawa-o-cudzoziemcach-art-139c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139c", "Art. 139c")} обмежує zezwolenie для стажера в рамках przeniesienia do 1 року та наказує враховувати заплановані періоди mobilność в інших державах ЄС.`,
          sourceLocator: "Art. 139c ust. 1–2",
        },
      ],
      summary:
        "Стаття встановлює спеціальний максимум для ICT-стажера та правило врахування мобільності у строку zezwolenia.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Якщо мета pobyt — стаж у przeniesienie wewnątrz przedsiębiorstwa, zezwolenie надається максимум на 1 рік.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Строк чинності zezwolenia враховує періоди, коли cudzoziemiec планує мобільність у інших державах ЄС.",
        },
      ],
      legalEffect:
        "Річний максимум стосується названої стажерської мети; стаття не встановлює такий самий максимум для кожної ролі ICT.",
      foreignersCase:
        "Визначте роль у dokumentach і відобразіть заплановані періоди мобільності під час перевірки строку рішення.",
    },
  ],
})
