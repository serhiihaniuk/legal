import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-81",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 81 передбачає повернення коштів Fundusz Pracy, якщо їх використали не за призначенням, не використали, отримали безпідставно або в надмірній сумі. У частині цих випадків нараховують відсотки як за податкову заборгованість.",
          sourceLocator: "Art. 81 ust. 1–3",
        },
      ],
      summary:
        "До коштів програми відповідно застосовуються окремі норми закону про публічні фінанси. Використання не за призначенням, невикористання, безпідставне або надмірне отримання створює обов'язок повернути кошти на рахунок розпорядника Fundusz Pracy.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "До переданих коштів відповідно застосовуються art. 57, 168 і 169 закону «ustawa o finansach publicznych».",
        },
        {
          locator: "ust. 2",
          explanation:
            "Поверненню підлягають кошти, використані не за призначенням, невикористані, отримані безпідставно або в надмірній сумі.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Кошти з ust. 2 pkt 1, 3 і 4 повертають разом із відсотками у розмірі, передбаченому для податкової заборгованості.",
        },
      ],
      legalEffect:
        "Фінансування не стає безповоротним лише тому, що його отримано за договором. Остаточний обсяг зобов'язання залежить від способу використання коштів і розрахунку.",
      foreignersCase:
        "Ведіть окремий облік витрат програми і докази їхнього призначення. У разі залишку або витрати не за планом перевірте строки і розмір повернення за договором та нормами про публічні фінанси.",
    },
  ]),
})
