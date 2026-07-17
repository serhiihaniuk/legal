import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-90",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 90 додає до art. 299 § 3 Ordynacja podatkowa можливість надавати wojewoda, starosta та minister właściwy do spraw pracy дані у межах проваджень про zezwolenie або oświadczenie.",
          sourceLocator: "Art. 90; art. 299 § 3 pkt 18–20 Ordynacja podatkowa",
        },
      ],
      summary:
        "Податкові дані можуть бути доступні компетентним органам для перевірки справ про permit na pracę, сезонний permit та wpis oświadczenie. Обсяг доступу прив'язаний до виду провадження кожного органу.",
      rules: [
        {
          locator: "Art. 90 pkt 18",
          explanation:
            "Wojewoda отримує доступ у межах проваджень про zezwolenia na pracę.",
        },
        {
          locator: "Art. 90 pkt 19–20",
          explanation:
            "Starosta — у справах сезонного zezwolenie або wpis oświadczenie; minister — у справах zezwolenia і oświadczenia.",
        },
      ],
      legalEffect:
        "Доступ до інформації допомагає встановлювати істотні обставини, але наявність podatkowe дані не є автоматичним доказом будь-якого висновку без оцінки справи.",
      foreignersCase:
        "Якщо дохід, podatek або zaległość стали частиною мотивів рішення, прослідкуйте, який орган і в межах якого провадження отримав дані та як їх витлумачив.",
    },
  ]),
})
