import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "21",
      provisionId: "kpa-art-21",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює загальні критерії територіальної компетенції для справ про нерухомість, zakład pracy та інших справ, а також резервне правило.",
      rules: [
        {
          locator: "§ 1 pkt 1–2",
          explanation:
            "Для нерухомості вирішальне місце її розташування, а для prowadzenia zakładu pracy — місце, де він є, був або має бути.",
        },
        {
          locator: "§ 1 pkt 3",
          explanation:
            "В інших справах критерієм є місце проживання або siedziba в Польщі, далі місце pobytu, а за їх відсутності — останнє таке місце в Польщі.",
        },
        {
          locator: "§ 2",
          explanation: kpaLaw.text`Якщо ${kpaLaw.article("21", "§ 1")} не дозволяє визначити organ, застосовується місце події, що спричинила провадження, а за його відсутності — орган для Śródmieścia m.st. Warszawy.`,
        },
      ],
      legalEffect:
        "Норма прив’язує справу до конкретного територіального органу за послідовністю встановлених критеріїв.",
      foreignersCase:
        "У справі іноземця загальне правило може орієнтуватися на місце проживання або pobytu, але спеціальні приписи щодо конкретної заяви треба перевірити першими.",
    },
  ],
})
