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
      provisionId: "ustawa-o-cudzoziemcach-art-220",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("220", "Art. 220")} має позначку «uchylony».`,
          sourceLocator: "Art. 220",
        },
      ],
      summary:
        "Стаття 220 у локальному тексті позначена як uchylony і не містить чинного правила для заявника.",
      rules: [
        {
          locator: "Art. 220",
          explanation:
            "Не виводьте з номера статті колишній зміст: локальний corpus містить лише позначку «uchylony».",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("220", "Art. 220")} не встановлює самостійного чинного обов’язку або права в редакції цього corpus.`,
      foreignersCase: foreignersLaw.text`Якщо документ або decyzja посилається на ${foreignersLaw.article("220", "Art. 220")}, перевірте, чи не йдеться про історичну редакцію або помилкове посилання, і шукайте чинну норму в актуальному тексті.`,
    },
  ],
})
