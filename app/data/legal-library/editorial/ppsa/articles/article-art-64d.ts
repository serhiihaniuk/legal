import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-64d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd розглядає sprzeciw od decyzji на posiedzenie niejawne протягом тридцяти днів від його надходження і може передати справу на rozprawa.",
          sourceLocator: "Art. 64d § 1–2",
        },
      ],
      summary:
        "Основним форматом розгляду sprzeciw є закрите засідання, але суд може призначити rozprawa.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Стаття встановлює для sąd орієнтир розгляду протягом тридцяти днів від надходження sprzeciw.",
        },
        {
          locator: "§ 2",
          explanation: "Sąd може направити справу для розгляду на rozprawa.",
        },
      ],
      legalEffect:
        "Спосіб і строк розгляду визначені статтею, але самі по собі не означають позитивного рішення.",
      foreignersCase:
        "У справі cudzoziemca перевірте дату надходження sprzeciw до sąd і не припускайте, що відсутність rozprawa означає відсутність розгляду.",
    },
  ]),
})
