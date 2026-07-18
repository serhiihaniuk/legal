import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-289",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Суд починає провадження з відновлення матеріалів з власної ініціативи або на заяву сторони. Якщо втрата чи знищення сталися через непереборну силу, суд діє лише на заяву сторони.",
          sourceLocator: "Art. 289 § 1–2",
        },
      ],
      summary:
        "Стаття визначає, хто може запустити відновлення, і виняток для непереборної сили (siła wyższa).",
      rules: [
        {
          locator: "Art. 289 § 1–2",
          explanation:
            "У заяві опишіть подію втрати та додайте відомі докази. Якщо причиною була непереборна сила, ініціатива сторони є необхідною.",
        },
      ],
      legalEffect:
        "Після припинення дії непереборної сили (siła wyższa) суд без заяви не почне провадження самостійно.",
      foreignersCase:
        "Іноземець не повинен чекати на службову ініціативу, якщо матеріали знищено пожежею чи іншою непереборною подією; треба подати формальну заяву.",
    },
  ],
})
