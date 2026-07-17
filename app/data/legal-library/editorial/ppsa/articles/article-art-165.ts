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
      provisionId: "ppsa-art-165",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Postanowienie, які не завершують справу, можуть бути uchylane або змінені через зміну обставин справи, навіть якщо їх оскаржено або вони стали prawomocne.",
          sourceLocator: "Art. 165",
        },
      ],
      summary:
        "Стаття дозволяє переглядати проміжні postanowienie при зміні обставин, включно після оскарження чи prawomocność.",
      rules: [
        {
          locator: "Art. 165",
          explanation:
            "Спершу встановіть, що postanowienie не завершує справу, потім покажіть фактичну zmiana okoliczności; сама незгода з рішенням не названа підставою.",
        },
      ],
      legalEffect:
        "Можливість uchylenie або зміни прив’язана до зміни обставин і не поширюється текстом на postanowienie, яке завершує справу.",
      foreignersCase: ppsaLaw.text`Якщо у справі про pobyt змінилися обставини після проміжного postanowienie, перевірте його процесуальний характер і докази саме цієї зміни; prawomocność сама по собі не виключає правило ${ppsaLaw.article("165", "art. 165")}.`,
    },
  ],
})
