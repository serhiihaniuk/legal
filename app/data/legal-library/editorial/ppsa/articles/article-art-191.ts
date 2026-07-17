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
      provisionId: "ppsa-art-191",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Na wniosek strony NSA rozpoznaje także te postanowienia WSA, które nie podlegały zaskarżeniu zażaleniem, ale miały wpływ na rozstrzygnięcie sprawy.",
          sourceLocator: "Art. 191",
        },
      ],
      summary:
        "Niektóre niezaskarżalne odrębnie postanowienia WSA mogą zostać zbadane w kasacji, jeżeli wpłynęły na rozstrzygnięcie sprawy.",
      rules: [
        {
          locator: "Art. 191",
          explanation:
            "Potrzebne są zarówno wniosek strony, jak i wykazanie wpływu postanowienia na wynik; przepis nie tworzy odrębnego zażalenia.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("191", "Art. 191")} rozszerza przedmiot kontroli w konkretnej kasacji, ale nie czyni każdego postanowienia samodzielnie zaskarżalnym.`,
      foreignersCase:
        "Jeśli postanowienie w sprawie pobytowej nie miało własnego zażalenia, wskaż w kasacji jego konkretny wpływ na wyrok, zamiast poprzestać na samej krytyce czynności.",
    },
  ],
})
