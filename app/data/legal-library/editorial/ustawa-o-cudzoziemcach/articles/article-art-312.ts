import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-312",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 312 доручає ministrowi właściwemu do spraw wewnętrznych визначити розпорядженням зміст wniosku про рішення про zobowiązanie do powrotu та спосіб відмітки про це рішення в dokument podróży.",
          sourceLocator: "Art. 312 pkt 1–2",
        },
      ],
      summary:
        "Стаття є делегацією для визначення форми заяви органу та способу внесення відмітки в документ подорожі.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Розпорядження має врегулювати зміст wniosku з урахуванням повноти й правильності провадження та необхідних відомостей.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Окремо визначається спосіб запису в dokument podróży, щоб рішення можна було виявити під час контролю.",
        },
      ],
      legalEffect:
        "Стаття визначає предмет майбутнього виконавчого регулювання, але сама не встановлює індивідуальну підставу повернення.",
      foreignersCase:
        "Для перевірки комплектності wniosku органу зіставте його з вимогами відповідного розпорядження; не ототожнюйте відмітку в паспорті з окремою decyzja.",
    },
  ]),
})
