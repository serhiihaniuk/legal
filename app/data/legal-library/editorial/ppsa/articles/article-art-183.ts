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
      provisionId: "ppsa-art-183",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`NSA rozpoznaje sprawę w granicach skargi kasacyjnej, lecz z urzędu bierze pod rozwagę nieważność postępowania; strony mogą przytaczać nowe uzasadnienie podstaw kasacyjnych. ${ppsaLaw.article("183", "§ 2")} wymienia sześć przypadków nieważności, w tym niedopuszczalność drogi sądowej, brak zdolności lub umocowania, wcześniejsze postępowanie albo prawomocne osądzenie, wadliwy skład, pozbawienie obrony praw oraz orzekanie przez WSA w sprawie właściwej dla NSA.`,
          sourceLocator: "Art. 183 § 1–2",
        },
      ],
      summary: ppsaLaw.text`Zakres kasacji wyznacza skarga, ale nieważność postępowania NSA bada z urzędu w zamkniętym katalogu ${ppsaLaw.article("183", "art. 183 § 2")}.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Nowe uzasadnienie może rozwijać już przytoczone podstawy kasacyjne; przepis nie pozwala przez samo uzasadnienie dowolnie dodać nowej podstawy.",
        },
        {
          locator: "§ 2 pkt 1–6",
          explanation:
            "Każdy zarzut nieważności trzeba porównać z konkretnym punktem katalogu, a nie z każdą niekorzystną czynnością procesową.",
        },
      ],
      legalEffect:
        "Nieważność może być uwzględniona bez osobnego zarzutu, lecz zwykłe uchybienie procesowe nie staje się przez to nieważnością.",
      foreignersCase:
        "W kasacji dotyczącej pobytu odróżnij nowe uzasadnienie istniejącej podstawy od nowej podstawy. Kwestie reprezentacji, składu i możliwości obrony oceniaj na podstawie akt, nie samego poczucia niesprawiedliwości.",
    },
  ],
})
