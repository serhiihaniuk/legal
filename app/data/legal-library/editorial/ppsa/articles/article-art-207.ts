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
      provisionId: "ppsa-art-207",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Przepisy ${ppsaLaw.article("202", "art. 202")}, ${ppsaLaw.article("205", "205")} i ${ppsaLaw.article("206", "206")} stosuje się odpowiednio w przypadkach z ${ppsaLaw.article("203", "art. 203")} i ${ppsaLaw.article("204", "204")}. W przypadkach szczególnie uzasadnionych sąd może odstąpić od zasądzenia zwrotu kosztów postępowania kasacyjnego w całości lub części.`,
          sourceLocator: "Art. 207 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("207", "Art. 207")} uzupełnia reguły kosztów kasacyjnych o odesłanie do zasad rozdziału i szczególną możliwość odstąpienia od zwrotu.`,
      rules: [
        {
          locator: "§ 1",
          explanation: ppsaLaw.text`Przy kosztach z ${ppsaLaw.article("203", "art. 203")}–${ppsaLaw.article("204", "204")} odpowiednio uwzględnia się reguły o kilku uprawnionych, niezbędnych kosztach i odstąpieniu z ${ppsaLaw.article("202", "art. 202")}, ${ppsaLaw.article("205", "205")}–${ppsaLaw.article("206", "206")}.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Odstąpienie od zwrotu kasacyjnego wymaga przypadku szczególnie uzasadnionego i może być całkowite albo częściowe.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("207", "Art. 207")} nie ustanawia automatycznej proporcji kosztów; modyfikuje ich rozliczenie w konkretnym wyniku kasacji i pozostawia sądowi ocenę szczególnej sytuacji.`,
      foreignersCase: ppsaLaw.text`Przy kasacji w sprawie pobytowej sprawdź najpierw ${ppsaLaw.article("203", "art. 203")} lub ${ppsaLaw.article("204", "204")}, a potem odpowiednie odesłania ${ppsaLaw.article("207", "art. 207")}. Nie przedstawiaj częściowego wyniku jako gwarancji określonego zwrotu.`,
    },
  ],
})
