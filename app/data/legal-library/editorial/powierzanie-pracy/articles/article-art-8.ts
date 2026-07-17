import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-8",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("8", "Art. 8")} вимагає подавати wniosek про zezwolenie та документи через визначений system teleinformatyczny; подання іншим способом залишають bez rozpoznania. Środek zaskarżenia також подається через цю систему, а за неможливості через її неправильну роботу — протягом 7 днів після усунення несправності.`,
          sourceLocator: "Art. 8 ust. 1–5",
        },
      ],
      summary:
        "Закон встановлює електронний спосіб подання wniosek і środka zaskarżenia. Неправильний канал може мати наслідок bez rozpoznania або недопустимості, але для збою системи передбачено спеціальний строк після відновлення роботи.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Wniosek подає podmiot powierzający pracę, разом із документами через system teleinformatyczny, визначений законом. Wniosek, поданий інакше, залишають bez rozpoznania.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Środek zaskarżenia у справі zezwolenie подається через той самий system; інший спосіб є niedopuszczalny.",
        },
        {
          locator: "ust. 5",
          explanation:
            "Якщо збій системи не дозволив подати środek зaskarżenia у строк KPA, його подають протягом 7 днів після дня усунення несправності.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("8", "Art. 8")} визначає процесуальний спосіб звернення, а не матеріальне право на роботу чи pobyt. Навіть правильно поданий електронний wniosek не замінює рішення та документа, потрібного для роботи.`,
      foreignersCase:
        "Подання перевіряйте в системі й зберігайте підтвердження, дату та копії файлів. Якщо оскарження неможливе через збій, зафіксуйте несправність і дату її усунення; окремо контролюйте legalny pobyt і право на роботу.",
    },
  ],
})
