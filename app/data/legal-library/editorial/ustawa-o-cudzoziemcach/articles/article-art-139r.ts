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
      provisionId: "ustawa-o-cudzoziemcach-art-139r",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139r", "Art. 139r")} передбачає odmowa wszczęcia postępowania про zezwolenie за ${foreignersLaw.article("139o", "art. 139o")} за наявності певних zezwoleń або моделей роботи, а також якщо wniosek подано в день отримання Szef Urzędu zawiadomienie за ${foreignersLaw.article("139n", "art. 139n")} ust. 1 pkt 3 чи протягом наступних 14 днів.`,
          sourceLocator: "Art. 139r ust. 1–2",
        },
      ],
      summary:
        "Стаття визначає процесуальні перешкоди для довгострокового ICT-zezwolenia.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation: foreignersLaw.text`Провадження не починають при zezwolenie за ${foreignersLaw.article("144", "art. 144")} (ust. 1 pkt 1), ${foreignersLaw.article("151", "art. 151")} (pkt 2) або ${foreignersLaw.article("151b", "art. 151b")} (pkt 2a), відрядженні (pkt 3), działalność gospodarcza (pkt 4), роботі через agencja pracy tymczasowej/udostępnianie або przeniesieniu за посередництва відповідного podmiot (pkt 5).`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Також odmawia się wszczęcia, якщо wniosek подано в день отримання Szef Urzędu zawiadomienia за ${foreignersLaw.article("139n", "art. 139n")} ust. 1 pkt 3 або протягом наступних 14 днів (ust. 2).`,
        },
      ],
      legalEffect: foreignersLaw.text`Норма регулює початок провадження і не є самостійним висновком про те, що всі матеріальні умови ${foreignersLaw.article("139o", "art. 139o")} не виконані.`,
      foreignersCase: foreignersLaw.text`Порівняйте дату wniosku з датою zawiadomienie за ${foreignersLaw.article("139n", "art. 139n")} та перевірте статус і модель праці на дату подання.`,
    },
  ],
})
