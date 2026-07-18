import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-204",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Коли NSA відхиляє касаційну скаргу, сторона, яка її подала, повертає необхідні касаційні витрати опонентові: органу, якщо WSA відхилив первісну скаргу, або заявникові, якщо WSA її задовольнив.",
          sourceLocator: "Art. 204",
        },
      ],
      summary: "Стаття визначає наслідок витрат для невдалої касації.",
      rules: [
        {
          locator: "Art. 204",
          explanation:
            "Зіставте касатора, результат WSA та сторону, яка понесла витрати на захист цього результату в NSA.",
        },
      ],
      legalEffect:
        "Відхилення касаційної скарги по суті (oddalenie skargi kasacyjnej) може створити обов’язок відшкодувати необхідні витрати опонента незалежно від власних витрат касатора.",
      foreignersCase:
        "Перед касацією у справі про перебування оцініть не лише судову перспективу, а й можливий обов’язок повернути органу касаційні витрати.",
    },
  ],
})
