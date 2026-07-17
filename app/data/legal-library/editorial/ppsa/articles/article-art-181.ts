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
      provisionId: "ppsa-art-181",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA rozpoznaje skargę kasacyjną na rozprawie w składzie trzech sędziów, chyba że przepis szczególny stanowi inaczej. Od wyroku wydaje wyrok, a od postanowienia — postanowienie.",
          sourceLocator: "Art. 181 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("181", "Art. 181")} określa zasadniczy skład NSA i formę orzeczenia zależną od rodzaju zaskarżonego orzeczenia.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Regułą jest rozprawa w składzie trzech sędziów, z zastrzeżeniem przepisu szczególnego.",
        },
        {
          locator: "§ 2",
          explanation:
            "Kasacja od wyroku kończy się wyrokiem NSA, a kasacja od postanowienia — postanowieniem NSA.",
        },
      ],
      legalEffect:
        "Przepis opisuje formę i skład rozpoznania, nie przesądza wyniku kasacji ani materialnego prawa strony.",
      foreignersCase:
        "W aktach sprawy o pobyt odróżnij wyrok NSA od postanowienia NSA i przeczytaj sentencję oraz uzasadnienie, zamiast wywodzić wynik z samej nazwy dokumentu.",
    },
  ],
})
