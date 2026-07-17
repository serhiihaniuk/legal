import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-241",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("241", "Art. 241")} визначає, що звільнення від обов’язку сплати kosztów sądowych, передбачене законом або postanowienie sądu administracyjnego без визначення його обсягу, означає повне звільнення і від opłat sądowych, і від ponoszenia wydatków.`,
          sourceLocator: "Art. 241",
        },
      ],
      summary:
        "Якщо закон або postanowienie звільняє від kosztów sądowych без зазначення обсягу, це означає повне звільнення від opłat і wydatków.",
      rules: [
        {
          locator: "Art. 241",
          explanation:
            "Спочатку знайдіть джерело звільнення — закон або postanowienie — і перевірте, чи справді в ньому не визначено zakres.",
        },
      ],
      legalEffect:
        "Норма тлумачить мовчання про обсяг як повне звільнення, але не розширює часткове звільнення, якщо його межі прямо встановлені.",
      foreignersCase:
        "У справі іноземця прочитайте повний текст postanowienie o zwolnieniu: відсутність обсягу має інший наслідок, ніж прямо зазначене звільнення лише від opłat або wydatków.",
    },
  ],
})
