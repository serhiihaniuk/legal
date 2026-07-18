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
      provisionId: "ustawa-o-cudzoziemcach-art-157",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("157", "Art. 157")} уповноважує ministra właściwego do spraw wewnętrznych встановити rozporządzeniem мінімальні кошти на повернення для naukowiec та osoby в mobilność długoterminowa naukowca, а також документи про можливість отримання цих коштів і коштів утримання.`,
          sourceLocator: "Art. 157 pkt 1–3",
        },
      ],
      summary:
        "Стаття є делегацією для фінансових порогів і доказів у дослідницькому режимі; після неї починається блок про stażysta.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Розпорядження визначає мінімальні кошти naukowiec і утримуваних членів сім’ї на повернення до państwo pochodzenia/zamieszkania або транзит.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Для mobilność długoterminowa визначаються мінімальні кошти на повернення до держави UE, що видала документ або візу «naukowiec».",
        },
        {
          locator: "pkt 3",
          explanation: foreignersLaw.text`Можуть бути визначені документи, що підтверджують можливість законно отримати кошти повернення та утримання за ${foreignersLaw.article("151", "art. 151")} і ${foreignersLaw.article("151b", "art. 151b")}.`,
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("157", "Art. 157")} сам не називає суми; конкретні пороги й документи походять із відповідного rozporządzenie.`,
      foreignersCase: foreignersLaw.text`Визначте вид режиму — ${foreignersLaw.article("151", "art. 151")} чи ${foreignersLaw.article("151b", "art. 151b")} — і застосуйте чинне rozporządzenie до держави повернення, сім’ї та поданих доказів.`,
    },
  ],
})
