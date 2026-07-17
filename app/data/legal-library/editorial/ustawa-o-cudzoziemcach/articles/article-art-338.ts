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
      provisionId: "ustawa-o-cudzoziemcach-art-338",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("338", "Art. 338")} перелічує види kosztów, що входять до ${foreignersLaw.article("336", "Art. 336")}, і встановлює мінімальні добові ставки для pobyt у приміщенні для затриманих та strzeżony ośrodek або areszt.`,
          sourceLocator: "Art. 338 ust. 1–2",
        },
      ],
      summary:
        "До витрат повернення можуть входити адміністративне провадження, затримання, перебування під охороною, медичні послуги, транзит та доставлення до кордону або порту.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4a",
          explanation: foreignersLaw.text`Закон називає витрати провадження, перебування в місці для затриманих, strzeżony ośrodek або areszt, медичне обстеження та медичну/психологічну опіку (pkt 1–4a). До складу також входять визначені види doprowadzenie, czynności з ${foreignersLaw.article("325", "Art. 325")} і доправлення до кордону або порту (pkt 5a–6).`,
        },
        {
          locator: "ust. 1 pkt 5–6",
          explanation: foreignersLaw.text`Також охоплюються pomoc іншої держави ЄС під час tranzyt drogą powietrzną (pkt 5), doprowadzenie до названих місць або органів і czynności з ${foreignersLaw.article("325", "Art. 325")} (pkt 5a–5b), а також doprowadzenie до кордону чи порту (pkt 6).`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Витрати перебування визначаються ryczałt; мінімум становить 30 zł за день у приміщенні для затриманих і 20 zł за день у strzeżony ośrodek або areszt.",
        },
      ],
      legalEffect:
        "Стаття дає рамку складу витрат, але конкретна сума має бути обґрунтована рішенням і застосованими правилами розрахунку.",
      foreignersCase: foreignersLaw.text`Перевірте кожен рядок decyzja o kosztach за категоріями ${foreignersLaw.article("338", "Art. 338")}, кількість днів і застосовану ставку; не вважайте мінімальну ставку загальною фіксованою сумою.`,
    },
  ],
})
