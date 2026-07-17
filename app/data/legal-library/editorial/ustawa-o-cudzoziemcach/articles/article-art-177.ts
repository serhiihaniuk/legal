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
      provisionId: "ustawa-o-cudzoziemcach-art-177",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("177", "Art. 177")} встановлює, що zezwolenie na pobyt czasowy для ofiary handlu ludźmi надається на період щонайменше 6 місяців.`,
          sourceLocator: "Art. 177",
        },
      ],
      summary:
        "Мінімальний строк спеціального дозволу жертві handlu ludźmi — 6 місяців; стаття сама не встановлює максимального строку.",
      rules: [
        {
          locator: "весь припис",
          explanation:
            "Орган визначає строк у межах закону, але не може надати цей вид permit менше ніж на 6 місяців; строк не слід плутати зі строком zaświadczenie.",
        },
      ],
      legalEffect:
        "Норма гарантує мінімальну тривалість наданого permit, але не продовжує автоматично його після закінчення і не скасовує можливого cofnięcie.",
      foreignersCase: foreignersLaw.text`Перевірте строк у decyzja: якщо permit видано менше ніж на 6 місяців, порівняйте його з ${foreignersLaw.article("177", "Art. 177")} і вчасно використайте доступний засіб оскарження.`,
    },
  ],
})
