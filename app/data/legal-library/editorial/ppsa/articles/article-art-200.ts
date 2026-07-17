import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-200",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "W razie uwzględnienia skargi przez sąd pierwszej instancji skarżącemu przysługuje od organu, który wydał zaskarżony akt, podjął czynność, dopuścił się bezczynności lub przewlekłego prowadzenia postępowania, zwrot niezbędnych kosztów do celowego dochodzenia praw.",
          sourceLocator: "Art. 200",
        },
      ],
      summary:
        "Uwzględnienie skargi przez sąd pierwszej instancji może dać skarżącemu prawo do zwrotu niezbędnych kosztów od właściwego organu.",
      rules: [
        {
          locator: "Art. 200",
          explanation:
            "Przepis obejmuje zaskarżony akt, czynność, bezczynność i przewlekłe prowadzenie postępowania; zakres zwrotu dotyczy kosztów niezbędnych do celowego dochodzenia praw.",
        },
      ],
      legalEffect:
        "Uwzględnienie skargi tworzy ustawową podstawę zwrotu, ale nie oznacza automatycznej refundacji każdej faktycznie poniesionej kwoty.",
      foreignersCase:
        "Po wygraniu skargi dotyczącej pobytu zachowaj dowody niezbędnych kosztów i sprawdź, czy wniosek o ich zwrot został zgłoszony w wymaganym czasie.",
    },
  ],
})
