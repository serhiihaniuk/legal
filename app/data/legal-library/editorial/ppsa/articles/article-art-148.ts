import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-148",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Задовольняючи skarga jednostki samorządu terytorialnego на akt nadzoru, суд uchyla цей акт.",
          sourceLocator: "Art. 148",
        },
      ],
      summary:
        "Стаття встановлює один наслідок для skarga органу samorządu terytorialnego на акт надзору.",
      rules: [
        {
          locator: "Art. 148",
          explanation:
            "Перевірте і статус skarżący як jednostka samorządu terytorialnego, і те, що предметом є акт надзору.",
        },
      ],
      legalEffect:
        "Це спеціальне правило для визначеної категорії skarga; воно не є загальним способом скасування decyzja у справі іноземця.",
      foreignersCase: ppsaLaw.text`Для типової справи про pobyt ${ppsaLaw.article("148", "art. 148")} прямо не визначає шлях оскарження. Не застосовуйте його без встановлення спеціального предмета та сторони, названих у статті.`,
    },
  ],
})
