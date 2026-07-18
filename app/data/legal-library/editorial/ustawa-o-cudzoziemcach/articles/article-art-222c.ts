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
      provisionId: "ustawa-o-cudzoziemcach-art-222c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`У провадженні про надання або cofnięcie zezwolenia na pobyt rezydenta długoterminowego UE єдиною стороною є відповідно іноземець із ${foreignersLaw.article("211", "Art. 211")} або ${foreignersLaw.article("215", "Art. 215")}.`,
          sourceLocator: "Art. 222c",
        },
      ],
      summary:
        "Стаття прямо обмежує коло сторін провадження однією особою — іноземцем, статус якого надають або відкликають.",
      rules: [
        {
          locator: "Art. 222c",
          explanation:
            "Член сім’ї, роботодавець, власник житла чи інша зацікавлена особа не стає стороною лише тому, що результат справи фактично її стосується.",
        },
      ],
      legalEffect:
        "Процесуальні права сторони — доступ до матеріалів, подання заяв і оскарження — у цьому провадженні належать виключно іноземцеві, з урахуванням правил представництва.",
      foreignersCase:
        "На початку справи визначте іноземця як сторону та окремо перевірте, чи інша особа діє лише як представник із належним повноваженням, а не від власного імені.",
    },
  ],
})
