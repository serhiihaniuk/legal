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
      provisionId: "ustawa-o-cudzoziemcach-art-134",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("134", "Art. 134")} ust. 1–3 зобов’язують cudzoziemca з zezwoleniem за ${foreignersLaw.article("127", "art. 127")} письмово повідомляти wojewodę протягом 15 dni roboczych про втрату роботи, зміну podmiotu та припинення виконання умов; ust. 1a і 3 визначають адресата при рішенні Szef Urzędu в другій інстанції.`,
          sourceLocator: "Art. 134 ust. 1, ust. 1a, ust. 2 pkt 1–2, ust. 3",
        },
      ],
      summary:
        "Для Niebieskiej Karty UE стаття встановлює декілька повідомлень із 15-денним робочим строком і визначає адресата при рішенні другої інстанції.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Про втрату роботи повідомляють wojewodę, який надав zezwolenie, протягом 15 dni roboczych.",
        },
        {
          locator: "ust. 2 pkt 1–2",
          explanation:
            "У той самий строк повідомляють про зміну podmiotu powierzającego pracę (pkt 1) та про припинення виконання вимог для zezwolenia (pkt 2).",
        },
        {
          locator: "ust. 1a i ust. 3",
          explanation:
            "Якщо zezwolenie надав Szef Urzędu у другій інстанції, повідомлення направляють wojewodzie, який вирішував справу в першій інстанції.",
        },
      ],
      legalEffect:
        "Норма створює обов’язок повідомлення, але сама не описує повний доказовий стандарт або наслідки кожного порушення поза відсиланнями в інших статтях.",
      foreignersCase:
        "Підготуйте письмове повідомлення, доказ його подання та календарний розрахунок 15 dni roboczych для кожної зміни обставин.",
    },
  ],
})
