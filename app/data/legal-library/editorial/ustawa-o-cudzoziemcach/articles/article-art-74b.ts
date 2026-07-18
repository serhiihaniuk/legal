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
      provisionId: "ustawa-o-cudzoziemcach-art-74b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("74b", "Art. 74b")} дозволяє MFA доручити konsul ${foreignersLaw.article("66", "Art. 66")} ust. 1b провести rozmowa з cudzoziemiec, якщо під час розгляду заяви на wiza krajowa, wiza Schengen або wniosek o ponowne rozpatrzenie у випадку ${foreignersLaw.article("66", "Art. 66")} ust. 1a потрібна співбесіда за ${foreignersLaw.external("Art. 21", VISA_CODE_URL)} ust. 8 Wspólnotowy Kodeks Wizowy.`,
          sourceLocator:
            "Art. 74b у zw. z Art. 21 ust. 8 Wspólnotowy Kodeks Wizowy",
        },
        {
          kind: "practical-inference",
          text: "Доручення співбесіди konsul є способом проведення доказової дії і не означає позитивного або негативного рішення наперед.",
          sourceLocator: "Art. 74b",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("74b", "Art. 74b")} врегульовує, хто може провести співбесіду у спеціальній справі MFA, коли kodeks wizowy вимагає rozmowa з cudzoziemiec.`,
      rules: [
        {
          locator: "Art. 74b",
          explanation: foreignersLaw.text`MFA може polecić відповідному konsul провести rozmowa у справі wydanie wiza або ponowne rozpatrzenie; підстава необхідності — ${foreignersLaw.external("Art. 21 kodeksu wizowego", VISA_CODE_URL)} ust. 8.`,
        },
      ],
      legalEffect:
        "Норма визначає організацію співбесіди та не змінює матеріальні умови візи, обов’язок доказування або остаточний засіб оскарження.",
      foreignersCase:
        "Перевірте, хто направив на rozmowa, в межах якої заяви, який konsul її провів і чи відповіді стосувалися cel та умов wiza; не називайте сам виклик відмовою.",
    },
  ],
})
