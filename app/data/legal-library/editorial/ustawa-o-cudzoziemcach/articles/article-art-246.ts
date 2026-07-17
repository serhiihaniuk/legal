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
      provisionId: "ustawa-o-cudzoziemcach-art-246",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Właściwy organ pobiera odciski linii papilarnych у разі заяви на першу картку в ситуації ${foreignersLaw.article("229", "Art. 229")} ust. 4, на наступну картку або на wymianę картки.`,
          sourceLocator: "Art. 246 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Якщо з причин, залежних від органу, відбитки не можна зняти в день особистої явки, орган призначає новий строк не коротший за 7 днів.",
          sourceLocator: "Art. 246 ust. 2",
        },
      ],
      summary:
        "Стаття регулює зняття відбитків пальців у процедурах видачі або обміну karty pobytu.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Обов’язок стосується не кожної взаємодії з органом, а названих видів заяв на kartę pobytu.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Коли перешкода виникла з боку органу, новий строк для відбитків має бути щонайменше 7 днів.",
        },
      ],
      legalEffect:
        "Норма робить відбитки частиною процедури у визначених випадках і водночас захищає мінімальним строком, якщо зняття зірвав орган.",
      foreignersCase:
        "Збережіть підтвердження особистої явки та нового terminu. Якщо пропущено відбитки не з вашої вини, зафіксуйте це до спливу призначеного строку.",
    },
  ],
})
