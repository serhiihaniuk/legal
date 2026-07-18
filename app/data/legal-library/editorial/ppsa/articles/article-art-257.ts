import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-257",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Заяву про право допомоги, подану не на офіційному формулярі, або заяву, чиї недоліки не виправлено в наданий строк, залишають без розгляду.",
          sourceLocator: "Art. 257",
        },
      ],
      summary:
        "Стаття встановлює процесуальний наслідок порушення форми або невиконання виклику суду (wezwanie).",
      rules: [
        {
          locator: "Art. 257",
          explanation:
            "Подайте правильний формуляр і після виклику звірте кожний недолік із виправленим пакетом до спливу строку.",
        },
      ],
      legalEffect:
        "Залишення без розгляду означає, що суд не оцінить фінансові умови допомоги по суті.",
      foreignersCase:
        "У справі про перебування не надсилайте лише пояснювальний лист про брак коштів; він може доповнювати, але не замінює формуляр.",
    },
  ],
})
