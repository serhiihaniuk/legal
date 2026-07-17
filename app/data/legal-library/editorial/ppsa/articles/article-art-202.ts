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
      provisionId: "ppsa-art-202",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Jeżeli po stronie skarżącej występuje kilku uprawnionych, zwrot kosztów przysługuje każdemu odpowiednio do udziału w sprawie. Jeżeli ich uprawnienia lub obowiązki związane z przedmiotem zaskarżenia są wspólne, zwrot następuje na ich rzecz solidarnie.",
          sourceLocator: "Art. 202 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("202", "Art. 202")} rozróżnia podział zwrotu według udziału od solidarnego zwrotu przy wspólnych uprawnieniach lub obowiązkach skarżących.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Przy kilku niezależnych uprawnionych ustal udział każdego w sprawie przed określeniem zwrotu.",
        },
        {
          locator: "§ 2",
          explanation:
            "Wspólny związek uprawnień lub obowiązków z przedmiotem zaskarżenia prowadzi do zwrotu na rzecz skarżących solidarnie.",
        },
      ],
      legalEffect:
        "Sposób rozdzielenia kosztów zależy od charakteru uprawnień procesowych, a nie od samej liczby osób podpisanych pod skargą.",
      foreignersCase:
        "Gdy członkowie rodziny wspólnie skarżą decyzje pobytowe, porównaj ich uprawnienia i obowiązki z przedmiotem zaskarżenia przed przyjęciem solidarnego zwrotu.",
    },
  ],
})
