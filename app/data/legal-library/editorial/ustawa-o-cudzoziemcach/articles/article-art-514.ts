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
      provisionId: "ustawa-o-cudzoziemcach-art-514",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("514", "Art. 514")} передбачає, що в окремих рішеннях, які завершують старі незакінчені провадження, не виноситься рішення про zobowiązanie do opuszczenia або wydalenie; органи повідомляють właściwy organ Straży Granicznej після набрання рішенням ostateczność.`,
          sourceLocator: "Art. 514 ust. 1–3",
        },
      ],
      summary:
        "Стаття обмежує зміст окремих перехідних рішень у старих провадженнях і встановлює повідомлення Straż Graniczna про їх завершення.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "У рішенні про odmowa або cofnięcie старого zezwolenie na zamieszkanie на czas oznaczony, якщо провадження було розпочато до wejścia w życie ustawy, не виноситься рішення про opuszczenie.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для перелічених рішень про cofnięcie, відмову в міжнародному захисті чи cofnięcie zgoda на pobyt tolerowany не виноситься рішення про wydalenie.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Орган провадження повідомляє орган Straży Granicznej за місцем pobyt, коли рішення стало ostateczne.",
        },
      ],
      legalEffect: foreignersLaw.text`Наслідок обмежений старими провадженнями та прямо названими видами рішень. ${foreignersLaw.article("514", "Art. 514")} не означає, що в сучасному провадженні ніколи не може бути рішення про powrót.`,
      foreignersCase:
        "Перевірте дату wszczęcia, вид рішення, стару правову підставу та момент ostateczność; окремо з’ясуйте, чи було виконано обов’язок повідомлення Straż Graniczna.",
    },
  ],
})
