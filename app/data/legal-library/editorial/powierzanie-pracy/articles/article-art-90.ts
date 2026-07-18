import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-90",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 90 є виконаною нормою про зміну art. 299 § 3 Ordynacji podatkowej. Вона дозволила надавати податкові дані воєводам, старостам і міністрові, компетентному у справах праці, у межах визначених проваджень про дозволи або заяви про доручення роботи.",
          sourceLocator: "Art. 90; art. 299 § 3 pkt 18–20 Ordynacja podatkowa",
        },
      ],
      summary:
        "Податкові дані можуть бути надані компетентним органам у справах про дозволи на роботу, дозволи на сезонну роботу та внесення заяви про доручення роботи до реєстру. Обсяг доступу залежить від виду провадження і компетенції конкретного органу.",
      rules: [
        {
          locator: "Art. 90 pkt 18",
          explanation:
            "Воєвода отримує доступ у межах проваджень про дозволи на роботу.",
        },
        {
          locator: "Art. 90 pkt 19–20",
          explanation:
            "Староста отримує доступ у справах про дозволи на сезонну роботу або внесення заяв до реєстру, а міністр — у справах про дозволи на роботу і заяви про доручення роботи.",
        },
      ],
      legalEffect:
        "Доступ до інформації допомагає встановлювати істотні обставини, але самі податкові дані не доводять автоматично будь-якого висновку без оцінки в контексті справи.",
      foreignersCase:
        "Якщо дохід, податок або заборгованість стали частиною мотивів рішення, встановіть, який орган і в межах якого провадження отримав дані та як їх витлумачив.",
    },
  ]),
})
