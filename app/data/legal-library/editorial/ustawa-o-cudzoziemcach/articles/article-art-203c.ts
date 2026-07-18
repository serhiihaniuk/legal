import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpa = createLegalTextAuthor("kpa")

export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-203c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("203c", "Art. 203c")} вимагає подавати wniosek o zezwolenie na pobyt stały електронно через MOS на встановленій формі з ${foreignersLaw.article("203", "Art. 203")} ust. 1. Заяву, подану іншим способом, залишають без розгляду.`,
          sourceLocator: "Art. 203c ust. 1–3",
        },
      ],
      summary:
        "Стаття визначає обов’язковий канал подання заяви на постійне проживання. Вона не вирішує, чи виконані матеріальні умови дозволу.",
      rules: [
        {
          locator: "Art. 203c ust. 1–2",
          explanation: foreignersLaw.text`Заявник використовує форму, доступну у MOS. До такого подання не застосовують перші два речення ${kpa.article("63", "art. 63 § 1 KPA")} про загальні способи внесення podań.`,
        },
        {
          locator: "Art. 203c ust. 3",
          explanation:
            "Паперовий або інший позасистемний wniosek не переходить до звичайного розгляду; його pozostawia się bez rozpoznania.",
        },
      ],
      legalEffect:
        "Неправильний канал подання блокує розгляд заяви незалежно від сили долучених доказів.",
      foreignersCase: foreignersLaw.text`Перевірте підтвердження роботи саме в MOS, а потім окремо встановіть юридичну дату подання за вимогами ${foreignersLaw.article("203d", "Art. 203d")} щодо підпису й UPO.`,
    },
  ],
})
