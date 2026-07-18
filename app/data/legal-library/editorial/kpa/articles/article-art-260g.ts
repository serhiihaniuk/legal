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
      article: "260g",
      provisionId: "kpa-art-260g",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює пріоритет спеціальних правил європейської адміністративної співпраці над загальним działem VIIIA KPA. Якщо право ЄС або спеціальний закон регулює питання інакше, загальний розділ не застосовується.",
      rules: [
        {
          locator: "одне речення",
          explanation:
            "Dział VIIIA не застосовується в обсязі, у якому przepisy prawa UE або przepisy szczególne dotyczące współpracy administracyjnej stanowią inaczej.",
        },
      ],
      legalEffect: kpaLaw.text`Спеціальна європейська або національна процедура витісняє загальні правила ${kpaLaw.articleRange("260a", "260f", { start: "art. 260a", end: "260f" })}.`,
      foreignersCase:
        "У sprawie cudzoziemca перед використанням загального механізму потрібно перевірити, чи профільний акт ЄС або спеціальний закон уже встановив інший канал, строк чи форму співпраці.",
    },
  ],
})
