import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-307",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 307 встановлює, що в день, коли decyzja o zobowiązaniu cudzoziemca do powrotu стає остаточною, z mocy prawa настає unieważnienie wizy krajowej, wygaśnięcie zezwolenia na pobyt czasowy, zezwolenia na pracę або wpisu oświadczenia o powierzeniu pracy; для рішення на підставі Art. 302 ust. 1 pkt 12–13 так само анулюється дозвіл малого прикордонного руху.",
          sourceLocator: "Art. 307 ust. 1–2",
        },
      ],
      summary:
        "Остаточне рішення про повернення автоматично впливає на названі національні візи, дозволи та окремі записи про працю.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Наслідки настають у день, коли рішення стає ostateczna, і охоплюють прямо перелічені документи та wpis.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для рішення, пов’язаного з перебуванням поза дозволеною зоною або строком малого прикордонного руху, анулюється відповідне zezwolenie.",
        },
      ],
      legalEffect:
        "Наслідки Art. 307 є автоматичними для названих документів, але спочатку потрібно встановити момент остаточності та точну підставу рішення.",
      foreignersCase:
        "Після doręczenie перевірте, чи рішення стало ostateczna, які саме документи були чинними та чи підпадають вони під перелік Art. 307.",
    },
  ]),
})
