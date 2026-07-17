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
      provisionId: "ppsa-art-187",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Gdy przy rozpoznawaniu kasacji powstanie zagadnienie prawne budzące poważne wątpliwości, NSA może odroczyć sprawę i przedstawić je składowi siedmiu sędziów. Uchwała tego składu wiąże w danej sprawie, a skład siedmiu sędziów może przejąć sprawę do rozpoznania.",
          sourceLocator: "Art. 187 § 1–3",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("187", "Art. 187")} ustanawia mechanizm przekazania poważnie wątpliwego zagadnienia prawnego składowi siedmiu sędziów NSA.`,
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "To NSA ocenia, czy zagadnienie budzi poważne wątpliwości; przyjęta uchwała wiąże sąd w tej konkretnej sprawie.",
        },
        {
          locator: "§ 3",
          explanation:
            "Skład siedmiu sędziów może przejąć całą sprawę do rozpoznania, co nie oznacza z góry określonego wyniku.",
        },
      ],
      legalEffect: ppsaLaw.text`Uchwała porządkuje rozstrzygnięcie zagadnienia w danej sprawie, ale ${ppsaLaw.article("187", "art. 187")} nie przesądza o prawie do pobytu ani o wyniku kasacji.`,
      foreignersCase:
        "W powtarzalnym sporze pobytowym sprawdź, czy NSA przekazał konkretne zagadnienie składowi siedmiu sędziów i jaki zakres ma uchwała w tej sprawie.",
    },
  ],
})
