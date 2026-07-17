import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-72",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо адресата немає в mieszkanie, pismo може бути вручено дорослому domownik, а за його відсутності — zarządca або dozorca без sprzeczne interesy, якщо вони прийнялися передати pismo; на роботі — уповноваженій особі.",
          sourceLocator: "Art. 72 § 1–2",
        },
      ],
      summary:
        "За відсутності адресата допускається замінне вручення визначеним особам за умов відсутності конфлікту інтересів і згоди прийняти pismo.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Перевірте повноліття domownik, відсутність sprzeczne interesy та його згоду; лише тоді можливе таке doręczenie.",
        },
        {
          locator: "§ 2",
          explanation:
            "У місці pracy pismo може отримати особа, уповноважена на odbiór pism.",
        },
      ],
      legalEffect:
        "Замінне doręczenie може мати процесуальний ефект, але його фактичні умови мають бути зазначені в доказі вручення.",
      foreignersCase:
        "Не ігноруйте pismo, отримане членом сім’ї cudzoziemca: перевірте дані doręczenia, дату та можливий конфлікт інтересів.",
    },
  ]),
})
