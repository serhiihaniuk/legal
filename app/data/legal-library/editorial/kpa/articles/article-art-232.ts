import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "232",
      provisionId: "kpa-art-232",
      reviewStatus: "reviewed",
      summary:
        "Норма дозволяє компетентному органу доручити розгляд skargi нижчому органу або службовому керівнику працівника, але забороняє передавати скаргу органу, діяльність якого сама оскаржується. Скаржника повідомляють про передачу.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Skargę можна передати organowi niższego stopnia, якщо вона не містить закидів щодо діяльності саме цього органу.",
        },
        {
          locator: "§ 2",
          explanation:
            "Скаргу на працівника можна передати його przełożonemu służbowemu з обов'язком повідомити компетентний орган про спосіб розгляду.",
        },
        {
          locator: "§ 3",
          explanation: "Про передачу одночасно повідомляють skarżącego.",
        },
      ],
      legalEffect: kpaLaw.text`Розгляд може бути делегований ближчому органу або керівнику, але конфлікт інтересів, прямо охоплений ${kpaLaw.article("232", "§ 1")}, блокує таку передачу.`,
      foreignersCase:
        "Скаргу іноземця на конкретного працівника можуть передати його керівнику, але скаргу на діяльність цілого відділу не повинні віддавати цьому самому відділу, якщо закиди стосуються його роботи.",
    },
  ],
})
