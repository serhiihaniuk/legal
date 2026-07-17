import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-163",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("163", "Art. 163")} ust. 1 відсилає для визначення dochód у справі члена сім'ї до ${foreignersLaw.article("140", "art. 140")} ust. 2, а ust. 2 визнає вимогу стабільного і регулярного доходу виконаною, якщо utrzymanie покриває член сім'ї, зобов'язаний утримувати заявника і який мешкає в Польщі.`,
          sourceLocator: "Art. 163 ust. 1–2",
        },
      ],
      summary:
        "Дохід у family reunification рахується за спеціальним cross-reference, а джерелом може бути зобов'язаний утримувати родич у Польщі.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Не створюйте власний поріг доходу: застосуйте критерії та спосіб обчислення з ${foreignersLaw.article("140", "art. 140")} ust. 2.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Потрібно встановити одночасно обов'язок члена сім'ї утримувати заявника і його проживання в Польщі; просте переказування грошей або спільне проживання без цих фактів не є автоматичним доказом.",
        },
      ],
      legalEffect:
        "Стаття визначає спосіб виконання фінансової умови, але не скасовує саму вимогу доходу, документування та інших умов permit.",
      foreignersCase: foreignersLaw.text`Покажіть правову підставу обов'язку утримання, проживання sponsor у Польщі та стабільне джерело коштів; розрахунок зробіть за відповідним правилом ${foreignersLaw.article("140", "art. 140")} ust. 2.`,
    },
  ],
})
