import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-308a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 308a встановлює, що до членів сімей громадян держав ЄС, EFTA–EOG, Швейцарії, Польщі або Сполученого Королівства, перелічених у Art. 1 pkt 4–6 ustawy z 14 lipca 2006 r., які перестали перебувати в Польщі разом із цими громадянами, застосовується Rozdział 5 цієї ustawy.",
          sourceLocator: "Art. 308a",
        },
      ],
      summary:
        "Для визначених членів сімей, які більше не проживають разом із відповідним громадянином, діє спеціальний розділ закону від 14 липня 2006 року.",
      rules: [
        {
          locator: "Art. 308a",
          explanation:
            "Спочатку треба підтвердити сімейний статус за Art. 1 pkt 4–6 закону 2006 року і факт припинення спільного перебування.",
        },
      ],
      legalEffect:
        "Норма відсилає до іншого режиму, але не встановлює автоматичного права на конкретний документ без перевірки умов Rozdział 5.",
      foreignersCase:
        "Зберіть доказ родинного зв’язку, статусу громадянина та того, коли припинилося спільне перебування; далі перевіряйте Rozdział 5 закону 2006 року.",
    },
  ]),
})
