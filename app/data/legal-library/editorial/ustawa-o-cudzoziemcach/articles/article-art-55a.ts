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
      provisionId: "ustawa-o-cudzoziemcach-art-55a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("55a", "Art. 55a")} визначає, що у провадженні про wpis zaproszenie до ewidencji zaproszeń або unieważnienie wpisu стороною є виключно zapraszający.`,
          sourceLocator: "Art. 55a",
        },
        {
          kind: "practical-inference",
          text: "Запрошений cudzoziemiec не набуває статусу strony лише через те, що його дані внесено до zaproszenie.",
          sourceLocator: "Art. 55a",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("55a", "Art. 55a")} обмежує коло сторін у провадженні щодо wpis або unieważnienie zaproszenie: процесуальною стороною є тільки zapraszający.`,
      rules: [
        {
          locator: "Art. 55a",
          explanation: foreignersLaw.text`Розрізняйте osobę zapraszaną, яка фігурує в документі, і stronę postępowania: ${foreignersLaw.article("55a", "Art. 55a")} прямо називає стороною лише запрошуючого.`,
        },
      ],
      legalEffect:
        "Рішення у цій процедурі адресоване процесуальній стороні — zapraszający. Саме zaproszenie не створює для cudzoziemiec права вимагати його wpis або unieważnienie як сторона цього провадження.",
      foreignersCase:
        "Визначте, хто має подавати заяви й отримувати decyzja у справі zaproszenie; питання cudzoziemiec про wiza або pobyt аналізуйте в окремому провадженні.",
    },
  ],
})
