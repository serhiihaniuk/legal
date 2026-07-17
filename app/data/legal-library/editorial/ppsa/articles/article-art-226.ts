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
      provisionId: "ppsa-art-226",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("226", "Art. 226 § 1–2")} встановлює трирічний строк przedawnienie: для права вимагати koszty sądowe — від дня, коли їх належало сплатити, а для права сторони вимагати повернення opłata або zaliczka — від виникнення цього права.`,
          sourceLocator: "Art. 226 § 1–2",
        },
      ],
      summary:
        "Право вимагати судові витрати або повернення opłata чи zaliczka обмежене трирічним строком, але початкова дата залежить від виду права.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Для вимоги про koszty sądowe відлічуйте строк від дня, коли витрати треба було сплатити.",
        },
        {
          locator: "§ 2",
          explanation:
            "Для вимоги сторони про повернення opłata або zaliczka шукайте день виникнення саме права на повернення.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("226", "Art. 226")} називає трирічний строк przedawnienie, але для обчислення потрібні документи, що встановлюють належний платіж або виникнення права на zwrot.`,
      foreignersCase:
        "Якщо іноземець просить повернути судовий платіж, зафіксуйте дату виникнення права на zwrot, а не лише дату переказу, і перевірте перебіг трирічного строку.",
    },
  ],
})
