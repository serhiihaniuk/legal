import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-49b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Prezes Naczelnego Sądu Administracyjnego може визначити wzory dokumentów elektronicznych для postępowanie sądowoadministracyjne і оприлюднити їх у BIP NSA.",
          sourceLocator: "Art. 49b ust. 1–2",
        },
      ],
      summary:
        "NSA може створювати та публікувати електронні wzory документів для судового провадження.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Повноваження сформульоване як може; стаття сама не встановлює загального обов’язку використовувати кожен wzór.",
        },
        {
          locator: "ust. 2",
          explanation: "Wzory мають бути доступні в BIP на сторінці NSA.",
        },
      ],
      legalEffect:
        "Стаття полегшує стандартизацію електронних документів, але конкретні вимоги треба перевіряти в застосовних правилах.",
      foreignersCase:
        "Перед електронною skarga у справі про pobyt перевірте актуальний BIP NSA, але не вважайте wzór заміною обов’язкових даних skarga.",
    },
  ]),
})
