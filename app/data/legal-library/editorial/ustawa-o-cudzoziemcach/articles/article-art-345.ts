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
      provisionId: "ustawa-o-cudzoziemcach-art-345",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("345", "Art. 345")} дозволяє potrącenie należności за koszty із zabezpieczenie pieniężne з ${foreignersLaw.article("398", "Art. 398")} ust. 2 pkt 2, застосовуючи ${foreignersLaw.article("344", "Art. 344")}, і забороняє повернення суми до рівня витрат, якщо борг не сплачено до виконання рішення.`,
          sourceLocator: "Art. 345 ust. 1–2",
        },
      ],
      summary:
        "Грошове забезпечення, внесене у процедурі, може бути використане для покриття витрат повернення, якщо іноземець не сплатив їх до виконання decyzja.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`До potrącenie із zabezpieczenie застосовуються правила ${foreignersLaw.article("344", "Art. 344")}, зокрема форма postanowienie та зажаленє.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Сума zabezpieczenie до розміру витрат з decyzja ${foreignersLaw.article("336", "Art. 336")} ust. 2 не повертається, якщо należność не сплачена до часу виконання decyzja o powrocie.`,
        },
      ],
      legalEffect:
        "Збереження забезпечення залежить від встановлених витрат і факту несплати; воно не є автоматичним штрафом поза межами цієї вимоги.",
      foreignersCase: foreignersLaw.text`З’ясуйте, чи є вимога остаточно встановленою, який розмір zabezpieczenie утримується та чи було надіслано postanowienie за ${foreignersLaw.article("344", "Art. 344")}.`,
    },
  ],
})
