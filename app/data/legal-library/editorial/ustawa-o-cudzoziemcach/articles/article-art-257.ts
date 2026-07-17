import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-257",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Polski dokument podróży видає, обмінює або відмовляє у цьому wojewoda, właściwy за місцем перебування іноземця; відмова у видачі або обміні оформлюється decyzją.",
          sourceLocator: "Art. 257 ust. 1–2",
        },
      ],
      summary:
        "Стаття визначає wojewodę за місцем перебування компетентним щодо польського документа подорожі та вимагає decyzji для відмови.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Для компетенції важливе фактичне miejsce pobytu, а не лише місце, де іноземець колись подавав іншу заяву.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Відмова має бути рішенням, яке можна аналізувати за його мотивами та способом оскарження.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("257", "Art. 257")} визначає właściwość wojewody та вимагає decyzji для odmowa, але не встановлює матеріального права на позитивний результат поза умовами інших статей.`,
      foreignersCase:
        "Перед поданням перевірте właściwość wojewody за місцем перебування. При odmowie збережіть decyzję та дату doręczenia для перевірки доступного środka zaskarżenia.",
    },
  ],
})
