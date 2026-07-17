import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-26",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 26 § 1 визначає: «Zdolność do czynności w postępowaniu w sprawach sądowoadministracyjnych (zdolność procesowa) mają osoby fizyczne posiadające pełną zdolność do czynności prawnych».",
          sourceLocator: "Art. 26 § 1",
        },
      ],
      summary:
        "Zdolność procesowa — здатність самостійно виконувати процесуальні дії — належить фізичним особам із повною zdolność do czynności prawnych, юридичним особам та названим організаціям; для обмежено дієздатної фізичної особи стаття передбачає окремий обсяг.",
      rules: [
        {
          locator: "Art. 26 § 1",
          explanation:
            "Повна zdolność do czynności prawnych є умовою zdolność procesowa фізичної особи; юридичні особи та організації, про які говорить текст, також мають таку здатність.",
        },
        {
          locator: "Art. 26 § 2",
          explanation:
            "Особа з обмеженою здатністю може виконувати дії у справах, що випливають із czynności prawnych, які вона може робити самостійно.",
        },
      ],
      legalEffect:
        "Стаття регулює здатність виконувати процесуальні дії, а не саму наявність матеріального права або обґрунтованість скарги.",
      foreignersCase:
        "У справі іноземця перевірте не лише можливість бути stroną, а й здатність самостійно підписувати та подавати procesowe pismo за Art. 26.",
    },
  ]),
})
