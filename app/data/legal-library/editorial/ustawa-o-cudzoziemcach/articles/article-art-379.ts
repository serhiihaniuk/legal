import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-379",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Komendant Główny Straży Granicznej призначає punkty kontaktowe, з якими іноземні funkcjonariusze іншої держави-члена можуть співпрацювати під час tranzyt для обміну інформацією.",
          sourceLocator: "Art. 379",
        },
        {
          kind: "practical-inference",
          text: "Punkty kontaktowe є каналом оперативної координації та обміну інформацією, а не окремим органом для розгляду заяви про pobyt.",
          sourceLocator: "Art. 379",
        },
      ],
      summary:
        "Стаття організує контакт між польськими службами та іноземним супроводом під час повітряного tranzyt.",
      rules: [
        {
          locator: "Art. 379",
          explanation:
            "Punkty kontaktowe визначає Komendant Główny Straży Granicznej; співпраця стосується обміну інформацією про tranzyt.",
        },
      ],
      legalEffect:
        "Норма забезпечує організаційний механізм обміну інформацією між службами. Вона не створює нового права іноземця на в’їзд, pobyt або odwołanie.",
      foreignersCase:
        "Коли виникла розбіжність у маршруті чи документах під час tranzyt, встановіть, який wyznaczony punkt kontaktowy відповідає за координацію і які відомості були передані.",
    },
  ]),
})
