import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-57",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 57 прямо встановлює, що до сезонного дозволу на роботу (zezwolenie na pracę sezonową) не застосовується art. 19.",
          sourceLocator: "Art. 57",
        },
      ],
      summary:
        "Art. 19 зобов’язує повідомляти воєводу про визначені зміни у виконанні роботи за звичайним дозволом. Art. 57 виключає саме це правило із сезонної процедури, яку веде староста.",
      rules: [
        {
          locator: "Art. 57",
          explanation:
            "До сезонного дозволу не переносять обов’язки повідомлення з art. 19. Водночас залишаються чинними власні обов’язки сезонної процедури, зокрема подання документів після прибуття іноземця.",
        },
      ],
      legalEffect:
        "Наслідок обмежений виключенням однієї статті. З art. 57 не випливає скасування інших вимог до сезонної роботи.",
      foreignersCase:
        "Якщо орган або сторона посилається на art. 19, спочатку перевірте вид дозволу. Для сезонного дозволу діє спеціальне виключення з art. 57, але інші повідомлення треба шукати у правилах сезонної процедури.",
    },
  ]),
})
