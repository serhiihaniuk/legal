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
      article: "122g",
      provisionId: "kpa-art-122g",
      reviewStatus: "reviewed",
      summary:
        "До мовчазно завершених справ відповідно застосовуються режими wznowienia та надзвичайного контролю decyzji.",
      rules: [
        {
          locator: "єдиний блок",
          explanation: kpaLaw.text`Для цих режимів закон фіксує умовний момент ефекту остаточної decyzji — чотирнадцять днів після спливу строку з ${kpaLaw.article("122c", "art. 122c § 1")}.`,
        },
      ],
      legalEffect:
        "Позитивне мовчання не є недоторканним і може контролюватися надзвичайними способами.",
      foreignersCase:
        "Навіть якщо справа іноземця законно завершилася milcząco, треба враховувати можливість подальшого wznowienia або іншого надзвичайного перегляду.",
    },
  ],
})
