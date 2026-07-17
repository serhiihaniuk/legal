import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-80",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 80 вимагає реалізувати program aktywizacyjny на підставі umowa і перелічує її істотні умови щодо учасників, дій, результатів, коштів, контролю, змін та розірвання.",
          sourceLocator: "Art. 80 ust. 1–2",
        },
      ],
      summary:
        "Umowa має перетворити конкурсну пропозицію на контрольований план: скільки cudzoziemiec охоплено, що і коли робиться, як вимірюється результат, коли передаються та повертаються кошти.",
      rules: [
        {
          locator: "ust. 1–2 pkt 1–4",
          explanation:
            "Умова визначає кількість учасників, zakres і період дій, очікувані ефекти з mierniki та суму і порядок передачі коштів Fundusz Pracy.",
        },
        {
          locator: "ust. 2 pkt 5–9",
          explanation:
            "Також фіксуються розрахунок, повернення невикористаних коштів, контроль і monitoring, умови зміни або rozwiązania та додаткові положення оголошення.",
        },
      ],
      legalEffect:
        "Права та обов'язки realizator визначаються укладеною umowa в межах art. 80, а не лише фактом перемоги в konkurs.",
      foreignersCase:
        "Перед підписанням перевірте mierniki, правила розрахунку й повернення коштів та порядок контролю. Для навчальної програми окремо фіксуйте кількість учасників і фактичні результати.",
    },
  ]),
})
