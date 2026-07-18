import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-76",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 76 визначає коло органів, яким на запит надають дані з центрального реєстру. Доступ має бути ідентифікованим, захищеним і контрольованим, а отримані дані можна зберігати лише стільки, скільки потрібно для провадження.",
          sourceLocator: "Art. 76 ust. 1–4",
        },
      ],
      summary:
        "Доступ мають лише перелічені законом органи, зокрема воєводи, старости, консули, Szef Urzędu do Spraw Cudzoziemców, PIP, Straż Graniczna, Policja, KAS, ZUS та визначені служби безпеки. Кожен із них отримує дані для конкретної законної мети.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Дані можуть отримувати органи, названі в пунктах 1–15, для відповідних справ про працю, перебування, візи, контроль, податки, страхування або завдання безпеки.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Доступ можливий, якщо система дає змогу встановити особу користувача, обсяг, дату і мету отримання даних, а також забезпечує безпеку, нагляд і реєстрацію доступу. Отримані дані зберігають не довше, ніж це потрібно для провадження.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Дані надають з інформаційної системи, яку веде міністр, компетентний у справах праці.",
        },
      ],
      legalEffect:
        "Стаття створює контрольований канал обміну даними, але не дає будь-якому органу загального доступу поза переліченою метою.",
      foreignersCase:
        "Якщо дані використані у вашій справі, перевірте орган, мету і зв'язок із предметом провадження. Питання захисту даних оцінюйте разом із конкретним способом їх отримання.",
    },
  ]),
})
