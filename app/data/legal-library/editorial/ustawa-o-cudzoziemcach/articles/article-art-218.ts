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
      provisionId: "ustawa-o-cudzoziemcach-art-218",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Zezwolenia na pobyt rezydenta długoterminowego UE udzielа або відмовляє в ньому wojewoda właściwy ze względu na miejsce pobytu cudzoziemca, у формі decyzji. Cofnięcie також відбувається у формі decyzji wojewoda, який надав zezwolenie, або wojewoda першої інстанції, якщо дозвіл надав Szef Urzędu у другій інстанції.",
          sourceLocator: "Art. 218 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "Cofnięcie може бути здійснене z urzędu або на wniosek Ministra Obrony Narodowej, Szefa Agencji Bezpieczeństwa Wewnętrznego, Komendanta Głównego Straży Granicznej, Komendanta Głównego Policji або названих у статті комендантів Straży Granicznej і Policji.",
          sourceLocator: "Art. 218 ust. 2",
        },
      ],
      summary:
        "Стаття визначає орган і форму рішень щодо надання, відмови та cofnięcia zezwolenia na pobyt rezydenta długoterminowego UE.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Для udzielenia або odmowa компетенцію визначають за місцем pobytu cudzoziemca; результат оформлюється decyzja.",
        },
        {
          locator: "ust. 2",
          explanation:
            "При cofnięcie перевірте, хто надав дозвіл і чи було рішення Szef Urzędu у другій інстанції; від цього залежить właściwy wojewoda.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("218", "Art. 218")} розподіляє компетенцію та вимагає форму decyzji, але не замінює матеріальної оцінки підстав для udzielenia або cofnięcia.`,
      foreignersCase:
        "На кожній decyzja перевірте місце pobytu, орган, інстанцію та вид дії. Для cofnięcie також зафіксуйте, чи діяли z urzędu або на wniosek органу, названого в ust. 2.",
    },
  ],
})
