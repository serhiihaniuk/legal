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
      provisionId: "ustawa-o-cudzoziemcach-art-137e",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("137e", "Art. 137e")} наказує відповідно застосовувати до zezwolenia за ${foreignersLaw.article("137a", "art. 137a")} положення ${foreignersLaw.article("131", "art. 131")}, ${foreignersLaw.article("133", "art. 133")}–134a та ${foreignersLaw.article("137", "art. 137")}.`,
          sourceLocator: "Art. 137e",
        },
      ],
      summary:
        "Стаття переносить до довгострокової мобільності визначені правила про wszczęcie, cofnięcie, повідомлення та зміст decyzja.",
      rules: [
        {
          locator: "Art. 137e",
          explanation: foreignersLaw.text`Для конкретного питання треба звертатися до названої статті та застосовувати її відповідно до виду zezwolenia за ${foreignersLaw.article("137a", "art. 137a")}.`,
        },
      ],
      legalEffect: foreignersLaw.text`Норма є відсилочною: вона не замінює текст ${foreignersLaw.article("131", "art. 131")}, 133–134a і 137 та не поширює інші правила, не названі тут.`,
      foreignersCase: foreignersLaw.text`Коли виникає питання про повідомлення, cofnięcie або реквізити decyzja, прочитайте відповідний пункт названої статті разом із ${foreignersLaw.article("137e", "Art. 137e")}.`,
    },
  ],
})
