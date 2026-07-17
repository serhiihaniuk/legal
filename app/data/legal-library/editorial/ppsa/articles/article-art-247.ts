import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-247",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 247 встановлює, що prawo pomocy не przysługuje стороні у разі очевидної bez zasadności її skarga.",
          sourceLocator: "Art. 247",
        },
      ],
      summary:
        "Очевидна bezzasadność skarga є окремою законною межею для przyznanie prawa pomocy.",
      rules: [
        {
          locator: "Art. 247",
          explanation:
            "Перевіряйте не просто слабкість аргументу чи несприятливий прогноз, а саме очевидну bezzasadność skarga, про яку говорить стаття.",
        },
      ],
      legalEffect:
        "За наявності цієї обставини сторона не отримує prawo pomocy; сама вимога про допомогу не усуває можливості оцінити допустимість і очевидну безпідставність skarga.",
      foreignersCase:
        "У спорі іноземця про legalizacja pobytu не називайте skarga очевидно безпідставною лише через відмову органу. Потрібно відокремити оцінку Art. 247 від фінансової ситуації та від питання, чи є інший доступний środek prawny.",
    },
  ]),
})
