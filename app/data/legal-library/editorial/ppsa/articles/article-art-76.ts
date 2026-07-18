import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-76",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Одному pełnomocnik кількох осіб надсилається один egzemplarz pismo і załączniki; уповноваженому кільком учасниками на odbiór надсилають по одному примірнику для кожного, а за кількох pełnomocnik однієї сторони — лише одному.",
          sourceLocator: "Art. 76 § 1–3",
        },
      ],
      summary:
        "Кількість примірників залежить від того, чи це спільний pełnomocnik, особа для отримання pism або кілька представників однієї сторони.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Спільний pełnomocnik кількох осіб отримує один комплект.",
        },
        {
          locator: "§ 2",
          explanation:
            "Особа, уповноважена кількома учасниками лише на odbiór, отримує по примірнику для кожного учасника.",
        },
        {
          locator: "§ 3",
          explanation:
            "При кількох pełnomocnik однієї сторони sąd надсилає pismo лише одному з них.",
        },
      ],
      legalEffect:
        "Правило про кількість копій не змінює повноваження представника та не визначає результат справи.",
      foreignersCase:
        "Для сім’ї cudzoziemców уточніть, чи представник є спільним pełnomocnik, щоб правильно відстежити комплект і строки реагування.",
    },
  ]),
})
