import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-78",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо місце перебування сторони невідоме і їй треба вручити skarga, інше pismo, що вимагає захисту прав, або відповідне orzeczenie, вручення до її появи здійснюється лише kurator, призначеному sąd.",
          sourceLocator: "Art. 78",
        },
      ],
      summary:
        "За невідомого місця перебування захисні судові документи передаються kurator, а не довільній третій особі.",
      rules: [
        {
          locator: "Art. 78",
          explanation:
            "Визначте, чи pismo є skarga, іншим документом для захисту прав або orzeczenie, що вимагає захисту.",
        },
        {
          locator: "Art. 78",
          explanation:
            "До появи сторони, її przedstawiciel або pełnomocnik doręczenie здійснюється kurator, якого призначає sąd.",
        },
      ],
      legalEffect:
        "Спеціальний механізм покликаний не залишити сторону без процесуального захисту, але не встановлює місце фактичного проживання.",
      foreignersCase:
        "Якщо місце перебування cudzoziemiec у спорі невідоме, перевірте, чи sąd призначив kurator і чи pismo вручено саме йому.",
    },
  ]),
})
