import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-32",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 32 встановлює: «W postępowaniu w sprawie sądowoadministracyjnej stronami są skarżący oraz organ, którego działanie, bezczynność lub przewlekłe prowadzenie postępowania jest przedmiotem skargi».",
          sourceLocator: "Art. 32",
        },
      ],
      summary:
        "У справі sądowoadministracyjnej сторонами є skarżący та орган, чия дія, бездіяльність або przewlekłe prowadzenie postępowania є предметом skargi.",
      rules: [
        {
          locator: "Art. 32",
          explanation:
            "Для визначення сторін треба назвати того, хто подав skarga, і конкретний organ, діяльність або bezczynność якого оскаржується.",
        },
      ],
      legalEffect:
        "Стаття окреслює базову пару сторін за предметом skargi; вона не вирішує питання участі інших осіб або результату контролю.",
      foreignersCase:
        "У skarga іноземця проти рішення про pobyt точно зазначте skarżący та organ, що видав оскаржене рішення або допустив bezczynność; не замінюйте орган назвою установи без перевірки.",
    },
  ]),
})
