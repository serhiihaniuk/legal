import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-44",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 44 § 1 передбачає: «Sąd może dopuścić tymczasowo do podjęcia naglącej czynności osobę niemogącą przedstawić pełnomocnictwa».",
          sourceLocator: "Art. 44 § 1",
        },
      ],
      summary:
        "Суд може тимчасово допустити до nagląca czynność особу, яка не може подати pełnomocnictwo, але одночасно призначає termin для подання доручення або zatwierdzenie дії стороною.",
      rules: [
        {
          locator: "Art. 44 § 1",
          explanation:
            "Тимчасовий допуск є можливістю суду для nagląca czynność, коли особа не може представити pełnomocnictwo.",
        },
        {
          locator: "Art. 44 § 2",
          explanation:
            "Суд одночасно визначає termin для подання доручення або zatwierdzenie дії; якщо termin сплив без результату, суд pominie czynności procesowe цієї особи.",
        },
      ],
      legalEffect:
        "Норма дозволяє не блокувати невідкладну дію одразу, але пов’язує тимчасовий допуск із виконанням вимоги в призначений судом termin.",
      foreignersCase:
        "Якщо представник іноземця мусить подати nagląca czynność без документа, перевірте окреме рішення суду та дотримайтеся саме призначеного в ньому terminu для pełnomocnictwo або zatwierdzenie.",
    },
  ]),
})
