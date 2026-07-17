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
      provisionId: "ustawa-o-cudzoziemcach-art-339",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("339", "Art. 339")} доручає міністру внутрішніх справ у porozumieniu з міністром фінансів визначити розрахунок витрат доправлення та добові ryczałt витрат перебування.`,
          sourceLocator: "Art. 339 ust. 1–2",
        },
      ],
      summary:
        "Детальні формули й ставки витрат повернення мають бути встановлені rozporządzenie, а закон визначає фактори, які треба враховувати.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Rozporządzenie визначає спосіб обчислення доправлення до кордону або порту та розмір добових ryczałt у місці затримання, strzeżony ośrodek або areszt.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Під час нормотворення враховуються вид транспорту, кількість супроводжувачів, довжина маршруту, харчування та проживання.",
        },
      ],
      legalEffect: foreignersLaw.text`Стаття є делегацією для розрахункових правил; конкретну суму треба звіряти з чинним rozporządzenie та decyzja, а не лише з ${foreignersLaw.article("339", "Art. 339")}.`,
      foreignersCase:
        "У спорі про суму витрат попросіть вказати чинний нормативний акт і формулу, використані органом; окремо перевірте маршрут, транспорт і кількість днів.",
    },
  ],
})
