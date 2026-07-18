import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1860_URL = "https://eur-lex.europa.eu/eli/reg/2018/1860/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-359a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("359a", "Art. 359a")} регулює дії польського органу через Komendant Główny Policji, якщо інша держава Schengen внесла дані іноземця до SIS для цілей, визначених ${foreignersLaw.external("Art. 3 ust. 1 rozporządzenia nr 2018/1860", SIS_2018_1860_URL)}, тобто як wpis dotyczący powrotu.`,
          sourceLocator: "Art. 359a pkt 1–3",
        },
      ],
      summary:
        "Коли інша держава Schengen створила wpis dotyczący powrotu в SIS, польський орган проводить консультації або повідомляє цю державу про рішення щодо повернення чи гуманітарної згоди.",
      rules: [
        {
          locator: "pkt 1",
          explanation: foreignersLaw.text`Якщо іноземний запис пов’язаний із zakaz ponownego wjazdu, польський орган просить про консультації за ${foreignersLaw.external("Art. 9", SIS_2018_1860_URL)} ust. 1 rozporządzenia nr 2018/1860.`,
        },
        {
          locator: "pkt 2–3",
          explanation:
            "Орган повідомляє державу, що внесла дані, про рішення у справі повернення або гуманітарної згоди; якщо заборони в’їзду не було, повідомляється також намір або надання гуманітарної згоди.",
        },
      ],
      legalEffect:
        "Консультація та повідомлення не замінюють польського рішення та не роблять іноземний wpis dotyczący powrotu недійсним без дій компетентної держави. Не слід класифікувати цей запис як wpis do celów odmowy wjazdu i pobytu.",
      foreignersCase:
        "З’ясуйте, яка держава внесла SIS-запис і чи супроводжується він zakaz ponownego wjazdu; ці факти визначають подальший канал консультацій.",
    },
  ],
})
