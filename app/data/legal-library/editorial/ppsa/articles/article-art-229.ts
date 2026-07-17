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
      provisionId: "ppsa-art-229",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("229", "Art. 229 § 1")} дозволяє umorzyć, odroczyć або rozłożyć na raty należności з nieuiszczonych kosztów sądowych та grzywien, крім grzywien, названих у ${ppsaLaw.article("55", "Art. 55 § 1")}, ${ppsaLaw.article("149", "Art. 149 § 2")} та ${ppsaLaw.article("154", "Art. 154 § 1")}, якщо їх стягнення спричинило б niewspółmierne trudności або надто тяжкі наслідки для боржника; ${ppsaLaw.article("229", "§ 2")} передає Раді Міністрів встановлення детальних правил.`,
          sourceLocator: "Art. 229 § 1–2",
        },
      ],
      summary:
        "За умов статті борг з несплачених koszty sądowe або grzywny можна просити списати, відстрочити чи розкласти на raty, але закон містить винятки.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Покажіть, що стягнення створило б niewspółmierne trudności або zbyt ciężkie skutki, і перевірте, чи grzywna не належить до прямо виключених.",
        },
        {
          locator: "§ 2",
          explanation:
            "Детальні органи, порядок, строки та підтвердження визначаються розporządzenie Rady Ministrów, тому перевірте чинні підзаконні правила.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("229", "Art. 229")} створює можливість полегшення сплати за названих умов, а не автоматичне право на списання чи raty; результат залежить від встановлення обставин і компетентного органу.`,
      foreignersCase:
        "У справі іноземця з боргом за koszty або grzywna підготуйте докази фінансових наслідків і перевірте винятки та чинне rozporządzenie, не прирівнюючи прохання до гарантованого umorzenie.",
    },
  ],
})
