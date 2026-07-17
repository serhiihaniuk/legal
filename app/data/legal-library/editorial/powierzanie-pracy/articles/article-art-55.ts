import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-55",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 55 визначає обов'язкові елементи zezwolenie na pracę sezonową: сторони, час роботи або години, мінімальне wynagrodzenie, правову підставу та строк чинності; для pracownik tymczasowy також pracodawca użytkownik.",
          sourceLocator: "Art. 55 ust. 1–2",
        },
      ],
      summary:
        "У zezwolenie мають бути зафіксовані не лише ім'я працівника і podmiot, а й вимір часу, мінімальна ставка, підстава роботи та строк. Для тимчасової роботи окремо називається pracodawca użytkownik.",
      rules: [
        {
          locator: "ust. 1 pkt 1–6",
          explanation:
            "Перелік охоплює дані polski podmiot і cudzoziemiec, wymiar czasu pracy або години, найнижче wynagrodzenie, правову підставу та okres ważności.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо робота є pracą tymczasową, zezwolenie визначає також pracodawca użytkownik.",
        },
      ],
      legalEffect:
        "Умови в zezwolenie утворюють рамку дозволеної роботи; назва документа сама по собі не змінює зазначених обмежень.",
      foreignersCase:
        "Порівняйте zezwolenie з umowa: години, мінімальне wynagrodzenie, підставу та pracodawca użytkownik мають бути узгоджені до початку роботи.",
    },
  ]),
})
