import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-63",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 63 вимагає сплатити opłata разом з oświadczenie, визначає розподіл доходу та правило невідшкодування, а верхню межу opłata передає до rozporządzenie.",
          sourceLocator: "Art. 63 ust. 1–4",
        },
      ],
      summary:
        "Opłata за oświadczenie надходить порівну до budżet państwa і dochód powiatu. Зазвичай її не повертають; закон називає вузькі винятки, пов'язані з окремими підставами odmowa.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Oświadczenie подається разом з opłata, а дохід ділиться порівну між державою і powiat.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Opłata не повертається, крім випадків, прямо перелічених у зв'язку з art. 65 ust. 1 pkt 3 або pkt 5.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Minister визначає розмір opłata розпорядженням, але не вище 10% мінімального wynagrodzenie; враховуються тривалість роботи та вартість провадження.",
        },
      ],
      legalEffect:
        "Платіж є умовою подання, але його внесення не гарантує wpis; питання повернення вирішується лише за законною винятковою підставою.",
      foreignersCase:
        "До подання перевірте актуальний розмір opłata і призначення платежу. Збережіть potwierdzenie, але не розглядайте його як доказ позитивного рішення.",
    },
  ]),
})
