import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-200",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Zezwolenie na pobyt stały wygasa z mocy prawa в день надання cudzoziemcowi zezwolenia na pobyt rezydenta długoterminowego UE або в день набуття ним obywatelstwo polskie.",
          sourceLocator: "Art. 200 pkt 1–2",
        },
      ],
      summary:
        "Стаття встановлює два випадки автоматичного припинення чинності zezwolenia na pobyt stały.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "Юридичною подією є саме надання нового статусу або набуття польського громадянства, а не лише подання відповідної заяви.",
        },
      ],
      legalEffect:
        "Вигасання відбувається z mocy prawa у названий день і відрізняється від cofnięcie рішенням органу.",
      foreignersCase:
        "Установіть дату нового дозволу або документа про громадянство й не використовуйте старе zezwolenie як чинну підставу після цієї дати.",
    },
  ],
})
