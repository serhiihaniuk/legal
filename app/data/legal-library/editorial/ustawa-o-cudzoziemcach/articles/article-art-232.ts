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
      provisionId: "ustawa-o-cudzoziemcach-art-232",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`У разі utrata або uszkodzenie документа з ${foreignersLaw.article("226", "Art. 226")} pkt 1–3 і 5 cudzoziemiec протягом 3 днів від дня втрати або пошкодження повідомляє про це орган, який видав документ. Особі, яка повідомила, безоплатно видають zaświadczenie, що підтверджує цей факт; воно чинне до wymiana документа, але не довше 2 місяців. Повідомлення подають на formularz із даними ${foreignersLaw.article("244", "Art. 244")} ust. 1 та підписом заявника.`,
          sourceLocator: "Art. 232 ust. 1–4",
        },
      ],
      summary:
        "Стаття встановлює обов’язок повідомити про втрату або пошкодження визначеного документа протягом 3 днів та правила безоплатного тимчасового zaświadczenie.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Три дні рахуються від дня utrata або uszkodzenie, а повідомлення адресують саме органу, який видав відповідний документ ${foreignersLaw.article("226", "Art. 226")} pkt 1–3 і 5.`,
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Після повідомлення zaświadczenie видають безоплатно; воно діє до обміну документа, але максимальний строк його чинності — 2 місяці.",
        },
        {
          locator: "ust. 4",
          explanation: foreignersLaw.text`Повідомлення оформлюють на formularz із даними, названими в ${foreignersLaw.article("244", "Art. 244")} ust. 1, і підписом особи, яка повідомляє.`,
        },
      ],
      legalEffect:
        "Своєчасне повідомлення запускає оформлення zaświadczenie про втрату або пошкодження, але не замінює wymiana самого документа і не продовжує його чинність понад межі, встановлені законом.",
      foreignersCase:
        "Зафіксуйте день втрати або пошкодження, подайте formularz до органу-видавця не пізніше третього дня та отримайте безоплатне zaświadczenie. Перевірте його граничну дату й окремо розпочніть процедуру wymiana.",
    },
  ],
})
