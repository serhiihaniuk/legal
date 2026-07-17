import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-180",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA na posiedzeniu niejawnym odrzuca skargę kasacyjną, jeżeli podlegała ona odrzuceniu przez WSA, albo zwraca ją temu sądowi w celu usunięcia dostrzeżonych braków.",
          sourceLocator: "Art. 180",
        },
      ],
      summary:
        "NSA może sam odrzucić kasację, która powinna zostać odrzucona w WSA, albo zwrócić ją WSA do usunięcia dostrzeżonych braków.",
      rules: [
        {
          locator: "Art. 180",
          explanation:
            "Przepis dotyczy kontroli formalnej i nie jest jeszcze rozpoznaniem podstaw kasacyjnych co do meritum.",
        },
      ],
      legalEffect:
        "Samo przedstawienie kasacji NSA nie gwarantuje jej merytorycznego rozpoznania; dalszy bieg zależy od wyniku tej kontroli.",
      foreignersCase:
        "W sprawie pobytowej ustal, czy NSA wydał postanowienie o odrzuceniu, czy zwrócił kasację WSA do usunięcia braków. To inna sytuacja niż ocena legalności decyzji pobytowej.",
    },
  ],
})
