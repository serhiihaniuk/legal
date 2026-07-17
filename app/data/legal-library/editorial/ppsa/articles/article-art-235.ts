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
      provisionId: "ppsa-art-235",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("235", "Art. 235")} передбачає opłatę kancelaryjną також за odpisy, wyciągi, kopie, wydruki, zaświadczenia та інші документи, видані на підставі zbiorów, які зберігаються і ведуться в суді поза aktami sprawy.`,
          sourceLocator: "Art. 235",
        },
      ],
      summary:
        "Окрема opłata kancelaryjna може стягуватися за документи з судових zbiorów, що перебувають поза aktami конкретної справи.",
      rules: [
        {
          locator: "Art. 235",
          explanation:
            "Встановіть джерело документа: ця стаття стосується zbiorów у суді поза aktami sprawy, а не автоматично кожного документа з матеріалів справи.",
        },
      ],
      legalEffect:
        "Стаття розширює перелік документів, за які може стягуватися opłata kancelaryjna, але не визначає її конкретний розмір.",
      foreignersCase:
        "Якщо іноземцю потрібна копія або zaświadczenie з суду, уточніть, чи документ походить з akt справи чи з окремого zbioru, і перевірте відповідну opłatę.",
    },
  ],
})
