import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-11",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 11 встановлює: «Ustalenia wydanego w postępowaniu karnym prawomocnego wyroku skazującego co do popełnienia przestępstwa wiążą sąd administracyjny».",
          sourceLocator: "Art. 11",
        },
      ],
      summary:
        "Встановлення правомочним обвинувальним вироком у кримінальному провадженні факту вчинення злочину є обов’язковим для sądu administracyjnego.",
      rules: [
        {
          locator: "Art. 11",
          explanation:
            "Зв’язує саме ustalenia prawomocnego wyroku skazującego щодо popełnienia przestępstwa, а не будь-який документ або будь-яке міркування з кримінальної справи.",
        },
      ],
      legalEffect:
        "Обов’язковість обмежена предметом, прямо названим у статті — встановленням факту вчинення злочину правомочним обвинувальним вироком.",
      foreignersCase:
        "Якщо у справі іноземця згадується кримінальний вирок, відокремте його ustalenia про popełnienie przestępstwa від інших відомостей і перевірте, чи вирок є prawomocny та skazujący.",
    },
  ]),
})
