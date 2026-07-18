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
      provisionId: "ustawa-o-cudzoziemcach-art-53",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("53", "Art. 53")} ust. 1 вимагає від запрошуючого формуляр заяви, докази коштів для перебування і повернення або транзиту, а також tytuł prawny до житла чи доказ іншого zakwaterowanie. За ust. 2 доказ коштів на повернення вважається виконаним, якщо запрошуючий покаже квиток cudzoziemiec назад.`,
          sourceLocator: "Art. 53 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Перелік документів стосується можливості запрошуючого виконати фінансові й житлові зобов’язання; він не доводить сам по собі право cudzoziemiec на в’їзд або роботу.",
          sourceLocator: "Art. 53 ust. 1 pkt 2–3",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("53", "Art. 53")} встановлює доказовий комплект для wpis zaproszenie до ewidencji: формуляр, фінансові документи та документ про житло. Для витрат на повернення достатнім може бути доказ зворотного квитка cudzoziemiec.`,
      rules: [
        {
          locator: "Art. 53 ust. 1 pkt 1–2",
          explanation:
            "Потрібні заява і документи, що підтверджують можливість покрити витрати pobyt, zakwaterowanie, wyżywienie та повернення або przejazd tranzytowy.",
        },
        {
          locator: "Art. 53 ust. 1 pkt 3",
          explanation:
            "Якщо житло — локал запрошуючого, подається tytuł prawny; якщо ні, потрібен документ про можливість забезпечити cudzoziemiec іншим місцем.",
        },
        {
          locator: "Art. 53 ust. 2",
          explanation:
            "Власний bilet powrotny cudzoziemiec є альтернативним підтвердженням можливості покрити витрати на повернення до państwo pochodzenia або zamieszkania.",
        },
      ],
      legalEffect: foreignersLaw.text`Неподання або недостатність доказів може перешкодити wpis zaproszenie, зокрема через ${foreignersLaw.article("50", "Art. 50")} ust. 1 pkt 4–5. Стаття не перетворює фінансове підтвердження на дозвіл на pobyt чи pracę.`,
      foreignersCase: foreignersLaw.text`Складіть таблицю витрат і підтверджень, перевірте право на вказане житло та строк квитка; кожен документ прив’яжіть до konkretne zobowiązanie з ${foreignersLaw.article("51", "Art. 51")} ust. 2 pkt 3.`,
    },
  ],
})
