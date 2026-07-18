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
        {
          kind: "statute-text",
          text: "Якщо pobranie odcisków linii papilarnych є фізично неможливим, відбитки не беруть.",
          sourceLocator: "Art. 246 ust. 3",
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
        {
          locator: "ust. 3",
          explanation:
            "Фізична неможливість pobrania odcisków є законним винятком: орган не повинен призначати повторне зняття як самоціль.",
        },
      ],
      legalEffect:
        "Норма робить відбитки частиною процедури у визначених випадках, захищає мінімальним строком, якщо зняття зірвав орган, і прямо виключає їх pobranie за фізичної неможливості.",
      foreignersCase:
        "Збережіть підтвердження особистої явки та нового terminu. Якщо відбитки фізично неможливо зняти, подайте медичні або інші релевантні докази цієї обставини й посилайтеся на ust. 3.",
    },
  ],
})
