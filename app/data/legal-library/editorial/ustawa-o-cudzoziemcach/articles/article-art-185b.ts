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
      provisionId: "ustawa-o-cudzoziemcach-art-185b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("185b", "Art. 185b")} вимагає відмовити у zezwolenie з ${foreignersLaw.article("185a", "art. 185a")} ust. 1, якщо cudzoziemiec не виконав його умови або виникла хоча б одна обставина з ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2–9.`,
          sourceLocator: "Art. 185b",
        },
      ],
      summary:
        "Сезонний zezwolenie відхиляється через невиконання будь-якої умови його надання або через перелічені загальні підстави.",
      rules: [
        {
          locator: "весь припис",
          explanation: foreignersLaw.text`Є дві самостійні групи причин: невиконання вимог ${foreignersLaw.article("185a", "art. 185a")} ust. 1 або факт із ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2–9; орган має вказати, яка саме причина встановлена.`,
        },
      ],
      legalEffect: foreignersLaw.text`Відмова є обов'язковою за доведення однієї з названих причин; сезонний zezwolenie na pracę сам по собі не усуває перевірку ${foreignersLaw.article("100", "art. 100")}.`,
      foreignersCase: foreignersLaw.text`У відповіді на wezwanie розкладіть докази за п'ятьма умовами ${foreignersLaw.article("185a", "art. 185a")} і перевірте кожен пункт ${foreignersLaw.article("100", "art. 100")}, наведений у проєкті рішення; не підміняйте відсутній документ загальним поясненням.`,
    },
  ],
})
