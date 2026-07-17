import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "55",
      provisionId: "kpa-art-55",
      reviewStatus: "reviewed",
      summary:
        "Стаття дозволяє термінове wezwanie телефоном або іншим засобом зв’язку, але пов’язує його правові наслідки з безсумнівним отриманням належного змісту вчасно.",
      rules: [
        {
          locator: "§ 1",
          explanation: kpaLaw.text`У невідкладній справі wezwanie можна передати дистанційно з даними ${kpaLaw.article("54", "art. 54 § 1")} та ідентифікацією працівника.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Таке wezwanie має skutek prawny лише коли немає сумніву, що воно дійшло до адресата в правильному змісті й належному часі.",
        },
      ],
      legalEffect: kpaLaw.text`Сумнів у змісті, адресаті або своєчасності термінового повідомлення виключає передбачений ${kpaLaw.article("55", "art. 55")} skutek wezwania.`,
      foreignersCase:
        "Телефонний дзвінок urzędu іноземцю не створює автоматично всіх наслідків wezwania; потрібно мати можливість підтвердити повний зміст і своєчасне отримання.",
    },
  ],
})
