import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-37a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "На legalStateDate 2026-07-14 чинна редакція Art. 37a встановлює: «Pełnomocnictwo udzielone w formie dokumentu elektronicznego podpisuje się kwalifikowanym podpisem elektronicznym, podpisem zaufanym albo podpisem osobistym»; варіант «w postaci elektronicznej» у corpus позначений як майбутня редакція до 1.10.2029.",
          sourceLocator: "Art. 37a, przypisy 14–15",
        },
      ],
      summary:
        "На legalStateDate електронне pełnomocnictwo у formie dokumentu elektronicznego підписується kwalifikowany podpis elektroniczny, podpis zaufany або podpis osobisty; corpus окремо містить майбутню редакцію w postaci elektronicznej з датою 1.10.2029.",
      rules: [
        {
          locator: "Art. 37a",
          explanation:
            "Для чинної formie dokumentu elektronicznego треба використати один із трьох названих способів підпису; не застосовуйте до legalStateDate формулювання майбутньої редакції w postaci elektronicznej.",
        },
      ],
      legalEffect:
        "Стаття встановлює вимогу до підпису електронного доручення в чинній формі документа та містить перехід до іншої редакції, але не вирішує питання особи представника або обсягу його повноваження.",
      foreignersCase:
        "Перед електронним поданням у справі іноземця перевірте, що чинне на дату подання pełnomocnictwo у formie dokumentu elektronicznego підписане одним із способів Art. 37a і відповідає потрібному обсягу доручення.",
    },
  ]),
})
