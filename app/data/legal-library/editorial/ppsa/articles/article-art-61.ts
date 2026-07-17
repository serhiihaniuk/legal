import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-61",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Wniesienie skarga саме по собі не зупиняє виконання aktu або czynność; орган у визначених категоріях, а після передачі skarga також sąd, можуть зупинити виконання, зокрема при небезпеці znaczna szkoda або trudne do odwrócenia skutki, із передбаченими винятками.",
          sourceLocator: "Art. 61 § 1–6",
        },
      ],
      summary:
        "Подання skarga не дорівнює автоматичному wstrzymanie виконання; потрібне окреме рішення органу або sąd і перевірка винятків.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Не виходьте з автоматичної зупинки: орган може з urzędu або на wniosek skarżący зупинити decyzja/postanowienie, інші акти чи окремі uchwały, але діють винятки, зокрема rygor natychmiastowej wykonalności, спеціальне виключення закону та чинні przepisy prawa miejscowego.",
        },
        {
          locator: "§ 3",
          explanation:
            "Після передачі skarga sąd може на wniosek skarżący зупинити акт або czynność повністю чи частково, якщо є небезпека znaczna szkoda або trudne do odwrócenia skutki; відмова органу не позбавляє права звернутися до sąd.",
        },
        {
          locator: "§ 4–5",
          explanation:
            "Sąd може в будь-який час змінити або скасувати wstrzymanie при зміні обставин; postanowienie за § 3–4 може бути видане на posiedzenie niejawne.",
        },
        {
          locator: "§ 6",
          explanation:
            "Wstrzymanie припиняється в день судового рішення, що враховує skarga, або з моменту prawomocność рішення, що її відхиляє.",
        },
      ],
      legalEffect:
        "Wstrzymanie є тимчасовим процесуальним захистом і не є остаточним рішенням про законність aktu; його надання залежить від виду предмета, винятків і доведених ризиків.",
      foreignersCase:
        "Якщо decyzja про pobyt створює ризик виконання до розгляду skarga, подайте окремий wniosek про wstrzymanie та опишіть шкоду й незворотні наслідки.",
    },
  ]),
})
