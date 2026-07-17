import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-92",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 92 змінює art. 35 ust. 1–2 ustawy o udzielaniu cudzoziemcom ochrony: за незавершення справи про ochronę internationalna за 6 місяців без вини wnioskodawca відповідне zaświadczenie разом із tymczasowe zaświadczenie tożsamości дає право працювати за правилами нової ustawa.",
          sourceLocator: "Art. 92; art. 35 ust. 1–2 ustawy o ochronie",
        },
      ],
      summary:
        "Право працювати виникає не просто через тривале очікування. Потрібні wniosek, затримка не з вини заявника, заświadczenie Szef Urzędu та тимчасовий документ особи; робота відбувається на умовах і в порядку ustawa o powierzaniu pracy.",
      rules: [
        {
          locator: "art. 35 ust. 1",
          explanation:
            "Szef Urzędu видає zaświadczenie на wniosek особи, якщо справа не вирішена у строк і затримка не з її вини; разом із tymczasowe zaświadczenie документ уповноважує до роботи за новою ustawa.",
        },
        {
          locator: "art. 35 ust. 2",
          explanation:
            "У zaświadczenie підтверджують незавершення за 6 місяців і відсутність вини заявника та вказують особу, яка має право працювати.",
        },
      ],
      legalEffect:
        "Це спеціальна підстава доступу до роботи під час процедури ochronę internationalna, але вона не є рішенням про надання захисту і не скасовує умов нової ustawa.",
      foreignersCase:
        "Перевірте, чи є саме заświadczenie і tymczasowe zaświadczenie tożsamości та що в ньому підтверджено 6-місячну затримку без вини. Лише після цього оцінюйте умови powierzenie pracy.",
    },
  ]),
})
