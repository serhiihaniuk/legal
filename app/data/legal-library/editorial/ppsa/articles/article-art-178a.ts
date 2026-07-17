import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-178a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "WSA na posiedzeniu niejawnym umarza postępowanie kasacyjne, jeżeli strona skutecznie cofnęła skargę kasacyjną przed przedstawieniem jej wraz z aktami sprawy NSA. Na postanowienie przysługuje zażalenie.",
          sourceLocator: "Art. 178a",
        },
      ],
      summary:
        "Skuteczne cofnięcie skargi kasacyjnej przed przekazaniem jej z aktami do NSA prowadzi do umorzenia postępowania kasacyjnego.",
      rules: [
        {
          locator: "Art. 178a",
          explanation:
            "Trzeba łącznie ustalić skuteczność cofnięcia i moment przed przedstawieniem skargi z aktami NSA; przepis przewiduje posiedzenie niejawne.",
        },
      ],
      legalEffect:
        "Umorzenie dotyczy tego postępowania kasacyjnego i nie jest merytorycznym rozstrzygnięciem prawa do pobytu; na postanowienie ustawa daje zażalenie.",
      foreignersCase:
        "Jeżeli w sprawie pobytowej rozważasz cofnięcie kasacji, ustal w aktach, czy WSA nie przedstawił jej już NSA. Przeczytaj także pouczenie o zażaleniu na postanowienie.",
    },
  ],
})
