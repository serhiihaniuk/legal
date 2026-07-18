import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-309a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 309a встановлює такий самий обов’язок перевірки через Szef Urzędu, коли особі з міжнародним захистом в іншій державі ЄС відмовлено у наступному zezwolenie з Art. 127 або 137a чи одне з таких дозволів cofnięto.",
          sourceLocator: "Art. 309a",
        },
      ],
      summary:
        "Стаття регулює перевірку міжнародного захисту в іншій державі після відмови у наступному дозволі або його скасування.",
      rules: [
        {
          locator: "Art. 309a",
          explanation:
            "Обов’язок виникає у зв’язку з відмовою у дозволі Art. 127 або 137a чи його cofnięcie та стосується актуальності ochrony в іншій державі ЄС.",
        },
      ],
      legalEffect:
        "Перевірка статусу є етапом перед рішенням про повернення, але не є сама по собі рішенням про право залишатися в Польщі.",
      foreignersCase:
        "Зіставте decyzja про відмову або cofnięcie з Art. 127 чи 137a і подайте підтвердження чинного міжнародного захисту в іншій державі.",
    },
  ]),
})
