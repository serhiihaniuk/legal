import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-224",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо суд під час провадження не вирішив обов’язок сплатити судові витрати або охопив не всю належну суму, WSA видає щодо решти окрему ухвалу на закритому засіданні.",
          sourceLocator: "Art. 224",
        },
      ],
      summary:
        "Стаття дозволяє доповнити фінансове рішення після пропуску або неповного розрахунку.",
      rules: [
        {
          locator: "Art. 224",
          explanation:
            "Порівняйте належні суми з тим, що вже охоплено рішеннями суду. Окрема ухвала може стосуватися лише невирішеної частини.",
        },
      ],
      legalEffect:
        "Судовий обов’язок щодо витрат може бути визначений окремо від рішення по суті.",
      foreignersCase:
        "Отримавши додаткову ухвалу у справі іноземця, не сприймайте її як зміну результату спору; перевірте суму й доступний засіб оскарження.",
    },
  ],
})
