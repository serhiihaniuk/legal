import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-328",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 328 зобов’язує organ, який веде провадження про wydanie decyzji o zobowiązaniu cudzoziemca do powrotu, повідомити cudzoziemca про організації громадського сектору, що допомагають іноземцям, зокрема надають правову допомогу.",
          sourceLocator: "Art. 328",
        },
      ],
      summary:
        "Орган повинен поінформувати іноземця про неурядові організації, які можуть надавати допомогу, включно з правовою.",
      rules: [
        {
          locator: "Art. 328",
          explanation:
            "Обов’язок полягає в інформуванні про такі організації; стаття не гарантує представництва або конкретної допомоги від кожної з них.",
        },
      ],
      legalEffect:
        "Норма забезпечує доступ до інформації про допомогу в процедурі повернення, але сама не продовжує строки і не зупиняє виконання рішення.",
      foreignersCase:
        "Попросіть зафіксувати назви й контакти організацій, зверніться до них завчасно та не пропускайте строків лише через очікування консультації.",
    },
  ]),
})
