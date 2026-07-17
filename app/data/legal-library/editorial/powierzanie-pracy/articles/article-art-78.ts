import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-78",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 78 дозволяє minister właściwy do spraw pracy створити resortowy program aktywizacyjny для legalно перебуваючих cudzoziemiec, фінансований із Fundusz Pracy і реалізований після konkurs ofert.",
          sourceLocator: "Art. 78 ust. 1–7",
        },
      ],
      summary:
        "Програма може підтримувати професійну активізацію, інтеграцію і соціальну активність. Виконавців обирають через конкурс серед перелічених установ, а оголошення і результат публікуються в BIP.",
      rules: [
        {
          locator: "ust. 1–4",
          explanation:
            "Minister може розробити програму для cudzoziemiec з legalny pobyt; програма й обслуговування фінансуються з Fundusz Pracy, а завдання передаються після konkurs ofert.",
        },
        {
          locator: "ust. 5–6",
          explanation:
            "До конкурсу допускаються названі podmioty ekonomii społecznej, publiczne służby zatrudnienia, OHP, agencje, instytucje szkoleniowe та JST; інформацію публікують у BIP.",
        },
        {
          locator: "ust. 7",
          explanation:
            "Для вибору realizator не застосовуються положення про доручення публічних завдань з ustawy про działalność pożytku publicznego.",
        },
      ],
      legalEffect:
        "Програма є можливим інструментом підтримки, а не індивідуальним правом на роботу чи фінансування для кожного cudzoziemiec.",
      foreignersCase:
        "Шукайте конкретний конкурс і його умови в BIP ministerstwa. Не називайте загальну можливість програми підтвердженням права на конкретне szkolenie або роботу.",
    },
  ]),
})
