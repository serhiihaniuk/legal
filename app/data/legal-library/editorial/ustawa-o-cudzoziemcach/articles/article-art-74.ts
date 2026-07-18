import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const VISA_CODE_URL = "https://eur-lex.europa.eu/eli/reg/2009/810/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-74",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("74", "Art. 74")} ust. 1 визначає Szef Urzędu органом, який збирає інформацію про wizy Schengen, видані органами інших держав Schengen, у випадках ${foreignersLaw.external("Art. 25", VISA_CODE_URL)} ust. 4 і ${foreignersLaw.external("Art. 31", VISA_CODE_URL)} ust. 1 Wspólnotowy Kodeks Wizowy; ust. 2 перелічує польські органи, яким він її надає.`,
          sourceLocator: "Art. 74 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Збір і передавання інформації не означають, що Szef Urzędu видає або змінює візу іншої держави.",
          sourceLocator: "Art. 74 ust. 1–2",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("74", "Art. 74")} визначає польський centralny obieg інформації про wizy Schengen, видані іншими державами Schengen, і перелік служб, які можуть отримати ці дані.`,
      rules: [
        {
          locator: "Art. 74 ust. 1",
          explanation: foreignersLaw.text`Szef Urzędu збирає інформацію лише у випадках, на які посилаються ${foreignersLaw.external("Art. 25 kodeksu wizowego", VISA_CODE_URL)} ust. 4 і ${foreignersLaw.external("Art. 31 kodeksu wizowego", VISA_CODE_URL)} ust. 1.`,
        },
        {
          locator: "Art. 74 ust. 2",
          explanation:
            "Дані надаються Komendant Główny Straży Granicznej, Komendant Główny Policji, Szef ABW, Szef AW і MFA.",
        },
      ],
      legalEffect:
        "Норма організує інформаційний ресурс для польських органів і не є самостійною підставою для в’їзду, pobyt або odmowa wiza.",
      foreignersCase: foreignersLaw.text`Якщо інша держава видала Schengen wiza, перевірте її реквізити та релевантність ${foreignersLaw.external("Art. 25", VISA_CODE_URL)}/${foreignersLaw.external("31", VISA_CODE_URL)}; не називайте запис у польській інформаційній системі новим дозволом.`,
    },
  ],
})
