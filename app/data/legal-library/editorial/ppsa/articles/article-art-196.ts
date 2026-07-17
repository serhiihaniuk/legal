import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-196",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "WSA może wstrzymać wykonanie zaskarżonego postanowienia do czasu rozstrzygnięcia zażalenia; takie postanowienie może zapaść na posiedzeniu niejawnym.",
          sourceLocator: "Art. 196",
        },
      ],
      summary:
        "Złożenie zażalenia nie wstrzymuje samo przez się wykonania postanowienia; WSA może zrobić to osobnym postanowieniem.",
      rules: [
        {
          locator: "Art. 196",
          explanation:
            "Wstrzymanie jest kompetencją WSA do czasu rozpoznania zażalenia i może być rozstrzygnięte bez rozprawy.",
        },
      ],
      legalEffect:
        "Dopóki WSA nie wstrzyma wykonania, zaskarżone postanowienie nie jest automatycznie zawieszone przez samo wniesienie zażalenia.",
      foreignersCase:
        "Jeżeli wykonanie postanowienia może wpłynąć na dokumenty lub status cudzoziemca, rozważ osobny wniosek o wstrzymanie i nie zakładaj skutku automatycznego.",
    },
  ],
})
