import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-61",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 61 встановлює умови, за яких польський суб'єкт подає через систему заяву про доручення роботи іноземцеві (oświadczenie o powierzeniu pracy cudzoziemcowi). Враховуються громадянство, місце і вид роботи, роль іноземця, максимальний строк роботи та дата її початку.",
          sourceLocator: "Art. 61 ust. 1–2",
        },
      ],
      summary:
        "Заява про доручення роботи є спрощеним шляхом лише тоді, коли одночасно виконано всі умови ust. 1. Якщо хоча б однієї умови немає, заяву залишають без розгляду (bez rozpoznania); орган не переводить справу автоматично до іншої процедури.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Мають одночасно виконуватися вимоги щодо держави громадянства, виконання роботи в Польщі, несезонного виду діяльності та відсутності випадків виконання функцій або представництва, названих у art. 2 pkt 9 lit. c–e.",
        },
        {
          locator: "ust. 1 pkt 5–6",
          explanation:
            "Період роботи, зазначений у заяві, не може перевищувати 24 місяці, а дата початку роботи має настати не пізніше ніж через 6 місяців від дня подання.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Заяву, яка не відповідає умовам ust. 1, залишають без розгляду.",
        },
      ],
      legalEffect:
        "Дотримання часових і предметних меж відкриває шлях до внесення заяви до реєстру, але сам запис не підтверджує права на перебування і не легалізує роботу без виконання решти вимог.",
      foreignersCase:
        "Перед поданням зіставте паспорт, місце і вид роботи, роль особи, дати та максимальні 24 місяці. Невідповідність треба виправити до подання, інакше заяву можуть залишити без розгляду.",
    },
  ]),
})
