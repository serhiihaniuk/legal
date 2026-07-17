import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-14a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 14a встановлює: «Jeżeli wojewódzki sąd administracyjny nie może z powodu przeszkody rozpoznać sprawy».",
          sourceLocator: "Art. 14a",
        },
      ],
      summary:
        "Якщо WSA через перешкоду не може розглянути справу або виконати іншу дію, NSA може визначити інший WSA у складі трьох суддів на закритому засіданні.",
      rules: [
        {
          locator: "Art. 14a",
          explanation:
            "Потрібні дві обставини з тексту: WSA не може діяти через przeszkoda, а NSA визначає інший WSA на posiedzeniu niejawnym у складі трьох суддів.",
        },
      ],
      legalEffect:
        "Норма забезпечує заміну WSA у визначеній ситуації; вона не означає, що сторона може вільно обрати інший суд.",
      foreignersCase:
        "Якщо WSA у справі про pobyt повідомляє про перешкоду для розгляду, перевірте, чи саме NSA визначив інший WSA та в якій формі це оформлено.",
    },
  ]),
})
