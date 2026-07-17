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
      provisionId: "ustawa-o-cudzoziemcach-art-465a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("465a", "Art. 465a")} регулює дії після orzeczenie zastępczej kary aresztu за окремі wykroczenia з ${foreignersLaw.article("465", "Art. 465")}: dyrektor zakładu karnego повідомляє орган Straży Granicznej, а суд після отримання decyzja про zobowiązaniu do powrotu umarza postępowanie wykonawcze та видає nakaz zwolnienia.`,
          sourceLocator: "Art. 465a ust. 1–3",
        },
      ],
      summary:
        "Стаття встановлює спеціальний порядок взаємодії zakład karny, органу Straży Granicznej і суду, коли за визначене wykroczenie вже призначено zastępcza kara aresztu, а існує рішення про zobowiązaniu do powrotu.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Dyrektor zakładu karnego повідомляє орган Straży Granicznej, який видав decyzja o zobowiązaniu cudzoziemca do powrotu, про розмір zastępcza kara aresztu та день її виконання.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Орган передає decyzja суду першої інстанції; суд umarza postępowanie wykonawcze, видає nakaz zwolnienia, а невідбуту частину zastępcza kara визнає виконаною.",
        },
      ],
      legalEffect: foreignersLaw.text`Норма описує наслідки саме тієї комбінації обставин, яку називає ${foreignersLaw.article("465a", "Art. 465a")}. Вона не скасовує саму decyzja o zobowiązaniu do powrotu і не поширюється автоматично на інші покарання чи провадження.`,
      foreignersCase: foreignersLaw.text`Звірте, за яким пунктом ${foreignersLaw.article("465", "Art. 465")} призначено zastępcza kara aresztu, копію decyzja o powrocie, повідомлення zakład karny та ухвалу суду про zwolnienie.`,
    },
  ],
})
