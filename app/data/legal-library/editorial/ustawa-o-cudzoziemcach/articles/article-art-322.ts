import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-322",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 322 дозволяє передавати pisma у справах про zobowiązanie cudzoziemca do powrotu засобами електронного зв’язку в розумінні названого закону або факсом і вручати cudzoziemcowi форму, отриману внаслідок такої передачі.",
          sourceLocator: "Art. 322",
        },
      ],
      summary:
        "Стаття допускає електронну або факсимільну передачу та вручення письма, отриманого таким способом.",
      rules: [
        {
          locator: "Art. 322",
          explanation:
            "Правило стосується pisma у провадженні про повернення і визначених способів його передачі; факт отримання треба відрізняти від змісту самого рішення.",
        },
      ],
      legalEffect:
        "Спосіб передачі може впливати на doręczenie і строки, тому треба перевірити, який документ і коли фактично вручено.",
      foreignersCase:
        "Збережіть електронне повідомлення, факс, вкладення і дату отримання; порівняйте отриману форму з повним текстом decyzja та pouczenie.",
    },
  ]),
})
