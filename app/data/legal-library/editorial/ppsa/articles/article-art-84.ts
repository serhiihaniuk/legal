import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-84",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Przewodniczący може з важливої причини продовжити termin sądowy з urzędu або на wniosek сторони, поданий до спливу строку, а також скоротити termin sądowy на wniosek сторони.",
          sourceLocator: "Art. 84",
        },
      ],
      summary:
        "Зміна terminu sądowy можлива в межах статті: продовження потребує ważna przyczyna, а wniosek має бути своєчасним.",
      rules: [
        {
          locator: "Art. 84",
          explanation:
            "Для продовження покажіть ważna przyczyna; przewodniczący може діяти з urzędu або за wniosek.",
        },
        {
          locator: "Art. 84",
          explanation:
            "Wniosek про продовження подається до спливу terminu, а скорочення можливе на wniosek сторони.",
        },
      ],
      legalEffect:
        "Стаття стосується terminu sądowy і не дає загального дозволу продовжувати кожен законний строк.",
      foreignersCase:
        "Якщо сторона у справі pobyt не встигає виконати судове wezwanie, подайте обґрунтований wniosek до спливу terminu і не припускайте автоматичного продовження.",
    },
  ]),
})
