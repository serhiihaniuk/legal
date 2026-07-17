import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-34",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("34", "Art. 34")} ust. 1 обмежує строк zezwolenie до 1 року, якщо wniosek подає polski podmiot, який веде działalność менш як рік, або робота не перевищує половини повного часу чи 20 годин на тиждень. Ust. 2 встановлює для pracownik tymczasowy строк не довший за ${workLaw.external("art. 20", "https://eli.gov.pl/eli/DU/2025/236/ogl")} ustawy o zatrudnianiu pracowników tymczasowych.`,
          sourceLocator: "Art. 34 ust. 1 pkt 1–2 і ust. 2",
        },
      ],
      summary:
        "Для молодого podmiot, малої зайнятості та роботи tymczasowa закон встановлює спеціальну верхню межу строку дозволу. Це не означає, що дозвіл завжди видається саме на один рік.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Якщо виконується хоча б одна названа умова — діяльність podmiot коротша за рік або час не більше 1/2 чи 20 годин на тиждень — zezwolenie видається на визначений строк не довший за один рік.",
        },
        {
          locator: "ust. 2",
          explanation: workLaw.text`Для працівника tymczasowy додатковою межею є строк, передбачений ${workLaw.external("art. 20", "https://eli.gov.pl/eli/DU/2025/236/ogl")} окремої ustawy про zatrudnianie pracowników tymczasowych.`,
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("34", "Art. 34")} обмежує строк uprawnienie do pracy; він не продовжує visa чи pobyt і не створює автоматичного права на наступний дозвіл.`,
      foreignersCase:
        "Перевірте вік діяльності podmiot, фактичний wymiar часу та статус працівника tymczasowy. Внесіть кінцеву дату zezwolenie окремо від кінця документа legalnego pobytu.",
    },
  ],
})
