import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-56",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо після подання skarga до sąd розпочато адміністративне postępowanie для зміни, скасування, stwierdzenie nieważności акту або wznowienie postępowania, судове провадження підлягає zawieszeniu.",
          sourceLocator: "Art. 56",
        },
      ],
      summary:
        "Розпочата після skarga адміністративна процедура щодо того самого акту може зупинити судову справу.",
      rules: [
        {
          locator: "Art. 56",
          explanation:
            "Порівняйте предмет skarga з адміністративною процедурою: стаття охоплює зміну, uchylenie, nieważność та wznowienie акту.",
        },
      ],
      legalEffect:
        "Zawieszenie тимчасово зупиняє рух судової справи; із цієї статті не випливає, що адміністративна процедура автоматично задовольнить вимогу.",
      foreignersCase:
        "У спорі про decyzja pobyt перевірте, чи орган паралельно відкрив wznowienie або процедуру nieważność; це може пояснити zawieszenie.",
    },
  ]),
})
