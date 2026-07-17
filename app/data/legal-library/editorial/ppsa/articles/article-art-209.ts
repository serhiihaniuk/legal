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
      provisionId: "ppsa-art-209",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Wniosek strony o zwrot kosztów sąd rozstrzyga w każdym orzeczeniu uwzględniającym skargę oraz w orzeczeniu, o którym mowa w ${ppsaLaw.article("201", "art. 201")}, ${ppsaLaw.article("203", "203")} i ${ppsaLaw.article("204", "204")}.`,
          sourceLocator: "Art. 209",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("209", "Art. 209")} wskazuje orzeczenia, w których sąd rozstrzyga zgłoszony wniosek o zwrot kosztów.`,
      rules: [
        {
          locator: "Art. 209",
          explanation: ppsaLaw.text`Sprawdź sentencję orzeczenia uwzględniającego skargę oraz orzeczenia objęte ${ppsaLaw.article("201", "art. 201")}, ${ppsaLaw.article("203", "203")} lub ${ppsaLaw.article("204", "204")}; sam wniosek nie zastępuje wykazania należnych kosztów.`,
        },
      ],
      legalEffect:
        "Przepis określa moment rozstrzygnięcia wniosku i nie tworzy samodzielnie prawa do zwrotu bez spełnienia warunków właściwej podstawy.",
      foreignersCase: ppsaLaw.text`Po wyroku w sprawie pobytowej sprawdź rozstrzygnięcie o kosztach w sentencji, zwłaszcza gdy sprawa zakończyła się na podstawie ${ppsaLaw.article("201", "art. 201")}, ${ppsaLaw.article("203", "203")} albo 204.`,
    },
  ],
})
