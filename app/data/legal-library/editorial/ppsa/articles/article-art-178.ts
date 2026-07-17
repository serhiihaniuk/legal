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
      provisionId: "ppsa-art-178",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Wojewódzki sąd administracyjny na posiedzeniu niejawnym odrzuca skargę kasacyjną wniesioną po terminie lub z innych przyczyn niedopuszczalną, a także skargę, której braków strona nie uzupełniła w wyznaczonym terminie.",
          sourceLocator: "Art. 178",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("178", "Art. 178")} reguluje odrzucenie skargi kasacyjnej przez WSA z powodu spóźnienia, niedopuszczalności albo nieusunięcia braków.`,
      rules: [
        {
          locator: "Art. 178",
          explanation:
            "Sąd bada przesłanki formalne przed przekazaniem skargi kasacyjnej; przepis wskazuje trzy grupy przyczyn odrzucenia.",
        },
      ],
      legalEffect:
        "Odrzucenie kończy bieg tej skargi kasacyjnej bez rozpoznania jej podstaw; przed oceną skutku trzeba sprawdzić doręczenia, dopuszczalność i wykonanie wezwania.",
      foreignersCase:
        "W sprawie o pobyt odróżnij odrzucenie kasacji przez WSA od oddalenia jej przez NSA co do podstaw. Zabezpiecz dowody doręczenia i uzupełnienia braków.",
    },
  ],
})
