import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-157h",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("157h", "Art. 157h")} ust. 1 надає дозвіл з ${foreignersLaw.article("157g", "art. 157g")} ust. 1 на строк, необхідний для виконання umowa wolontariatu, але не довше 1 року; ust. 2–3 позначені як «(uchylony)».`,
          sourceLocator: "Art. 157h ust. 1–3",
        },
      ],
      summary:
        "Строк волонтерського дозволу обмежений строком угоди та максимумом один рік.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Дозвіл надається лише на необхідний для реалізації umowa період і не довше 1 року.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Ці положення скасовані та не створюють чинних строків чи умов.",
        },
      ],
      legalEffect: foreignersLaw.text`Строк рішення не може бути довшим за межі ${foreignersLaw.article("157h", "art. 157h")}; лист організації не продовжує дозвіл без нової правової підстави.`,
      foreignersCase:
        "Порівняйте umowa wolontariatu, рішення та дату завершення програми; окремо перевірте, чи не продовжуються послуги після закінчення дозволу.",
    },
  ],
})
