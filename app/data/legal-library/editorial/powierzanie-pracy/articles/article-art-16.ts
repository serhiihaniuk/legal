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
      provisionId: "powierzanie-pracy-art-16",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("16", "Art. 16")} встановлює, що отримання дозволу на роботу не звільняє від вимог окремих законів, виконання яких є умовою праці в регульованій професії («zawód regulowany») або ведення регульованої діяльності («działalność regulowana»).`,
          sourceLocator: "Art. 16",
        },
      ],
      summary:
        "Дозвіл на роботу є лише одним елементом допуску. Для регульованої професії або діяльності можуть бути потрібні окремі кваліфікації, реєстрації чи дозволи за іншими актами.",
      rules: [
        {
          locator: "Art. 16",
          explanation: workLaw.text`Після отримання дозволу перевірте вимоги спеціального закону до регульованої професії або діяльності. ${workLaw.article("16", "Ст. 16")} не перелічує і не скасовує цих вимог.`,
        },
      ],
      legalEffect:
        "Дозвіл на роботу не гарантує права виконувати регульовану професію та не вирішує питання законності перебування. Він не замінює окремих професійних або галузевих передумов.",
      foreignersCase:
        "Визначте, чи є професія або діяльність регульованою, і встановіть вимоги відповідного акта. Потім окремо перевірте дозвіл на роботу, документ про перебування і підтвердження кваліфікації: кожен із цих елементів відповідає на інше питання.",
    },
  ],
})
