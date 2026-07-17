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
      provisionId: "ppsa-art-150",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`У справах про akty і czynności, не названі в ${ppsaLaw.article("145", "art. 145")}–${ppsaLaw.article("148", "148")}, суд, задовольняючи skarga, uchyla їх або stwierdza bezskuteczność.`,
          sourceLocator: "Art. 150",
        },
      ],
      summary:
        "Це залишкове правило наслідку для aktów і czynności, які не входять до категорій попередніх статей.",
      rules: [
        {
          locator: "Art. 150",
          explanation: ppsaLaw.text`Перед застосуванням перевірте, що предмет не належить до ${ppsaLaw.article("145", "art. 145")}–${ppsaLaw.article("148", "148")}; після цього розрізняйте uchylenie та bezskuteczność.`,
        },
      ],
      legalEffect:
        "Стаття дає два можливі наслідки для залишкової категорії, але сама не вирішує, який із них відповідає конкретному akt або czynność.",
      foreignersCase: ppsaLaw.text`У справі іноземця не називайте ${ppsaLaw.article("150", "art. 150")} запасним шляхом лише тому, що документ органу незрозумілий. Спершу встановіть точний тип akt або czynność та його правову категорію.`,
    },
  ],
})
