import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-284",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 284 встановлює, що wniesienie skarga o wznowienie не зупиняє виконання оскарженого orzeczenie; якщо заявник uprawdopodobni загрозу niepowetowana szkoda, суд може wstrzymać виконання, а postanowienie може бути видане на posiedzenie niejawnym і оскаржене zażalenie.",
          sourceLocator: "Art. 284",
        },
      ],
      summary:
        "Подання skarga o wznowienie саме по собі не зупиняє виконання orzeczenie, але суд може зробити це за умовою ймовірної непоправної шкоди.",
      rules: [
        {
          locator: "Art. 284 zdanie pierwsze",
          explanation:
            "До окремого рішення суду виконання оскарженого orzeczenie не зупиняється лише через подання skarga.",
        },
        {
          locator: "Art. 284 zdanie drugie–czwarte",
          explanation:
            "Заявник має uprawdopodobnić niepowetowana szkoda; суд може вирішити wstrzymanie на posiedzenie niejawnym, а postanowienie можна оскаржити zażalenie.",
        },
      ],
      legalEffect:
        "Захист від виконання є окремою дискреційною реакцією суду і не є наслідком самого wznowienie; його надання не вирішує скаргу по суті.",
      foreignersCase:
        "Якщо виконання рішення може вплинути на перебування іноземця, окремо обґрунтуйте конкретну niepowetowana szkoda і перевірте postanowienie суду. Не вважайте подання skarga дозволом залишатися в Польщі.",
    },
  ]),
})
