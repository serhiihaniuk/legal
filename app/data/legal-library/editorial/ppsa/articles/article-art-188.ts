import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-188",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA, uwzględniając skargę kasacyjną i uchylając zaskarżone orzeczenie, rozpoznaje skargę, jeżeli uzna, że istota sprawy jest dostatecznie wyjaśniona.",
          sourceLocator: "Art. 188",
        },
      ],
      summary:
        "Jeżeli po uchyleniu orzeczenia istota sprawy jest dostatecznie wyjaśniona, NSA może sam rozpoznać skargę zamiast przekazywać ją do WSA.",
      rules: [
        {
          locator: "Art. 188",
          explanation:
            "Najpierw musi dojść do uwzględnienia kasacji i uchylenia orzeczenia; dopiero potem NSA ocenia dostateczne wyjaśnienie istoty sprawy.",
        },
      ],
      legalEffect:
        "Przepis daje NSA możliwość bezpośredniego rozpoznania skargi, lecz nie nakazuje tego w każdej sprawie i nie gwarantuje korzystnego rozstrzygnięcia administracyjnego.",
      foreignersCase:
        "W kasacji dotyczącej odmowy pobytu nie zakładaj automatycznego przyznania statusu. Sprawdź, czy z akt wynika dostatecznie wyjaśniona istota sprawy.",
    },
  ],
})
