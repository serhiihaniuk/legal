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
      provisionId: "ustawa-o-cudzoziemcach-art-139g",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139g", "Art. 139g")}, poza випадками ${foreignersLaw.article("101", "art. 101")} pkt 1 або 2, передбачає cofnięcie zezwolenia за ${foreignersLaw.article("139a", "art. 139a")}, якщо його використовують не за метою, виникла обставина ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4 або 8, чи наявна обставина ${foreignersLaw.article("139f", "art. 139f")} ust. 1 pkt 1, 3 або 4.`,
          sourceLocator: "Art. 139g pkt 1–3",
        },
      ],
      summary: foreignersLaw.text`Стаття визначає підстави відкликання ICT-zezwolenia поза випадками ${foreignersLaw.article("101", "art. 101")} pkt 1 або 2.`,
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Zezwolenie відкликається, якщо обставини показують використання його для іншої мети, ніж та, для якої його надали.",
        },
        {
          locator: "pkt 2–3",
          explanation: foreignersLaw.text`Також відсиланням охоплено саме ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 4 або 8 та окремі обставини ${foreignersLaw.article("139f", "art. 139f")} ust. 1 pkt 1, 3 або 4.`,
        },
      ],
      legalEffect:
        "Стаття визначає підстави cofnięcie через власні умови та відсилання; вона не робить кожне порушення автоматично доведеним.",
      foreignersCase: foreignersLaw.text`Порівняйте фактичну роботу й мету з decyzja та перевірте, на який саме пункт ${foreignersLaw.article("139g", "art. 139g")} і пов’язаної статті посилається орган.`,
    },
  ],
})
