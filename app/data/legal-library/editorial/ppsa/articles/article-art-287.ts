import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-287",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Між правилами виконання судових рішень і відтворення втрачених матеріалів цю статтю скасовано (uchylony), тому станом на 18.07.2026 вона не створює окремої процесуальної дії.",
          sourceLocator: "Art. 287",
        },
      ],
      summary: "Номер залишено у структурі закону без нормативного змісту.",
      rules: [
        {
          locator: "Art. 287",
          explanation:
            "Не використовуйте стару редакцію для сучасної справи без окремої перевірки історичного стану права.",
        },
      ],
      legalEffect:
        "Із цієї статті не виникає чинний обов’язок органу щодо виконання рішення.",
      foreignersCase:
        "У справі про перебування маршрут виконання визначайте за чинним правилом про повернення матеріалів, змістом судового рішення та іншими чинними нормами.",
    },
  ],
})
