import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-93",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 93 замінює art. 6 ust. 1 pkt 1 ustawy o Karcie Polaka і відсилає право виконувати роботу до правил ustawa z 20 marca 2025 r.",
          sourceLocator: "Art. 93; art. 6 ust. 1 pkt 1 ustawy o Karcie Polaka",
        },
      ],
      summary:
        "Для особи з Karta Polaka посилання про виконання роботи тепер узгоджене з новою ustawa про допустимість powierzanie pracy. Сам факт Karta Polaka треба читати разом із чинним текстом цієї ustawa та іншими умовами.",
      rules: [
        {
          locator: "Art. 93",
          explanation:
            "У визначеному пункті Karta Polaka слова про роботу замінені на wykonywanie pracy на zasadach określonych у новій ustawa.",
        },
      ],
      legalEffect:
        "Стаття узгоджує правову підставу та не є окремим новим zezwolenie; обсяг права випливає з правил, на які зроблено відсилання.",
      foreignersCase:
        "Пред'являючи Karta Polaka, перевірте актуальну підставу доступу до ринку праці та умови конкретної роботи. Не покладайтеся лише на старе формулювання art. 6.",
    },
  ]),
})
