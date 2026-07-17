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
      provisionId: "ustawa-o-cudzoziemcach-art-233",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Cudzoziemiec, який odzyskał втрачений документ з ${foreignersLaw.article("226", "Art. 226")} pkt 1–3 і 5, повідомляє про це орган, який його видав, протягом 3 днів від дня odzyskanie. Якщо cudzoziemiec отримав wymieniony документ замість втраченого, він niezwłocznie повертає знайдений документ органу, який його видав.`,
          sourceLocator: "Art. 233 ust. 1–2",
        },
      ],
      summary:
        "Стаття визначає дії після повернення втраченого документа: повідомлення органу протягом 3 днів і негайне повернення документа, якщо вже видано заміну.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Відлік трьох днів починається з дня odzyskanie; повідомити треба орган, який видав документ ${foreignersLaw.article("226", "Art. 226")} pkt 1–3 і 5.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо замість втраченого вже отримано wymieniony документ, знайдений документ не залишають у себе, а niezwłocznie повертають органу-видавцю.",
        },
      ],
      legalEffect:
        "Повернення втраченого документа створює окремий обов’язок повідомлення, а після видачі заміни — обов’язок повернути знайдений документ; стаття не скасовує інші наслідки вже проведеної wymiana.",
      foreignersCase:
        "Запишіть дату odzyskanie, повідомте орган-видавець у триденний строк і з’ясуйте, чи вже видано документ на заміну. Якщо так, негайно передайте знайдений документ цьому органу та збережіть доказ передачі.",
    },
  ],
})
