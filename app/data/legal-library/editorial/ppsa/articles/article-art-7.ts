import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-7",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 7 передбачає: «Sąd administracyjny powinien podejmować czynności zmierzające do szybkiego załatwienia sprawy i dążyć do jej rozstrzygnięcia na pierwszym posiedzeniu».",
          sourceLocator: "Art. 7",
        },
      ],
      summary:
        "Суд має вживати дій для швидкого вирішення справи і прагнути розглянути її на першому posiedzeniu.",
      rules: [
        {
          locator: "Art. 7",
          explanation:
            "Це орієнтир для організації розгляду: суд має прямувати до швидкого załatwienia та розstrzygnięcia на першому posiedzeniu.",
        },
      ],
      legalEffect:
        "Стаття формулює обов’язок суду докладати процесуальних зусиль для швидкого розгляду, але не називає конкретного строку завершення справи.",
      foreignersCase:
        "У справі про pobyt відокремте вимогу про швидкий розгляд від припущення про автоматичне рішення на першому posiedzeniu; орієнтуйтеся на фактичні повідомлення суду.",
    },
  ]),
})
