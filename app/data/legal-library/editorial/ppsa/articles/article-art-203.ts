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
      provisionId: "ppsa-art-203",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Stronie, która wniosła skargę kasacyjną, należy się zwrot poniesionych niezbędnych kosztów postępowania kasacyjnego: od organu, gdy po uwzględnieniu kasacji uchylono wyrok sądu pierwszej instancji oddalający skargę, albo od skarżącego, gdy uchylono wyrok sądu pierwszej instancji uwzględniający skargę.",
          sourceLocator: "Art. 203 pkt 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("203", "Art. 203")} wiąże zwrot niezbędnych kosztów kasacji z tym, jaki wyrok pierwszej instancji został uchylony i kto powinien ponieść koszt.`,
      rules: [
        {
          locator: "Art. 203 pkt 1–2",
          explanation:
            "Przy uchyleniu wyroku oddalającego skargę zwrot jest od organu, a przy uchyleniu wyroku uwzględniającego skargę — od skarżącego; w obu wariantach kasacja musi zostać uwzględniona.",
        },
      ],
      legalEffect:
        "Samo wniesienie kasacji nie daje prawa do zwrotu; znaczenie ma wynik NSA, rodzaj uchylonego wyroku i wykazanie niezbędnych kosztów.",
      foreignersCase: ppsaLaw.text`Po korzystnym wyroku NSA w sprawie pobytowej sprawdź, czy uchylony wyrok WSA oddalał czy uwzględniał skargę, bo od tego zależy wskazany w ${ppsaLaw.article("203", "art. 203")} płatnik.`,
    },
  ],
})
