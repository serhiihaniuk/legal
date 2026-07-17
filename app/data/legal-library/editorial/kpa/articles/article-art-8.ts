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
      article: "8",
      provisionId: "kpa-art-8",
      reviewStatus: "reviewed",
      summary:
        "Стаття вимагає вести провадження так, щоб воно викликало довіру, із дотриманням пропорційності, безсторонності, рівності та послідовності практики.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Орган керується принципами пропорційності, безсторонності й рівного ставлення до учасників.",
        },
        {
          locator: "§ 2",
          explanation:
            "Без обґрунтованої причини organ не відступає від усталеної практики у справах з однаковим фактичним і правовим станом.",
        },
      ],
      legalEffect:
        "Відступ від сталої практики потребує обґрунтованої причини, а спосіб ведення справи підлягає оцінці за стандартом довіри й безсторонності.",
      foreignersCase: kpaLaw.text`У справі іноземця можна порівнювати лише справді однаковий фактичний і правовий стан; сама відмінність результатів ще не доводить порушення ${kpaLaw.article("8", "art. 8")}.`,
    },
  ],
})
