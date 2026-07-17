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
      provisionId: "ppsa-art-217",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Do wartości przedmiotu zaskarżenia nie wlicza się odsetek i kosztów związanych z należnością główną.",
          sourceLocator: "Art. 217",
        },
      ],
      summary:
        "Przy obliczaniu wartości przedmiotu zaskarżenia pomija się odsetki i koszty związane z należnością główną.",
      rules: [
        {
          locator: "Art. 217",
          explanation:
            "Oddziel należność główną od odsetek i kosztów ubocznych; tylko ta pierwsza wchodzi do wartości według tego przepisu.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("217", "Art. 217")} ogranicza składniki wartości, ale nie podaje stawki wpisu ani nie rozstrzyga dopuszczalności samej skargi.`,
      foreignersCase:
        "Jeśli sprawa cudzoziemca dotyczy należności pieniężnej, przy oznaczaniu wartości nie dodawaj odsetek ani kosztów związanych z należnością główną.",
    },
  ],
})
