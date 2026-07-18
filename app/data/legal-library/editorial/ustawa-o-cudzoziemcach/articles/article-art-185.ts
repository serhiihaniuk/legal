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
      provisionId: "ustawa-o-cudzoziemcach-art-185",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("185", "Art. 185")} передбачає cofnięcie zezwolenie з ${foreignersLaw.article("181", "art. 181")} ust. 1, якщо припинилася мета pobyt або виникла хоча б одна обставина з ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 3–5.`,
          sourceLocator: "Art. 185",
        },
      ],
      summary:
        "Дозвіл для короткострокової мети відкликається, коли мета припинилася або виникла визначена загальна підстава.",
      rules: [
        {
          locator: "весь припис",
          explanation: foreignersLaw.text`Cofnięcie є обов'язковим, якщо більше не існує cel pobytu, для якого надано zezwolenie, або встановлено обставину ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 3, 4 чи 5.`,
        },
      ],
      legalEffect:
        "Після cofnięcie припиняється дія zezwolenie; сам сплив початкової мети або загальне припущення мають бути підтверджені фактом, передбаченим статтею.",
      foreignersCase: foreignersLaw.text`Якщо мета вже виконана, повідомте орган і перевірте наслідки для legalny pobyt; якщо отримано рішення про cofnięcie, оскаржуйте конкретну дату або обставину ${foreignersLaw.article("100", "art. 100")}, якщо вони помилкові.`,
    },
  ],
})
