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
      provisionId: "ppsa-art-182",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`NSA może rozpoznać na posiedzeniu niejawnym kasację od kończącego postępowanie postanowienia WSA. Rozpoznaje ją tak także po zrzeczeniu się rozprawy przez wnoszącego, gdy pozostałe strony w czternastu dniach od doręczenia kasacji nie zażądały rozprawy, oraz w kasacji od wyroku WSA oddalającego sprzeciw od decyzji lub postanowienia. Na posiedzeniu niejawnym orzeka jeden sędzia, a w przypadku z ${ppsaLaw.article("182", "§ 2")} — trzech.`,
          sourceLocator: "Art. 182 § 1–3",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("182", "Art. 182")} wskazuje trzy sytuacje rozpoznania kasacji bez rozprawy i wiąże z nimi skład NSA.`,
      rules: [
        {
          locator: "§ 1–2a",
          explanation:
            "Sprawdź rodzaj kończącego postępowanie postanowienia, zrzeczenie się rozprawy i czternastodniowy brak żądania rozprawy albo sprawę sprzeciwu od decyzji lub postanowienia.",
        },
        {
          locator: "§ 3",
          explanation: ppsaLaw.text`Na posiedzeniu niejawnym skład jednego sędziego jest regułą, lecz przy ${ppsaLaw.article("182", "§ 2")} ustawa wymaga trzech sędziów.`,
        },
      ],
      legalEffect:
        "Posiedzenie niejawne jest ustawowym trybem rozpoznania w określonych sytuacjach i samo w sobie nie oznacza braku kontroli sądowej.",
      foreignersCase: ppsaLaw.text`W sprawie pobytowej ustal, czy kasacja dotyczy kończącego postępowanie postanowienia, sprawy sprzeciwu, czy zrzeczenia się rozprawy. Nie zakładaj rozprawy, gdy działa ${ppsaLaw.article("182", "§ 2")} albo ${ppsaLaw.article("182", "§ 2a")}.`,
    },
  ],
})
