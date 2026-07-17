import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-41",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 41 встановлює: «Mocodawca stawający jednocześnie z pełnomocnikiem może niezwłocznie prostować lub odwoływać oświadczenia pełnomocnika».",
          sourceLocator: "Art. 41",
        },
      ],
      summary:
        "Mocodawca, який одночасно присутній із pełnomocnik, може негайно виправляти або відкликати заяви представника.",
      rules: [
        {
          locator: "Art. 41",
          explanation:
            "Право стосується mocodawca, який stawający jednocześnie з представником, і дозволяє niezwłocznie prostować або odwoływać його oświadczenia.",
        },
      ],
      legalEffect:
        "Стаття дає mocodawca можливість негайної корекції заяви представника в описаній ситуації, але не визначає наслідки для інших процесуальних дій.",
      foreignersCase:
        "Якщо іноземець присутній разом із pełnomocnik на процесуальній дії, зафіксуйте, чи він одразу prostuje або odwołuje конкретне oświadczenie представника.",
    },
  ]),
})
