import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-381",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Виконання рішення про повернення, виданого органом państwo członkowskie wydające, з mocy prawa анулює wizę krajową, дозвіл на перетин кордону в ramach mały ruch graniczny або wpis oświadczenia o powierzeniu pracy cudzoziemcowi до ewidencja; дозвіл на роботу припиняється з mocy prawa.",
          sourceLocator: "Art. 381",
        },
        {
          kind: "practical-inference",
          text: "Наслідки треба перевіряти окремо за кожним названим документом: стаття не говорить про автоматичне припинення всіх можливих підстав pobyt.",
          sourceLocator: "Art. 381",
        },
      ],
      summary:
        "Стаття називає наслідки виконання іноземного рішення про повернення для окремих національних документів і права на роботу.",
      rules: [
        {
          locator: "Art. 381",
          explanation:
            "З mocy prawa unieważnienie стосується wiza krajowa, дозволу на mały ruch graniczny та wpis oświadczenia до відповідної ewidencja; zezwolenie na pracę з mocy права wygasa.",
        },
      ],
      legalEffect:
        "Після фактичного виконання рішення настають прямо названі законом наслідки для візи, mały ruch graniczny, oświadczenie та zezwolenie na pracę. Інші документи треба аналізувати за їхніми нормами.",
      foreignersCase:
        "Складіть окремий список чинних документів: wiza, wpis oświadczenia, zezwolenie na pracę і документи pobyt. Зафіксуйте дату виконання рішення та не приписуйте цій статті наслідків, яких вона не називає.",
    },
  ]),
})
