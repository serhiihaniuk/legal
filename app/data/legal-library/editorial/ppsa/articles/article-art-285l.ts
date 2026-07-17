import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-285l",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285l встановлює, що в питаннях, не врегульованих положеннями цього Dział, до postępowania, порушеного поданням skarga o stwierdzenie niezgodności z prawem prawomocnego orzeczenia, застосовуються відповідно положення про skarga kasacyjna.",
          sourceLocator: "Art. 285l",
        },
      ],
      summary:
        "Для прогалин у спеціальному провадженні закон відсилає до правил про skarga kasacyjna, але лише відповідно.",
      rules: [
        {
          locator: "Art. 285l",
          explanation:
            "Спочатку перевірте, чи питання справді не врегульоване цим Dział, і лише тоді шукайте відповідне правило про skarga kasacyjna.",
        },
      ],
      legalEffect:
        "Відсилання не робить усі правила касації автоматично тотожними цьому засобу; спосіб застосування має бути відповідним до його характеру.",
      foreignersCase:
        "У справі про pobyt не переносіть механічно строк або вимогу зі skarga kasacyjna на skargę з Art. 285l без перевірки, чи спеціальний Dział уже має власне правило.",
    },
  ]),
})
