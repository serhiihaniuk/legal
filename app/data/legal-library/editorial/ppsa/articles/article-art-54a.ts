import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-54a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо до передачі skarga іншої сторони до sąd хтось подав wniosek o ponowne rozpatrzenie, орган розглядає skarga як такий wniosek; після передачі орган повідомляє sąd, який повертає skarga й akta органу.",
          sourceLocator: "Art. 54a § 1–2",
        },
      ],
      summary:
        "Паралельний wniosek o ponowne rozpatrzenie змінює шлях уже поданої skarga і може повернути матеріали до органу.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "До передачі sąd skarga розглядається як wniosek, а сторона отримує про це повідомлення.",
        },
        {
          locator: "§ 2",
          explanation:
            "Після передачі орган повідомляє sąd, а sąd передає skarga з aktami органу.",
        },
      ],
      legalEffect:
        "Норма координує два процесуальні шляхи, але сама не встановлює результату wniosek o ponowne rozpatrzenie.",
      foreignersCase:
        "Якщо в справі про pobyt одночасно з’явилися skarga та wniosek o ponowne rozpatrzenie, перевірте, чи skarga вже передана sąd.",
    },
  ]),
})
