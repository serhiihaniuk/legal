import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-144b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("144b", "Art. 144b")} ust. 1 забороняє jednostka prowadząca studia приймати cudzoziemców на studia з дня, коли остаточними стали рішення про odmowa zatwierdzenia, odmowa przedłużenia, cofnięcie zatwierdzenia або zakaz з ${foreignersLaw.article("144a", "art. 144a")} ust. 1.`,
          sourceLocator: "Art. 144b ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Cudzoziemiec, якому до цієї дати надано дозвіл з ${foreignersLaw.article("144", "art. 144")}, може продовжити навчання, а в його провадженні про побит не застосовується вимога zatwierdzenie jednostka.`,
          sourceLocator: "Art. 144b ust. 2–3",
        },
      ],
      summary:
        "Норма розмежовує новий прийом і продовження навчання студентом, який уже мав дозвіл до остаточного негативного рішення щодо закладу.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Заборона прийому починається з дня, коли відповідне рішення стало ostateczna.",
        },
        {
          locator: "ust. 2–3",
          explanation: foreignersLaw.text`Особа з дозволом ${foreignersLaw.article("144", "art. 144")}, наданим до цієї дати, може продовжувати kształcenie; у процедурі її дозволу не застосовується вимога затвердження jednostka.`,
        },
      ],
      legalEffect:
        "Стаття захищає продовження навчання вже допущеного студента, але не усуває інші умови pobyt або окремі підстави cofnięcie.",
      foreignersCase:
        "Порівняйте дату ostateczna рішення про заклад із датою udzielenie дозволу, підтвердьте фактичне продовження studia і збережіть документ про статус jednostka на потрібну дату.",
    },
  ],
})
