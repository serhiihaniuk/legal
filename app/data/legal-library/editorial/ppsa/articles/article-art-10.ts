import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-10",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 10 передбачає: «Rozpoznanie spraw odbywa się jawnie, chyba że przepis szczególny stanowi inaczej».",
          sourceLocator: "Art. 10",
        },
      ],
      summary:
        "Розгляд справ є відкритим, якщо спеціальний припис не встановлює інше.",
      rules: [
        {
          locator: "Art. 10",
          explanation:
            "Jawność є правилом, але текст прямо залишає місце для іншого результату за спеціальним приписом.",
        },
      ],
      legalEffect:
        "Стаття встановлює загальну модель відкритого розгляду, не визначаючи тут усіх можливих винятків або способу їх застосування.",
      foreignersCase:
        "У справі про pobyt прочитайте повідомлення про posiedzenie і перевірте, чи є в ньому вказівка на відкритий або інший режим розгляду; не робіть висновок лише з назви засідання.",
    },
  ]),
})
