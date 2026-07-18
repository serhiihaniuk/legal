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
      article: "65",
      provisionId: "kpa-art-65",
      reviewStatus: "reviewed",
      summary:
        "Стаття зобов’язує niewłaściwy organ негайно передати podanie właściwemu organowi та захищає строк, якщо заявник помилився з адресатом.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Niewłaściwy organ niezwłocznie передає podanie właściwemu organowi і повідомляє про це заявника через uzasadnione zawiadomienie.",
        },
        {
          locator: "§ 1a",
          explanation:
            "До zawiadomienia додається актуальна інформація про обробку персональних даних, якщо заявник уже її не має.",
        },
        {
          locator: "§ 2",
          explanation:
            "Podanie, внесене до спливу строку до niewłaściwego organu, вважається внесеним своєчасно.",
        },
      ],
      legalEffect:
        "Помилка у właściwości не повинна знищувати своєчасність подання, якщо воно надійшло до будь-якого organu до кінця строку.",
      foreignersCase: kpaLaw.text`Якщо процесуальне письмо іноземця вчасно потрапило не до того urzędu, треба зафіксувати первинну дату і передачу за ${kpaLaw.article("65", "art. 65")}.`,
    },
  ],
})
