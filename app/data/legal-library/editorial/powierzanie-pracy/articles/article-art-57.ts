import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-57",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 57 прямо встановлює, що до zezwolenia na pracę sezonową не застосовується art. 19.",
          sourceLocator: "Art. 57",
        },
      ],
      summary:
        "Стаття є спеціальним застереженням про незастосування art. 19 до сезонного zezwolenie. Вона не пояснює зміст art. 19 і не замінює перевірку інших умов розділу.",
      rules: [
        {
          locator: "Art. 57",
          explanation:
            "У сезонному провадженні не можна автоматично застосовувати art. 19 лише тому, що його застосовують до іншого виду zezwolenie.",
        },
      ],
      legalEffect:
        "Наслідок обмежений виключенням однієї норми; з тексту art. 57 не випливає скасування інших вимог до сезонної роботи.",
      foreignersCase:
        "Якщо у заяві або поясненні посилаються на art. 19, окремо перевірте, чи не є це помилковим перенесенням правила: для zezwolenie na pracę sezonową діє art. 57.",
    },
  ]),
})
