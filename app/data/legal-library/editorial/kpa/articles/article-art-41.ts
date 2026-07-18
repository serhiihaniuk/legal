import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "41",
      provisionId: "kpa-art-41",
      reviewStatus: "reviewed",
      summary:
        "Стаття зобов’язує сторону, її przedstawiciela і pełnomocnika повідомляти organ про кожну зміну адреси під час провадження.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Обов’язок aktualizacji адреси діє протягом усього провадження.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо адресу не оновлено, doręczenie на попередню адресу має правовий наслідок.",
        },
      ],
      legalEffect:
        "Неповідомлення про зміну адреси переносить на сторону ризик skutecznego doręczenia за старою адресою.",
      foreignersCase:
        "Після переїзду іноземець або його pełnomocnik має повідомити urząd у межах конкретної справи; зміна даних в іншому реєстрі не описана цією статтею як заміна такого повідомлення.",
    },
  ],
})
