import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-169",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Prawomocność orzeczenia за wniosek strony та у випадку, названому в ${ppsaLaw.article("286", "art. 286 § 1")}, встановлює WSA на posiedzenie niejawnym; postanowienie doręczaється лише стороні, яка подала wniosek, а postanowienie про prawomocność orzeczenia WSA може видати referendarz sądowy.`,
          sourceLocator: "Art. 169 § 1–2",
        },
      ],
      summary:
        "Стаття описує, хто і яким postanowienie встановлює prawomocność orzeczenie, та кому його вручають.",
      rules: [
        {
          locator: "§ 1",
          explanation: ppsaLaw.text`Перевірте, чи подано wniosek сторони або чи наявний випадок, названий через ${ppsaLaw.article("286", "art. 286 § 1")}; не додавайте до цієї статті інших умов, яких вона прямо не містить.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Для wyrok WSA postanowienie про prawomocność може видати referendarz sądowy; doręczenie за wniosek отримує заявник.",
        },
      ],
      legalEffect:
        "Postanowienie підтверджує prawomocność у процедурному порядку, але не змінює предмет і зміст самого orzeczenie.",
      foreignersCase:
        "Якщо у справі про pobyt потрібне підтвердження остаточності wyrok WSA, перевірте порядок wniosek і збережіть отримане postanowienie; воно не є новим рішенням про pobyt.",
    },
  ],
})
