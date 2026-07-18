import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-399",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Areszt dla cudzoziemców застосовується у випадках art. 398a, коли існує ризик, що іноземець не підпорядкується правилам pobyt у strzeżony ośrodek; areszt виконується в приміщеннях strzeżony ośrodek або Straż Graniczna для zatrzymanych.",
          sourceLocator: "Art. 399 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Потрібно довести не лише одну з підстав art. 398a, а й окремий ризик недотримання правил pobyt у strzeżony ośrodek.",
          sourceLocator: "Art. 399 ust. 1",
        },
      ],
      summary:
        "Стаття відрізняє areszt dla cudzoziemców від strzeżony ośrodek і пов’язує його з ризиком непідпорядкування правилам перебування в ośrodek.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Спочатку мають бути обставини art. 398a, а додатково — ризик порушення правил pobyt у strzeżony ośrodek.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Виконання areszt відбувається у визначених приміщеннях strzeżony ośrodek або Straż Graniczna для затриманих.",
        },
      ],
      legalEffect:
        "Норма встановлює більш суворий режим у межах випадків art. 398a, коли саме правила pobyt у strzeżony ośrodek недостатньо забезпечують мету заходу.",
      foreignersCase:
        "Прочитайте мотиви postanowienie і відокремте базову підставу art. 398a від доказів ризику непідпорядкування правилам. Перевірте фактичне місце виконання areszt.",
    },
  ]),
})
