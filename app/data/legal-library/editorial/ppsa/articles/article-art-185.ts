import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-185",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "W razie uwzględnienia skargi kasacyjnej NSA uchyla zaskarżone orzeczenie w całości lub części i przekazuje sprawę do ponownego rozpoznania sądowi, który je wydał, a gdy ten nie może rozpoznać sprawy w innym składzie — innemu sądowi. Sąd rozpoznaje sprawę ponownie w innym składzie.",
          sourceLocator: "Art. 185 § 1–2",
        },
      ],
      summary:
        "Typowym skutkiem uwzględnienia kasacji jest uchylenie i przekazanie sprawy do ponownego rozpoznania w innym składzie.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "NSA określa zakres uchylenia i sąd, do którego wraca sprawa; inny sąd jest przewidziany, gdy właściwy nie może orzekać w innym składzie.",
        },
        {
          locator: "§ 2",
          explanation:
            "Przy przekazaniu ponowne rozpoznanie musi nastąpić w innym składzie sądu.",
        },
      ],
      legalEffect:
        "Uchylenie i przekazanie otwiera ponowne rozpoznanie sądowe, ale samo nie zmienia automatycznie decyzji organu ani nie przyznaje pobytu.",
      foreignersCase:
        "Po wygranej kasacji w sprawie pobytowej przygotuj się na ponowne rozpoznanie przez WSA. Sprawdź zakres wskazany w sentencji, zamiast traktować ją jako końcową decyzję administracyjną.",
    },
  ],
})
