import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-65",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 65 зобов'язує starosta відмовити у wpis oświadczenie за невідповідної оплати, неправдивих даних, обставин art. 13, повторного покарання або перевищення лімітів; odmowa оформлюється decyzja administracyjna.",
          sourceLocator: "Art. 65 ust. 1–5",
        },
      ],
      summary:
        "Заробіток має бути не нижчим одночасно за оплату порівнюваних працівників і мінімальне wynagrodzenie. Також перевіряються доброчесність даних, заборонні обставини podmiot та можливі річні limity.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation:
            "Перелік обов'язкової odmowa охоплює низьке wynagrodzenie, false дані або документи, art. 13, дворазове правомочне покарання за art. 84 ust. 10 за останні 12 місяців і перевищення limit.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Rada Ministrów може встановити limity за регіонами, професіями, договорами чи видами діяльності; minister щомісяця публікує стан їх використання і оголошує повне використання.",
        },
        {
          locator: "ust. 4–5",
          explanation:
            "Art. 14 застосовується відповідно, а odmowa wpis оформлюється decyzja administracyjna.",
        },
      ],
      legalEffect:
        "Це перелік обов'язкових підстав для відмови, але відсутність однієї підстави не доводить виконання всіх інших умов процедури.",
      foreignersCase:
        "Порівняйте запропоновану оплату з внутрішнім порівнянним stanowisko та мінімальним wynagrodzenie, перевірте art. 13, історію штрафів і доступний limit. За odmowa аналізуйте мотиви decyzja окремо.",
    },
  ]),
})
