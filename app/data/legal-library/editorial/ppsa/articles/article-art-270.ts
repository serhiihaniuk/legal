import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-270",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Поновлення провадження (wznowienie postępowania) можна вимагати лише у випадках, передбачених цим розділом, і лише щодо провадження, завершеного остаточним рішенням.",
          sourceLocator: "Art. 270",
        },
      ],
      summary:
        "Стаття відкриває надзвичайний перегляд і одразу встановлює дві межі: остаточність та законну підставу.",
      rules: [
        {
          locator: "Art. 270",
          explanation:
            "Спершу підтвердьте законну силу рішення (prawomocność), потім знайдіть конкретну підставу поновлення провадження (wznowienie). Загальної незгоди з висновком суду недостатньо.",
        },
      ],
      legalEffect:
        "Поновлення не є ще однією апеляцією; воно можливе після остаточності лише за спеціальним дефектом.",
      foreignersCase:
        "У справі про перебування не подавайте скаргу про поновлення (wznowienie) замість пропущеної касації, якщо немає окремої законної підстави.",
    },
  ],
})
