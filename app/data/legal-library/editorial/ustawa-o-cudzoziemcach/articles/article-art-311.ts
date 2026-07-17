import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-311",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 311 у чинному тексті має позначку «(uchylony)» і не містить чинної нормативної норми.",
          sourceLocator: "Art. 311",
        },
      ],
      summary: "Art. 311 — uchylony; у наведеній редакції стаття скасована.",
      rules: [
        {
          locator: "Art. 311",
          explanation:
            "Позначка «(uchylony)» означає, що цю статтю не слід використовувати як чинну підставу для вимоги або рішення.",
        },
      ],
      legalEffect:
        "Чинний текст не дає через Art. 311 самостійного правового наслідку; для минулих подій потрібно окремо встановити редакцію, чинну на відповідну дату.",
      foreignersCase:
        "Якщо рішення посилається на Art. 311, перевірте дату правової події та редакцію ustawy; у чинній редакції стаття позначена як uchylony.",
    },
  ]),
})
