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
      provisionId: "ppsa-art-213",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Do wydatków zalicza się w szczególności należności tłumaczy i kuratorów ustanowionych w sprawie oraz koszty ogłoszeń, a także diety i koszty podróży sędziów i pracowników sądowych związane z czynnościami poza budynkiem sądu, określone w odrębnych przepisach.",
          sourceLocator: "Art. 213 pkt 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("213", "Art. 213")} podaje przykładowe wydatki sądowe, w tym należności sądowego tłumacza lub kuratora i koszty czynności poza sądem.`,
      rules: [
        {
          locator: "Art. 213 pkt 1–2",
          explanation:
            "Należność tłumacza lub kuratora musi dotyczyć osoby ustanowionej w danej sprawie; pozostałe wskazane wydatki podlegają odrębnym zasadom.",
        },
      ],
      legalEffect:
        "Przepis klasyfikuje przykładowe wydatki, nie ustanawia automatycznego zwrotu prywatnych kosztów tłumaczenia ani nie określa ich stawek.",
      foreignersCase:
        "Jeżeli sąd ustanowił tłumacza w sprawie pobytowej, odróżnij jego należność jako wydatek sądowy od prywatnego tłumaczenia dokumentów przez stronę.",
    },
  ],
})
