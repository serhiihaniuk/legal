import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-287",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 287 має статус uchylony і містить лише позначення «(uchylony)».",
          sourceLocator: "Art. 287",
        },
      ],
      summary:
        "Art. 287 скасовано; у чинному тексті немає діючого правила, яке можна застосувати як самостійну підставу.",
      rules: [
        {
          locator: "Art. 287",
          explanation:
            "Не використовуйте цей artykuł як чинну норму: спочатку перевірте редакцію PPSA і можливі перехідні правила, якщо подія належить до минулого періоду.",
        },
      ],
      legalEffect:
        "Оскільки Art. 287 є uchylony у джерельній редакції, він не створює поточного процесуального обов’язку чи права.",
      foreignersCase:
        "У справі іноземця не посилайтеся на Art. 287 для визначення дії органу або суду; для старої події окремо встановіть застосовну редакцію та дату uchylenie.",
    },
  ]),
})
