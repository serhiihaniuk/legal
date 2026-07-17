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
      provisionId: "ustawa-o-cudzoziemcach-art-212",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("212", "Art. 212")} визначає, які періоди входять до 5-річного pobyt для rezydent długoterminowy UE: у названих випадках сумарний legalny pobyt в UE за Blue Card, adnotacja «naukowiec», міжнародний захист або документ іншої держави-члена для працівника високої кваліфікації, період провадження про ochronę międzynarodową понад 18 місяців, а також повністю або наполовину окремі періоди в Польщі чи іншій державі-члені.`,
          sourceLocator: "Art. 212 ust. 1 pkt 1–4",
        },
        {
          kind: "statute-text",
          text: "Стаття виключає, зокрема, pobyt працівника, відрядженого для транскордонних послуг, навчання, окремі візи та дозволи, період після рішення про powrót, частину процедур захисту, малий прикордонний рух і визначені міжнародні місії; безперервність має межі 6/10 місяців у Польщі та 12/18 місяців для названого pobyt в іншій державі UE, із винятками.",
          sourceLocator: "Art. 212 ust. 2–4",
        },
      ],
      summary:
        "Стаття дає правила зарахування та виключення періодів і визначає межі допустимих перерв для 5-річного стажу.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Для Blue Card, adnotacja «naukowiec», міжнародного захисту та названого висококваліфікованого pobytu перевірте весь період у UE, мінімальний польський період і спеціальну підставу наступного wniosek.",
        },
        {
          locator: "ust. 1 pkt 3–4",
          explanation:
            "Половина строку зараховується лише для прямо названих віз, дозволів або студентської мобільності; не округлюйте період довільно.",
        },
        {
          locator: "ust. 2–4",
          explanation:
            "Спочатку виключіть неприпустимі періоди, потім перевірте тривалість кожної перерви та загальну межу; названі службові, сімейні й навчальні винятки потребують доказів.",
        },
      ],
      legalEffect:
        "Неправильне включення навчання, транскордонних послуг або періоду після рішення про powrót може змінити розрахунок 5 років; остаточний стаж залежить від документованої хронології.",
      foreignersCase: foreignersLaw.text`Складіть календар усіх віз, дозволів, процедур і виїздів із позначенням «рахується повністю», «половина» або «не рахується» за відповідним пунктом ${foreignersLaw.article("212", "Art. 212")}.`,
    },
  ],
})
