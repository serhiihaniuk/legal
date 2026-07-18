import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-301",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 301 ust. 1 встановлює, що у продовженні періоду pobytu в межах ruchu bezwizowego відмовляють у drodze decyzji, а ust. 2 доручає міністру визначити wzór stempla, який підтверджує продовження на 90 днів.",
          sourceLocator: "Art. 301 ust. 1–2",
        },
      ],
      summary:
        "Стаття визначає форму відмови та нормативну форму штампа для продовження безвізового перебування.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Негативний результат оформлюється decyzja, а не лише усним повідомленням.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Wzór stempla встановлюється окремим розпорядженням з урахуванням можливості перевірки продовження.",
        },
      ],
      legalEffect:
        "Рішення про відмову є формою, у якій треба шукати мотиви та pouczenie; сам штамп не замінює рішення про інші види pobyt.",
      foreignersCase:
        "Якщо отримано відмову, прочитайте дату doręczenie і pouczenie про засіб оскарження; якщо посилаєтеся на продовження, перевірте наявність і зміст stempel.",
    },
  ]),
})
