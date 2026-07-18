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
      provisionId: "ustawa-o-cudzoziemcach-art-254",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Видача polskiego dokumentu podróży dla cudzoziemca не звільняє cudzoziemca від обов’язку вживати заходів для отримання власного dokumentu podróży, крім випадку, коли польський документ видано на підставі ${foreignersLaw.article("252a", "Art. 252a")}.`,
          sourceLocator: "Art. 254",
        },
      ],
      summary: foreignersLaw.text`Стаття зберігає обов’язок отримувати власний dokument podróży після видачі польського документа, але встановлює виняток для ${foreignersLaw.article("252a", "Art. 252a")}.`,
      rules: [
        {
          locator: "zdanie 1",
          explanation: foreignersLaw.text`Після видачі документа за ${foreignersLaw.article("252", "Art. 252")} потрібно продовжувати дії для отримання документа своєї держави.`,
        },
        {
          locator: "wyjątek",
          explanation: foreignersLaw.text`Виняток прямо стосується документа, виданого на підставі ${foreignersLaw.article("252a", "Art. 252a")}.`,
        },
      ],
      legalEffect: foreignersLaw.text`За загальним правилом польський документ не замінює обов’язок домагатися власного dokumentu podróży; виняток діє лише для документа, виданого на підставі ${foreignersLaw.article("252a", "Art. 252a")}.`,
      foreignersCase: foreignersLaw.text`Зберігайте листування з консульством або інші докази дій для отримання власного документа, якщо ваш польський документ видано не за ${foreignersLaw.article("252a", "Art. 252a")}.`,
    },
  ],
})
