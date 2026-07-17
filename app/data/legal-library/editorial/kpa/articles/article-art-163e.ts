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
      article: "163e",
      provisionId: "kpa-art-163e",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Стаття звужує доказове провадження у спрощеному режимі до матеріалів сторони та даних, якими орган уже володіє. Загальне правило ${kpaLaw.article("81", "art. 81")} KPA тут не застосовується.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Орган бере до уваги докази, подані разом із початком справи, та факти й докази, які може встановити з власних даних.",
        },
        {
          locator: "§ 2",
          explanation: kpaLaw.text`До такого провадження не застосовується ${kpaLaw.article("81", "art. 81")} KPA.`,
        },
      ],
      legalEffect:
        "Доказова база спрощеної справи свідомо обмежена, тому первинний пакет матеріалів має вирішальне значення.",
      foreignersCase:
        "Якщо конкретна справа іноземця законно розглядається у цьому режимі, докази умов дозволу слід подати вже при її ініціюванні; не можна розраховувати на повне звичайне postępowanie dowodowe.",
    },
  ],
})
