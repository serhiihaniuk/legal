import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-340",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("340", "Art. 340")} дозволяє органу, який видав decyzja про wysokość kosztów з ${foreignersLaw.article("336", "Art. 336")} ust. 1, змінити її, якщо витрати змінилися після видання рішення; decyzja виконується негайно.`,
          sourceLocator: "Art. 340",
        },
      ],
      summary:
        "Сума витрат може бути змінена тим самим компетентним органом, коли після первісного рішення фактичні витрати змінилися.",
      rules: [
        {
          locator: "całość",
          explanation: foreignersLaw.text`Потрібні дві умови: витрати належать до ${foreignersLaw.article("336", "Art. 336")} і вони змінилися після первісного рішення. Змінена decyzja підлягає natychmiastowe wykonanie.`,
        },
      ],
      legalEffect:
        "Стаття не дозволяє довільно переглядати суму; зміна має бути пов’язана саме зі зміною витрат після видання рішення.",
      foreignersCase: foreignersLaw.text`Порівняйте первісну та змінену decyzja, дату й підтвердження нових витрат; термін оскарження перевіряйте за ${foreignersLaw.article("341", "Art. 341")}.`,
    },
  ],
})
