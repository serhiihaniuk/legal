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
      provisionId: "ustawa-o-cudzoziemcach-art-433",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("433", "Art. 433")}: «Zasady prowadzenia rejestrów ... oraz zasady udostępniania danych zawartych w tych rejestrach określają odrębne przepisy».`,
          sourceLocator: "Art. 433",
        },
        {
          kind: "practical-inference",
          text: "Для rejestry про затримання біля кордону та виконання повернення не можна вивести весь порядок доступу лише з ustawy o cudzoziemcach.",
          sourceLocator: "Art. 433",
        },
      ],
      summary:
        "Правила ведення окремих rejestry та доступу до їхніх даних визначаються окремими положеннями.",
      rules: [
        {
          locator: "Art. 433",
          explanation: foreignersLaw.text`Йдеться про rejestry з ${foreignersLaw.article("428", "Art. 428")} ust. 1 pkt 1 lit. b і pkt 2 lit. l та дані в них; порядок треба шукати в odrębne przepisy.`,
        },
      ],
      legalEffect:
        "Стаття відсилає до іншого регулювання і не встановлює повного самостійного режиму. Тому її недостатньо для висновку про допустимість конкретного запиту на дані.",
      foreignersCase: foreignersLaw.text`Спочатку визначте, чи стосується справа саме реєстру з ${foreignersLaw.article("433", "Art. 433")}, потім знайдіть відповідний odrębny przepis для ведення й udostępniania даних.`,
    },
  ],
})
