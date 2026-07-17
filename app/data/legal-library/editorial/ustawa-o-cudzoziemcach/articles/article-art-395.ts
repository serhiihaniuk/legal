import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-395",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У частині, не врегульованій ustawa, до zatrzymanie cudzoziemca застосовуються положення Kodeks postępowania karnego; art. 248 § 3 KPK не застосовується у визначених випадках ухилення від виконання рішення про powrót та наявності підстав примусового виконання з art. 329 ust. 1 або 2.",
          sourceLocator: "Art. 395 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Спочатку треба знайти спеціальне правило ustawa, а лише для неврегульованого питання — відповідне правило KPK з урахуванням прямо названого виключення.",
          sourceLocator: "Art. 395 ust. 1–2",
        },
      ],
      summary:
        "Стаття визначає субсидіарне застосування Kodeks postępowania karnego до zatrzymanie іноземця та спеціальне виключення з одного правила KPK.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "KPK застосовується лише в частині, яку ustawa o cudzoziemcach не врегулювала.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Art. 248 § 3 KPK не застосовується за умов, пов’язаних з ухиленням від рішення та підставами art. 329 ust. 1 або 2.",
        },
      ],
      legalEffect:
        "Норма дає процесуальний міст до KPK, але не скасовує спеціальних правил ustawa і не дозволяє механічно переносити весь кримінальний порядок.",
      foreignersCase:
        "Для кожної спірної дії позначте, чи врегульована вона ustawa, яке положення KPK доповнює прогалину і чи не діє виключення ust. 2.",
    },
  ]),
})
