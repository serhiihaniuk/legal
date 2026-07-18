import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-55",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 55 визначає обов’язкові елементи сезонного дозволу (zezwolenie na pracę sezonową): дані польського суб’єкта та іноземця, робочий час або кількість годин, найнижчу оплату, правову підставу роботи й строк чинності. Якщо йдеться про тимчасового працівника (pracownik tymczasowy), документ також називає роботодавця-користувача (pracodawca użytkownik).",
          sourceLocator: "Art. 55 ust. 1–2",
        },
      ],
      summary:
        "Сезонний дозвіл описує конкретну дозволену модель роботи, а не лише ідентифікує сторони. Тому договір і фактична робота мають відповідати записаним годинам, оплаті, правовій підставі та строку.",
      rules: [
        {
          locator: "ust. 1 pkt 1–6",
          explanation:
            "Перелік охоплює дані польського суб’єкта та іноземця, робочий час (wymiar czasu pracy) або кількість годин, найнижчу оплату, правову підставу роботи й строк чинності.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо іноземець працюватиме як тимчасовий працівник, у дозволі треба також вказати роботодавця-користувача.",
        },
      ],
      legalEffect:
        "Умови в дозволі утворюють рамку законної сезонної роботи. Сама наявність документа не дозволяє працювати поза цією рамкою.",
      foreignersCase:
        "До початку роботи порівняйте дозвіл із договором: години, найнижча оплата, правова підстава та, за потреби, роботодавець-користувач мають збігатися.",
    },
  ]),
})
