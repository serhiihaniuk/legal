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
      provisionId: "ustawa-o-cudzoziemcach-art-282",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`До odbioru польського документа подорожі, польського документа особи та тимчасового польського документа подорожі застосовуються ${foreignersLaw.article("248", "Art. 248")} ust. 1–2.`,
          sourceLocator: "Art. 282",
        },
      ],
      summary:
        "Стаття поширює базові правила особистого отримання та представництва дитини на три види документів.",
      rules: [
        {
          locator: "zdanie 1",
          explanation: foreignersLaw.text`Застосовуйте вимогу особистого odbioru; для особи до 13 років документ отримує przedstawiciel ustawowy або kurator за ${foreignersLaw.article("248", "Art. 248")} ust. 2.`,
        },
      ],
      legalEffect: foreignersLaw.text`Відсилання стосується лише ${foreignersLaw.article("248", "Art. 248")} ust. 1–2, а не всіх правил перевірки даних з ust. 3.`,
      foreignersCase: foreignersLaw.text`Перед отриманням конкретного документа уточніть, хто має прибути до органу. Не розширюйте відсилання автоматично на інші частини ${foreignersLaw.article("248", "Art. 248")}.`,
    },
  ],
})
