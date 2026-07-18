import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-42",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("42", "Art. 42")} визначає зміст дозволу на роботу у зв’язку з направленням. У ньому зазначають дані закордонного суб’єкта (podmiot zagraniczny) та іноземця, посаду або вид роботи, робочий час чи кількість годин, найнижчу оплату й строк чинності. У випадках із ${workLaw.article("40", "art. 40")} ust. 1 pkt 1–2 документ також називає суб’єкта, до якого направлено працівника, або одержувача послуги (odbiorca usługi).`,
          sourceLocator: "Art. 42 ust. 1 pkt 1–6 і ust. 2",
        },
      ],
      summary:
        "Дозвіл фіксує конкретні межі направлення: хто направляє працівника, яку роботу він виконує, скільки працює, яку мінімальну оплату отримує та як довго діє документ. Фактичні умови треба зіставляти з кожним із цих елементів.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Зіставте дані закордонного суб’єкта та іноземця із заявою (wniosek) і підтвердними документами.",
        },
        {
          locator: "ust. 1 pkt 3–6",
          explanation:
            "Перевірте посаду або вид роботи, робочий час чи кількість годин, найнижчу оплату та строк чинності дозволу.",
        },
        {
          locator: "ust. 2",
          explanation:
            "При направленні до підрозділу чи пов’язаного суб’єкта або для виконання експортної послуги документ також називає приймаючого суб’єкта чи одержувача послуги.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("42", "Art. 42")} окреслює право на роботу в межах направлення, але не підтверджує законного перебування (legalny pobyt). Зміна одержувача, посади, часу роботи чи строку може вимагати окремої правової оцінки.`,
      foreignersCase:
        "Порівняйте дозвіл (zezwolenie) з договором закордонного роботодавця, фактичними годинами, оплатою та місцем роботи. Незалежно від польського одержувача послуги перевірте документ, що є підставою перебування.",
    },
  ],
})
