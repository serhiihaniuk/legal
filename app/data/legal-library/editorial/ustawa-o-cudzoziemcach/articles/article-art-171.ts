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
      provisionId: "ustawa-o-cudzoziemcach-art-171",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("171", "Art. 171")} вважає pobyt cudzoziemiec законним протягом строку чинності zaświadczenie з ${foreignersLaw.article("170", "art. 170")}, але припиняє цей ефект після внесення до реєстру інформації про добровільний контакт із підозрюваними або незаконний перетин кордону.`,
          sourceLocator: "Art. 171 ust. 1–3",
        },
      ],
      summary:
        "Zaświadczenie тимчасово легалізує pobyt, однак законність може припинитися раніше після спеціального запису міністра.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Побyt вважається legalny протягом строку чинності документа з ${foreignersLaw.article("170", "art. 170")}; вирішальним є строк самого zaświadczenie.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Legalny pobyt припиняється з моменту, коли minister właściwy do spraw wewnętrznych зафіксує в реєстрі, що cudzoziemiec активно, добровільно й з власної ініціативи відновив контакт із підозрюваними у handlu ludźmi або перетнув чи намагався перетнути кордон всупереч закону.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Інформацію для такого запису передає орган, який видав zaświadczenie; сам запис, а не лише припущення про поведінку, є моментом припинення легального pobyt.",
        },
      ],
      legalEffect:
        "До строку чинності та за відсутності передбаченого запису pobyt має спеціальний legalny статус; це не тотожне наданню карти побytu.",
      foreignersCase:
        "Зберігайте zaświadczenie та підтвердження його строку; якщо орган посилається на припинення legalny pobyt, вимагайте дату і правову підставу запису в реєстрі.",
    },
  ],
})
