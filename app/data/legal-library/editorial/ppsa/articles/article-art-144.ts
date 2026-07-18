import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-144",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd є пов’язаний виданим wyrok від моменту його оголошення, а wyrok на posiedzenie niejawnym — від підписання sentencja.",
          sourceLocator: "Art. 144",
        },
      ],
      summary:
        "Норма визначає момент, з якого сам суд пов’язаний виданим wyrok, окремо для публічного оголошення та posiedzenie niejawne.",
      rules: [
        {
          locator: "Art. 144",
          explanation:
            "Для звичайного wyrok орієнтиром є ogłoszenie, для wyrok без відкритого засідання — підписання sentencja.",
        },
      ],
      legalEffect: ppsaLaw.text`Це правило про пов’язаність суду; його не слід автоматично ототожнювати з prawomocność, яку окремо регулює ${ppsaLaw.article("168", "art. 168")}.`,
      foreignersCase: ppsaLaw.text`У справі щодо pobyt розрізняйте момент пов’язаності суду за ${ppsaLaw.article("144", "art. 144")} і момент prawomocność. Для практичної дії рішення перевірте також його зміст і засоби оскарження.`,
    },
  ],
})
