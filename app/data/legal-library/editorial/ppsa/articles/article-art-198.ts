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
      provisionId: "ppsa-art-198",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Przepisy działu o zażaleniu stosuje się odpowiednio do zażaleń na zarządzenia przewodniczącego, jeżeli ustawa przewiduje wniesienie zażalenia.",
          sourceLocator: "Art. 198",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("198", "Art. 198")} nie tworzy ogólnego zażalenia na każde zarządzenie przewodniczącego; odsyła do tego działu tylko wtedy, gdy ustawa przewiduje taki środek.`,
      rules: [
        {
          locator: "Art. 198",
          explanation:
            "Najpierw znajdź szczególny przepis otwierający zażalenie na dane zarządzenie, a dopiero potem stosuj reguły działu odpowiednio.",
        },
      ],
      legalEffect:
        "Przepis jest odesłaniem proceduralnym i samodzielnie nie przesądza dopuszczalności zażalenia na konkretne zarządzenie.",
      foreignersCase:
        "Jeśli w sprawie pobytowej kwestionujesz zarządzenie przewodniczącego, wskaż konkretną podstawę ustawową zażalenia przed obliczaniem terminu.",
    },
  ],
})
