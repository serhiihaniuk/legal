import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "48",
      provisionId: "kpa-art-48",
      reviewStatus: "reviewed",
      summary:
        "Стаття регулює doręczenie особам невідомого місця перебування та особам із дипломатичними або консульськими привілеями.",
      rules: [
        {
          locator: "§ 1",
          explanation: kpaLaw.text`Письма особі невідомого місця pobytu, для якої суд не призначив представника, вручаються przedstawicielowi за ${kpaLaw.article("34", "art. 34")}.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Особам з імунітетом doręcza się за спеціальними приписами, договорами й міжнародними звичаями.",
        },
      ],
      legalEffect:
        "Для цих адресатів звичайне особисте вручення замінює спеціальний представницький або міжнародний порядок.",
      foreignersCase: kpaLaw.text`Якщо місце перебування іноземця невідоме й суд не призначив йому представника, лист вручають представникові, встановленому за ${kpaLaw.article("34", "art. 34")}. Сама невідома або неактуальна поштова адреса ще не встановлює цієї ситуації.`,
    },
  ],
})
