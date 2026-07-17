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
      provisionId: "ustawa-o-cudzoziemcach-art-123",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("123", "Art. 123")} обмежує застосування ${foreignersLaw.article("101", "art. 101")} pkt 1 і 2 після втрати роботи, якщо виконано обов’язок повідомлення, а для окремої підстави zezwolenia встановлює ліміти безробіття 3 місяці та двічі.`,
          sourceLocator: "Art. 123 ust. 1–3",
        },
      ],
      summary: foreignersLaw.text`Стаття передбачає тимчасове правило після втрати роботи та окреме правило для zezwolenia, наданого з підстави ${foreignersLaw.article("114", "art. 114")} ust. 1a.`,
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Протягом 30 днів від втрати роботи ${foreignersLaw.article("101", "art. 101")} pkt 1 і 2 не застосовуються, якщо cudzoziemiec доведе належне повідомлення або незалежну від нього недоставку повідомлення wojewodzie.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Для втрати роботи у всіх podmiotów, названих у zezwoleniu, це правило можна застосувати не більше одного разу протягом чинності zezwolenia.",
        },
        {
          locator: "ust. 3",
          explanation: foreignersLaw.text`Для zezwolenia з ${foreignersLaw.article("114", "art. 114")} ust. 1a період без роботи не може перевищувати 3 місяців, може настати не більше двох разів, а обов’язок повідомлення має бути виконаний або недоставка бути незалежною від cudzoziemca.`,
        },
      ],
      legalEffect:
        "Стаття не скасовує обов’язок повідомлення й не дає загальної гарантії збереження zezwolenia: її умови та названі строки мають бути доведені в конкретній справі.",
      foreignersCase:
        "Розрахуйте 30 днів від втрати роботи, збережіть доказ повідомлення та окремо порахуйте кількість і тривалість періодів без роботи.",
    },
  ],
})
