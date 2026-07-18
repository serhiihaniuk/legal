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
      provisionId: "ustawa-o-cudzoziemcach-art-271",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У tymczasowym polskim dokumencie podróży зазначаються дані іноземця, зокрема imię i nazwisko, дані народження, obywatelstwo, стать, зріст і колір очей; дані супроводжуваних дітей або інших małoletnich під його опікою (імена, дати, місця й країна народження, стать); назва органу, дані й підпис службової особи, дати та фотографії іноземця і супроводжуваних неповнолітніх.",
          sourceLocator: "Art. 271 ust. 1 pkt 1–12",
        },
        {
          kind: "statute-text",
          text: "Документ містить підпис posiadacza і може містити закодований запис даних з ust. 1 pkt 1–4 або 10.",
          sourceLocator: "Art. 271 ust. 2",
        },
      ],
      summary:
        "Стаття визначає реквізити tymczasowego polskiego dokumentu podróży, включно з даними та фотографіями супроводжуваних неповнолітніх.",
      rules: [
        {
          locator: "ust. 1 pkt 1–12",
          explanation:
            "При отриманні звірте особисті дані, реквізити видавача, строк і фотографії всіх супроводжуваних неповнолітніх.",
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Підпис і закодовані дані є частиною оформлення; вони не розширюють напрямок чи строк дії документа за ${foreignersLaw.article("269", "Art. 269")}–270.`,
        },
      ],
      legalEffect:
        "Стаття стандартизує ідентифікаційний зміст документа для короткої поїздки та супроводжуваних неповнолітніх.",
      foreignersCase:
        "Перед виїздом перевірте написання даних кожної супроводжуваної дитини й строк документа. Помилку повідомте органу до спроби перетину кордону.",
    },
  ],
})
