import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-264",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Polski dokument tożsamości cudzoziemca видає, обмінює або відмовляє у цьому wojewoda за місцем перебування іноземця; відмова у видачі чи обміні відбувається у формі decyzji.",
          sourceLocator: "Art. 264 ust. 1–2",
        },
      ],
      summary:
        "Стаття визначає компетентного wojewodę та форму негативного рішення щодо польського документа особи.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Заяву подають до wojewody, właściwego за місцем перебування, а не автоматично до органу за місцем народження чи громадянства.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Відмова має бути decyzją; з неї потрібно встановити мотиви та доступний засіб оскарження.",
        },
      ],
      legalEffect: foreignersLaw.text`Стаття встановлює процесуальну компетенцію й форму відмови, але не скасовує матеріальних умов ${foreignersLaw.article("260", "Art. 260")}.`,
      foreignersCase: foreignersLaw.text`Перевірте właściwość wojewody та збережіть decyzję про відмову разом із датою doręczenia. Окремо аналізуйте, яку умову ${foreignersLaw.article("260", "Art. 260")} орган вважав невиконаною.`,
    },
  ],
})
