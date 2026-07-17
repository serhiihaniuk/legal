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
      provisionId: "ustawa-o-cudzoziemcach-art-519",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("519", "Art. 519")} встановлює, що Szef Urzędu do Spraw Cudzoziemców, призначений на підставі uchylona ustawa, є Szefem Urzędu do Spraw Cudzoziemców у розумінні нової ustawa.`,
          sourceLocator: "Art. 519",
        },
      ],
      summary:
        "Перехідна організаційна норма зберігає правову безперервність посади Szef Urzędu do Spraw Cudzoziemców після заміни попереднього закону.",
      rules: [
        {
          locator: "Art. 519",
          explanation:
            "Йдеться про особу, призначену за попередньою ustawa; текст визнає її Szefem Urzędu у новому законі.",
        },
        {
          locator: "Art. 519",
          explanation:
            "Це правило про статус органу, а не про компетенцію в кожній індивідуальній справі чи про результат конкретного провадження.",
        },
      ],
      legalEffect:
        "Стаття забезпечує наступність посади для цілей нового закону. Вона сама не визначає, який орган компетентний у конкретній справі, без перевірки інших положень.",
      foreignersCase:
        "Якщо у старих матеріалах названо Szef Urzędu, зіставте дату та вид дії з правилами компетенції, які діяли для відповідного провадження.",
    },
  ],
})
