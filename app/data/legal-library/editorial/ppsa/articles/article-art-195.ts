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
      provisionId: "ppsa-art-195",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "WSA przedstawia NSA akta wraz z zażaleniem po doręczeniu go pozostałym stronom; odpowiedź można wnieść bezpośrednio do NSA w siedem dni od doręczenia zażalenia. Przed przekazaniem akt WSA może na posiedzeniu niejawnym uchylić postanowienie przy nieważności lub oczywistym uzasadnieniu zażalenia, a gdy postępowanie zażaleniowe stało się bezprzedmiotowe — umorzyć je; na wskazane postanowienia przysługuje zażalenie.",
          sourceLocator: "Art. 195 § 1–3",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("195", "Art. 195")} reguluje doręczenie i przekazanie zażalenia, samokontrolę WSA oraz umorzenie bezprzedmiotowego postępowania zażaleniowego przed przekazaniem akt.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Akta idą do NSA po doręczeniu zażalenia pozostałym stronom, a odpowiedź ma siedmiodniowy termin i może trafić wprost do NSA.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Sprawdź, czy przed przedstawieniem akt zachodzi nieważność, oczywiste uzasadnienie albo bezprzedmiotowość postępowania zażaleniowego.",
        },
      ],
      legalEffect: ppsaLaw.text`Zażalenie może zostać rozstrzygnięte jeszcze przez WSA, lecz tylko przy przesłankach z ${ppsaLaw.article("195", "§ 2–3")}; sama odpowiedź strony nie przesądza dalszego wyniku.`,
      foreignersCase:
        "W sprawie pobytowej pilnuj doręczenia zażalenia wszystkim stronom i siedmiodniowego terminu odpowiedzi. Sprawdź także, czy WSA nie skorzystał z samokontroli przed przekazaniem akt.",
    },
  ],
})
