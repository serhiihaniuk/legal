import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-217",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Zezwolenie na pobyt rezydenta długoterminowego UE wygasa z mocy prawa в день набуття cudzoziemcem obywatelstwa polskiego.",
          sourceLocator: "Art. 217",
        },
      ],
      summary:
        "Стаття визначає один випадок автоматичного вигасання zezwolenia na pobyt rezydenta długoterminowego UE — набуття польського громадянства.",
      rules: [
        {
          locator: "Art. 217",
          explanation:
            "Юридично значущою є дата nabycia obywatelstwa polskiego; саме з нею закон пов’язує wygaśnięcie з mocy prawa.",
        },
      ],
      legalEffect:
        "Вигасання настає z mocy prawa у визначений статтею день і відрізняється від cofnięcie рішенням органу.",
      foreignersCase:
        "Зафіксуйте дату набуття obywatelstwa polskiego та зіставте її з даними про zezwolenie. Не робіть висновок про вигасання лише з подання заяви на громадянство.",
    },
  ],
})
