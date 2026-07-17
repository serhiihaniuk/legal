import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-99",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 99 додає до ustawa про участь іноземних підприємців art. 4 ust. 3a: право вести діяльність у spółka z o.o., PSA або S.A. не охоплює повторюваних świadczeń niepieniężnych і праці або послуг в обмін на акції PSA.",
          sourceLocator:
            "Art. 99; art. 4 ust. 3a pkt 1–2 ustawy o przedsiębiorcach zagranicznych",
        },
      ],
      summary:
        "Форма участі в spółka сама по собі не дає права виконувати для неї будь-яку працю або послуги. Новий ust. 3a прямо виключає дві категорії дій із права на gospodarcza działalność, названого в ust. 3.",
      rules: [
        {
          locator: "ust. 3a pkt 1",
          explanation:
            "До охоплення права не входить spełnianie powtarzających się świadczeń niepieniężnych за art. 176 або 356 KSH.",
        },
        {
          locator: "ust. 3a pkt 2",
          explanation:
            "Також не входить świadczenie pracy lub usług в обмін на akcje prostej spółki akcyjnej.",
        },
      ],
      legalEffect:
        "Поправка розмежовує право на участь у spółka і фактичну працю або послуги; наслідок для доступу до ринку праці треба визначати за окремими правилами.",
      foreignersCase:
        "Якщо іноземець є учасником або акціонером, опишіть фактичну дію: внесок, повторювана świadczenie чи робота за akcje. Не робіть висновок із самого статусу в spółka.",
    },
  ]),
})
