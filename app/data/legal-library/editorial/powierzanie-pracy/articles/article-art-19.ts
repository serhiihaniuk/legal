import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-19",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("19", "Art. 19")} зобов’язує суб’єкта повідомити орган, який видав дозвіл, у трьох випадках: іноземець не почав роботу протягом двох місяців від початкової дати чинності дозволу; перервав роботу більш як на два місяці; або завершив її раніше ніж за два місяці до закінчення строку дозволу.`,
          sourceLocator: "Art. 19 pkt 1–3",
        },
      ],
      summary:
        "Повідомлення потрібне у трьох ситуаціях, коли дозвіл не використовується або використовується не впродовж усього передбаченого періоду. Контрольними точками є початкова дата чинності, тривалість перерви та дата завершення дії самого дозволу.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Якщо роботу не розпочато впродовж двох місяців від початкової дати чинності дозволу, виникає обов’язок повідомити орган.",
        },
        {
          locator: "pkt 2–3",
          explanation:
            "Повідомлення також потрібне за перерви понад два місяці або завершення роботи більш як за два місяці до кінця строку дозволу.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("19", "Ст. 19")} встановлює обов’язок повідомити орган, а не автоматичне продовження дозволу чи перебування. Наслідки для дозволу треба оцінювати разом із ${workLaw.article("20", "ст. 20")} і ${workLaw.article("22", "ст. 22")}.`,
      foreignersCase:
        "Зберігайте докази фактичного початку, перерви й завершення роботи та порівнюйте їх із датами дозволу. Повідомлення суб’єкта не продовжує законного перебування; його підставу треба перевірити окремо.",
    },
  ],
})
