import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-392",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "До wniosek про повернення витрат з art. 391 ust. 1 та до їх повернення, коли їх понесли органи іншої держави-члена, застосовуються правила decyzja Rady від 23 лютого 2004 року про критерії та практичні домовленості компенсації фінансових диспропорцій за dyrektywa 2001/40/WE.",
          sourceLocator: "Art. 392",
        },
        {
          kind: "practical-inference",
          text: "Розрахунок і міждержавне відшкодування не слід будувати лише за загальними правилами витрат; стаття відсилає до спеціального акта ЄС.",
          sourceLocator: "Art. 392",
        },
      ],
      summary:
        "Стаття визначає спеціальне нормативне посилання для заяв про повернення витрат у транскордонному виконанні рішень про повернення.",
      rules: [
        {
          locator: "Art. 392",
          explanation:
            "Потрібно враховувати рішення Rady від 23 лютого 2004 року разом із art. 391, коли йдеться про wniosek або повернення витрат між державами.",
        },
      ],
      legalEffect:
        "Норма підключає до фінансової процедури спеціальні критерії та практичні домовленості ЄС. Вона сама не встановлює кінцеву суму відшкодування.",
      foreignersCase:
        "З’ясуйте, чи стосується вимога витрат іноземця чи міждержавної компенсації, і перевірте документ за рішенням Rady, на який посилається art. 392.",
    },
  ]),
})
