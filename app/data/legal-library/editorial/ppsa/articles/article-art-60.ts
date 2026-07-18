import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-60",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skarżący може відкликати skarga, і відкликання пов’язує sąd, але суд визнає його niedopuszczalne, якщо воно обходить право або залишило б у силі akt чи czynność, уражені nieważność.",
          sourceLocator: "Art. 60",
        },
      ],
      summary:
        "Відкликання skarga зазвичай має обов’язкову для суду силу, але не приймається у випадках обходу права або nieważność.",
      rules: [
        {
          locator: "Art. 60",
          explanation:
            "Skarżący може заявити cofnięcie skarga, але оцініть його наслідок для оскарженого акту.",
        },
        {
          locator: "Art. 60",
          explanation:
            "Sąd перевіряє, чи немає обходу prawa та чи не залишить відкликання в силі akt або czynność з wadą nieważności.",
        },
      ],
      legalEffect:
        "Cofnięcie може припинити спір, але не гарантує прийняття заяви судом у кожній ситуації.",
      foreignersCase:
        "Не відкликайте skarga щодо decyzja про pobyt лише через обіцянку органу: спочатку зафіксуйте нову decyzja і перевірте ризик втрати захисту.",
    },
  ]),
})
