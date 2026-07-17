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
      provisionId: "ppsa-art-194",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Zażalenie do NSA przysługuje na postanowienia WSA w przypadkach przewidzianych w ustawie oraz na wskazane w ${ppsaLaw.article("194", "art. 194")} przedmioty, m.in. przekazanie sprawy, odrzucenie skargi w ${ppsaLaw.article("58", "art. 58 § 1")} pkt 2–4 i ${ppsaLaw.article("220", "art. 220 § 3")}, umorzenie, wstrzymanie wykonania, odmowę uzasadnienia, sprostowanie lub wykładnię, uzupełnienie wyroku, wyłączenie sędziego, odrzucenie skargi kasacyjnej lub zażalenia, zwrot kosztów i ukaranie grzywną. ${ppsaLaw.article("194", "§ 1")} pkt 3 jest uchylony.`,
          sourceLocator: "Art. 194 § 1 pkt 1, 1a–10, § 2–4",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("194", "Art. 194")} zawiera zamknięty katalog wskazanych postanowień WSA, na które przysługuje zażalenie do NSA, oraz określa termin i wymagania pisma.`,
      rules: [
        {
          locator: "§ 1 pkt 1, 1a–2, 3 (uchylony), 4–10",
          explanation:
            "Porównaj przedmiot postanowienia z konkretną pozycją katalogu; uchylony pkt 3 nie jest czynną podstawą zażalenia.",
        },
        {
          locator: "§ 2–4",
          explanation:
            "Zażalenie wnosi się w siedem dni od doręczenia, wskazuje postanowienie, żądanie i zwięzłe uzasadnienie; odrzucenie skargi kasacyjnej wymaga adwokata lub radcy prawnego.",
        },
      ],
      legalEffect:
        "Samo nazwanie dokumentu postanowieniem nie tworzy prawa do zażalenia; trzeba znaleźć ustawową kategorię, zachować termin i spełnić wymagania formy.",
      foreignersCase: ppsaLaw.text`W sprawie pobytowej odczytaj przedmiot postanowienia i pouczenie, a następnie porównaj je z czynnym katalogiem ${ppsaLaw.article("194", "art. 194")}. Przy odrzuceniu kasacji uwzględnij wymóg profesjonalnego sporządzenia.`,
    },
  ],
})
