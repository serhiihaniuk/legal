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
      provisionId: "ustawa-o-cudzoziemcach-art-222d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Рішення про надання zezwolenia має бути видане протягом 6 місяців. Строк починається від пізнішої з двох подій: формально повної заяви або усунення її недоліків та подання документів із ${foreignersLaw.article("219f", "Art. 219f")} або безрезультатного спливу строку на їх подання.`,
          sourceLocator: "Art. 222d ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "Провадження за odwołaniem має завершитися протягом 90 днів. Якщо odwołanie має недоліки, цей строк починається з дня їх усунення.",
          sourceLocator: "Art. 222d ust. 3–4",
        },
      ],
      summary:
        "Стаття встановлює окремі строки для першої та другої інстанцій і спеціально визначає початкову дату кожного з них.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Шість місяців не завжди рахують від першого відправлення заяви. Треба знайти останню з подій, названих у ust. 2, і лише від неї вести строк.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Для odwołania діє 90-денний строк. Формальні недоліки odwołania зміщують його початок на день належного доповнення.",
        },
      ],
      legalEffect: foreignersLaw.text`Норма дає контрольну дату для оцінки своєчасності рішення, але її не можна визначити без історії braków formalnych і wezwania за ${foreignersLaw.article("219f", "Art. 219f")}.`,
      foreignersCase:
        "Побудуйте хронологію: подання, усунення braków formalnych, wezwanie про докази, подання документів або сплив строку, а для другої інстанції — подання й доповнення odwołania.",
    },
  ],
})
