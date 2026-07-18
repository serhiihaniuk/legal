import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-37a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Станом на 18.07.2026 Art. 37a встановлює: «Pełnomocnictwo udzielone w formie dokumentu elektronicznego podpisuje się kwalifikowanym podpisem elektronicznym, podpisem zaufanym albo podpisem osobistym». Формулювання w postaci elektronicznej набере чинності 1.10.2029.",
          sourceLocator: "Art. 37a, przypisy 14–15",
        },
      ],
      summary:
        "Чинна редакція стосується доручення, наданого як електронний документ (pełnomocnictwo udzielone w formie dokumentu elektronicznego), і вимагає одного з трьох підписів: kwalifikowany podpis elektroniczny, podpis zaufany або podpis osobisty.",
      rules: [
        {
          locator: "Art. 37a / Przypisy 14–15",
          explanation:
            "До 30.09.2029 включно доручення, надане як електронний документ (pełnomocnictwo udzielone w formie dokumentu elektronicznego), треба підписати одним із трьох названих способів. Редакція w postaci elektronicznej застосовуватиметься з 1.10.2029.",
        },
      ],
      legalEffect:
        "Стаття встановлює вимогу до підпису електронного доручення, але не вирішує питання особи представника або обсягу його повноважень.",
      foreignersCase:
        "Перед електронним поданням у справі іноземця перевірте, що доручення у формі електронного документа (pełnomocnictwo w formie dokumentu elektronicznego) підписане одним із способів Art. 37a і відповідає потрібному обсягу повноважень.",
    },
  ]),
})
