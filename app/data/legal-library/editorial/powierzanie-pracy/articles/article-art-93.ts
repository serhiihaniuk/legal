import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-93",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 93 є виконаною нормою про зміну art. 6 ust. 1 pkt 1 закону «ustawa o Karcie Polaka». Правило про право власника Карти поляка (Karta Polaka) на роботу тепер відсилає до закону від 20 березня 2025 року про умови допустимості доручення роботи іноземцям.",
          sourceLocator: "Art. 93; art. 6 ust. 1 pkt 1 ustawy o Karcie Polaka",
        },
      ],
      summary:
        "Для власника Карти поляка посилання про виконання роботи узгоджено з новим законом про допустимість доручення роботи іноземцям. Практичний обсяг права треба визначати за чинним текстом цього закону та іншими умовами конкретної ситуації.",
      rules: [
        {
          locator: "Art. 93",
          explanation:
            "У визначеному пункті закону про Карту поляка право на роботу сформульовано як виконання роботи за правилами закону від 20 березня 2025 року.",
        },
      ],
      legalEffect:
        "Стаття узгоджує правове відсилання і сама не створює нового дозволу. Обсяг права випливає з норм, до яких вона відсилає.",
      foreignersCase:
        "Пред’являючи Карту поляка, перевірте актуальну підставу доступу до ринку праці та умови конкретної роботи. Не покладайтеся лише на попереднє формулювання art. 6.",
    },
  ]),
})
