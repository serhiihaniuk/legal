import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-308",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 308 для cudzoziemców і членів їхніх сімей, які мають право працювати за decyzja nr 1/80 Rady Stowarzyszenia Republiki Tureckiej i EWG, виключає застосування Art. 299–307, 310–321, 329 і 334–335 та встановлює застосування Rozdział 5 ustawy z 14 lipca 2006 r. про громадян ЄС і членів їхніх сімей.",
          sourceLocator: "Art. 308 pkt 1–2",
        },
      ],
      summary:
        "Стаття встановлює спеціальний режим для осіб, чиє право на працю випливає з decyzja nr 1/80, і відсилає до закону про громадян ЄС.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Для названої категорії не застосовуються перелічені положення про строки виїзду, повернення, заборону та виконання.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Замість цього застосовуються правила Rozdział 5 закону від 14 липня 2006 року.",
        },
      ],
      legalEffect:
        "Стаття змінює нормативний режим лише для чітко визначених бенефіціарів decyzja nr 1/80; самого громадянства або трудового договору для цього висновку недостатньо.",
      foreignersCase:
        "Встановіть, чи ваше право справді випливає з decyzja nr 1/80 та чи охоплює вас її персональний обсяг, перш ніж застосовувати правила про повернення з цієї ustawy.",
    },
  ]),
})
