import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "235",
      provisionId: "kpa-art-235",
      reviewStatus: "reviewed",
      summary:
        "Стаття наказує кваліфікувати skargę на справу, завершену остаточним рішенням, як вимогу одного з надзвичайних режимів перегляду залежно від її змісту. Саме слово skarga не створює окремого способу скасувати остаточне рішення.",
      rules: [
        {
          locator: "§ 1",
          explanation: kpaLaw.text`За змістом звернення його вважають żądaniem wznowienia, stwierdzenia nieważności, uchylenia або zmiany decyzji; задоволення можливе лише за правилами відповідного режиму й з урахуванням ${kpaLaw.article("16", "art. 16 § 1")} zdanie drugie.`,
        },
        {
          locator: "§ 2",
          explanation: "Параграф скасований і не містить чинного правила.",
        },
      ],
      legalEffect:
        "Орган переводить skargę до конкретного надзвичайного провадження і перевіряє його власні підстави, строки та компетенцію.",
      foreignersCase:
        "Після остаточної відмови у pobycie іноземець не отримає нового розгляду лише через назву листа skarga. Він має викласти факти, що відповідають конкретній підставі wznowienia, nieważności, uchylenia або zmiany.",
    },
  ],
})
