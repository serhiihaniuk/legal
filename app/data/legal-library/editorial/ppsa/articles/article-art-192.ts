import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-192",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Провадження перед NSA, крім прямо названих законом випадків, зупиняється лише за спільною заявою сторін.",
          sourceLocator: "Art. 192",
        },
      ],
      summary:
        "Стаття обмежує факультативне зупинення касаційного провадження волею всіх сторін.",
      rules: [
        {
          locator: "Art. 192",
          explanation:
            "Якщо підстава не належить до спеціальних винятків, односторонньої заяви недостатньо; потрібна узгоджена заява сторін (wniosek stron).",
        },
      ],
      legalEffect:
        "Сам факт паралельних переговорів або очікування дії органу не зупиняє провадження NSA.",
      foreignersCase:
        "У справі про перебування не припускайте паузу через листування з органом. Перевірте спеціальну підставу або отримайте спільну заяву сторін.",
    },
  ],
})
