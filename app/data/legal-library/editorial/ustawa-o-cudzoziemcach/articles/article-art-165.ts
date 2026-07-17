import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-165",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("165", "Art. 165")} встановлює спеціальні правила odmowa для сімейних permit: фіктивний шлюб, сплив документа naukowiec у mobility-справі та окремі винятки щодо нелегального pobyt і наступної заяви.`,
          sourceLocator: "Art. 165 ust. 1–4",
        },
      ],
      summary:
        "Стаття розмежовує фіктивний шлюб, відмову в long-term mobility family permit та захисні винятки для окремих сімейних заявників.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Поза випадками ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5 відмовляють у сімейному дозволі польського громадянина або reunification permit подружжю, якщо шлюб укладено для обходу правил в'їзду, переїзду, pobyt або виїзду cudzoziemiec.`,
        },
        {
          locator: "ust. 1a",
          explanation: foreignersLaw.text`У дозволі за ${foreignersLaw.article("161b", "art. 161b")} ust. 1 відмовляють за випадками ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5, 8–9 або коли сплив строк документа pobyt чи довгострокової візи з adnotacją «naukowiec», виданих іншою державою UE для naukowiec, з яким перебуває член сім'ї.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Для kolejnego zezwolenia члену сім'ї польського громадянина або в połączenie з родиною не застосовується ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 8; виняток стосується лише саме наступного дозволу.`,
        },
        {
          locator: "ust. 3",
          explanation: foreignersLaw.text`Особі з ${foreignersLaw.article("158", "art. 158")} ust. 1 pkt 2 або ${foreignersLaw.article("160", "art. 160")} pkt 2 не можна відмовити, якщо єдиною причиною є її нелегальний pobyt у Польщі.`,
        },
        {
          locator: "ust. 4",
          explanation: foreignersLaw.text`Для члена сім'ї особи зі status uchodźca або ochroną uzupełniającą не застосовується ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 9, якщо сім'я вже існувала в країні походження, а родич був у Польщі в день подання заяви на міжнародний захист sponsor.`,
        },
      ],
      legalEffect:
        "Винятки обмежені названими категоріями, наступною заявою та фактами; вони не скасовують інші прямо застосовні підстави відмови.",
      foreignersCase:
        "У рішенні розділіть перевірку реальності шлюбу, строку документа naukowiec, першої чи наступної заяви та легальності pobyt; для винятку підготуйте докази складу сім'ї та дат міжнародного захисту.",
    },
  ],
})
