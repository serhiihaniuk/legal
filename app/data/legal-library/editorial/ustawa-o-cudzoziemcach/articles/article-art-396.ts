import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-396",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо є перешкода для доставлення іноземця до areszt dla cudzoziemców або для його прийняття, його можна до усунення перешкоди розмістити в окремому приміщенні Straż Graniczna або Policja для zatrzymanych.",
          sourceLocator: "Art. 396 ust. 1",
        },
        {
          kind: "statute-text",
          text: "До такого іноземця застосовуються правила rozdział 2 у частині, що стосується перебування в areszt dla cudzoziemców.",
          sourceLocator: "Art. 396 ust. 2",
        },
      ],
      summary:
        "Стаття передбачає тимчасове розміщення затриманого в окремому приміщенні, коли доставлення або прийняття до areszt dla cudzoziemców неможливе.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Потрібна фактична перешкода для доставлення або прийняття до areszt; розміщення триває до її усунення.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Правила rozdział 2 застосовуються не безумовно, а лише в межах, у якій вони стосуються перебування в areszt.",
        },
      ],
      legalEffect:
        "Норма дає проміжний режим утримання, не змінюючи саму причину zatrzymanie. Необхідно окремо встановити, яка перешкода спричинила таке розміщення.",
      foreignersCase:
        "Попросіть зазначити перешкоду, дату початку та місце тимчасового розміщення. Перевірте, які саме правила pobyt в areszt застосовано до цієї ситуації.",
    },
  ]),
})
