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
      provisionId: "powierzanie-pracy-art-16",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("16", "Art. 16")} встановлює, що отримання zezwolenie na pracę не звільняє від вимог окремих законів, від виконання яких залежить можливість працювати у zawód regulowany або вести діяльність regulowana.`,
          sourceLocator: "Art. 16",
        },
      ],
      summary:
        "Дозвіл на роботу є лише одним елементом допуску. Для регульованої професії або діяльності можуть бути потрібні окремі кваліфікації, реєстрації чи дозволи за іншими актами.",
      rules: [
        {
          locator: "Art. 16",
          explanation: workLaw.text`Після отримання zezwolenie перевірте вимоги спеціального закону до zawód regulowany або działalność regulowana; ${workLaw.article("16", "art. 16")} їх не перелічує і не скасовує.`,
        },
      ],
      legalEffect:
        "Zezwolenie на роботу не гарантує права виконувати регульовану професію та не вирішує питання legalnego pobytu. Воно не замінює окремих професійних або галузевих передумов.",
      foreignersCase:
        "Визначте, чи є посада або діяльність регульованою, і складіть окремий список вимог за відповідним актом. Перевірте zezwolenie, документ pobyt та кваліфікаційні підтвердження, не ототожнюючи їх.",
    },
  ],
})
