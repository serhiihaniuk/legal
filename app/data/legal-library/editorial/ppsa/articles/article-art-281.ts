import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-281",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 281 передбачає, що на rozprawa суд насамперед вирішує dopuszczalność wznowienia; якщо немає ustawowa podstawa або строк wniesienia skarga не дотримано, суд odrzuci skargę. Після оцінки стану справи суд може поєднати перевірку допустимості з розглядом справи.",
          sourceLocator: "Art. 281",
        },
      ],
      summary:
        "Норма розставляє порядок перевірки skarga o wznowienie на rozprawa і допускає поєднання допустимості з розглядом за станом справи.",
      rules: [
        {
          locator: "Art. 281",
          explanation:
            "Спочатку встановіть наявність ustawowa podstawa і дотримання строку; лише після цього питання переходить до подальшого розгляду, якщо суд не поєднає етапи.",
        },
      ],
      legalEffect:
        "Odrzucenie за цією статтею стосується допустимості skarga, а не оцінки того, чи справді попереднє orzeczenie було неправильним по суті.",
      foreignersCase:
        "У справі про pobyt не плутайте rozprawa за Art. 281 із повторним розглядом усієї адміністративної історії. Зосередьтеся на конкретній підставі wznowienie та строку.",
    },
  ]),
})
