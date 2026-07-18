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
      provisionId: "ustawa-o-cudzoziemcach-art-179",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("179", "Art. 179")} зобов'язує organ, який веде провадження про zezwolenie для ofiary handlu ludźmi, забезпечити cudzoziemiec, що недостатньо володіє польською, можливістю користуватися допомогою tłumacz.`,
          sourceLocator: "Art. 179",
        },
      ],
      summary:
        "У спеціальному провадженні орган має забезпечити перекладача, якщо знання польської мови недостатнє.",
      rules: [
        {
          locator: "весь припис",
          explanation:
            "Обов'язок виникає у organ prowadzący postępowanie і стосується можливості користуватися допомогою tłumacz; він не залежить від того, чи cudzoziemiec сам уже знайшов перекладача.",
        },
      ],
      legalEffect:
        "Норма захищає ефективну участь потерпілої особи у провадженні; порушення може мати процесуальне значення, але не означає автоматичного udzielenie zezwolenie.",
      foreignersCase:
        "Письмово повідомте орган про мову, якою особа реально спілкується, попросіть перекладача до важливих дій і збережіть доказ такого прохання.",
    },
  ],
})
