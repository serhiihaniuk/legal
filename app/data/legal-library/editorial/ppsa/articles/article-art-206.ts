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
      provisionId: "ppsa-art-206",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd może w uzasadnionych przypadkach odstąpić od zasądzenia zwrotu kosztów postępowania w całości lub części, w szczególności gdy skarga została uwzględniona w części niewspółmiernej do wartości przedmiotu sporu ustalonej dla pobrania wpisu.",
          sourceLocator: "Art. 206",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("206", "Art. 206")} daje sądowi możliwość ograniczenia albo pominięcia zwrotu kosztów w uzasadnionej sytuacji, zwłaszcza przy niewspółmiernym częściowym uwzględnieniu skargi.`,
      rules: [
        {
          locator: "Art. 206",
          explanation:
            "To kompetencja sądu zależna od okoliczności; przepis podaje przykład relacji między zakresem uwzględnienia a wartością przedmiotu sporu dla wpisu.",
        },
      ],
      legalEffect:
        "Nawet istnienie ogólnej podstawy zwrotu nie gwarantuje pełnej kwoty, lecz nie przesądza też z góry o odmowie.",
      foreignersCase:
        "Po częściowym wygraniu skargi pobytowej nie obiecuj pełnego zwrotu. Sprawdź uzasadnienie WSA i relację zakresu uwzględnienia do wartości przyjętej dla wpisu.",
    },
  ],
})
