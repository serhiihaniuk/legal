import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-216",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Jeżeli przedmiotem zaskarżenia jest należność pieniężna, stanowi ona wartość przedmiotu zaskarżenia.",
          sourceLocator: "Art. 216",
        },
      ],
      summary:
        "Przy zaskarżeniu należności pieniężnej wartość przedmiotu zaskarżenia odpowiada tej należności.",
      rules: [
        {
          locator: "Art. 216",
          explanation:
            "Najpierw ustal, czy przedmiot zaskarżenia rzeczywiście jest należnością pieniężną; wtedy jej wartość jest wartością przedmiotu zaskarżenia.",
        },
      ],
      legalEffect:
        "Przepis dotyczy wyłącznie sposobu oznaczenia wartości i nie przesądza wysokości wpisu bez zastosowania właściwej taryfy.",
      foreignersCase: ppsaLaw.text`W sporze pobytowym nie przypisuj decyzji niemajątkowej wartości pieniężnej tylko dlatego, że ma skutki finansowe; ${ppsaLaw.article("216", "art. 216")} działa przy należności pieniężnej jako przedmiocie zaskarżenia.`,
    },
  ],
})
