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
      provisionId: "ustawa-o-cudzoziemcach-art-423",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("423", "Art. 423")}: «W postępowaniu w sprawie wymierzenia kary dyscyplinarnej stosuje się odpowiednio przepisy Kodeksu karnego wykonawczego».`,
          sourceLocator: "Art. 423",
        },
        {
          kind: "practical-inference",
          text: "Відсилання «odpowiednio» не означає механічне застосування кожної норми Kodeks karny wykonawczy без перевірки сумісності.",
          sourceLocator: "Art. 423",
        },
      ],
      summary:
        "У провадженні щодо дисциплінарної kary відповідно застосовуються правила Kodeks karny wykonawczy.",
      rules: [
        {
          locator: "Art. 423",
          explanation:
            "Потрібно перевіряти норми Kodeks karny wykonawczy, але застосування є odpowiednie — з урахуванням предмета цього провадження.",
        },
      ],
      legalEffect:
        "Стаття доповнює спеціальний режим дисциплінарної kary відсиланням до Kodeks karny wykonawczy; вона не перелічує конкретні процесуальні кроки.",
      foreignersCase:
        "Для оцінки рішення про karę визначте спочатку спеціальне правило ustawy o cudzoziemcach, а потім перевірте відповідну норму Kodeks karny wykonawczy.",
    },
  ],
})
