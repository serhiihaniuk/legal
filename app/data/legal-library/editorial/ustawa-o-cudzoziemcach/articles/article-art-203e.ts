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
      provisionId: "ustawa-o-cudzoziemcach-art-203e",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("203e", "Art. 203e")} зобов’язує wojewodę викликати заявника на pobyt stały до особистої явки щонайменше через 7 днів від doręczenia wezwania для документа тотожності, відбитків пальців і зразка підпису.`,
          sourceLocator: "Art. 203e ust. 1–2",
        },
      ],
      summary:
        "Після електронного подання настає особистий етап перевірки тотожності й біометрії. Його не слід плутати з доказуванням матеріальної підстави pobytu stałego.",
      rules: [
        {
          locator: "Art. 203e ust. 1",
          explanation:
            "Мінімальні 7 днів рахують від вручення wezwania. Під час явки заявник показує чинний документ, здає odciski linii papilarnych і wzór podpisu, якщо не діє законний виняток.",
        },
        {
          locator: "Art. 203e ust. 2",
          explanation: foreignersLaw.text`Одне wezwanie може одночасно вимагати усунути braki formalne, сплатити opłatę skarbową або подати докази за ${foreignersLaw.article("203f", "Art. 203f")}. Кожна вимога зберігає свій предмет і строк.`,
        },
      ],
      legalEffect: foreignersLaw.text`Належний виклик створює процесуальний обов’язок особистої дії; невиконання може призвести до umorzenia лише за умов ${foreignersLaw.article("203i", "Art. 203i")}.`,
      foreignersCase:
        "Від дати doręczenia порахуйте строк і розпишіть усі частини wezwania окремо. Перед візитом перевірте винятки за віком або станом здоров’я та документи, що їх підтверджують.",
    },
  ],
})
