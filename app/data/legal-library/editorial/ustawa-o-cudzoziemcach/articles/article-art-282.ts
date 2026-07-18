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
      provisionId: "ustawa-o-cudzoziemcach-art-282",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`До odbioru польського документа подорожі, польського документа особи та тимчасового польського документа подорожі застосовуються ${foreignersLaw.article("248", "Art. 248")} ust. 1–2a.`,
          sourceLocator: "Art. 282",
        },
      ],
      summary: foreignersLaw.text`Стаття поширює правила особистого отримання, отримання через належну особу та обов’язкової присутності з ${foreignersLaw.article("248", "Art. 248")} ust. 1–2a на три види документів.`,
      rules: [
        {
          locator: "zdanie 1",
          explanation: foreignersLaw.text`Застосовуйте виняток від особистого odbioru з ust. 1, правила для дитини до 13 років і повністю ubezwłasnowolniona особи з ust. 2 та вимогу їх присутності у випадках ust. 2a ${foreignersLaw.article("248", "Art. 248")}.`,
        },
      ],
      legalEffect: foreignersLaw.text`Відсилання стосується ${foreignersLaw.article("248", "Art. 248")} ust. 1–2a, але не поширює на ці документи правила ust. 3–5 про czytnik і документи, що пред’являються при odbiorze.`,
      foreignersCase: foreignersLaw.text`Перед отриманням конкретного документа уточніть, хто має прибути до органу. Не розширюйте відсилання автоматично на інші частини ${foreignersLaw.article("248", "Art. 248")}.`,
    },
  ],
})
