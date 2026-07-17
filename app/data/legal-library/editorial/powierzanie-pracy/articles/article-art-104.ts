import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-104",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 104 ust. 1–3 дозволяє від дня набрання чинності новою ustawy подавати старі oświadczenia, zaświadczenia про wpis щодо pracy sezonowej та zezwolenia na pracę у визначених провадженнях про wydanie wizy до спливу вказаного в них періоду zatrudnienia.",
          sourceLocator: "Art. 104 ust. 1–3",
        },
        {
          kind: "statute-text",
          text: "Oświadczenia стосуються wizy для цілі з art. 60 ust. 1 pkt 5, zaświadczenia — pkt 5a, а zezwolenia na pracę — pkt 6 ustawy, зміненої в art. 96.",
          sourceLocator: "Art. 104 ust. 1–3",
        },
        {
          kind: "practical-inference",
          text: "Можливість подати документ у провадженні про wiza означає лише, що перехідна норма дозволяє його подання до визначеної дати, а не гарантує видачу wizy або право перебування.",
          sourceLocator: "Art. 104 ust. 1–3",
        },
      ],
      summary:
        "Перехідна норма тимчасово зберігає можливість подання старих робочих документів у визначених провадженнях про wiza.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Oświadczenie, внесене до ewidencji за art. 88z ust. 2 старої ustawy, можна подати у справі про wiza для цілі art. 60 ust. 1 pkt 5 до кінця періоду zatrudnienia, вказаного в oświadczeniu.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Zaświadczenie про wpis до ewidencji wniosków щодо pracy sezonowej можна подати для цілі art. 60 ust. 1 pkt 5a до кінця зазначеного періоду zatrudnienia.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Zezwolenie na pracę за старою ustawy можна подати для цілі art. 60 ust. 1 pkt 6 до кінця періоду zatrudnienia, вказаного в дозволі.",
        },
      ],
      legalEffect:
        "Норма зберігає обмежене використання старого робочого документа у справі про wiza. Вона не замінює перевірку умов видачі wizy, legalnego pobytu або права виконувати конкретну роботу після спливу вказаного періоду.",
      foreignersCase:
        "Зіставте вид документа, його стару правову підставу, cel wizy та період zatrudnienia. Перевірте, чи звернення відбулося в межах цього періоду; не робіть із прийняття документа висновку про позитивне рішення або дозвіл на роботу.",
    },
  ]),
})
