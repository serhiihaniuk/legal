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
      provisionId: "ppsa-art-211",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Koszty sądowe obejmują opłaty sądowe i zwrot wydatków.",
          sourceLocator: "Art. 211",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("211", "Art. 211")} dzieli koszty sądowe na opłaty sądowe i zwrot wydatków.`,
      rules: [
        {
          locator: "Art. 211",
          explanation:
            "Przy analizie płatności rozdziel opłatę sądową od wydatku, bo dalsze przepisy mogą traktować je odmiennie.",
        },
      ],
      legalEffect:
        "Klasyfikacja nie podaje stawki ani zwolnienia dla konkretnego pisma; te kwestie wymagają dalszych przepisów.",
      foreignersCase:
        "W sprawie pobytowej prowadź osobno listę wpisu lub opłaty kancelaryjnej i wydatków, np. należności tłumacza ustanowionego przez sąd.",
    },
  ],
})
