import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-184",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA oddala skargę kasacyjną, jeżeli nie ma ona usprawiedliwionych podstaw albo jeżeli zaskarżone orzeczenie, mimo błędnego uzasadnienia, odpowiada prawu.",
          sourceLocator: "Art. 184",
        },
      ],
      summary:
        "Błędne uzasadnienie nie wystarcza do uchylenia orzeczenia, jeżeli sam wynik odpowiada prawu i kasacja nie ma usprawiedliwionych podstaw.",
      rules: [
        {
          locator: "Art. 184",
          explanation:
            "Analizuj oddzielnie zarzuty wobec wyniku orzeczenia i zarzuty wobec uzasadnienia; ustawowy skutek zależy od obu przesłanek wskazanych w przepisie.",
        },
      ],
      legalEffect:
        "Oddalenie pozostawia zaskarżone orzeczenie w mocy; nie oznacza, że każde uchybienie uzasadnienia jest prawnie obojętne w każdej sprawie.",
      foreignersCase:
        "W kasacji od wyroku WSA w sprawie pobytowej pokaż wpływ błędu na prawidłowość rozstrzygnięcia, a nie tylko niezadowolenie z języka uzasadnienia.",
    },
  ],
})
