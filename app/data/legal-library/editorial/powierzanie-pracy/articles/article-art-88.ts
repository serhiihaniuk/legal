import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-88",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 88 змінює art. 1 ust. 1 ustawy o ubezpieczeniu społecznym rolników, включаючи до охоплених осіб cudzoziemiec з art. 3 ust. 1 або 3 нової ustawy про працю.",
          sourceLocator: "Art. 88",
        },
      ],
      summary:
        "Змінений перелік осіб у системі ubezpieczenie społeczne rolników охоплює громадян Польщі, ЄС/EFTA/Швейцарії, окремих членів сімей, осіб за Umową Wystąpienia та cudzoziemiec, названих у art. 3 ust. 1 або 3.",
      rules: [
        {
          locator: "Art. 88 pkt 1–7 zmienionego art. 1 ust. 1",
          explanation:
            "Пункт 7 прив'язує включення cudzoziemiec до конкретних категорій art. 3 ust. 1 або 3 ustawy z 20 marca 2025 r.; це не загальне включення всіх іноземців.",
        },
      ],
      legalEffect:
        "Зміна може впливати на страховий статус pomocnik rolnika, але сама не визначає, чи є робота legalною або чи виконані умови конкретної категорії.",
      foreignersCase:
        "Для сезонної роботи в gospodarstwo визначте роль особи і перевірте, чи підпадає вона під art. 3 ust. 1 або 3. Питання KRUS не замінює перевірку pobyt та підстави роботи.",
    },
  ]),
})
