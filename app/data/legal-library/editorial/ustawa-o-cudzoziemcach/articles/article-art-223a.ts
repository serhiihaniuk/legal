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
      provisionId: "ustawa-o-cudzoziemcach-art-223a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо wojewoda відмовив у наданні zezwolenia na pobyt rezydenta długoterminowego UE або umorzył postępowanie, сплачена належна opłata skarbowa за надання цього дозволу не повертається.",
          sourceLocator: "Art. 223a",
        },
      ],
      summary:
        "Стаття встановлює спеціальний фінансовий наслідок відмови або umorzenia: належно сплачена opłata skarbowa залишається неповоротною.",
      rules: [
        {
          locator: "Art. 223a",
          explanation:
            "Норма прямо охоплює два види рішень wojewoda — odmowę udzielenia та umorzenie postępowania. Вона стосується належної opłaty skarbowej саме за надання цього дозволу.",
        },
      ],
      legalEffect:
        "Негативне або процесуальне завершення справи не створює права на повернення цієї сплаченої opłaty skarbowej.",
      foreignersCase:
        "Перед очікуванням zwrotu перевірте вид рішення, орган, призначення платежу та чи була сума належною. Інші помилкові або надмірні платежі потребують окремої правової оцінки.",
    },
  ],
})
