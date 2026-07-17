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
      provisionId: "ustawa-o-cudzoziemcach-art-357",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("357", "Art. 357")} визначає орган у справах cofnięcie zgody humanitarnej або tolerowany, передбачає wszczęcie з urzędu, роль Policja/ABW, орган вищого ступеня та 7-денний строк odwołanie.`,
          sourceLocator: "Art. 357 ust. 1–4",
        },
      ],
      summary:
        "Процедуру відкликання згоди веде орган SG, який її надав, а за згодою Komendant Główny — орган за місцем перебування іноземця.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Компетентним є орган, який надав згоду; якщо її надав Komendant Główny, справу веде орган SG за місцем pobyt іноземця.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Провадження починається з urzędu; якщо побут може бути загрозою, wniosek про початок може подати комендант воєводської Policja або Szef ABW.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Organem wyższego stopnia є Komendant Główny, а odwołanie подається протягом 7 днів від doręczenie decyzja.",
        },
      ],
      legalEffect:
        "Процедура може початися без заяви іноземця; це не скасовує його права бути повідомленим, брати участь і оскаржити рішення.",
      foreignersCase:
        "Встановіть, хто видав первісну згоду, хто відкрив cofnięcie та на якій підставі; не пропустіть 7-денний строк odwołanie.",
    },
  ],
})
