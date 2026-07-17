import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-249",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 249 дозволяє cofnięcie przyznanego prawa pomocy повністю або частково, якщо виявиться, що обставин, на підставі яких його надано, не існувало або вони перестали існувати.",
          sourceLocator: "Art. 249",
        },
      ],
      summary:
        "Надане prawo pomocy не є незмінним: його можна cofnięcie в обсязі, що відповідає зміні або відсутності первісних обставин.",
      rules: [
        {
          locator: "Art. 249",
          explanation:
            "Порівняйте факти на момент przyznanie з фактичним станом, який встановлено пізніше: обставини могли не існувати від початку або могли припинитися.",
        },
        {
          locator: "Art. 249",
          explanation:
            "Перевірте, чи рішення стосується całkowite чи лише częściowe cofnięcie; сама зміна обставин не означає автоматично однаковий наслідок для всього права допомоги.",
        },
      ],
      legalEffect:
        "Стаття дозволяє припинити дію наданої допомоги повністю або частково, але не встановлює, що таке cofnięcie відбувається без окремого процесуального рішення.",
      foreignersCase:
        "Якщо у справі іноземця змінилися доходи, майно або сімейні обставини, порівняйте їх із даними, на яких ґрунтувалося postanowienie. Не приховуйте зміну стану і не припускайте, що первісне prawo pomocy автоматично зберігається в незмінному обсязі.",
    },
  ]),
})
