import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-304",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 304 зобов’язує organ, який веде провадження про zobowiązanie cudzoziemca do powrotu, pouczyć cudzoziemca про можливість подати wniosek o udzielenie ochrony międzynarodowej.",
          sourceLocator: "Art. 304",
        },
      ],
      summary:
        "Орган у провадженні про повернення повинен повідомити про можливість подання заяви на міжнародний захист.",
      rules: [
        {
          locator: "Art. 304",
          explanation:
            "Обов’язок стосується pouczenie про можливість подання wniosku; стаття сама не встановлює, що заява буде прийнята або задоволена.",
        },
      ],
      legalEffect:
        "Норма забезпечує інформування в процедурі повернення; подальші наслідки залежать від фактичної заяви та закону про ochronę cudzoziemców.",
      foreignersCase:
        "Перевірте, чи вам надали зрозуміле pouczenie, і не плутайте інформацію про можливість wniosku з уже поданою заявою.",
    },
  ]),
})
