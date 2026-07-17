import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-277",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 277 встановлює тримісячний строк для wniesienia skarga o wznowienie: він рахується від дня, коли сторона дізналася про підставу wznowienie, а при pozbawienie możność działania або brak należytej reprezentacji — від дня, коли про orzeczenie дізналася сторона, її орган або przedstawiciel ustawowy.",
          sourceLocator: "Art. 277",
        },
      ],
      summary:
        "Норма прив’язує тримісячний строк skarga o wznowienie до знання про підставу або, у спеціальних випадках, до знання про саме orzeczenie.",
      rules: [
        {
          locator: "Art. 277",
          explanation:
            "Зафіксуйте подію, від якої починається строк: знання про підставу wznowienie або знання про orzeczenie відповідним учасником, органом чи przedstawiciel ustawowy.",
        },
      ],
      legalEffect:
        "Пропуск тримісячного строку може вплинути на допустимість skarga o wznowienie; дата знання має підтверджуватися матеріалами справи, а не припущенням.",
      foreignersCase:
        "Для іноземця зафіксуйте документами, коли strona дізналася про podstawę wznowienia, а у випадках позбавлення możność działania або brak należytej reprezentacji — коли відповідна strona, її organ чи przedstawiciel ustawowy дізналися про orzeczenie. Якщо посилаєтеся на doręczenie або отримання, збережіть відповідне підтвердження; не рахуйте строк лише від дати, надрукованої на orzeczenie.",
    },
  ]),
})
