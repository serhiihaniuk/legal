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
      provisionId: "ustawa-o-cudzoziemcach-art-55",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("55", "Art. 55")} дозволяє, щоб odbioru zaproszenie здійснив pełnomocnik, який має pełnomocnictwo szczególne саме для його отримання.`,
          sourceLocator: "Art. 55",
        },
        {
          kind: "practical-inference",
          text: "Норма стосується способу отримання готового документа; вона не розширює повноваження представника на інші дії без окремого повноваження.",
          sourceLocator: "Art. 55",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("55", "Art. 55")} встановлює вузьке представництво для odbiór zaproszenie: отримати документ може pełnomocnik із спеціальним повноваженням на цю дію.`,
      rules: [
        {
          locator: "Art. 55",
          explanation:
            "Перевірте не лише наявність pełnomocnictwo, а й його спеціальний предмет — odbiór конкретного zaproszenie.",
        },
      ],
      legalEffect:
        "Належне спеціальне повноваження дозволяє представнику отримати zaproszenie, але не змінює його строк, зміст, зобов’язання чи правовий ефект.",
      foreignersCase:
        "У матеріалах справи збережіть копію pełnomocnictwo szczególne і підтвердження, хто та коли отримав zaproszenie; не прирівнюйте це до представництва cudzoziemiec у візовій справі.",
    },
  ],
})
