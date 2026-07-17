import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-179",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Strona, która nie wniosła skargi kasacyjnej, może wnieść do WSA odpowiedź na skargę w terminie czternastu dni od jej doręczenia. Po upływie tego terminu albo po zarządzeniu doręczenia odpowiedzi wnoszącemu skargę WSA niezwłocznie przedstawia skargę, odpowiedź i akta NSA.",
          sourceLocator: "Art. 179",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("179", "Art. 179")} daje stronie niekasującej czternaście dni na odpowiedź i określa moment przekazania materiałów do NSA.`,
      rules: [
        {
          locator: "Art. 179",
          explanation:
            "Termin odpowiedzi biegnie od jej doręczenia stronie, która nie wniosła skargi kasacyjnej; potem WSA przekazuje skargę wraz z odpowiedzią i aktami.",
        },
      ],
      legalEffect:
        "Odpowiedź jest możliwością przedstawienia stanowiska przed przekazaniem sprawy NSA, a nie odrębną skargą kasacyjną. Brak odpowiedzi nie zatrzymuje przewidzianego przekazania.",
      foreignersCase:
        "W sporze o decyzję pobytową ustal datę doręczenia kasacji każdej stronie i czternastodniowy termin na odpowiedź. Treść odpowiedzi powinna odnosić się do konkretnych podstaw kasacyjnych.",
    },
  ],
})
