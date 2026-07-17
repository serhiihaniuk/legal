import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-64e",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Розглядаючи sprzeciw od decyzji, sąd оцінює лише наявність підстав для wydania decyzja з art. 138 § 2 KPA.",
          sourceLocator: "Art. 64e",
        },
      ],
      summary:
        "Контроль у провадженні за sprzeciw обмежений перевіркою передумов повернення справи органу першої інстанції.",
      rules: [
        {
          locator: "Art. 64e",
          explanation:
            "Не ототожнюйте sprzeciw із повним переглядом усіх матеріальних умов: межа оцінки — підстави art. 138 § 2 KPA.",
        },
      ],
      legalEffect:
        "Вузький предмет контролю впливає на те, які аргументи суд може оцінювати в цьому засобі.",
      foreignersCase:
        "У sprzeciw щодо рішення в справі pobyt зосередьте аргументацію на наявності підстав для art. 138 § 2, а не на повній заміні адміністративного розгляду.",
    },
  ]),
})
