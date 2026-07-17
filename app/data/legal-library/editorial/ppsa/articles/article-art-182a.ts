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
      provisionId: "ppsa-art-182a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA rozpoznaje skargę kasacyjną od wyroku WSA oddalającego sprzeciw od decyzji lub sprzeciw od postanowienia w terminie trzydziestu dni od dnia wpływu.",
          sourceLocator: "Art. 182a",
        },
      ],
      summary:
        "Dla kasacji od wyroku WSA oddalającego sprzeciw ustawa wskazuje trzydziestodniowy termin rozpoznania liczony od wpływu do NSA.",
      rules: [
        {
          locator: "Art. 182a",
          explanation:
            "Termin dotyczy rozpoznania przez NSA i biegnie od wpływu kasacji do tego sądu, nie od jej sporządzenia ani wysłania.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("182a", "Art. 182a")} określa termin działania sądu w tej kategorii spraw; nie przedłuża ani nie zastępuje terminu wniesienia kasacji z ${ppsaLaw.article("177", "art. 177")}.`,
      foreignersCase:
        "Jeżeli sprawa pobytowa dotyczy sprzeciwu od decyzji lub postanowienia, odnotuj osobno datę wniesienia kasacji i datę jej wpływu do NSA.",
    },
  ],
})
