import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-45",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 45 встановлює: «Pismo w postępowaniu sądowym (pismo strony) obejmuje wnioski i oświadczenia stron składane poza rozprawą».",
          sourceLocator: "Art. 45",
        },
      ],
      summary:
        "Pismo strony у судовому провадженні — це wnioski та oświadczenia сторін, подані поза rozprawa.",
      rules: [
        {
          locator: "Art. 45",
          explanation:
            "Для цієї дефініції важливі зміст (wnioski або oświadczenia сторони) і місце подання — poza rozprawą.",
        },
      ],
      legalEffect:
        "Стаття дає визначення pismo strony для подальших процесуальних правил, але сама не встановлює його повних формальних реквізитів.",
      foreignersCase:
        "У справі про pobyt відрізніть pismo, подане поза rozprawa, від усної заяви під час засідання; для письмового документа окремо перевірте його реквізити.",
    },
  ]),
})
