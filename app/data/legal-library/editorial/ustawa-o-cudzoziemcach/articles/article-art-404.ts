import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-404",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "До проваджень про umieszczenie в strzeżony ośrodek, застосування areszt, продовження pobyt і звільнення застосовуються відповідно положення Kodeks postępowania karnego; дії, зарезервовані для прокурора, може виконувати funkcjonariusz Straż Graniczna.",
          sourceLocator: "Art. 404",
        },
        {
          kind: "practical-inference",
          text: "Формулювання odpowiednio означає, що KPK застосовується з урахуванням спеціального предмета й органів цієї процедури, а не механічно в кожній деталі.",
          sourceLocator: "Art. 404",
        },
      ],
      summary:
        "Стаття визначає процесуальне застосування Kodeks postępowania karnego до ключових судових рішень про ізоляцію та звільнення іноземця.",
      rules: [
        {
          locator: "Art. 404",
          explanation:
            "KPK охоплює розміщення, areszt, продовження pobyt і zwolnienie; його положення застосовуються відповідно до цієї спеціальної процедури.",
        },
        {
          locator: "Art. 404 zdanie drugie",
          explanation:
            "Функціонер Straż Graniczna може виконувати дії, які KPK зазвичай відносить до прокурора.",
        },
      ],
      legalEffect:
        "Норма заповнює процесуальні питання через KPK і одночасно змінює розподіл окремих дій між прокурором та Straż Graniczna.",
      foreignersCase:
        "Визначте, яка саме дія відбувається — placement, areszt, продовження чи zwolnienie — і перевірте відповідну норму KPK разом із ustawa та статусом органу, який діяв.",
    },
  ]),
})
