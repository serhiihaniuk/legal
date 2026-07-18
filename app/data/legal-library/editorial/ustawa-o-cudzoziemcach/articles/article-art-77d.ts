import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-77d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Після decyzji про odmowę wydania wizy Schengen na granicy або про umorzenie такого провадження належно сплачена opłata skarbowa не повертається.",
          sourceLocator: "Art. 77d",
        },
      ],
      summary:
        "Стаття визначає фінансовий наслідок двох негативних завершень справи про wiza Schengen na granicy.",
      rules: [
        {
          locator: "Art. 77d",
          explanation:
            "Спершу встановіть вид рішення: odmowa або umorzenie. Неповернення стосується саме належної opłaty skarbowej за видачу візи на кордоні.",
        },
      ],
      legalEffect:
        "Негативний результат провадження не створює вимоги повернути цю opłatę; стаття не визначає підстав самої odmowy чи umorzenia.",
      foreignersCase:
        "Зіставте підтвердження платежу з видом заяви й резолютивною частиною decyzji. Інші помилково або надмірно сплачені суми потребують окремої правової оцінки.",
    },
  ],
})
