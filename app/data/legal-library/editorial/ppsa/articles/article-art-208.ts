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
      provisionId: "ppsa-art-208",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Niezależnie od wyników spraw wskazanych w ${ppsaLaw.article("200", "art. 200")}, ${ppsaLaw.article("203", "203")}, ${ppsaLaw.article("204", "204")} i ${ppsaLaw.article("207", "207")} sąd może nałożyć na stronę obowiązek zwrotu w całości lub części kosztów wywołanych jej niesumiennym lub oczywiście niewłaściwym postępowaniem.`,
          sourceLocator: "Art. 208",
        },
      ],
      summary:
        "Niesumienne albo oczywiście niewłaściwe zachowanie strony może uzasadnić osobne obciążenie wywołanymi przez nie kosztami, niezależnie od wyniku sprawy.",
      rules: [
        {
          locator: "Art. 208",
          explanation:
            "Trzeba wskazać konkretne zachowanie strony i koszty przez nie wywołane; sam przegrany lub wygrany wynik nie wystarcza.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("208", "Art. 208")} może zmienić rozliczenie kosztów w całości lub części, ale wymaga oceny zachowania jako niesumiennego albo oczywiście niewłaściwego.`,
      foreignersCase:
        "W sprawie pobytowej dokumentuj terminowe i rzetelne działania. Nie zakładaj, że wynik skargi sam rozstrzyga o kosztach wywołanych konkretnym zachowaniem strony.",
    },
  ],
})
