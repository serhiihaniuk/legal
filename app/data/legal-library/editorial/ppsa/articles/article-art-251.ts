import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-251",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 251 передбачає, що przyznanie prawa pomocy wygasa зі смертю сторони, яка його отримала.",
          sourceLocator: "Art. 251",
        },
      ],
      summary:
        "Право допомоги має особистий процесуальний зв’язок зі стороною, яка його отримала, і wygasa з її смертю.",
      rules: [
        {
          locator: "Art. 251",
          explanation:
            "Встановіть факт смерті саме strony, якій przyznano prawo pomocy; стаття регулює припинення цього права, а не всі можливі наслідки смерті для основного postępowanie.",
        },
      ],
      legalEffect:
        "Зі смертю отримувача prawo pomocy wygasa за прямим правилом Art. 251; це не є рішенням по суті адміністративного спору.",
      foreignersCase:
        "Якщо сторона-іноземець померла під час судової справи, окремо зафіксуйте наслідок для prawa pomocy і не робіть з Art. 251 висновку про автоматичне завершення всієї справи чи перехід права до іншої особи.",
    },
  ]),
})
