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
      provisionId: "ustawa-o-cudzoziemcach-art-164",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("164", "Art. 164")} вимагає відмовити у zezwolenie з ${foreignersLaw.article("159", "art. 159")} ust. 1, якщо наявний будь-який випадок відмови з ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5, 8 або 9.`,
          sourceLocator: "Art. 164",
        },
      ],
      summary:
        "Виконання умов połączenia z rodziną не усуває спеціально названих обов'язкових підстав відмови.",
      rules: [
        {
          locator: "весь припис",
          explanation: foreignersLaw.text`Орган має зіставити факти з конкретним пунктом ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5, 8 або 9; посилання лише на загальну «негативну обставину» недостатнє.`,
        },
      ],
      legalEffect: foreignersLaw.text`Це відсилання робить названі підстави ${foreignersLaw.article("100", "art. 100")} юридично релевантними саме для дозволу за ${foreignersLaw.article("159", "art. 159")} ust. 1; стаття не додає нового матеріального критерію.`,
      foreignersCase: foreignersLaw.text`Якщо рішення посилається на ${foreignersLaw.article("164", "art. 164")}, визначте точний пункт ${foreignersLaw.article("100", "art. 100")}, факт, який його підтверджує, і всі документи чи пояснення, що спростовують цей факт або показують застосовний виняток.`,
    },
  ],
})
