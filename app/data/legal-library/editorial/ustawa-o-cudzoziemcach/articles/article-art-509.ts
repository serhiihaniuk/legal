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
      provisionId: "ustawa-o-cudzoziemcach-art-509",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("509", "Art. 509")} визначає, які попередні періоди pobytu за starymi tytułami зараховуються до періоду, потрібного для окремих нових дозволів: zezwolenie na zamieszkanie на час означений, згода humanitarna та окремі випадки ochrony uzupełniającej.`,
          sourceLocator: "Art. 509 pkt 1–4",
        },
      ],
      summary:
        "Перехідна норма про зарахування минулого pobytu: вона пов’язує старі дозволи та рішення про zgoda na pobyt tolerowany з конкретними новими статусами.",
      rules: [
        {
          locator: "Art. 509 pkt 1–2",
          explanation:
            "До періоду на підставі zezwolenie na pobyt czasowy зараховується відповідний pobyt на підставі старого zezwolenie na zamieszkanie, а для дозволу з визначеною метою — період за дозволом з тією самою метою.",
        },
        {
          locator: "Art. 509 pkt 3–4",
          explanation:
            "Для zgoda na pobyt ze względów humanitarnych або ochrony uzupełniającej текст зараховує лише прямо названі періоди за старими рішеннями чи згодами.",
        },
      ],
      legalEffect:
        "Стаття може впливати на обчислення необхідного періоду лише в межах перелічених статусів і документів. Вона не встановлює автоматичного права на новий дозвіл і не скасовує інших умов.",
      foreignersCase: foreignersLaw.text`Складіть хронологію всіх tytuł pobytowy, назвіть правову підставу кожного періоду та окремо перевірте, чи відповідає вона конкретному пункту ${foreignersLaw.article("509", "Art. 509")}.`,
    },
  ],
})
