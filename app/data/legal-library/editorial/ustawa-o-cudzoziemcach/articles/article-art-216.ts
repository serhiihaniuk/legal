import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-216",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Для udzielenia kolejnego zezwolenia na pobyt rezydenta długoterminowego UE особі, якій попереднє zezwolenie cofałoся через ${foreignersLaw.article("215", "Art. 215")} ust. 1 pkt 3–5, не застосовуються ${foreignersLaw.article("219", "Art. 219")} ust. 1 pkt 4 і 9.`,
          sourceLocator: "Art. 216",
        },
      ],
      summary:
        "Стаття встановлює вузький виняток для наступного zezwolenia після cofnięcia з окремих причин, пов’язаних із виїздом або іншим дозволом в UE.",
      rules: [
        {
          locator: "Art. 216",
          explanation: foreignersLaw.text`Спершу встановіть, що попереднє cofnięcie було саме за ${foreignersLaw.article("215", "Art. 215")} ust. 1 pkt 3, 4 або 5; текст не поширює цей виняток на всі підстави ${foreignersLaw.article("215", "Art. 215")}.`,
        },
        {
          locator: "Art. 219 ust. 1 pkt 4 i 9",
          explanation: foreignersLaw.text`Незастосування стосується лише двох названих пунктів ${foreignersLaw.article("219", "Art. 219")} ust. 1 і не означає автоматичного виконання інших вимог для нового дозволу.`,
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("216", "Art. 216")} обмежено змінює перелік інформації, що застосовується до наступного zezwolenia; сама стаття не надає нового дозволу без перевірки решти умов.`,
      foreignersCase: foreignersLaw.text`Порівняйте підставу попереднього cofnięcia з ${foreignersLaw.article("215", "Art. 215")} ust. 1 pkt 3–5 і в заяві окремо позначте застосовність ${foreignersLaw.article("216", "Art. 216")}. Не поширюйте виняток на інші пункти ${foreignersLaw.article("219", "Art. 219")}.`,
    },
  ],
})
