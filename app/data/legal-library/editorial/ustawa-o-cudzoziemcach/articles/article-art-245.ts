import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-245",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Kartę pobytu видає або відмовляє у видачі wojewoda, який надав zezwolenie na pobyt czasowy, stały або rezydenta długoterminowego UE, а для zgody na pobyt ze względów humanitarnych — komendant oddziału або placówki Straży Granicznej, який надав згоду. Wymianę або відмову у wymianie здійснює wojewoda чи відповідний komendant SG за місцем pobytu; ці правила діють і для kolejnej karty pobytu.",
          sourceLocator: "Art. 245 ust. 1–5",
        },
        {
          kind: "statute-text",
          text: "Відмова у видачі або wymianie karty pobytu відбувається у формі decyzji. У гуманітарних справах, де рішення прийняв komendant oddziału або placówki SG, органом вищого ступеня є Komendant Główny Straży Granicznej, а odwołanie подають протягом 7 днів від doręczenia; спеціальні правила ust. 8–9 визначають орган для картки після рішення Szefa Urzędu або Komendanta Głównego.",
          sourceLocator: "Art. 245 ust. 6–9",
        },
      ],
      summary:
        "Стаття розподіляє компетенцію щодо wydania і wymiany karty pobytu, визначає форму odmowa та спеціальний 7-денний строк odwołania у названих гуманітарних справах.",
      rules: [
        {
          locator: "ust. 1–5, 8–9",
          explanation:
            "Для першої картки визначте орган, який надав zezwolenie або згоду; для wymiany та kolejna karta — місце pobytu. Якщо рішення прийняв Szef Urzędu або Komendant Główny, застосуйте спеціальне правило про орган першої інстанції.",
        },
        {
          locator: "ust. 6–7a",
          explanation:
            "Відмова є decyzją. Для справ видачі або wymiany гуманітарної karty pobytu, у яких першою інстанцією був komendant SG, odwołanie становить 7 днів від doręczenia decyzji.",
        },
      ],
      legalEffect:
        "Належний орган визначають підстава документа, місце pobytu та те, хто вирішував справу в першій інстанції. У гуманітарній справі пропуск спеціального 7-денного строку odwołania може позбавити доступу до цього засобу, тому дату doręczenia треба зафіксувати.",
      foreignersCase: foreignersLaw.text`На decyzji про odmowa перевірте підставу компетенції, орган першої інстанції та дату doręczenia. Для гуманітарної karty pobytu зіставте справу з ${foreignersLaw.article("245", "Art. 245")} ust. 7 і не пропустіть спеціальні 7 днів на odwołanie.`,
    },
  ],
})
