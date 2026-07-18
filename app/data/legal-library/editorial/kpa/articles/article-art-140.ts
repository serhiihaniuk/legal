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
      article: "140",
      provisionId: "kpa-art-140",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`У питаннях, не врегульованих ${kpaLaw.articleRange("136", "139", { start: "art. 136", end: "139" })}, апеляційний орган відповідно застосовує правила першої інстанції.`,
      rules: [
        {
          locator: "єдиний блок",
          explanation:
            "Це субсидіарне, а не механічне застосування з урахуванням апеляційної стадії.",
        },
      ],
      legalEffect:
        "Прогалини апеляційної процедури заповнюються сумісними загальними правилами KPA.",
      foreignersCase: kpaLaw.text`У відсутньому спеціальному питанні odwołania іноземця можна посилатися на відповідне правило першої інстанції лише після перевірки ${kpaLaw.articleRange("136", "139", { start: "art. 136", end: "139" })}.`,
    },
  ],
})
