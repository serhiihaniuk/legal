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
      provisionId: "ustawa-o-cudzoziemcach-art-157l",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("157l", "Art. 157l")} делегує ministrowi właściwemu do spraw wewnętrznych визначити в drodze rozporządzenia мінімальну суму коштів для cudzoziemiec, який виконує świadczenia як wolontariusz, і членів сім'ї на його утриманні, для повернення або транзиту, а також документи для підтвердження цих коштів і коштів на utrzymanie за ${foreignersLaw.article("157g", "art. 157g")} ust. 1 pkt 1 lit. c.`,
          sourceLocator: "Art. 157l pkt 1–2",
        },
      ],
      summary:
        "Стаття є делегацією для підзаконного акта: конкретну суму та перелік документів для волонтера визначає не сама стаття.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Rozporządzenie має встановити кошти для cudzoziemiec і членів сім'ї, які перебувають на його утриманні, на подорож до держави походження або проживання чи транзит до третьої держави, що дозволить в'їзд; сума може залежати від держави, з якої прибув cudzoziemiec.",
        },
        {
          locator: "pkt 2",
          explanation: foreignersLaw.text`Документи мають підтверджувати можливість законно отримати кошти з pkt 1 і кошти на utrzymanie за ${foreignersLaw.article("157g", "art. 157g")} ust. 1 pkt 1 lit. c; критерій — ефективна перевірка такої можливості, а не довільна довідка.`,
        },
      ],
      legalEffect:
        "Норма уповноважує міністра видати правила, але сама не встановлює розмір коштів і не створює самостійного права на дозвіл.",
      foreignersCase:
        "Для заяви волонтера визначте дату справи, знайдіть застосовне rozporządzenie та подайте документи саме його виду; окремо підтвердьте кошти на utrzymanie і повернення для кожного утриманця.",
    },
  ],
})
