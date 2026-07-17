import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-268",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 268 вимагає uzasadnienie як для wniosek o podjęcie uchwały, так і для самої uchwała Naczelnego Sądu Administracyjnego.",
          sourceLocator: "Art. 268",
        },
      ],
      summary:
        "Ініціатор uchwała має пояснити потребу в її прийнятті, а NSA має обґрунтувати прийняту uchwała.",
      rules: [
        {
          locator: "Art. 268",
          explanation:
            "Відокремте uzasadnienie wniosek від uzasadnienie uchwała: перше належить заявникові, друге — прийнятому рішенню NSA.",
        },
      ],
      legalEffect:
        "Вимога мотивування дає змогу зрозуміти питання та відповідь у процедурі uchwała, але сама по собі не перетворює wniosek на вирішення індивідуальної справи.",
      foreignersCase:
        "Коли аналізуєте uchwała, на яку посилаються у справі іноземця, читайте повний текст uzasadnienie, а не лише sentencja. Перевірте також, чи доводи сторони були wniosek про uchwała, а не звичайною скаргою у її власній справі.",
    },
  ]),
})
