import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-74",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 74 доручає minister właściwy do spraw pracy створити centralny rejestr із даних art. 73, регулює передачу й доступ wojewoda, starosta та minister і вимагає анонімізації статистичних даних.",
          sourceLocator: "Art. 74 ust. 1–4",
        },
      ],
      summary:
        "Centralny rejestr збирає дані з профільних реєстрів для виконання завдань і законного доступу органів. Для статистики дані мають бути anonimizowane, що відрізняється від індивідуального розгляду справи.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Minister створює rejestr, а wojewoda, starosta і minister передають дані та можуть користуватися ними лише в межах завдань ustawy.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Minister обробляє dane osobowe для надання їх уповноваженим органам у межах prawa; статистичні дані anonymizuje.",
        },
      ],
      legalEffect:
        "Центральна агрегація полегшує перевірку у провадженні, але не створює самостійної підстави для роботи чи pobyt.",
      foreignersCase:
        "Якщо орган посилається на дані іншої справи, перевірте, для якого завдання він їх використовує. Не ототожнюйте анонімну статистику з висновком про конкретну особу.",
    },
  ]),
})
