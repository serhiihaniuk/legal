import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-347",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("347", "Art. 347")} передбачає фінансування kosztów з budżet państwa, коли відповідальний суб’єкт не сплатив їх, неможливо провести potrącenie або стягнення в egzekucja.`,
          sourceLocator: "Art. 347 ust. 1–2",
        },
      ],
      summary:
        "Держава може спочатку покрити витрати примусового повернення в названих законом випадках, але отримані суми залишаються доходом державного бюджету.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Budżet państwa покриває витрати, якщо боржник не сплатив, немає можливості списати гроші з депозиту або немає можливості стягнути вимогу в egzekucja.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Кошти, які надалі стягнули як należności за витратами, є доходом budżet państwa.",
        },
      ],
      legalEffect:
        "Бюджетне фінансування не ліквідує встановлену należność і не означає, що відповідальний суб’єкт автоматично звільнений від боргу.",
      foreignersCase:
        "Відокремлюйте джерело первісної оплати від того, на кого покладено koszty у decyzja; вимагайте розрахунок і документ про стягнення.",
    },
  ],
})
