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
      article: "239",
      provisionId: "kpa-art-239",
      reviewStatus: "reviewed",
      summary:
        "Норма дозволяє органу не відповідати повторно на skargę, якщо попередню вже обґрунтовано визнано безпідставною, а нове звернення не містить нових обставин. Орган лише робить відповідну позначку в матеріалах.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "За повторення skargi без нових обставин орган може підтримати попередню позицію adnotacją w aktach і не повідомляти скаржника, якщо безпідставність уже була показана у відповіді.",
        },
        {
          locator: "§ 2",
          explanation: "Параграф скасований і не містить чинного правила.",
        },
      ],
      legalEffect:
        "Повторна тотожна skarga може не породити нового повідомлення; орган документує підтримання попередньої позиції в актах.",
      foreignersCase: kpaLaw.text`Якщо іноземець повторює ту саму skargę на urząd, потрібно вказати нові факти або обставини. Інакше орган може застосувати ${kpaLaw.article("239", "art. 239")}, але це не обмежує належні процесуальні засоби в індивідуальній справі.`,
    },
  ],
})
