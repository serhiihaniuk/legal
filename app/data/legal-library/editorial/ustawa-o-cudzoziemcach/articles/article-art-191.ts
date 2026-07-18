import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-191",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("191", "Art. 191")} виключає застосування точно перелічених підстав odmowa з ${foreignersLaw.article("100", "art. 100")} для окремих pkt ${foreignersLaw.article("186", "art. 186")} та ${foreignersLaw.article("187", "art. 187")}, а ust. 2 захищає повнолітнього cudzoziemiec у вузькому випадку, коли заява подана протягом року після повноліття і єдиною причиною була нелегальність pobyt.`,
          sourceLocator: "Art. 191 ust. 1–2",
        },
      ],
      summary: foreignersLaw.text`Захисні винятки ${foreignersLaw.article("191", "Art. 191")} залежать від конкретної підстави, виду наступної заяви, віку та строку подання; вони не є загальним імунітетом від odmowa.`,
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation: foreignersLaw.text`Підставу ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 9 не застосовують для ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 2 або ${foreignersLaw.article("187", "art. 187")} pkt 4.`,
        },
        {
          locator: "ust. 1 pkt 2–3",
          explanation: foreignersLaw.text`Пункт 8 ${foreignersLaw.article("100", "art. 100")} не застосовують у наступній заяві за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 3 або 4. Пункти 6 і 7 ${foreignersLaw.article("100", "art. 100")} не застосовують для pkt 3, 4, 6–9 ${foreignersLaw.article("186", "art. 186")}.`,
        },
        {
          locator: "ust. 1 pkt 4",
          explanation: foreignersLaw.text`Для ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 5 або ${foreignersLaw.article("187", "art. 187")} pkt 6–7 не застосовують ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 2, 3 і 6–9.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Особа, яка досягла повноліття під час pobyt у Польщі, має подати заяву протягом 1 року від цієї дати. Якщо szczególnie ważny interes і єдиною підставою відмови був нелегальний pobyt, відмовити не можна; інші причини залишаються можливими.",
        },
      ],
      legalEffect: foreignersLaw.text`Стаття точково обмежує відмову, а не скасовує всі умови ${foreignersLaw.article("186", "art. 186")}/${foreignersLaw.article("187", "art. 187")} чи всі пункти ${foreignersLaw.article("100", "art. 100")}; застосовність треба довести фактами конкретного pkt.`,
      foreignersCase: foreignersLaw.text`Випишіть точний pkt підстави, тип заяви (перша чи наступна), дату повноліття та всі пункти ${foreignersLaw.article("100", "art. 100")} у рішенні; перевірте, чи саме виняток ${foreignersLaw.article("191", "Art. 191")} блокує відмову.`,
    },
  ],
})
