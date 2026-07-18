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
      provisionId: "ustawa-o-cudzoziemcach-art-335a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("335a", "Art. 335a")} дозволяє надавати pomoc w reintegracji після добровільного повернення, своєчасного виїзду або примусового виконання рішення; допомога надається на wniosek і тому самому іноземцю лише один раз.`,
          sourceLocator: "Art. 335a ust. 1–7",
        },
      ],
      summary:
        "Після повернення Komendant Główny Straży Granicznej може організувати підтримку утримання та reintegracja в державі повернення, якщо є одна з передбачених законом підстав.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Підставами є надана pomoc w dobrowolnym powrocie, виїзд у строк dobrowolnego wyjazdu або примусове виконання рішення. Потрібен wniosek, а допомога можлива лише один раз.",
        },
        {
          locator: "ust. 4–6",
          explanation:
            "Komendant може доручити виконання іншому суб’єкту; обсяг świadczenia визначає цей суб’єкт за договором і в межах доручення.",
        },
        {
          locator: "ust. 7",
          explanation:
            "Витрати фінансуються з budżet państwa через кошти Komendant Główny Straży Granicznej.",
        },
      ],
      legalEffect:
        "Норма відкриває можливість reintegracja, але не встановлює для кожного іноземця гарантований обсяг або вид świadczenia.",
      foreignersCase:
        "Якщо особа планує wniosek, зафіксуйте підставу повернення, дату виїзду та чи використовувалася така допомога раніше; конкретний пакет підтримки треба підтвердити окремо.",
    },
  ],
})
