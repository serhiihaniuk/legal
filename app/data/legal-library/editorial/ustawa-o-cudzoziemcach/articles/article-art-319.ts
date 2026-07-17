import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-319",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 319 встановлює строки zakaz ponownego wjazdu: 6 місяців–3 роки для підстав Art. 302 ust. 1 pkt 1–3, 6–8, 10, 12, 13, 15 і 16; 1–3 роки для pkt 4–5; 3–5 років для pkt 11 і 14; 5–10 років для pkt 9 або Art. 329a ust. 1, а несплата витрат може продовжити заборону z mocy prawa не більше ніж до 5 років у названих випадках.",
          sourceLocator: "Art. 319 ust. 1–2",
        },
      ],
      summary:
        "Стаття пов’язує тривалість заборони повторного в’їзду з конкретною підставою рішення про повернення та несплатою витрат.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Для кожної групи Art. 302 і Art. 329a встановлений окремий мінімальний і максимальний строк.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо до завершення строку за ust. 1 pkt 1–3 cudzoziemiec не сплатив витрати, zakaz продовжується z mocy prawa до дня сплати, але не довше ніж до 5 років.",
        },
      ],
      legalEffect:
        "Строк не можна визначати лише за загальним фактом повернення: потрібно встановити точний pkt Art. 302 або Art. 329a і стан оплати витрат.",
      foreignersCase:
        "Перевірте правову підставу в рішенні, початковий строк, розрахунок витрат і доказ їхньої сплати; ці дані впливають на тривалість zakaz.",
    },
  ]),
})
