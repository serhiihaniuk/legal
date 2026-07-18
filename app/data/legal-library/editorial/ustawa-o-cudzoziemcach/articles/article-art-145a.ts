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
      provisionId: "ustawa-o-cudzoziemcach-art-145a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("145a", "Art. 145a")}, крім випадків ${foreignersLaw.article("99", "art. 99")}, вимагає odmowa wszczęcia провадження про дозвіл для studia, якщо в день заяви cudzoziemiec має дозвіл ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для pracy як pracownik odbywający staż або ubiega się про дозвіл ${foreignersLaw.article("127", "art. 127")} чи вже його має.`,
          sourceLocator: "Art. 145a pkt 1–2",
        },
      ],
      summary:
        "Це правило стосується початку провадження про навчальний дозвіл, а не остаточної odmowa udzielenia після повного розгляду.",
      rules: [
        {
          locator: "pkt 1",
          explanation: foreignersLaw.text`На дату подання перевіряється наявність дозволу з ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для роботи як pracownik odbywający staż.`,
        },
        {
          locator: "pkt 2",
          explanation: foreignersLaw.text`На ту саму дату перевіряється, чи cudzoziemiec просить дозвіл з ${foreignersLaw.article("127", "art. 127")} або вже його має.`,
        },
      ],
      legalEffect:
        "Наслідком є odmowa wszczęcia у названих ситуаціях; стаття не означає довічної неможливості просити іншу підставу побиту.",
      foreignersCase:
        "Зафіксуйте всі дозволи й заяви саме на день подання заяви на studia та розрізняйте odmowa wszczęcia від odmowa udzielenia.",
    },
  ],
})
