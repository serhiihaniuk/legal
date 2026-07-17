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
      provisionId: "ustawa-o-cudzoziemcach-art-283",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Якщо під час kontroli granicznej або kontroli legalności pobytu встановлено, що cudzoziemiec користується документом, який мав повернути за ${foreignersLaw.article("233", "Art. 233")} ust. 2, ${foreignersLaw.article("249", "Art. 249")} ust. 1, ${foreignersLaw.article("258", "Art. 258")} ust. 1, ${foreignersLaw.article("265", "Art. 265")} ust. 2 або ${foreignersLaw.article("280", "Art. 280")} ust. 2, organ zatrzymuje документ, безоплатно видає zaświadczenie про zatrzymanie, надсилає документ organowi-видавцю та dokumentuje ці дії.`,
          sourceLocator: "Art. 283 pkt 1–4",
        },
      ],
      summary:
        "Стаття встановлює обов’язкові дії органу під час контролю, якщо cudzoziemiec користується документом, який мав повернути за прямо названими статтями.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "Документ затримують і видають безоплатне zaświadczenie про його zatrzymanie.",
        },
        {
          locator: "pkt 3–4",
          explanation:
            "Затриманий документ надсилають органу, який його видав, а проведені дії фіксують.",
        },
      ],
      legalEffect:
        "Наслідком користування документом після обов’язку zwrotu є його вилучення під час відповідного контролю; це не є новим рішенням про право на pobyt.",
      foreignersCase:
        "Після повернення документа не використовуйте його повторно, навіть якщо він фізично залишився у вас. Зберігайте видане zaświadczenie, щоб підтвердити, що саме було затримано.",
    },
  ],
})
