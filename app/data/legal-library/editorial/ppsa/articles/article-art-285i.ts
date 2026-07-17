import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-285i",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285i встановлює, що NSA розглядає skargę o stwierdzenie niezgodności z prawem prawomocnego orzeczenia у складі трьох sędziów; sędzia, який брав участь у видачі оскарженого orzeczenie, виключений від розгляду цієї skarga.",
          sourceLocator: "Art. 285i § 1–2",
        },
      ],
      summary:
        "Стаття визначає склад NSA для цього засобу та виключає з нього sędziego, який уже брав участь у оскарженому orzeczenie.",
      rules: [
        {
          locator: "§ 1",
          explanation: "Типовий склад для розгляду skarga — три sędziowie NSA.",
        },
        {
          locator: "§ 2",
          explanation:
            "Зіставте склад суду з особами, які брали участь у видачі orzeczenie, що оскаржується.",
        },
      ],
      legalEffect:
        "Норма регулює склад і неупередженість суду, але сама не визначає результат skarga.",
      foreignersCase:
        "Якщо іноземець оскаржує prawomocne orzeczenie у справі про pobyt, перевірте склад NSA та участь sędziów у попередньому orzeczenie лише як конкретне процесуальне питання.",
    },
  ]),
})
