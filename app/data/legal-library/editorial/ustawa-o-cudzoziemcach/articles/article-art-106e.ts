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
      provisionId: "ustawa-o-cudzoziemcach-art-106e",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("106e", "Art. 106e")} зобов’язує wojewodę викликати заявника до особистої явки щонайменше через 7 днів від doręczenia wezwania, щоб показати документ, здати odciski linii papilarnych і wzór podpisu.`,
          sourceLocator: "Art. 106e ust. 1–2",
        },
      ],
      summary:
        "Електронне подання не скасовує особистого етапу. Орган використовує явку, щоб звірити тотожність і отримати біометричні дані та зразок підпису.",
      rules: [
        {
          locator: "Art. 106e ust. 1",
          explanation:
            "Семиденний мінімум рахується від вручення wezwania, а не від дати його складення. У виклику мають бути зрозумілі строк, місце та три цілі явки.",
        },
        {
          locator: "Art. 106e ust. 2",
          explanation: foreignersLaw.text`Орган може одним листом поєднати цю явку з усуненням braków formalnych, сплатою opłaty skarbowej або поданням доказів за ${foreignersLaw.article("106f", "Art. 106f")}. Для кожної вимоги треба окремо встановити її строк і наслідок невиконання.`,
        },
      ],
      legalEffect: foreignersLaw.text`Належне wezwanie відкриває особистий етап провадження; його невиконання може згодом призвести до umorzenia postępowania на підставі ${foreignersLaw.article("106i", "Art. 106i")}.`,
      foreignersCase:
        "Після отримання wezwania перевірте дату doręczenia, усі одночасно поставлені вимоги та винятки з особистої явки. Не зводьте весь лист лише до терміну візиту.",
    },
  ],
})
