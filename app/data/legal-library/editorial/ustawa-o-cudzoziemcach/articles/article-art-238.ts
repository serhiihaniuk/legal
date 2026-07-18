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
      provisionId: "ustawa-o-cudzoziemcach-art-238",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`У разі винної втрати або винного знищення документів із ${foreignersLaw.article("226", "Art. 226")} pkt 1–3 і 5 opłata за їх обмін підвищується до 300% порівняно з opłaty, визначеними положеннями на підставі ${foreignersLaw.article("239", "Art. 239")} ust. 1.`,
          sourceLocator: "Art. 238",
        },
      ],
      summary:
        "Стаття встановлює підвищену opłata за обмін документа після винної втрати або знищення.",
      rules: [
        {
          locator: "Art. 238",
          explanation: foreignersLaw.text`Потрібні документ із ${foreignersLaw.article("226", "Art. 226")} pkt 1–3 або 5 та встановлена вина у його втраті чи знищенні; підвищення стосується opłata саме за wymianę.`,
        },
      ],
      legalEffect: foreignersLaw.text`За умовами ${foreignersLaw.article("238", "Art. 238")} плата за обмін підвищується до 300% базової opłata, встановленої на підставі ${foreignersLaw.article("239", "Art. 239")} ust. 1.`,
      foreignersCase: foreignersLaw.text`У справі визначте вид утраченого або знищеного документа, причину події та чи встановлена вина. Для wymianę перевірте базову opłata за ${foreignersLaw.article("239", "Art. 239")} і застосування підвищення за ${foreignersLaw.article("238", "Art. 238")}.`,
    },
  ],
})
