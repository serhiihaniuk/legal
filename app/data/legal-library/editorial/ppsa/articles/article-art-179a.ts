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
      provisionId: "ppsa-art-179a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Jeżeli przed przedstawieniem skargi kasacyjnej NSA WSA stwierdzi nieważność postępowania albo oczywiste usprawiedliwienie podstaw kasacyjnych, uchyla zaskarżony wyrok lub postanowienie, na wniosek strony rozstrzyga także o zwrocie kosztów postępowania kasacyjnego i na tym samym posiedzeniu ponownie rozpoznaje sprawę. Od tego orzeczenia przysługuje skarga kasacyjna.",
          sourceLocator: "Art. 179a",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("179a", "Art. 179a")} pozwala WSA na samokontrolę przed przekazaniem kasacji NSA w razie nieważności albo oczywiście usprawiedliwionych podstaw kasacyjnych.`,
      rules: [
        {
          locator: "Art. 179a",
          explanation:
            "Warunkiem jest chwila przed przedstawieniem kasacji NSA oraz jedna z dwóch przesłanek. WSA uchyla orzeczenie i od razu ponownie rozpoznaje sprawę.",
        },
      ],
      legalEffect:
        "Mechanizm może zmienić zaskarżone orzeczenie jeszcze w WSA, ale nie oznacza automatycznego uwzględnienia skargi administracyjnej ani przyznania pobytu.",
      foreignersCase:
        "W kasacji dotyczącej pobytu sprawdź, czy akta nie zostały jeszcze przedstawione NSA. Jeżeli WSA wyda nowe orzeczenie, oceniaj je jako nowe rozstrzygnięcie z własnym środkiem zaskarżenia.",
    },
  ],
})
