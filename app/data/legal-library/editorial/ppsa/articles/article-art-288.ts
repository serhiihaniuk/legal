import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-288",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 288 передбачає odtworzenie зниклих або знищених повністю чи частково akt. У справі, завершеній prawomocnie, відновленню підлягають kończące postępowanie orzeczenie та та частина akt, яка необхідна для встановлення його змісту і wznowienie postępowania.",
          sourceLocator: "Art. 288",
        },
      ],
      summary:
        "Стаття окреслює предмет odtworzenie akt і встановлює окремий, обмежений обсяг для вже остаточно завершеної справи.",
      rules: [
        {
          locator: "Art. 288 zdanie pierwsze",
          explanation:
            "Визначте, чи akta зникли або знищені повністю чи частково: саме такі akta є предметом odtworzenie.",
        },
        {
          locator: "Art. 288 zdanie drugie",
          explanation:
            "Для prawomocnie завершеної справи шукайте передусім kończące postępowanie orzeczenie та необхідну частину матеріалів для його змісту й wznowienie.",
        },
      ],
      legalEffect:
        "Відновлення акт не означає автоматичного wznowienie або зміни остаточного orzeczenie; стаття лише визначає, що може бути відновлено.",
      foreignersCase:
        "Якщо у справі іноземця про pobyt втрачено судові akta, відокремте відновлення їх змісту від окремого питання, чи існують підстави для wznowienie.",
    },
  ]),
})
