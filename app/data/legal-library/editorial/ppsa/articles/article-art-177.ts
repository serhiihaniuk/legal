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
      provisionId: "ppsa-art-177",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skargę kasacyjną wnosi się do sądu, który wydał zaskarżony wyrok lub postanowienie, w terminie trzydziestu dni od doręczenia stronie odpisu orzeczenia z uzasadnieniem. Przepis określa też odrębny początek biegu terminu dla prokuratora, Rzecznika Praw Obywatelskich, Rzecznika Praw Dziecka oraz w kilku sytuacjach prawa pomocy.",
          sourceLocator: "Art. 177 § 1–6",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("177", "Art. 177")} wyznacza sąd właściwy do wniesienia skargi kasacyjnej i podstawowy trzydziestodniowy termin, z wyjątkami dotyczącymi określonych podmiotów i prawa pomocy.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Punktem wyjścia jest doręczenie odpisu orzeczenia z uzasadnieniem, a pismo wnosi się do sądu, który wydał zaskarżone orzeczenie.",
        },
        {
          locator: "§ 2–6",
          explanation:
            "Przy ustalaniu terminu trzeba sprawdzić, czy działa reguła dla organów ochrony prawnej, ustanowionego pełnomocnika z prawa pomocy, opinii o braku podstaw albo odmowy ustanowienia pełnomocnika.",
        },
      ],
      legalEffect:
        "Termin i jego początek wynikają z konkretnego sposobu doręczenia oraz sytuacji procesowej; sama data na orzeczeniu nie przesądza o jego rozpoczęciu.",
      foreignersCase:
        "W sprawie pobytowej ustal datę doręczenia odpisu z uzasadnieniem, status pełnomocnika i ewentualne postanowienie w sprawie prawa pomocy. Nie obliczaj terminu wyłącznie od daty wydania wyroku.",
    },
  ],
})
