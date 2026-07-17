import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-61",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 61 встановлює, коли polski podmiot подає через систему oświadczenie o powierzeniu pracy cudzoziemcowi: громадянство з визначеного переліку, робота в Польщі, поза сезонними видами діяльності, без ролей art. 2 pkt 9 lit. c–e, максимум 24 місяці та початок не пізніше шести місяців від подання.",
          sourceLocator: "Art. 61 ust. 1–2",
        },
      ],
      summary:
        "Oświadczenie є спрощеним шляхом лише для сукупності умов. Якщо хоча б умова з ust. 1 не виконана, oświadczenie залишають bez rozpoznania, а не переходить автоматично до іншої процедури.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Мають одночасно виконуватися вимоги щодо держави громадянства, місця роботи, виду діяльності та відсутності передбачених ролей pełnienia funkcji або reprezentacji.",
        },
        {
          locator: "ust. 1 pkt 5–6",
          explanation:
            "Період роботи в oświadczenie не може перевищувати 24 місяці, а дата початку має бути не пізніше 6 місяців від дня подання.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Oświadczenie, яке не відповідає умовам ust. 1, залишають bez rozpoznania.",
        },
      ],
      legalEffect:
        "Дотримання формальних часових та предметних меж відкриває шлях до wpisу, але саме по собі не підтверджує право на pobyt або роботу без інших вимог.",
      foreignersCase:
        "Перед поданням зіставте паспорт, місце і вид роботи, роль особи, дати та максимальні 24 місяці. Невідповідність краще виправити до подання, бо oświadczenie можуть залишити bez rozpoznania.",
    },
  ]),
})
