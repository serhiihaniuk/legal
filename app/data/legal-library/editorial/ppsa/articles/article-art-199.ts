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
      provisionId: "ppsa-art-199",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Strony ponoszą koszty postępowania związane ze swoim udziałem w sprawie, chyba że przepis szczególny stanowi inaczej.",
          sourceLocator: "Art. 199",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("199", "Art. 199")} ustanawia zasadę ponoszenia własnych kosztów udziału, z zastrzeżeniem szczególnych reguł o ich zwrocie lub rozdziale.`,
      rules: [
        {
          locator: "Art. 199",
          explanation:
            "Oddziel koszty poniesione przez stronę od ewentualnego zwrotu zasądzonego na podstawie dalszych przepisów działu V.",
        },
      ],
      legalEffect:
        "Przepis nie ustala samodzielnie, kto ostatecznie otrzyma zwrot ani jaka będzie jego kwota; trzeba sprawdzić wynik sprawy i przepisy szczególne.",
      foreignersCase:
        "Planując skargę na decyzję pobytową, uwzględnij własne opłaty, tłumaczenia i pełnomocnika niezależnie od późniejszego rozstrzygnięcia o zwrocie.",
    },
  ],
})
