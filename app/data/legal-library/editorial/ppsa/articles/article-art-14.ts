import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-14",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 14 передбачає: «Wojewódzki sąd administracyjny właściwy w chwili wniesienia skargi pozostaje właściwy aż do ukończenia postępowania».",
          sourceLocator: "Art. 14",
        },
      ],
      summary:
        "WSA, який був właściwy на момент wniesienia skargi, зберігає właściwość до завершення провадження, навіть якщо підстава właściwości зміниться, якщо спеціальний припис не встановлює інше.",
      rules: [
        {
          locator: "Art. 14",
          explanation:
            "Вирішальним моментом є właściwość у chwili wniesienia skargi; подальша зміна її підстави не змінює суд до ukończenia postępowania, якщо немає спеціального правила.",
        },
      ],
      legalEffect:
        "Стаття стабілізує територіальну właściwość після подання skargi, але прямо залишає виняток для спеціального припису.",
      foreignersCase:
        "У справі іноземця зафіксуйте, який WSA був właściwy в момент wniesienia skargi; зміну адреси органу під час провадження не трактуйте як автоматичну зміну суду.",
    },
  ]),
})
