import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-63",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо ustawy так встановлюють, postępowanie sądowe розпочинається на wniosek.",
          sourceLocator: "Art. 63",
        },
      ],
      summary:
        "Wniosek є способом початку судової справи лише тоді, коли це прямо передбачає спеціальна ustawa.",
      rules: [
        {
          locator: "Art. 63",
          explanation:
            "Перед поданням wniosek знайдіть спеціальну норму, яка прямо вимагає або допускає такий спосіб wszczęcie.",
        },
      ],
      legalEffect:
        "Стаття не створює універсального права на wniosek і не встановлює його строку.",
      foreignersCase:
        "У справах cudzoziemców не замінюйте skarga wnioskiem без перевірки спеціального закону та виду судового провадження.",
    },
  ]),
})
