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
      provisionId: "ppsa-art-233",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("233", "Art. 233")} уповноважує Rada Ministrów визначити розporządzenie висоту й детальні правила pobierania wpis; wpis не може бути нижчим за сто złotych, stosunkowy не може перевищувати 4% wartości przedmiotu zaskarżenia і 100 000 zł, а stały — 10 000 zł.`,
          sourceLocator: "Art. 233",
        },
      ],
      summary:
        "Конкретні ставки та правила pobierania wpis визначає розporządzenie, а стаття встановлює законодавчі межі для його розміру.",
      rules: [
        {
          locator: "Art. 233",
          explanation: ppsaLaw.text`Зверніться до чинного розporządzenie Rady Ministrów для конкретної ставки, але зіставте її з мінімумом і граничними значеннями ${ppsaLaw.article("233", "Art. 233")}.`,
        },
        {
          locator: "Art. 233",
          explanation:
            "Для wpis stosunkowy перевіряйте і 4% wartości przedmiotu zaskarżenia, і граничні 100 000 zł; для wpis stały — межу 10 000 zł.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("233", "Art. 233")} встановлює рамку для підзаконного регулювання, а не остаточну суму для конкретного письма.`,
      foreignersCase: ppsaLaw.text`У справі про pobyt перевірте актуальну ставку за чинним rozporządzenie і не підміняйте її лише загальними межами, наведеними в ${ppsaLaw.article("233", "Art. 233")}.`,
    },
  ],
})
