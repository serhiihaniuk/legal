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
      provisionId: "ustawa-o-cudzoziemcach-art-223",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`До udzielenia або cofnięcia cudzoziemcowi zezwolenia na pobyt rezydenta długoterminowego UE застосовуються przepisy ${foreignersLaw.article("202", "Art. 202")}, ${foreignersLaw.article("203", "Art. 203")} ust. 2a і 2b та ${foreignersLaw.article("206", "Art. 206")}–${foreignersLaw.article("210", "210")}.`,
          sourceLocator: "Art. 223",
        },
      ],
      summary:
        "Стаття відсилає до окремих процедурних положень ustawa o cudzoziemcach для надання або cofnięcia zezwolenia rezydenta długoterminowego UE.",
      rules: [
        {
          locator: "Art. 202; Art. 203 ust. 2a i 2b",
          explanation:
            "Під час аналізу udzielenia або cofnięcia потрібно прочитати саме названі частини інших статей у їхньому чинному тексті.",
        },
        {
          locator: "Art. 206–210",
          explanation:
            "Відсилання охоплює лише перелічені статті та обидва види дії; не поширюйте його автоматично на інші норми.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("223", "Art. 223")} не створює нової матеріальної підстави, а включає названі przepisy до аналізу udzielenia або cofnięcia цього zezwolenia.`,
      foreignersCase: foreignersLaw.text`У справі складіть перелік питань за ${foreignersLaw.article("202", "Art. 202")}, ${foreignersLaw.article("203", "Art. 203")} ust. 2a–2b та ${foreignersLaw.article("206", "Art. 206")}–${foreignersLaw.article("210", "210")} і перевірте їх разом з нормами про rezydent długoterminowy UE; не обмежуйтеся самим ${foreignersLaw.article("223", "Art. 223")}.`,
    },
  ],
})
