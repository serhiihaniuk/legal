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
      provisionId: "ustawa-o-cudzoziemcach-art-139l",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139l", "Art. 139l")} зобов’язує jednostka przyjmująca подати заяву на kolejnego zezwolenia за ${foreignersLaw.article("139a", "art. 139a")} не пізніше останнього дня легального pobyt cudzoziemca та відсилає до ${foreignersLaw.article("108", "art. 108")}.`,
          sourceLocator: "Art. 139l ust. 1–2",
        },
      ],
      summary:
        "Стаття встановлює крайній момент подання kolejny wniosek для ICT-pobyt.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Wniosek подає jednostka przyjmująca не пізніше останнього дня legalny pobyt cudzoziemca в Польщі.",
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`У цій ситуації ${foreignersLaw.article("108", "art. 108")} застосовується відповідно.`,
        },
      ],
      legalEffect: foreignersLaw.text`Норма визначає строк дії для podania kolejnego zezwolenia, але зміст наслідків відсилання потрібно читати разом із ${foreignersLaw.article("108", "art. 108")}.`,
      foreignersCase:
        "Визначте останній день legalny pobyt і подбайте, щоб jednostka подала kolejny wniosek не пізніше цієї дати.",
    },
  ],
})
