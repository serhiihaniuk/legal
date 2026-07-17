import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-325",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 325 передбачає, що за відсутності dokument podróży Komendant Główny Straży Granicznej звертається до дипломатичного представництва або консульства держави походження, а за його відсутності — до компетентного органу цієї держави; у виправданих випадках можливі співбесіда для підтвердження громадянства та участь tłumacza, а ust. 6–7 позначені як «(uchylony)».",
          sourceLocator: "Art. 325 ust. 1–7",
        },
      ],
      summary:
        "Стаття регулює отримання документа подорожі для виконання повернення, коли іноземець його не має.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Запит подається до представництва, консульства або, за його відсутності, до компетентного органу держави походження.",
        },
        {
          locator: "ust. 3–5",
          explanation:
            "У виправданих випадках органи Straży Granicznej можуть забезпечити співбесіду для підтвердження громадянства; вона проходить за участю funkcjonariusz і, за потреби, tłumacz.",
        },
        {
          locator: "ust. 6–7",
          explanation:
            "Ці положення мають позначку «(uchylony)» і не містять чинного правила.",
        },
      ],
      legalEffect:
        "Стаття створює механізм отримання документа для виконання повернення, але не гарантує його видачу державою походження.",
      foreignersCase:
        "Якщо документа немає, надайте точні дані про громадянство й документи, що його підтверджують; для співбесіди попросіть зрозуміле мовне забезпечення.",
    },
  ]),
})
