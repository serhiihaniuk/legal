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
      provisionId: "ppsa-art-227",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("227", "Art. 227 § 1")} допускає zażalenie на zarządzenie przewodniczącego та postanowienie wojewódzkiego sądu administracyjnego щодо kosztów sądowych, якщо сторона не подає środka odwoławczego щодо суті справи; ${ppsaLaw.article("227", "§ 2")} звільняє такі zażalenia від opłat sądowych.`,
          sourceLocator: "Art. 227 § 1–2",
        },
      ],
      summary:
        "Окреме zażalenie на рішення про koszty sądowe можливе за умов статті й не обкладається opłata sądowa.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Визначте, чи оскаржується саме zarządzenie przewodniczącego або postanowienie WSA про koszty і чи немає środka odwoławczego по суті справи.",
        },
        {
          locator: "§ 2",
          explanation: ppsaLaw.text`Для зажаленія, охопленого ${ppsaLaw.article("227", "§ 1")}, opłata sądowa не стягується.`,
        },
      ],
      legalEffect:
        "Норма встановлює названий процесуальний засіб і звільнення від opłata, але не гарантує задоволення зажаленія або зміну розподілу витрат.",
      foreignersCase:
        "У справі іноземця відокремте zażalenie на koszty від оскарження рішення про pobyt по суті та перевірте, яке саме рішення WSA або przewodniczącego отримано.",
    },
  ],
})
