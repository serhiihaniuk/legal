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
      provisionId: "ustawa-o-cudzoziemcach-art-190a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Поза випадками з ${foreignersLaw.article("99", "art. 99")} ${foreignersLaw.article("190a", "Art. 190a")} вимагає odmowy wszczęcia postępowania про zezwolenie за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 6 або 7, якщо на день заяви cudzoziemiec має дозвіл з ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для staż або просить чи має дозвіл з ${foreignersLaw.article("127", "art. 127")}.`,
          sourceLocator: "Art. 190a pkt 1–2",
        },
      ],
      summary:
        "Це процесуальна перешкода для початку провадження за заявою випускника або науковця, який після завершення навчання чи досліджень переходить до пошуку роботи або господарської діяльності; її оцінюють на день подання.",
      rules: [
        {
          locator: "частина вступна",
          explanation: foreignersLaw.text`Правило діє поза винятками з ${foreignersLaw.article("99", "art. 99")}; воно не є merytoryczna odmowa після перевірки диплома чи завершення досліджень.`,
        },
        {
          locator: "pkt 1–2",
          explanation: foreignersLaw.text`Перевірте, чи на день подання є дозвіл за ${foreignersLaw.article("139a", "art. 139a")} ust. 1 для staż, або заява на дозвіл з ${foreignersLaw.article("127", "art. 127")} чи вже чинний такий дозвіл.`,
        },
      ],
      legalEffect: foreignersLaw.text`Odmowa wszczęcia не відповідає висновку, що заявник не виконав матеріальні умови ${foreignersLaw.article("186", "art. 186")}; орган має застосувати саме процесуальний наслідок і дату, передбачені статтею.`,
      foreignersCase: foreignersLaw.text`На дату заяви зберіть реєстр усіх дозволів і заяв, перевірте виняток ${foreignersLaw.article("99", "art. 99")} та вимагайте виправлення, якщо орган переплутав odmowa wszczęcia з merytoryczna odmowa.`,
    },
  ],
})
