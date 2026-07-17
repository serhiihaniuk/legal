import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-30",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 30 § 1 передбачає: «sąd na wniosek strony przeciwnej ustanowi kuratora, jeżeli strona ta podejmuje przeciwko drugiej stronie czynność niecierpiącą zwłoki».",
          sourceLocator: "Art. 30 § 1",
        },
      ],
      summary:
        "Якщо сторона без zdolność procesowa або без органу представництва виконує щодо іншої сторони невідкладну дію, суд на wniosek протилежної сторони установлює kurator; postanowienie може бути винесене на posiedzeniu niejawnym.",
      rules: [
        {
          locator: "Art. 30 § 1",
          explanation:
            "Для ustanowienie kurator текст вимагає відсутності потрібного представника або органу, wniosek протилежної сторони та czynność niecierpiąca zwłoki.",
        },
        {
          locator: "Art. 30 § 2",
          explanation:
            "Postanowienie про ustanowienie kurator може видати також referendarz sądowy.",
        },
      ],
      legalEffect:
        "Стаття дає судовий механізм тимчасового представництва для невідкладної процесуальної дії, але не означає автоматичного призначення kurator у кожній справі.",
      foreignersCase:
        "Якщо у справі іноземця відсутній потрібний представник сторони, зафіксуйте конкретну невідкладну дію і перевірте, хто має подати wniosek про kurator.",
    },
  ]),
})
