import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const VISA_CODE_URL = "https://eur-lex.europa.eu/eli/reg/2009/810/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-67",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("67", "Art. 67")} ust. 1 вимагає, коли це потрібно за ${foreignersLaw.external("Art. 22", VISA_CODE_URL)} ust. 1 Wspólnotowy Kodeks Wizowy, щоб konsul через Szef Urzędu звернувся по opinię до centralnego organ іншої держави Schengen; ust. 2 встановлює для Szef Urzędu строк 10 днів на повідомлення konsul про sprzeciw.`,
          sourceLocator: "Art. 67 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Десятиденний строк стосується передавання інформації про sprzeciw, а не гарантує позитивного рішення про wiza.",
          sourceLocator: "Art. 67 ust. 2",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("67", "Art. 67")} регулює консультацію з центральним органом іншої держави Schengen перед видачею wiza Schengen, якщо така консультація потрібна за Visa Code.`,
      rules: [
        {
          locator: "Art. 67 ust. 1",
          explanation:
            "Konsul не звертається напряму: запит до właściwy centralny organ іншої держави проходить за посередництвом Szef Urzędu.",
        },
        {
          locator: "Art. 67 ust. 2",
          explanation:
            "Szef Urzędu протягом 10 днів від отримання запиту повідомляє konsul, чи інший центральний орган sprzeciwił się видачі.",
        },
      ],
      legalEffect:
        "Стаття забезпечує обов’язкову міждержавну консультацію у визначених випадках. Вона не замінює оцінку всіх умов Visa Code і не означає, що відсутність sprzeciw автоматично видає візу.",
      foreignersCase: foreignersLaw.text`У справі встановіть, чи потрібна консультація ${foreignersLaw.external("Art. 22", VISA_CODE_URL)} Visa Code, дату запиту через Szef Urzędu і зміст отриманої відповіді; не плутайте її з рішенням konsul.`,
    },
  ],
})
