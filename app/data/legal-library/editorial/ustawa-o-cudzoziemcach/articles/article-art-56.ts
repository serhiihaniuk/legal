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
      provisionId: "ustawa-o-cudzoziemcach-art-56",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("56", "Art. 56")} дозволяє Skarb Państwa або іншим суб’єктам вимагати в судовому провадженні від zapraszający відшкодування фактично понесених витрат, пов’язаних із виконанням їхніх ustawowych obowiązków, якщо зобов’язання запрошення не виконано; витрати на wydanie і wykonanie decyzji o zobowiązaniu do powrotu виключено.`,
          sourceLocator: "Art. 56",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`${foreignersLaw.article("56", "Art. 56")} передбачає можливість судового позову про zwrot kosztów, а не автоматичне стягнення лише через факт невиконання zaproszenie.`,
          sourceLocator: "Art. 56",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("56", "Art. 56")} пов’язує невиконання зобов’язань zapraszający із можливістю судового стягнення витрат, які держава або інший суб’єкт реально поніс, виконуючи свої законні обов’язки.`,
      rules: [
        {
          locator: "Art. 56 у zw. z Art. 51 ust. 2 pkt 3",
          explanation:
            "Спочатку встановіть, яке саме зобов’язання щодо pobyt, zakwaterowanie, wyżywienie, повернення або транзиту не виконано і які витрати виникли.",
        },
        {
          locator: "Art. 56",
          explanation:
            "Вимога реалізується przed sądem; кошти wydanie і wykonanie decyzji o zobowiązaniu do powrotu прямо не входять до цього відшкодування.",
        },
      ],
      legalEffect:
        "Норма створює можливу майнову вимогу до запрошуючого в суді. Вона не змінює автоматично статус cudzoziemiec і не є самостійною підставою для odmowa wizy.",
      foreignersCase: foreignersLaw.text`Зберіть zaproszenie, докази невиконаного zobowiązanie, рахунки та акти виконання державного обов’язку; відокремте допустимі витрати від виключених ${foreignersLaw.article("56", "Art. 56")}.`,
    },
  ],
})
