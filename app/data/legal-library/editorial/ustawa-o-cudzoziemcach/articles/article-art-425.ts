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
      provisionId: "ustawa-o-cudzoziemcach-art-425",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("425", "Art. 425")} ust. 1: «Cudzoziemcowi zwalnianemu ze strzeżonego ośrodka lub aresztu dla cudzoziemców wydaje się przekazane przez niego do depozytu» документи, гроші та предмети за умовами норми.`,
          sourceLocator: "Art. 425 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Повернення предмета залежить від того, чи він zabezpieczony на витрати, пов’язані з рішенням про повернення; це треба перевіряти за конкретним depozyt.",
          sourceLocator: "Art. 425 ust. 1–3",
        },
      ],
      summary:
        "При звільненні з depozyt повертають документи, гроші з урахуванням передбаченого potrącenie та предмети, якщо вони не забезпечують витрати виконання рішення про повернення.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Повертаються документи особи, гроші з урахуванням potrącenie за ${foreignersLaw.article("343", "Art. 343")} ust. 1 і предмети, не zabezpieczone для витрат рішення про повернення.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо після звільнення відбувається примусове виконання decyzja o zobowiązaniu do powrotu, визначені документи та предмети передаються при перетині кордону в установі Straży Granicznej або порту.",
        },
        {
          locator: "ust. 3",
          explanation:
            "За письмовим wniosek предмети можуть бути видані письмово уповноваженій особі або названій instytucja чи organizacja; витрати несе cudzoziemiec.",
        },
      ],
      legalEffect:
        "Стаття регулює повернення depozyt при звільненні та окремі випадки примусового виконання. Вона не гарантує повернення предмета, який законно zabezpieczony для витрат.",
      foreignersCase:
        "Звірте протокол depozyt, перелік zabezpieczonych предметів і суму potrącenie; за потреби подайте письмовий wniosek із даними уповноваженої особи.",
    },
  ],
})
