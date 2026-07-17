import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-305",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 305 ust. 1 встановлює zawieszenie провадження про zobowiązanie do powrotu, якщо розпочато провадження про ochronę międzynarodową або про дозвіл із Art. 176; ust. 2 виключає zawieszenie, коли cudzoziemiec подав kolejny wniosek o ochronę międzynarodową.",
          sourceLocator: "Art. 305 ust. 1–2",
        },
      ],
      summary:
        "Стаття пов’язує провадження про повернення з окремими провадженнями про міжнародний захист або дозвіл Art. 176.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "За початку названого провадження справа про повернення zawieszaється.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Подання kolejny wniosek o ochronę międzynarodową саме по собі не спричиняє цього zawieszenia.",
        },
      ],
      legalEffect:
        "Zawieszenie змінює рух провадження, але не є автоматичним остаточним скасуванням рішення чи припиненням усіх наслідків.",
      foreignersCase:
        "Уточніть, чи йдеться про перший або kolejny wniosek і чи є окреме рішення про zawieszenie; збережіть підтвердження початку відповідного провадження.",
    },
  ]),
})
