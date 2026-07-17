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
      provisionId: "ppsa-art-219",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Opłatę sądową uiszcza się przy wniesieniu do sądu pisma podlegającego opłacie. Opłatę można uiścić gotówką w kasie właściwego sądu administracyjnego albo na jego rachunek bankowy, a końcówki opłat zaokrągla się w górę do pełnych złotych.",
          sourceLocator: "Art. 219 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("219", "Art. 219")} określa moment, podstawowe sposoby i sposób zaokrąglenia opłaty sądowej.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Opłatę trzeba uiścić przy wniesieniu pisma podlegającego opłacie, a nie dopiero po merytorycznym rozpoznaniu.",
        },
        {
          locator: "§ 2",
          explanation:
            "Sprawdź kasę albo rachunek właściwego sądu i zaokrąglij końcówkę w górę do pełnych złotych.",
        },
      ],
      legalEffect: ppsaLaw.text`Prawidłowe wniesienie pisma nie zastępuje prawidłowej opłaty; brak lub niedopłata mogą uruchomić ${ppsaLaw.article("220", "art. 220")}, z uwzględnieniem zwolnienia i innych wyjątków.`,
      foreignersCase:
        "Przy skardze na decyzję pobytową ustal właściwy sąd, rachunek i kwotę wpisu, zachowaj potwierdzenie oraz sprawdź, czy nie działa zwolnienie.",
    },
  ],
})
