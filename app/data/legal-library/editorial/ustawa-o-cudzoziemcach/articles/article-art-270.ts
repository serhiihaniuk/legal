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
      provisionId: "ustawa-o-cudzoziemcach-art-270",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Tymczasowy polski dokument podróży є чинним протягом строку, зазначеного в документі, але цей строк не може перевищувати 7 днів.",
          sourceLocator: "Art. 270",
        },
      ],
      summary:
        "Стаття встановлює короткий максимальний строк чинності тимчасового польського документа подорожі.",
      rules: [
        {
          locator: "zdanie 1",
          explanation:
            "Дивіться конкретну дату в документі, але в будь-якому разі строк не може перевищувати 7 днів.",
        },
      ],
      legalEffect: foreignersLaw.text`Після закінчення зазначеного строку документ не можна використовувати для передбаченої ${foreignersLaw.article("269", "Art. 269")} поїздки.`,
      foreignersCase:
        "Плануйте маршрут за датою чинності, а не лише за датою видачі. Якщо поїздка зірвалася, уточніть у органу, чи потрібен новий документ.",
    },
  ],
})
