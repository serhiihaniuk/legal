import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "34",
      provisionId: "kpa-art-34",
      reviewStatus: "reviewed",
      summary:
        "Стаття забезпечує представника для відсутньої або недієздатної особи та тимчасового представника для невідкладних дій.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Якщо представника ще немає, organ звертається до суду з wnioskiem про його призначення.",
        },
        {
          locator: "§ 2",
          explanation:
            "Для невідкладної czynności organ сам призначає тимчасового представника до судового призначення.",
        },
      ],
      legalEffect:
        "Відсутність або недієздатність особи не залишає її без процесуального представництва у необхідному обсязі.",
      foreignersCase:
        "У справі іноземця невідомого місця перебування або особи без здатності до дій organ має забезпечити представництво, а не вести справу так, ніби сторона може діяти сама.",
    },
  ],
})
