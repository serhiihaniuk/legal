import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-1",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("1", "Art. 1")} ust. 1 визначає предмет ustawy: умови доступу cudzoziemców до rynku pracy, właściwe organy та tryb postępowania. Ust. 2 відсилає правила в'їзду й pobytu у зв'язку з роботою та наслідки powierzenia роботи особі, яка перебуває нелегально, крім kar za wykroczenia з ${workLaw.article("84", "art. 84")} ust. 1 і 3, до окремих законів; ust. 3 передбачає спеціальні заходи aktywizacji та integracji, ust. 4 перелічує винятки із застосування ustawy, а ust. 5 уповноважує ministra właściwego do spraw pracy надавати wyjaśnienia для jednolitego stosowania ustawy.`,
          sourceLocator: "Art. 1 ust. 1–5",
        },
      ],
      summary:
        "Це положення окреслює межі ustawy o warunkach dopuszczalności powierzania pracy cudzoziemcom. Воно одночасно визначає її предмет, відсилає питання в'їзду та pobytu до окремих норм і називає винятки, зокрема для частини громадян ЄС, EFTA та осіб, охоплених Umową Wystąpienia.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Ustawa регулює доступ до polskiego rynku pracy та процедуру, але не є загальним актом про право в'їзду чи legalny pobyt. Окремо передбачені заходи активізації та інтеграції, що фінансуються з Fundusz Pracy.",
        },
        {
          locator: "ust. 4 pkt 1–6",
          explanation:
            "Перевірте, чи не належить випадок до винятків: серед них робота przedsiębiorcy, окремі дипломатичні функції, wolontariat, визначений staż, випадкова діяльність для іноземного podmiot та powierzenie роботи громадянам ЄС/EFTA або визначеним особам з Великої Британії.",
        },
        {
          locator: "ust. 5",
          explanation:
            "Wyjaśnienia ministra мають стосуватися jednolitego stosowania ustawy; вони не замінюють тексту ustawy та окремих правил про pobyt.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("1", "Art. 1")} визначає рамку трудового доступу, але сам по собі не надає cudzoziemiec права на legalny pobyt і не замінює потрібне zezwolenie na pracę або іншу підставу роботи.`,
      foreignersCase: workLaw.text`Спочатку зафіксуйте підставу pobytu, громадянство, фактичний вид роботи та статус podmiot. Потім перевірте, чи застосовується ця ustawa, чи діє виняток ${workLaw.article("1", "art. 1")} ust. 4; legalny pobyt і uprawnienie do pracy оцінюйте окремо.`,
    },
  ],
})
