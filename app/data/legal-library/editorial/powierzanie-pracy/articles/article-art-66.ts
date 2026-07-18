import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-66",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 66 встановлює строк для внесення заяви до реєстру або відмови: до 7 робочих днів у справі, яка не потребує з'ясувального провадження, і до 30 днів, якщо таке провадження потрібне.",
          sourceLocator: "Art. 66",
        },
      ],
      summary:
        "Строк залежить від того, чи потрібно з'ясовувати обставини. Відлік починається від дня отримання заяви органом, а не від бажаної дати початку роботи.",
      rules: [
        {
          locator: "Art. 66",
          explanation:
            "Без з'ясувального провадження (postępowanie wyjaśniające) діє строк до 7 робочих днів; якщо воно потрібне — до 30 днів від дня отримання заяви.",
        },
      ],
      legalEffect:
        "Строк визначає час для дії органу, але його сплив сам по собі не створює запису і не легалізує роботу до внесення заяви до реєстру.",
      foreignersCase:
        "Зафіксуйте дату, коли староста отримав заяву, і з'ясуйте, чи справа потребує з'ясувального провадження. Не починайте роботу лише через те, що строк розгляду вже сплив.",
    },
  ]),
})
