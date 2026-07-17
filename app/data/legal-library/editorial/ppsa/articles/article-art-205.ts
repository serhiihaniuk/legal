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
      provisionId: "ppsa-art-205",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Do niezbędnych kosztów strony działającej osobiście lub przez pełnomocnika innego niż adwokat lub radca prawny zalicza się koszty sądowe, przejazdy do sądu oraz równowartość utraconego zarobku lub dochodu. Przy adwokacie lub radcy prawnym dochodzą ich wynagrodzenie w ustawowych granicach, wydatki jednego pełnomocnika, koszty sądowe i nakazane osobiste stawiennictwo; ${ppsaLaw.article("205", "§ 3–4")} określają dalsze zasady i odpowiednie zastosowanie dla doradcy podatkowego, rzecznika patentowego i Prokuratorii Generalnej.`,
          sourceLocator: "Art. 205 § 1–4",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("205", "Art. 205")} wylicza kategorie niezbędnych kosztów i odrębnie traktuje osobisty udział, adwokata lub radcę prawnego oraz pozostałych profesjonalnych pełnomocników.`,
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Rodzaj reprezentacji wpływa na katalog kosztów i limit wynagrodzenia; przy pełnomocniku zawodowym przepis wymienia także wydatki jednego adwokata lub radcy.",
        },
        {
          locator: "§ 3–4",
          explanation: ppsaLaw.text`Przejazdy i utracony zarobek rozlicza się według wskazanych przepisów o kosztach cywilnych, a ${ppsaLaw.article("205", "§ 2–3")} stosuje się odpowiednio do trzech wymienionych podmiotów.`,
        },
      ],
      legalEffect:
        "Zwrot obejmuje tylko kategorie niezbędnych kosztów i granice ustawy; nie każda faktura, konsultacja lub tłumaczenie staje się automatycznie kosztem podlegającym zwrotowi.",
      foreignersCase: ppsaLaw.text`W sprawie pobytowej zbieraj osobno opłaty sądowe, przejazdy, utracony dochód i wynagrodzenie pełnomocnika. Oceń możliwość zwrotu według kategorii ${ppsaLaw.article("205", "art. 205")}, nie według samej sumy wydatków.`,
    },
  ],
})
