import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-313",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 313 у чинному тексті має позначку «(uchylony)» і не містить чинної нормативної норми.",
          sourceLocator: "Art. 313",
        },
      ],
      summary: "Art. 313 — uchylony; у наведеній редакції стаття скасована.",
      rules: [
        {
          locator: "Art. 313",
          explanation:
            "Позначка «(uchylony)» означає, що чинне провадження не можна обґрунтувати змістом цієї статті.",
        },
      ],
      legalEffect:
        "У чинній редакції Art. 313 не встановлює прав та обов’язків; для історичної справи потрібна перевірка редакції на дату події.",
      foreignersCase:
        "Якщо документ посилається на Art. 313, зафіксуйте дату його видання й перевірте історичний текст; у поточній редакції стаття uchylony.",
    },
  ]),
})
