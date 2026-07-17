import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-82",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 82 дозволяє minister dofinansować із Fundusz Pracy кошти польських курсів для легально перебуваючих cudzoziemiec із визначеним dyplom лікаря або медсестри; встановлює межі 3000 zł за навчання і максимум три навчання.",
          sourceLocator: "Art. 82 ust. 1–10",
        },
      ],
      summary:
        "Механізм адресований лише особам із конкретними дипломами та за wniosek відповідної okręgowa izba. Izba укладає umowa, звітує про учасників і витрати, повертає надлишок або всю допомогу, якщо навчання не відбулося.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Dofinansowanie стосується legalно перебуваючих лікарів і медсестер із названими дипломами; максимум — 3000 zł для однієї особи за одне szkolenie і три szkolenia.",
        },
        {
          locator: "ust. 3–5",
          explanation:
            "Okręgowa izba може подавати wniosek не частіше разу на місяць із даними про установу, строки, години, кошти й кількість осіб; за позитивного розгляду minister укладає umowa.",
        },
        {
          locator: "ust. 6–10",
          explanation:
            "Після навчання izba подає sprawozdanie, zaświadczenia та докази витрат; повертає надлишок або фінансування, якщо szkolenie не відбулося, а неналежне використання підпадає під art. 169 фінансів publicznych.",
        },
      ],
      legalEffect:
        "Можливість dofinansowanie не є індивідуальною гарантованою виплатою і не замінює правил визнання кваліфікації чи права на роботу.",
      foreignersCase:
        "Перевірте legalny pobyt, вид dyplom і участь відповідної izba. Cudzoziemiec має отримати підтвердження ukończenia, але питання професійного допуску вирішується окремими правилами.",
    },
  ]),
})
