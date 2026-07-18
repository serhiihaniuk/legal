import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-365",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("365", "Art. 365")} визначає, що провадження за ${foreignersLaw.article("362", "Art. 362")} починається на wniosek Komendant Główny Straży Granicznej до centralny organ іншої держави ЄС; wniosek містить дані або інформацію з ${foreignersLaw.article("13", "Art. 13")}, а форма встановлюється rozporządzenie.`,
          sourceLocator: "Art. 365 ust. 1–4",
        },
      ],
      summary:
        "Польський головний комендант SG офіційно звертається до центрального органу транзитної держави, використовуючи встановлені законом дані та форму.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation: foreignersLaw.text`Wniosek подає Komendant Główny до центрального органу іншої держави ЄС і включає дані іноземця або інформацію, визначену ${foreignersLaw.article("13", "Art. 13")}.`,
        },
        {
          locator: "ust. 4",
          explanation:
            "Міністр внутрішніх справ визначає wzór formularza, враховуючи належну організацію транзиту та безпеку доправлення.",
        },
      ],
      legalEffect:
        "Норма визначає канал і мінімальний зміст міждержавного запиту; вона не замінює рішення іншої держави про zezwolenie.",
      foreignersCase: foreignersLaw.text`Уточніть, чи wniosek подано компетентним органом, до якої держави й коли; персональні дані перевіряйте за документами та ${foreignersLaw.article("13", "Art. 13")}.`,
    },
  ],
})
