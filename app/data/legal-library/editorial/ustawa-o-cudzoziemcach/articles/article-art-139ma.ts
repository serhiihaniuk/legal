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
      provisionId: "ustawa-o-cudzoziemcach-art-139ma",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139ma", "Art. 139ma")} регулює повідомлення jednostka przyjmująca з Польщі органу іншої держави ЄС і Szef Urzędu про намір cudzoziemca користуватися короткостроковою або довгостроковою mobilność в іншій державі.`,
          sourceLocator: "Art. 139ma",
        },
      ],
      summary:
        "Стаття описує повідомлення про mobilność ICT з Польщі до іншої держави ЄС, якщо право цієї держави вимагає такого повідомлення.",
      rules: [
        {
          locator: "Art. 139ma",
          explanation:
            "Jednostka повідомляє właściwy organ innego państwa członkowskiego, де планується мобільність, та Szef Urzędu, якщо przepisy цієї держави вимагають такого zawiadomienia.",
        },
      ],
      legalEffect:
        "Застосування повідомлення залежить від вимоги держави, у якій планується мобільність; ця стаття не встановлює її конкретного формуляра чи строку.",
      foreignersCase:
        "Спочатку визначте державу планованої мобільності та перевірте, чи її przepisy вимагають zawiadomienie; не вважайте польське zezwolenie достатнім без такого кроку.",
    },
  ],
})
