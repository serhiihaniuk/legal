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
      provisionId: "ustawa-o-cudzoziemcach-art-352",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("352", "Art. 352")} вимагає відмовити у zgoda na pobyt tolerowany за ${foreignersLaw.article("351", "Art. 351")} pkt 2 або 3, якщо перебування може загрожувати оборонності, безпеці держави або охороні безпеки й громадського порядку.`,
          sourceLocator: "Art. 352",
        },
      ],
      summary: foreignersLaw.text`Навіть коли повернення неможливе або юридично заборонене за ${foreignersLaw.article("351", "Art. 351")} pkt 2–3, загроза безпеці може блокувати tolerowany pobyt.`,
      rules: [
        {
          locator: "całość",
          explanation: foreignersLaw.text`Відмова за ${foreignersLaw.article("352", "Art. 352")} стосується саме випадків ${foreignersLaw.article("351", "Art. 351")} pkt 2 або 3 і потребує висновку про можливу загрозу державній або громадській безпеці.`,
        },
      ],
      legalEffect: foreignersLaw.text`Норма є обмеженням до двох підстав ${foreignersLaw.article("351", "Art. 351")}; вона не поширює автоматично таку відмову на ${foreignersLaw.article("351", "Art. 351")} pkt 1.`,
      foreignersCase: foreignersLaw.text`Перевірте, чи рішення справді спирається на ${foreignersLaw.article("351", "Art. 351")} pkt 2 або 3, які матеріали підтверджують загрозу та чи пояснив орган причинний зв’язок.`,
    },
  ],
})
