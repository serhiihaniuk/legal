import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")

const RODO_URL = "https://eur-lex.europa.eu/eli/reg/2016/679/oj"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "231",
      provisionId: "kpa-art-231",
      reviewStatus: "reviewed",
      summary:
        "Стаття зобов'язує орган, який отримав skargę поза своєю компетенцією, швидко передати її належному органу або вказати цей орган скаржнику. Разом із повідомленням про передачу надається інформація RODO щодо даних, які обробляє орган-передавач.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Орган, який не має компетенції розглянути скаргу (organ niewłaściwy), невідкладно, не пізніше семи днів, передає її належному органові (właściwy organ) й повідомляє скаржника або вказує йому належний орган.",
        },
        {
          locator: "§ 2",
          explanation: kpaLaw.text`До повідомлення про передачу додається інформація з ${kpaLaw.external("art. 13 RODO", RODO_URL)} ust. 1 i 2 RODO в обсязі даних, які обробляє передавальний орган.`,
        },
      ],
      legalEffect:
        "Помилка адресата не повинна залишити skargę без руху; протягом семи днів орган має забезпечити правильний маршрут або чітко його вказати.",
      foreignersCase:
        "Якщо іноземець помилково подав skargę не тому органу, він має отримати повідомлення про передачу або точну вказівку адресата, а не лише відповідь, що орган не є właściwy.",
    },
  ],
})
