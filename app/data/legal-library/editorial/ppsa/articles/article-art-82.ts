import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-82",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Bieg terminu, встановленого sąd або przewodniczący (termin sądowy), починається від ogłoszenie postanowienie чи zarządzenie, а коли ustawa передбачає doręczenie з urzędu — від doręczenie.",
          sourceLocator: "Art. 82",
        },
      ],
      summary:
        "Початок terminu sądowy залежить від оголошення розпорядження або від вручення, якщо закон вимагає doręczenie з urzędu.",
      rules: [
        {
          locator: "Art. 82",
          explanation:
            "З’ясуйте, чи рішення було ogłoszone, чи для нього передбачено doręczenie з urzędu; від цього залежить початок строку.",
        },
      ],
      legalEffect:
        "Стаття визначає момент початку судового строку, але не його тривалість і не правила відновлення.",
      foreignersCase:
        "Для строку на реакцію в суді у справі pobyt порівняйте дату ogłoszenie та дату doręczenie у протоколі й доказі вручення.",
    },
  ]),
})
