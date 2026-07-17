import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-270",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 270 встановлює, що у випадках, передбачених Dział VII, можна вимагати wznowienie postępowania, яке завершено prawomocne orzeczenie.",
          sourceLocator: "Art. 270",
        },
      ],
      summary:
        "Art. 270 відкриває можливість wznowienie лише для остаточно завершеного провадження і лише в передбачених Dział VII випадках.",
      rules: [
        {
          locator: "Art. 270",
          explanation:
            "Перевірте дві передумови: чи postępowanie завершене prawomocne orzeczenie і чи підстава прямо передбачена Dział VII, а не просто випливає з незгоди з результатом.",
        },
      ],
      legalEffect:
        "Норма створює загальну рамку для żądanie wznowienia, але не робить wznowienie автоматичним: конкретні підстави, właściwy sąd, строки та зміст skarga визначаються наступними статтями Dział VII.",
      foreignersCase:
        "У справі іноземця про pobyt спочатку ідентифікуйте prawomocne orzeczenie та конкретну ustawowa podstawa wznowienia. Сам факт несприятливого wyrok не дає права на повторний розгляд і не поновлює автоматично дозвіл на перебування.",
    },
  ]),
})
