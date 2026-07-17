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
      provisionId: "ustawa-o-cudzoziemcach-art-173",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("173", "Art. 173")} зобов'язує organ, який веде провадження про злочин handlu ludźmi, письмово і зрозумілою cudzoziemiec мовою повідомити його про правила ${foreignersLaw.article("171", "art. 171")} та ${foreignersLaw.article("172", "art. 172")}.`,
          sourceLocator: "Art. 173",
        },
      ],
      summary:
        "Письмове pouczenie має пояснити потерпілому правові наслідки zaświadczenie та його строк зрозумілою мовою.",
      rules: [
        {
          locator: "весь припис",
          explanation: foreignersLaw.text`Обов'язок лежить на органі кримінального провадження; повідомлення повинно охопити зміст ${foreignersLaw.article("171", "art. 171")} про legalny pobyt і ${foreignersLaw.article("172", "art. 172")} про строк zaświadczenie та бути письмовим мовою, яку cudzoziemiec розуміє.`,
        },
      ],
      legalEffect:
        "Pouczenie забезпечує інформованість і не замінює видачу документа, доказ domniemanie або рішення про pobyt.",
      foreignersCase:
        "Попросіть копію письмового pouczenie зрозумілою мовою та звірте, чи воно охоплює legalny pobyt і строк документа; за потреби залучіть перекладача.",
    },
  ],
})
