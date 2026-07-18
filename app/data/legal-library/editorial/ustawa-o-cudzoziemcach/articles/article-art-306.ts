import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-306",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 306 передбачає wygaśnięcie z mocy prawa decyzji o zobowiązaniu cudzoziemca do powrotu, якщо cudzoziemiec, зокрема, posiada status uchodźcy або korzysta z ochrony uzupełniającej, posiada zezwolenie na pobyt stały чи pobyt rezydenta długoterminowego UE, przebywa на підставі названого дозволу або otrzymał визначене рішення щодо міжнародного захисту.",
          sourceLocator: "Art. 306 pkt 1–3",
        },
      ],
      summary:
        "Стаття називає обставини, за яких рішення про zobowiązanie do powrotu втрачає силу без окремого скасування.",
      rules: [
        {
          locator: "pkt 1–2a",
          explanation:
            "Серед підстав — міжнародний захист, постійне або довгострокове перебування, окремі дозволи Art. 176 і Art. 187 pkt 6–7 та рішення Art. 393b ust. 1.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Окремо названо рішення про umorzenie провадження щодо міжнародного захисту і передачу до відповідальної держави в ситуації, визначеній законом про ochronę.",
        },
      ],
      legalEffect:
        "Wygaśnięcie z mocy prawa залежить від фактичного настання конкретної обставини зі статті; треба перевірити її документальне підтвердження та дату.",
      foreignersCase:
        "Якщо отримано новий статус або дозвіл, перевірте, чи саме він входить до Art. 306, і попросіть органи актуалізувати записи про рішення повернення.",
    },
  ]),
})
