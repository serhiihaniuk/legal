import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-34",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("34", "Art. 34")} у частині 1 обмежує строк дозволу одним роком, якщо заяву подає польський суб’єкт, який веде діяльність менш як рік, або якщо робочий час не перевищує половини повної ставки чи 20 годин на тиждень. Для тимчасового працівника частина 2 додатково обмежує строк правилами ${workLaw.external("ст. 20", "https://eli.gov.pl/eli/DU/2025/236/ogl")} польського закону «ustawa o zatrudnianiu pracowników tymczasowych».`,
          sourceLocator: "Art. 34 ust. 1 pkt 1–2 і ust. 2",
        },
      ],
      summary:
        "Якщо суб’єкт веде діяльність менш як рік, робочий час не перевищує встановленого порогу або йдеться про тимчасового працівника, закон установлює спеціальну верхню межу строку дозволу. Це не означає, що дозвіл завжди видають саме на один рік.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Якщо виконується хоча б одна названа умова — діяльність суб’єкта триває менш як рік або робочий час не перевищує половини повної ставки чи 20 годин на тиждень — дозвіл видають на визначений строк не довший за один рік.",
        },
        {
          locator: "ust. 2",
          explanation: workLaw.text`Для тимчасового працівника додатковою межею є строк, передбачений ${workLaw.external("ст. 20", "https://eli.gov.pl/eli/DU/2025/236/ogl")} окремого закону про працевлаштування тимчасових працівників.`,
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("34", "Ст. 34")} обмежує строк права на роботу. Вона не продовжує візи чи перебування і не створює автоматичного права на наступний дозвіл.`,
      foreignersCase:
        "Перевірте, як довго суб’єкт веде діяльність, фактичний робочий час і статус тимчасового працівника. Кінцеву дату дозволу контролюйте окремо від дати завершення законного перебування.",
    },
  ],
})
