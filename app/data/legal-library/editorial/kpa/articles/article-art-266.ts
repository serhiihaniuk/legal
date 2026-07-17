import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "266",
      provisionId: "kpa-art-266",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Стаття покладає на працівника органу обов'язок відшкодувати витрати, спричинені його помилковим викликом сторони за ${kpaLaw.article("56", "art. 56 § 1")}. Рішення про обов'язок і стягнення з працівника відбуваються в адміністративному порядку.`,
      rules: [
        {
          locator: "перше речення",
          explanation:
            "Працівник, винний у błędnym wezwaniu strony, повертає витрати, які через це виникли.",
        },
        {
          locator: "друге речення",
          explanation:
            "Orzekanie і ściąganie należności від такого працівника здійснюються w trybie administracyjnym.",
        },
      ],
      legalEffect:
        "Витрати помилкового виклику не повинні остаточно залишатися на стороні; закон спрямовує фінансову відповідальність на винного працівника.",
      foreignersCase: kpaLaw.text`Якщо іноземця помилково викликали до urzędu і через це виникли витрати, ${kpaLaw.article("266", "art. 266")} стосується саме витрат błędnego wezwania за ${kpaLaw.article("56", "art. 56 § 1")}, а не кожного незручного або спірного wezwania у справі.`,
    },
  ],
})
