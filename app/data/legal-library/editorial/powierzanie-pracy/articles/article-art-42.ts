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
      provisionId: "powierzanie-pracy-art-42",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("42", "Art. 42")} визначає зміст zezwolenie при delegowanie: дані podmiot zagraniczny і cudzoziemiec, stanowisko або rodzaj pracy, wymiar часу або кількість годин на тиждень чи місяць, найнижче wynagrodzenie та okres ważności. Для моделей ${workLaw.article("40", "art. 40")} ust. 1 pkt 1–2 зазначають podmiot, до якого delegowany cudzoziemiec, або odbiorca usługi.`,
          sourceLocator: "Art. 42 ust. 1 pkt 1–6 і ust. 2",
        },
      ],
      summary:
        "Дозвіл при delegowanie фіксує трудову модель, години, мінімальну оплату та одержувача або приймаючий podmiot, коли це потрібно. Фактична робота має відповідати цим межам.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Зіставте дані podmiot zagraniczny і cudzoziemiec з wniosek та документами.",
        },
        {
          locator: "ust. 1 pkt 3–6",
          explanation:
            "Перевірте stanowisko, rodzaj pracy, wymiar або години, мінімальне wynagrodzenie та строк чинності дозволу.",
        },
        {
          locator: "ust. 2",
          explanation:
            "У випадках delegowanie до пов'язаного podmiot або для exportowa usługa документ також називає приймаючий podmiot або odbiorca usługi.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("42", "Art. 42")} окреслює uprawnienie do pracy при delegowanie, але не підтверджує legalny pobyt. Інший одержувач, stanowisko чи строк можуть вимагати окремої правової оцінки.`,
      foreignersCase:
        "Порівняйте zezwolenie з договором іноземного роботодавця, фактичними годинами, оплатою та місцем роботи. Перевірте документ pobyt незалежно від польського одержувача послуги.",
    },
  ],
})
