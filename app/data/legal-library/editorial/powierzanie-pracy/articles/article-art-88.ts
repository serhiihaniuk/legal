import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-88",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 88 є виконаною нормою про зміну art. 1 ust. 1 закону «ustawa o ubezpieczeniu społecznym rolników». До переліку осіб, охоплених соціальним страхуванням фермерів, вона включила іноземців із art. 3 ust. 1 або 3 закону від 20 березня 2025 року.",
          sourceLocator: "Art. 88",
        },
      ],
      summary:
        "Змінений перелік охоплює, зокрема, громадян Польщі, ЄС, EFTA і Швейцарії, окремих членів сімей, осіб, на яких поширюється Угода про вихід (Umowa o wystąpieniu), та визначені категорії іноземців.",
      rules: [
        {
          locator: "Art. 88 pkt 1–7 zmienionego art. 1 ust. 1",
          explanation:
            "Пункт 7 пов’язує страховий статус іноземця з конкретними категоріями з art. 3 ust. 1 або 3 закону від 20 березня 2025 року. Це не загальне включення всіх іноземців.",
        },
      ],
      legalEffect:
        "Зміна може впливати на страховий статус помічника фермера (pomocnik rolnika), але сама не визначає законності роботи і не підтверджує виконання умов конкретної категорії з art. 3.",
      foreignersCase:
        "Для сезонної роботи в сільському господарстві визначте роль особи і перевірте, чи підпадає вона під art. 3 ust. 1 або 3. Питання страхування в KRUS не замінює перевірки законності перебування та підстави роботи.",
    },
  ]),
})
