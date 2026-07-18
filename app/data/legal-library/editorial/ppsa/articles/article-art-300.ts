import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-300",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У питаннях міжнародного процесуального обігу, не врегульованих p.p.s.a., відповідно застосовують правила про устрій загальних судів та норми KPC щодо міжнародного цивільного провадження.",
          sourceLocator: "Art. 300",
        },
      ],
      summary:
        "Стаття дає допоміжні джерела для прогалин у транскордонній процедурі.",
      rules: [
        {
          locator: "Art. 300",
          explanation:
            "Спершу шукайте спеціальне правило p.p.s.a. або міжнародного договору. Лише реальну прогалину заповнюйте сумісною нормою KPC чи правилом устрою судів.",
        },
      ],
      legalEffect:
        "Відповідне застосування не переносить цивільну процедуру цілком на адміністративну справу.",
      foreignersCase:
        "У справі іноземця про міжнародне вручення або доказ спочатку визначте спеціальний адміністративний режим, а вже потім звертайтеся до KPC.",
    },
  ],
})
