import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-94",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 94 є виконаною нормою про зміну art. 93 закону «ustawa o Polskiej Akademii Nauk». У наукових підрозділах особу без польського громадянства можна працевлаштувати на посади з art. 88 без дозволу на роботу або заяви про доручення роботи, про яку йдеться в art. 3 ust. 3 закону від 20 березня 2025 року.",
          sourceLocator: "Art. 94; art. 93 ustawy o PAN",
        },
      ],
      summary:
        "Виняток стосується лише праці в наукових підрозділах на посадах, названих у art. 88 закону про Польську академію наук. Це звільнення від вимоги мати дозвіл або записану заяву, а не загальний виняток для всіх працівників PAN.",
      rules: [
        {
          locator: "Art. 94; art. 93 ustawy o PAN",
          explanation:
            "Особу без польського громадянства можна працевлаштувати без цих документів лише в науковому підрозділі та лише на посаді, названій у art. 88 закону про Польську академію наук.",
        },
      ],
      legalEffect:
        "Виняток прив'язаний одночасно до типу установи та посади. Він не вирішує питання законності перебування, страхування чи професійного допуску.",
      foreignersCase:
        "Для наукового працівника перевірте, чи роботодавець є науковим підрозділом і чи конкретна посада входить до art. 88 закону про Польську академію наук. Не поширюйте виняток на адміністративну або іншу роботу без окремої підстави.",
    },
  ]),
})
