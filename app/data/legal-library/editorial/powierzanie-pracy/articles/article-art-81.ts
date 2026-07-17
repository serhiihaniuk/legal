import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-81",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 81 передбачає повернення коштів Fundusz Pracy, використаних не за призначенням, невикористаних, отриманих безпідставно або в надмірній сумі, а для частини випадків — відсотки як за податкові борги.",
          sourceLocator: "Art. 81 ust. 1–3",
        },
      ],
      summary:
        "До коштів програми відповідно застосовуються окремі норми ustawy o finansach publicznych. Неправильне, зайве або безпідставне отримання коштів створює обов'язок повернення на рахунок dysponent Fundusz Pracy.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "До переданих коштів відповідно застосовуються art. 57, 168 і 169 ustawy o finansach publicznych.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Повертаються кошти, використані не за призначенням, невикористані, pobrane nienależnie або в надмірній wysokość.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Для коштів із ust. 2 pkt 1, 3 і 4 повернення відбувається з відсотками у розмірі, передбаченому для zaległości podatkowe.",
        },
      ],
      legalEffect:
        "Фінансування не є безповоротним лише тому, що його отримано за umowa; остаточний обсяг зобов'язання залежить від способу використання і розрахунку.",
      foreignersCase:
        "Ведіть окремий облік витрат програми і доказ їх призначення. При залишку або витраті не за plan перевірте строки і розмір повернення за umowa та фінансовими правилами.",
    },
  ]),
})
