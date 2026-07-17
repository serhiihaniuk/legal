import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-189",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Jeżeli skarga podlegała odrzuceniu albo przed WSA istniały podstawy do umorzenia postępowania, NSA postanowieniem uchyla wydane orzeczenie oraz odrzuca skargę albo umarza postępowanie.",
          sourceLocator: "Art. 189",
        },
      ],
      summary:
        "NSA może usunąć orzeczenie WSA wydane w sprawie, która już na etapie WSA powinna zostać odrzucona albo umorzona.",
      rules: [
        {
          locator: "Art. 189",
          explanation:
            "Badaj istnienie przesłanki odrzucenia lub umorzenia przed WSA, nie tylko poprawność merytorycznego uzasadnienia jego orzeczenia.",
        },
      ],
      legalEffect:
        "Skutek ma formę postanowienia i kończy sprawę przez odrzucenie skargi albo umorzenie; nie jest rozstrzygnięciem materialnego prawa do pobytu.",
      foreignersCase:
        "W sprawie pobytowej sprawdź, czy skarga nie była bezprzedmiotowa lub niedopuszczalna już przed WSA, nawet jeśli WSA przeszedł do argumentacji merytorycznej.",
    },
  ],
})
