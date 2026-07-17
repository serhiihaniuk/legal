import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "23",
      provisionId: "kpa-art-23",
      reviewStatus: "reviewed",
      summary:
        "Стаття обмежує дії органу до моменту вирішення спору про właściwość лише невідкладними діями в суспільному або слушному інтересі громадян.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Орган на території виникнення справи може виконати тільки czynności niecierpiące zwłoki і повідомляє про них organ, який вирішує спір.",
        },
      ],
      legalEffect:
        "До визначення właściwości звичайний розгляд не продовжується, але невідкладні інтереси не залишаються без захисту.",
      foreignersCase:
        "У справі іноземця це загальне правило не дозволяє одному зі спірних urzędów повністю вирішити справу, але допускає необхідну невідкладну дію.",
    },
  ],
})
