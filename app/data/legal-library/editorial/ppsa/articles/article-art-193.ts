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
      provisionId: "ppsa-art-193",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Jeżeli brak szczególnych przepisów postępowania przed NSA, odpowiednio stosuje się przepisy postępowania przed WSA. NSA z urzędu uzasadnia wyroki i postanowienia w terminie trzydziestu dni, a uzasadnienie wyroku oddalającego skargę kasacyjną zawiera ocenę jej zarzutów.",
          sourceLocator: "Art. 193",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("193", "Art. 193")} jest regułą odpowiedniego stosowania przepisów WSA i nakłada na NSA szczególny obowiązek uzasadnienia orzeczeń.`,
      rules: [
        {
          locator: "Art. 193",
          explanation:
            "Najpierw szukaj przepisu szczególnego dla NSA; dopiero przy jego braku stosuj regulację WSA odpowiednio, a nie mechanicznie.",
        },
        {
          locator: "Art. 193 zdanie drugie",
          explanation:
            "NSA uzasadnia z urzędu wyroki i postanowienia w trzydzieści dni, a przy oddaleniu kasacji uzasadnienie ma oceniać jej zarzuty.",
        },
      ],
      legalEffect:
        "Przepis pomaga określić tryb NSA, lecz nie tworzy samodzielnie podstawy do uwzględnienia kasacji ani nie zastępuje oceny konkretnego uzasadnienia.",
      foreignersCase:
        "Po otrzymaniu orzeczenia NSA w sprawie pobytowej sprawdź, czy uzasadnienie oddalenia odnosi się do zarzutów faktycznie sformułowanych w kasacji.",
    },
  ],
})
