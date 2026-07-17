import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-94",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 94 встановлює у art. 93 ustawy o Polskiej Akademii Nauk, що особа без польського громадянства може бути zatrudniona на stanowiska art. 88 без zezwolenie або oświadczenie, про яке йдеться в art. 3 ust. 3 нової ustawa.",
          sourceLocator: "Art. 94; art. 93 ustawy o PAN",
        },
      ],
      summary:
        "Виняток стосується праці в jednostki naukowe на stanowiska, названі art. 88 ustawy o PAN. Він сформульований як відсутність вимоги до zezwolenie або oświadczenie, а не як загальне звільнення всіх працівників PAN.",
      rules: [
        {
          locator: "Art. 94; art. 93 ustawy o PAN",
          explanation:
            "Особа без польського громадянства може бути zatrudniona без цих документів лише на stanowiska, про які говорить art. 88 ustawy o PAN, у jednostki naukowe.",
        },
      ],
      legalEffect:
        "Виняток прив'язаний одночасно до типу установи та stanowisko; інші підстави pobyt, страхування чи професійний допуск цим не вирішуються.",
      foreignersCase:
        "Для наукового працівника перевірте, чи роботодавець є jednostka naukowa і чи конкретне stanowisko входить до art. 88 PAN. Не поширюйте виняток на адміністративну або іншу роботу без окремої підстави.",
    },
  ]),
})
