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
      provisionId: "ustawa-o-cudzoziemcach-art-354",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("354", "Art. 354")} встановлює wygasanie z mocy prawa рішення про гуманітарну або tolerowany згоду після надання захисту, набуття громадянства, письмової відмови, stały pobyt, а для tolerowany також після гуманітарної згоди.`,
          sourceLocator: "Art. 354 ust. 1–2",
        },
      ],
      summary:
        "Рішення про ці види згоди може припинитися автоматично за законом, коли виникає сильніший або несумісний правовий статус.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Вигасання настає при status uchodźcy, ochrona uzupełniająca, польське громадянство, письмове повідомлення про відмову від права або zezwolenie na pobyt stały.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Рішення про tolerowany pobyt додатково втрачає силу з дня надання zgoda na pobyt ze względów humanitarnych.",
        },
      ],
      legalEffect: foreignersLaw.text`Вигасання за законом відрізняється від cofnięcie рішення: вирішальною є дата події, прямо названої в ${foreignersLaw.article("354", "Art. 354")}.`,
      foreignersCase:
        "Встановіть дату надання нового статусу, громадянства або письмової відмови й перевірте, який документ побиту після цього є чинною підставою.",
    },
  ],
})
