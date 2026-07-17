import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-295",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 295 передбачає, що коли odtworzenie akt не можна провести способом попередніх статей, przewodniczący викликає сторони подати точні заяви щодо змісту зниклих або знищених pism та докази тверджень у них, включно з приватними odpisy, іншими pismami й notatki, які можуть допомогти відновити akta.",
          sourceLocator: "Art. 295",
        },
      ],
      summary:
        "Якщо офіційних копій недостатньо, суд переходить до з’ясування змісту втрачених pism через заяви сторін та доступні допоміжні матеріали.",
      rules: [
        {
          locator: "Art. 295",
          explanation:
            "Цей спосіб застосовується після того, як не спрацював порядок попередніх статей; у заяві потрібно точно описати зміст pism.",
        },
        {
          locator: "Art. 295",
          explanation:
            "Як докази можна вказувати приватні odpisy, інші pisma та notatki, але лише ті, що можуть допомогти відновити akta.",
        },
      ],
      legalEffect:
        "Заяви й приватні копії є матеріалом для odtworzenie, а не автоматично встановленою остаточною версією втрачених akt.",
      foreignersCase:
        "Якщо в судовій справі іноземця про pobyt відсутні офіційні копії, зберіть власні odpisy та notatki й чітко відокремте підтверджений зміст від припущень.",
    },
  ]),
})
