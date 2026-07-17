import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-30",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("30", "Art. 30")} ust. 1 передбачає видачу zezwolenie на користь polski podmiot, якщо cudzoziemiec працюватиме за umowa з цим podmiot, wynagrodzenie буде не нижчим за оплату порівнюваних працівників і мінімальне wynagrodzenie, а wymiar часу становитиме від 1/4 до повного. За неповного часу оплату враховують пропорційно wymiar.`,
          sourceLocator: "Art. 30 ust. 1 pkt 1–3 і ust. 2",
        },
      ],
      summary:
        "Для цього виду zezwolenie потрібно зіставити umowa, оплату та час роботи. Мінімум 1/4 і максимум повний wymiar часу — межі саме умови дозволу, а не загальна відповідь на питання про legalny pobyt.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Підставою має бути umowa між cudzoziemiec і polski podmiot powierzający pracę.",
        },
        {
          locator: "ust. 1 pkt 2",
          explanation:
            "Wynagrodzenie має бути не нижчим одночасно за оплату працівників порівнюваного виду або stanowisko та за ustawowe minimalne wynagrodzenie.",
        },
        {
          locator: "ust. 1 pkt 3, ust. 2",
          explanation:
            "Wymiar часу — від 1/4 до повного. Для неповного часу поріг wynagrodzenie оцінюють пропорційно часу, записаному в umowa.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("30", "Art. 30")} визначає матеріальні умови zezwolenie на роботу. Виконання цих умов не продовжує visa або pobyt і не скасовує інших вимог доступу до роботи.`,
      foreignersCase:
        "Порівняйте umowa з оплатою аналогічних працівників, мінімальним wynagrodzenie та wymiar часу. Окремо перевірте, чи має cudzoziemiec чинний документ legalnego pobytu і потрібну підставу роботи.",
    },
  ],
})
