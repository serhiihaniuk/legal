import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-263",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 263 у чинному тексті має статус «(uchylony)» і не містить чинного нормативного правила.",
          sourceLocator: "Art. 263",
        },
      ],
      summary:
        "Art. 263 скасовано: у цій редакції немає чинної норми, яку можна застосовувати до справи.",
      rules: [
        {
          locator: "Art. 263",
          explanation:
            "Не виводьте процесуальне право або обов’язок із номера Art. 263. Для історичної події потрібно окремо перевірити редакцію PPSA і перехідні положення на відповідну дату.",
        },
      ],
      legalEffect:
        "Оскільки Art. 263 є uchylony у джерельній редакції ppsa-2026-143, він не створює сучасного процесуального наслідку.",
      foreignersCase:
        "Якщо в старому документі іноземця є посилання на Art. 263, не використовуйте його як діючу підставу без перевірки редакції закону та моменту, коли виникла відповідна процесуальна ситуація.",
    },
  ]),
})
