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
      provisionId: "powierzanie-pracy-art-23",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("23", "Art. 23")} передбачає, що орган повідомляє Прикордонну службу («Straż Graniczna») про скасування дозволу на роботу, якщо іноземець перебуває в Польщі й відповідне адміністративне рішення вже стало остаточним.`,
          sourceLocator: "Art. 23",
        },
      ],
      summary:
        "Після остаточного скасування дозволу орган передає інформацію Прикордонній службі, якщо іноземець перебуває в Польщі. Стаття встановлює обмін інформацією, а не окрему процедуру щодо перебування.",
      rules: [
        {
          locator: "Art. 23",
          explanation:
            "Потрібні дві умови: іноземець перебуває в Польщі, а рішення про скасування дозволу стало остаточним. Лише тоді орган інформує Прикордонну службу.",
        },
      ],
      legalEffect: workLaw.text`Повідомлення Прикордонній службі є наслідком остаточного скасування дозволу на роботу. Воно не замінює оцінки законності перебування і не означає автоматичного припинення перебування на підставі лише ${workLaw.article("23", "ст. 23")}.`,
      foreignersCase:
        "Перевірте адміністративне рішення, дату, коли воно стало остаточним, і підставу скасування. Підготуйте окремі докази чинної підстави перебування та іншого права на роботу, якщо вони існують. На скасований дозвіл покладатися вже не можна.",
    },
  ],
})
