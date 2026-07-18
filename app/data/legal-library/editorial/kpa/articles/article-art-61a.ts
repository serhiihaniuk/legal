import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "61a",
      provisionId: "kpa-art-61a",
      reviewStatus: "reviewed",
      summary:
        "Стаття дозволяє відмовити у wszczęciu postępowania, якщо заявник не є стороною або інша обґрунтована причина унеможливлює відкриття справи.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Organ видає postanowienie o odmowie wszczęcia, коли żądanie подала osoba niebędąca stroną або з інших uzasadnionych przyczyn провадження не може бути розпочате.",
        },
        {
          locator: "§ 2",
          explanation:
            "На postanowienie o odmowie wszczęcia przysługuje zażalenie.",
        },
      ],
      legalEffect:
        "Відмова завершує питання відкриття провадження без розгляду матеріальних умов заяви, але підлягає контролю через zażalenie.",
      foreignersCase:
        "У справі іноземця треба відрізняти таку відмову від wezwania do uzupełnienia braków і від негативної decyzji по суті.",
    },
  ],
})
