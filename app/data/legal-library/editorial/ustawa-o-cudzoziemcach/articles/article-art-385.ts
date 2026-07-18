import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-385",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "До виконання рішення про повернення, виданого органом państwo członkowskie wydające, застосовуються положення art. 360–379 і art. 394–427.",
          sourceLocator: "Art. 385",
        },
        {
          kind: "practical-inference",
          text: "Для практичного аналізу треба прочитати названі блоки разом: art. 385 є нормою-відсиланням і сам не описує всі кроки виконання.",
          sourceLocator: "Art. 385",
        },
      ],
      summary:
        "Стаття визначає набір положень ustawa, які застосовуються до виконання рішення про повернення, виданого іншою державою-членом.",
      rules: [
        {
          locator: "Art. 360–379",
          explanation:
            "Перша група відсилання охоплює, зокрема, правила повітряного tranzyt та пов’язані з ним дії.",
        },
        {
          locator: "Art. 394–427",
          explanation:
            "Друга група містить правила zatrzymanie, zabezpieczenie, strzeżony ośrodek та інші дії, прямо врегульовані в цьому діапазоні.",
        },
      ],
      legalEffect:
        "Норма підключає спеціальний режим виконання іноземного рішення до визначених процедурних і виконавчих положень ustawa. Вона не означає, що всі інші правила застосовуються без перевірки.",
      foreignersCase:
        "Складіть контрольний список за кожним релевантним посиланням із art. 360–379 та 394–427 і перевірте, яка саме дія здійснюється щодо іноземця.",
    },
  ]),
})
