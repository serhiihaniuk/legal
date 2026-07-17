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
      provisionId: "ustawa-o-cudzoziemcach-art-157f",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("157f", "Art. 157f")} уповноважує ministra właściwego do spraw wewnętrznych встановити rozporządzeniem мінімальні кошти stażysta і його сім’ї на повернення/транзит та документи про можливість отримання цих коштів і коштів утримання за ${foreignersLaw.article("157a", "art. 157a")} ust. 1 pkt 1 lit. d.`,
          sourceLocator: "Art. 157f pkt 1–2",
        },
      ],
      summary:
        "Стаття є делегацією для фінансових порогів і доказових документів у процедурі stażysty.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Rozporządzenie визначає мінімальні кошти для cudzoziemiec та утримуваних членів сім’ї на повернення або транзит з урахуванням держави прибуття.",
        },
        {
          locator: "pkt 2",
          explanation: foreignersLaw.text`Розпорядження також визначає документи про можливість законно отримати кошти повернення та утримання за ${foreignersLaw.article("157a", "art. 157a")}.`,
        },
      ],
      legalEffect: foreignersLaw.text`Конкретну суму й перелік доказів встановлює rozporządzenie, а не сам текст ${foreignersLaw.article("157f", "art. 157f")}.`,
      foreignersCase:
        "Знайдіть чинне rozporządzenie для дати заяви, визначте державу повернення і перевірте докази коштів та можливості їх отримання.",
    },
  ],
})
