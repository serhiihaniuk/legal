import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-388",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Рішення про повернення, видане органом państwo członkowskie wydające, підлягає примусовому виконанню через doprowadzenie іноземця до кордону, аеропорту або морського порту держави, до якої його доставляють.",
          sourceLocator: "Art. 388",
        },
        {
          kind: "practical-inference",
          text: "Стаття описує спосіб фізичного виконання рішення, а не нову процедуру встановлення права на pobyt або окремий засіб оскарження.",
          sourceLocator: "Art. 388",
        },
      ],
      summary:
        "Стаття визначає, що примусове виконання іноземного рішення про повернення здійснюється шляхом доставлення до відповідного кордону або порту.",
      rules: [
        {
          locator: "Art. 388",
          explanation:
            "Місце doprowadzenie залежить від маршруту повернення: це може бути кордон, порт повітряний або морський держави призначення.",
        },
      ],
      legalEffect:
        "Норма встановлює виконавчу форму рішення іншої держави-члена. Конкретний маршрут і організація потребують перевірки документів та пов’язаних положень ustawa.",
      foreignersCase:
        "Уточніть państwo docelowe, пункт перетину або порт, документи подорожі та хто організує doprowadzenie. Не плутайте місце доставки з місцем, де приймалося рішення.",
    },
  ]),
})
