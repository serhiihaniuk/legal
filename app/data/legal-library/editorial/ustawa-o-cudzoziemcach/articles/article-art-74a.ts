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
      provisionId: "ustawa-o-cudzoziemcach-art-74a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("74a", "Art. 74a")} ust. 1 встановлює 15-денний строк для wydanie або odmowa wizy krajowa від дня подання заяви, якщо її не визнано niedopuszczalny; ust. 2 допускає 30 днів, а за запитом щодо ${foreignersLaw.article("65", "Art. 65")} ust. 1 pkt 5 або 8 — до 5 днів від передання Szef Urzędu інформації; ust. 3 виключає цей строк для ${foreignersLaw.article("60", "Art. 60")} ust. 1 pkt 18a і 21.`,
          sourceLocator: "Art. 74a ust. 1–3",
        },
        {
          kind: "practical-inference",
          text: "Строк є процесуальною межею розгляду і не перетворює подану заяву на автоматично схвалену wiza.",
          sourceLocator: "Art. 74a ust. 1–3",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("74a", "Art. 74a")} регулює строки розгляду заяви на wiza krajowa: базово 15 днів, у виправданих випадках до 30, а у визначеній інформаційній процедурі — до 5 днів після отримання даних Szef Urzędu. Для двох цілей ${foreignersLaw.article("60", "Art. 60")} уст. 1 строк не застосовується.`,
      rules: [
        {
          locator: "Art. 74a ust. 1",
          explanation:
            "Відлік іде від подання заяви, якщо wniosek не визнано недопустимим; результатом у строк може бути як wydanie, так і odmowa.",
        },
        {
          locator: "Art. 74a ust. 2",
          explanation: foreignersLaw.text`За обґрунтованих обставин строк може бути 30 днів; якщо MFA або konsul запитує Szef Urzędu щодо ${foreignersLaw.article("65", "Art. 65")} ust. 1 pkt 5 або 8, застосовується строк до 5 днів від передання інформації.`,
        },
        {
          locator: "Art. 74a ust. 3",
          explanation: foreignersLaw.text`Базовий строк не застосовується до wiza krajowa за ${foreignersLaw.article("60", "Art. 60")} ust. 1 pkt 18a і 21.`,
        },
      ],
      legalEffect:
        "Стаття визначає календар розгляду, але не матеріальний результат і не право залишатися після завершення іншої підстави pobyt.",
      foreignersCase:
        "Зафіксуйте дату повного подання, чи wniosek був dopuszczalny, повідомлення про продовження та дату інформації Szef Urzędu; окремо перевірте, чи мета входить до винятків ust. 3.",
    },
  ],
})
