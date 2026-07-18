import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-184",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA відхиляє касаційну скаргу по суті (oddala), якщо вона не має обґрунтованих підстав або якщо оскаржене рішення, попри помилкове обґрунтування, відповідає праву.",
          sourceLocator: "Art. 184",
        },
      ],
      summary:
        "Стаття показує, що помилка в мотивах не завжди веде до скасування правильного результату.",
      rules: [
        {
          locator: "Art. 184",
          explanation:
            "Перевірте не лише недолік обґрунтування WSA, а й те, чи він змінив правову правильність резолютивної частини.",
        },
      ],
      legalEffect:
        "Відхилення касаційної скарги по суті (oddalenie) залишає оскаржене рішення в силі; NSA може погодитися з результатом, не приймаючи всіх мотивів WSA.",
      foreignersCase:
        "У справі про перебування касаційна підстава повинна показувати, чому помилка вплинула на законність результату, а не лише знайти невдалу фразу в обґрунтуванні.",
    },
  ],
})
