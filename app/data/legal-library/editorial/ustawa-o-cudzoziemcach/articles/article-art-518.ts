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
      provisionId: "ustawa-o-cudzoziemcach-art-518",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("518", "Art. 518")} передбачає передачу даних, зібраних за старими правилами в krajowy zbiór rejestrów, ewidencji i wykazu «System Pobyt», до krajowy zbiór, що ведеться на підставі нового закону.`,
          sourceLocator: "Art. 518",
        },
      ],
      summary:
        "Перехідна норма визначає міграцію даних зі старого System Pobyt до нового krajowy zbiór у справах cudzoziemców.",
      rules: [
        {
          locator: "Art. 518",
          explanation:
            "Передаються дані, зібрані за dotychczasowe przepisy у названому старому zbiór, до реєстру, який ведеться на підставі нової ustawa.",
        },
        {
          locator: "Art. 518",
          explanation:
            "Стаття регулює передачу даних між системами; з її тексту не випливає самостійне право будь-якого суб’єкта на необмежений доступ.",
        },
      ],
      legalEffect:
        "Норма забезпечує безперервність реєстру під час переходу на нову систему. Вона не доводить правильність конкретного запису і не замінює процедури доступу, виправлення чи оскарження.",
      foreignersCase:
        "Порівняйте старі та нові відомості про особу, зафіксуйте джерело кожного запису й для помилки використовуйте відповідний порядок доступу або виправлення даних.",
    },
  ],
})
