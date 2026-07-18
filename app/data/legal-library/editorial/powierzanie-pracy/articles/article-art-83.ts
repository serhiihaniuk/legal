import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-83",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 83 дозволяє створювати в повітових управліннях праці спеціалізовані пункти підтримки іноземців (punkty wspierania cudzoziemców), якщо це виправдано ситуацією на місцевому ринку праці.",
          sourceLocator: "Art. 83 ust. 1–2",
        },
      ],
      summary:
        "Такі пункти можуть інформувати про умови законної роботи та надавати правову й адміністративну допомогу щодо доступу до ринку праці. Стаття дозволяє їх створювати, але не вимагає, щоб такий пункт діяв у кожному повіті.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Спеціалізований пункт може бути створений у повітовому управлінні праці, якщо це обґрунтовано ситуацією на місцевому ринку праці.",
        },
        {
          locator: "ust. 2 pkt 1–2",
          explanation:
            "Мета пункту — надавати іноземцям інформацію про умови законної роботи та правову й адміністративну допомогу щодо доступу до ринку праці.",
        },
      ],
      legalEffect:
        "Пункт підтримки надає інформацію і допомогу, але не видає дозволів і не замінює компетентний орган.",
      foreignersCase:
        "Зверніться до свого повітового управління праці, щоб дізнатися, чи створено такий пункт. Відрізняйте консультаційну інформацію від рішення старости або воєводи.",
    },
  ]),
})
