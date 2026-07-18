import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-207a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`У провадженні про udzielenie або cofnięcie zezwolenia na pobyt stały стороною є виключно cudzoziemiec, про якого йдеться відповідно в ${foreignersLaw.article("195", "art. 195")} або ${foreignersLaw.article("199", "art. 199")}.`,
          sourceLocator: "Art. 207a",
        },
      ],
      summary:
        "Стаття визначає склад сторони у провадженні про надання або відкликання pobyt stały.",
      rules: [
        {
          locator: "Art. 207a",
          explanation:
            "Процесуальний статус strony за цією статтею належить саме cudzoziemiec; не додавайте інших сторін лише через їхній фактичний інтерес.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("207a", "Art. 207a")} стосується процесуального статусу, а не матеріального права на zezwolenie або способу його відкликання.`,
      foreignersCase:
        "У листуванні перевірте, кого орган визнав stroną, і використовуйте правила KPA про участь саме в межах статусу, який випливає з цієї статті.",
    },
  ],
})
