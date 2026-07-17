import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-64",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 64 визначає територіально компетентного starosta для wpis oświadczenie і дозволяє йому встановити пізнішу дату початку роботи, не раніше дня після wpis.",
          sourceLocator: "Art. 64 ust. 1–2",
        },
      ],
      summary:
        "Компетентність прив'язана до siedziba або stałe miejsce pobytu polski podmiot, а у спеціальному випадку — до сталого місця діяльності в Польщі. Starosta може відсунути початок роботи після дати, вказаної подавачем.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Oświadczenie wpisує starosta за siedziba або місцем постійного pobyt podmiot; для art. 62 ust. 2 — за stałe miejsce wykonywania działalności gospodarczej.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Пізніша дата початку може бути не ранішою за день, що настає після wpis до ewidencji oświadczeń.",
        },
      ],
      legalEffect:
        "Дата в реєстрі може відрізнятися від запропонованої дати, тому початок роботи треба перевіряти саме у wpis, а не лише в заяві.",
      foreignersCase:
        "Визначте właściwy starosta за адресою podmiot і після wpis перевірте фактичну дату початку. Не плануйте роботу на дату, яку орган замінив пізнішою.",
    },
  ]),
})
