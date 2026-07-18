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
      provisionId: "ustawa-o-cudzoziemcach-art-335",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("335", "Art. 335")} перелічує витрати, які може охоплювати pomoc w dobrowolnym powrocie, визначає джерело фінансування та обов’язок органу поінформувати іноземця.`,
          sourceLocator: "Art. 335 ust. 1–3",
        },
      ],
      summary:
        "Допомога може охоплювати безпечну й гуманну організацію повернення: дорогу, документи, харчування, проживання, медичну допомогу та інші прямо названі витрати.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Перелік включає подорож, адміністративні платежі за документ подорожі та візи, харчування, проживання перед подорожжю, медичну допомогу й організаційні витрати.",
        },
        {
          locator: "ust. 1a–2",
          explanation: foreignersLaw.text`Не покриваються витрати, які вже фінансуються як pomoc socjalna та opieka medyczna за ${foreignersLaw.article("70", "Art. 70")} відповідного закону про ochronę; фінансування йде з budżet państwa.`,
        },
        {
          locator: "ust. 3",
          explanation:
            "Орган, який видає визначені рішення, має повідомити іноземця про можливість скористатися допомогою.",
        },
      ],
      legalEffect:
        "Стаття визначає можливі компоненти допомоги, а не фіксовану виплату чи автоматичне відшкодування кожної витрати.",
      foreignersCase:
        "Попросіть уточнити, які саме витрати погоджені, хто їх оплачує і які витрати вже покриваються в іншій процедурі; не ототожнюйте інформаційний обов’язок із гарантією допомоги.",
    },
  ],
})
