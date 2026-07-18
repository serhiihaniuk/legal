import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const VISA_CODE_URL = "https://eur-lex.europa.eu/eli/reg/2009/810/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-66a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("66a", "Art. 66a")} передбачає, що у випадку ${foreignersLaw.article("66", "Art. 66")} ust. 1a дії за ${foreignersLaw.external("Art. 19", VISA_CODE_URL)} ust. 3 Wspólnotowy Kodeks Wizowy міністр закордонних справ здійснює через konsul, визначеного ${foreignersLaw.article("66", "Art. 66")} ust. 1b.`,
          sourceLocator: "Art. 66a у zw. z Art. 66 ust. 1a–1b",
        },
        {
          kind: "practical-inference",
          text: "Через konsul реалізується конкретна процедурна дія, передбачена kodeks wizowy; це не означає автоматичної передачі konsul повноваження видати або відмовити у візі замість міністра.",
          sourceLocator: "Art. 66a",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("66a", "Art. 66a")} уточнює канал виконання дій за ${foreignersLaw.external("Art. 19", VISA_CODE_URL)} ust. 3 Wspólnotowy Kodeks Wizowy у спеціальній процедурі, де заяву міністру подають через konsul.`,
      rules: [
        {
          locator: "Art. 66a",
          explanation: foreignersLaw.text`Перевірте, що справа справді підпадає під ${foreignersLaw.article("66", "Art. 66")} ust. 1a; тоді визначену дію MFA виконує konsul ${foreignersLaw.article("66", "Art. 66")} ust. 1b як процедурний посередник.`,
        },
      ],
      legalEffect:
        "Норма організує виконання окремої дії у візовій процедурі й не змінює матеріальних умов видачі чи odmowa wizy.",
      foreignersCase: foreignersLaw.text`Збережіть підтвердження, що дія за ${foreignersLaw.external("Art. 19", VISA_CODE_URL)} ust. 3 була проведена через właściwy konsul у межах процедури ${foreignersLaw.article("66", "Art. 66")} ust. 1a; не ототожнюйте цей канал із новим рішенням.`,
    },
  ],
})
