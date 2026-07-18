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
      provisionId: "ustawa-o-cudzoziemcach-art-253",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Polski dokument podróży dla cudzoziemca у період своєї чинності дає cudzoziemcowi право багаторазово перетинати кордон; документ чинний один рік від дня видачі.",
          sourceLocator: "Art. 253 ust. 1–2",
        },
      ],
      summary:
        "Стаття встановлює строк і прикордонне значення польського документа подорожі для іноземця.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Документ призначений для багаторазового перетину кордону лише протягом строку його чинності.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Базовий строк чинності становить один рік від дати видачі.",
        },
      ],
      legalEffect: foreignersLaw.text`Документ у межах річного строку дає право на багаторазове перетинання кордону за ${foreignersLaw.article("253", "Art. 253")}; він не змінює сам по собі підставу pobytu або інші умови в’їзду.`,
      foreignersCase:
        "Перед поїздкою перевірте дату видачі й закінчення року, а також чинність karty pobytu або іншої підстави. Для кожної поїздки майте чинний документ і перевіряйте вимоги країни в’їзду.",
    },
  ],
})
