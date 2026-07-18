import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "262",
      provisionId: "kpa-art-262",
      reviewStatus: "reviewed",
      summary:
        "Норма визначає, які витрати провадження можуть бути покладені на сторону, та дозволяє вимагати аванс. Сторона відповідає за витрати, спричинені її виною або понесені виключно в її інтересі чи на її вимогу поза законним обов'язком органу.",
      rules: [
        {
          locator: "§ 1 pkt 1",
          explanation:
            "Сторона несе koszty postępowania, що виникли з її вини.",
        },
        {
          locator: "§ 1 pkt 2",
          explanation:
            "На сторону покладаються також витрати в її інтересі або на її вимогу, якщо відповідна дія не була законним обов'язком органу.",
        },
        {
          locator: "§ 2",
          explanation:
            "В обґрунтованих випадках орган може вимагати zaliczkę у визначеному розмірі на покриття витрат.",
        },
      ],
      legalEffect: kpaLaw.text`Не кожна витрата адміністративної справи автоматично лягає на сторону; орган має прив'язати її до однієї з підстав ${kpaLaw.article("262", "§ 1")} або обґрунтувати аванс.`,
      foreignersCase:
        "У справі іноземця орган повинен пояснити, чому конкретна додаткова дія створила витрати з вини чи в особистому інтересі сторони. Звичайні законні обов'язки органу не можна механічно перекласти на заявника.",
    },
  ],
})
