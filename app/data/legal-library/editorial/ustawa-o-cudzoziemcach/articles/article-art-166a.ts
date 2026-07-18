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
      provisionId: "ustawa-o-cudzoziemcach-art-166a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Поза випадками з ${foreignersLaw.article("99", "art. 99")} ${foreignersLaw.article("166a", "Art. 166a")} вимагає odmowy wszczęcia postępowania щодо zezwolenie за ${foreignersLaw.article("161b", "art. 161b")} ust. 1, якщо на день заяви член сім'ї має дозвіл за ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для staż або просить чи вже має дозвіл за ${foreignersLaw.article("127", "art. 127")}.`,
          sourceLocator: "Art. 166a pkt 1–2",
        },
      ],
      summary:
        "Це правило стосується допустимості початку провадження, а не оцінки всіх матеріальних умов mobilność długoterminowa zezwolenie.",
      rules: [
        {
          locator: "частина вступна",
          explanation: foreignersLaw.text`Спочатку перевірте виняток «poza przypadkami» з ${foreignersLaw.article("99", "art. 99")}; лише поза ним діє обов'язок відмовити у wszczęciu.`,
        },
        {
          locator: "pkt 1",
          explanation: foreignersLaw.text`Перешкодою на день подання є чинний дозвіл з ${foreignersLaw.article("139a", "art. 139a")} ust. 1, наданий для роботи як pracownik odbywający staż.`,
        },
        {
          locator: "pkt 2",
          explanation: foreignersLaw.text`Такою перешкодою є також незавершена заява на дозвіл з ${foreignersLaw.article("127", "art. 127")} або вже наданий дозвіл за цією статтею. Вирішальною є ситуація саме в день подання.`,
        },
      ],
      legalEffect:
        "Odmowa wszczęcia припиняє розгляд на процесуальній стадії; вона відрізняється від merytoryczna odmowa після перевірки умов zezwolenie.",
      foreignersCase: foreignersLaw.text`Зафіксуйте всі дозволи й незавершені заяви члена сім'ї на дату подання, перевірте виняток з ${foreignersLaw.article("99", "art. 99")} і вимагайте від органу вказати, чому він обрав wszczęcie або odmowa wszczęcia.`,
    },
  ],
})
