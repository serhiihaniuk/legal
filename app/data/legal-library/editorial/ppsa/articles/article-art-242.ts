import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-242",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("242", "Art. 242")} передбачає, що wydatki за сторону, звільнену від kosztów sądowych, авансуються з частини бюджету sądu administracyjnego в межах цього звільнення.`,
          sourceLocator: "Art. 242",
        },
      ],
      summary:
        "Витрати за звільнену сторону тимчасово покриває бюджет адміністративного суду, але тільки в межах наданого zwolnienie.",
      rules: [
        {
          locator: "Art. 242",
          explanation:
            "Зіставте конкретний wydatki з обсягом zwolnienie: стаття не охоплює витрати поза встановленими межами.",
        },
      ],
      legalEffect:
        "Норма визначає джерело авансування wydatki, а не остаточний розподіл koszty між сторонами після завершення справи.",
      foreignersCase:
        "Якщо іноземцю надано zwolnienie від судових витрат, перевірте його zakres перед висновком, що судовий бюджет покриває кожен можливий wydatki.",
    },
  ],
})
