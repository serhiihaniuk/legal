import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-19",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("19", "Art. 19")} зобов'язує podmiot повідомити organ, який видав zezwolenie, якщо cudzoziemiec не почав роботу протягом 2 місяців від початкової дати чинності дозволу, перервав роботу більш як на 2 місяці або завершив її раніше ніж за 2 місяці до закінчення строку дозволу.`,
          sourceLocator: "Art. 19 pkt 1–3",
        },
      ],
      summary:
        "Повідомлення потрібне для трьох ситуацій, коли zezwolenie не використовується або використовується не повністю. Строки рахуються від початкової дати, тривалості перерви та кінця чинності самого дозволу.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Якщо роботу не розпочато впродовж двох місяців від początkowa data ważności zezwolenia, виникає обов'язок повідомити орган.",
        },
        {
          locator: "pkt 2–3",
          explanation:
            "Повідомлення також потрібне при перерві понад два місяці або завершенні роботи більш як за два місяці до кінця строку zezwolenie.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("19", "Art. 19")} встановлює обов'язок інформації, а не автоматичне продовження дозволу чи права pobyt. Наслідки для zezwolenie треба оцінювати разом з ${workLaw.article("20", "art. 20")} і ${workLaw.article("22", "art. 22")}.`,
      foreignersCase:
        "Зберігайте докази фактичного початку, перерви й завершення роботи та порівнюйте їх із датами zezwolenie. Повідомлення podmiot не продовжує legalny pobyt; перевірте іншу підставу перебування.",
    },
  ],
})
