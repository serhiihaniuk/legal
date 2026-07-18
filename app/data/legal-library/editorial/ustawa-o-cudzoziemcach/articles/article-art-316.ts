import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-316",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 316 дозволяє органу продовжити termin dobrowolnego wyjazdu, якщо потрібна особиста явка перед польським органом, цього вимагає інтерес Польщі або існує виняткова особиста ситуація, зокрема через тривалість pobytu, сімейні й соціальні зв’язки або навчання неповнолітньої дитини; після рішення орган може одноразово продовжити строк на wniosek, але не більш як до одного року.",
          sourceLocator: "Art. 316 ust. 1–3",
        },
      ],
      summary:
        "Стаття дає обмежену можливість продовжити добровільний виїзд з огляду на публічні або виняткові особисті обставини.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Обставини мають бути пов’язані з особистою явкою, інтересом Польщі або винятковою особистою ситуацією, яку стаття ілюструє названими факторами.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Після рішення продовження можливе одноразово на wniosek, а загальний строк не може перевищувати одного року.",
        },
      ],
      legalEffect:
        "Продовження є можливістю органу, а не автоматичним правом на будь-який запит; обставини й строк потрібно обґрунтувати.",
      foreignersCase:
        "Подайте wniosek до органу, що видав рішення, до завершення строку, додавши докази явки, сімейних зв’язків, навчання або іншої названої обставини.",
    },
  ]),
})
