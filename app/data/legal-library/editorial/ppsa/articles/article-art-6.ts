import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-6",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 6 встановлює: «Sąd administracyjny w razie uzasadnionej potrzeby udziela stronom występującym w sprawie bez adwokata, radcy prawnego, doradcy podatkowego lub rzecznika patentowego niezbędnych pouczeń co do czynności procesowych i skutków ich zaniedbań».",
          sourceLocator: "Art. 6",
        },
      ],
      summary:
        "За обґрунтованої потреби sąd administracyjny дає стороні без професійного представника необхідні pouczenia про процесуальні дії та наслідки їх занедбання.",
      rules: [
        {
          locator: "Art. 6",
          explanation:
            "Потрібно відрізняти pouczenia про процес від представництва: стаття говорить про необхідні роз’яснення, коли є uzasadniona potrzeba.",
        },
      ],
      legalEffect:
        "Норма спрямована на процесуальне інформування сторони без переліченого професійного представника; вона сама не встановлює призначення adwokat чи гарантію результату.",
      foreignersCase:
        "Іноземець без adwokat або radca prawny має уважно зберегти отримані pouczenia і перевірити, які саме czynności procesowe та наслідки в них описані.",
    },
  ]),
})
