import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-43",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 43 встановлює: «W razie śmierci strony albo utraty przez nią zdolności sądowej pełnomocnictwo wygasa».",
          sourceLocator: "Art. 43",
        },
      ],
      summary:
        "У разі смерті сторони або втрати нею zdolność sądowa повноваження припиняється, але procesowy pełnomocnik діє до моменту zawieszenie postępowania.",
      rules: [
        {
          locator: "Art. 43",
          explanation:
            "Смерть або втрата zdolność sądowa припиняє pełnomocnictwo; виняток щодо подальшої дії представника триває до zawieszenie postępowania.",
        },
      ],
      legalEffect:
        "Стаття поєднує припинення повноваження з тимчасовим продовженням дії procesowy pełnomocnik до zawieszenie; не слід ототожнювати ці два моменти.",
      foreignersCase:
        "Якщо у справі іноземця настала смерть сторони або інша обставина щодо zdolność sądowa, зафіксуйте її та перевірте, чи провадження вже zawieszone.",
    },
  ]),
})
