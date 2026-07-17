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
      provisionId: "ustawa-o-cudzoziemcach-art-150",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("150", "Art. 150")} уповноважує ministra właściwego do spraw wewnętrznych визначити rozporządzeniem мінімальні кошти на повернення/транзит для cudzoziemiec і утримуваних членів сім’ї, а також документи, що підтверджують можливість отримати ці та кошти на утримання за ${foreignersLaw.article("144", "art. 144")}.`,
          sourceLocator: "Art. 150 pkt 1–2",
        },
      ],
      summary:
        "Стаття є делегацією для фінансових порогів і доказових документів у справах studia та мобільності studenta.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Розпорядження визначає мінімальні кошти на повернення до państwo pochodzenia або zamieszkania чи транзит до państwo trzecie з урахуванням держави прибуття.",
        },
        {
          locator: "pkt 2",
          explanation: foreignersLaw.text`Можуть бути визначені документи про можливість законно отримати кошти повернення/транзиту та кошти утримання за ${foreignersLaw.article("144", "art. 144")} ust. 1 pkt 2 lit. b.`,
        },
      ],
      legalEffect: foreignersLaw.text`Конкретні суми й документи походять із розпорядження; ${foreignersLaw.article("150", "art. 150")} сам не встановлює числового порога.`,
      foreignersCase: foreignersLaw.text`На дату заяви перевірте чинне rozporządzenie, державу повернення, склад сім’ї та відповідність поданих документів фінансовій вимозі ${foreignersLaw.article("144", "art. 144")} або ${foreignersLaw.article("149b", "art. 149b")}.`,
    },
  ],
})
