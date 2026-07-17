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
      provisionId: "ppsa-art-231",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("231", "Art. 231")} встановлює, що wpis stosunkowy сплачується у справах, де предметом оскарження є należności pieniężne, а в інших справах стягується wpis stały.`,
          sourceLocator: "Art. 231",
        },
      ],
      summary:
        "Вид wpis залежить від предмета оскарження: грошові należności ведуть до wpis stosunkowy, інші справи — до wpis stały.",
      rules: [
        {
          locator: "Art. 231",
          explanation:
            "Визначте, чи предметом оскарження є саме należność pieniężna, а не лише те, що справа має фінансові наслідки.",
        },
      ],
      legalEffect:
        "Стаття дає критерій виду wpis, але не встановлює саму суму; для розрахунку потрібні інші приписи та факти справи.",
      foreignersCase:
        "У спорі іноземця про pobyt не називайте wpis stosunkowy лише через можливий економічний інтерес: перевірте фактичний предмет оскарження.",
    },
  ],
})
