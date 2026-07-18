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
      provisionId: "ustawa-o-cudzoziemcach-art-121",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("121", "Art. 121")} ust. 1–3 регулюють письмове повідомлення cudzoziemca wojewodzie про втрату роботи та спосіб виконання цього обов’язку через wniosek за ${foreignersLaw.article("120", "art. 120")} ust. 1 pkt 1; ust. 4 встановлює окреме повідомлення podmiot powierzający pracę.`,
          sourceLocator: "Art. 121 ust. 1–4",
        },
      ],
      summary:
        "Особа з zezwoleniem na pobyt czasowy i pracę повинна повідомити відповідного wojewodę про втрату роботи протягом 15 dni roboczych.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Cudzoziemiec письмово повідомляє wojewodę, який надав zezwolenie, про втрату роботи у будь-якого podmiotu, названого в zezwoleniu. Якщо рішення на другій інстанції видав Szef Urzędu, повідомлення адресують wojewodzie першої інстанції.",
        },
        {
          locator: "ust. 3",
          explanation: foreignersLaw.text`Обов’язок вважається виконаним, якщо протягом 15 dni roboczych подано wniosek про зміну zezwolenia за ${foreignersLaw.article("120", "art. 120")} ust. 1 pkt 1.`,
        },
        {
          locator: "ust. 4",
          explanation:
            "Podmiot powierzający pracę, зазначений у zezwoleniu, письмово повідомляє wojewodę, який надав zezwolenie (або wojewodę першої інстанції при рішенні Szef Urzędu), про втрату роботи у нього протягом 15 dni від цієї події.",
        },
      ],
      legalEffect:
        "Стаття створює окремі обов’язки повідомлення для cudzoziemca та podmiotu powierzającego pracę; з тексту цієї статті не випливає автоматичний спосіб доведення своєчасності.",
      foreignersCase: foreignersLaw.text`Зафіксуйте дату втрати роботи, адресата й спосіб подання повідомлення. Якщо обов’язок виконано через wniosek за ${foreignersLaw.article("120", "art. 120")} ust. 1 pkt 1, збережіть доказ його подання в межах 15 dni roboczych.`,
    },
  ],
})
