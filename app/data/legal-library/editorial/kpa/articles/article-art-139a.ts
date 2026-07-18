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
      article: "139a",
      provisionId: "kpa-art-139a",
      reviewStatus: "reviewed",
      summary:
        "Після kasacyjnej decyzji перша інстанція зобов’язана врахувати фактичні вказівки й правове тлумачення апеляційного органу, якщо право не змінилося.",
      rules: [
        {
          locator: "§ 1",
          explanation: kpaLaw.text`Зв’язують обставини з ${kpaLaw.article("138", "art. 138 § 2")} та wytyczne wykładni з ${kpaLaw.article("139a", "§ 2a")}; зміна застосовного права знімає пов’язаність.`,
        },
        {
          locator: "§ 2",
          explanation:
            "При повторному odwołaniu орган може вимагати пояснити відступ і вжити заходів проти повторення порушення.",
        },
      ],
      legalEffect:
        "Повторний розгляд не починається з нуля: перша інстанція повинна реалізувати вказівки kasacyjne.",
      foreignersCase:
        "У повторній справі іноземця треба порівняти нову decyzję з кожною вказівкою органу odwoławczego і перевірити, чи не змінилася правова база.",
    },
  ],
})
