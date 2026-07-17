import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-405",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У areszt dla cudzoziemców може перебувати вагітна жінка до четвертого місяця; орган Straż Graniczna, якому підпорядкований areszt, звертається до суду про umieszczenie вагітної жінки в strzeżony ośrodek до закінчення третього місяця вагітності.",
          sourceLocator: "Art. 405 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Для застосування строків потрібне надійне встановлення строку вагітності та дати, коли орган подав wniosek до суду.",
          sourceLocator: "Art. 405 ust. 1–2",
        },
      ],
      summary:
        "Стаття встановлює спеціальне правило щодо перебування вагітної жінки в areszt dla cudzoziemców та переходу до strzeżony ośrodek.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Перебування в areszt за цією нормою допускається до 4-го місяця вагітності.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Орган, якому підпорядкований areszt, має звернутися до суду про strzeżony ośrodek до завершення 3-го місяця вагітності.",
        },
      ],
      legalEffect:
        "Норма змінює режим розміщення з огляду на вагітність, але не описує в цій статті всі умови самого рішення суду.",
      foreignersCase:
        "Зафіксуйте медичний документ про строк вагітності, дату перебування в areszt і дату wniosek до суду; перевірте, чи не пропущено межу третього місяця.",
    },
  ]),
})
