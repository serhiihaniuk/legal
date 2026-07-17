import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-290",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 290 зобов’язує органи адміністрації урядової і самоврядної співпрацювати з organami Straży Granicznej, Policji, Krajowej Administracji Skarbowej, Szefem Urzędu та wojewodą під час kontroli, про яку йдеться в Art. 289.",
          sourceLocator: "Art. 290",
        },
      ],
      summary:
        "Органи державної та місцевої адміністрації повинні співпрацювати з органами, які проводять контроль legalności pobytu.",
      rules: [
        {
          locator: "Art. 290",
          explanation:
            "Обов’язок співпраці прив’язаний до kontroli, визначеної в Art. 289, і охоплює названі в статті органи.",
        },
      ],
      legalEffect:
        "Норма забезпечує міжвідомчу співпрацю під час контролю; вона не є самостійною підставою для висновку про незаконність перебування.",
      foreignersCase:
        "Якщо орган посилається на дані іншої адміністрації, з’ясуйте, до якої перевірки Art. 289 вони належать і який факт ними підтверджується.",
    },
  ]),
})
