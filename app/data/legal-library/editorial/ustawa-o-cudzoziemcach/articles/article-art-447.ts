import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const kpaLaw = createLegalTextAuthor("kpa")

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-447",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("447", "Art. 447")} ust. 1: «Cudzoziemiec ma prawo wglądu do dokumentów dotyczących umieszczenia jego danych w wykazie lub Systemie Informacyjnym Schengen».`,
          sourceLocator: "Art. 447 ust. 1",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`Право wgląd має виняток для безпекових підстав ${foreignersLaw.article("435", "Art. 435")} ust. 1 pkt 4 або 4a, тому доступ до документів не є необмеженим.`,
          sourceLocator: "Art. 447 ust. 2–4",
        },
      ],
      summary: foreignersLaw.text`Cudzoziemiec має право переглядати документи про внесення його даних до wykaz або SIS, але не тоді, коли wpis пов’язаний із безпековими підставами ${foreignersLaw.article("435", "Art. 435")} ust. 1 pkt 4 або 4a; перегляд wykaz відбувається в Urząd.`,
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Право wgląd поширюється на документи про wpis у wykaz або SIS, крім даних у wykaz за безпековими підставами pkt 4 або 4a.",
        },
        {
          locator: "ust. 3–4",
          explanation: foreignersLaw.text`Перегляд документів wykaz забезпечується в sede Urzędu; ${kpaLaw.article("73", "Art. 73")} KPA для цього перегляду не застосовується.`,
        },
      ],
      legalEffect:
        "Стаття дає спеціальний доступ до документів, але прямо зберігає безпековий виняток і особливе місце перегляду.",
      foreignersCase:
        "Подайте запит на wgląd і назвіть, чи йдеться про wykaz або SIS; якщо орган посилається на pkt 4/4a, перевірте цей виняток окремо.",
    },
  ],
})
