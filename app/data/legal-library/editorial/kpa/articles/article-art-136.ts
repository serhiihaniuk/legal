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
      article: "136",
      provisionId: "kpa-art-136",
      reviewStatus: "reviewed",
      summary:
        "Апеляційний орган може доповнити докази сам або через першу інстанцію, а за згодою сторін у визначених випадках проводить ширше з’ясування для рішення по суті.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Додаткові докази збираються з urzędu або на вимогу сторони органом odwoławczym чи за його дорученням.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Якщо рішення порушує процесуальні правила, а обсяг обставин, які ще необхідно з’ясувати, істотно впливає на вирішення справи, апеляційний орган проводить необхідне з’ясування за узгодженою вимогою всіх сторін, викладеною в odwołaniu. Це також можливо, коли вимогу виклала одна сторона, а решта погодилися протягом 14 днів від вручення повідомлення про апеляцію, яке містить цю вимогу.",
        },
        {
          locator: "§ 4",
          explanation:
            "Розширений режим не діє, якщо таке з’ясування було б надмірно ускладнене.",
        },
      ],
      legalEffect:
        "Недостатній доказовий матеріал може бути доповнений в апеляції без автоматичного kasacyjnego повернення.",
      foreignersCase: kpaLaw.text`В odwołaniu іноземець може назвати конкретні докази до доповнення і, за потреби, просити повне з’ясування за умов ${kpaLaw.article("136", "§ 2")}.`,
    },
  ],
})
