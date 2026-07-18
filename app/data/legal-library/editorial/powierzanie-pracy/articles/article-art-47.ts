import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-47",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("47", "Art. 47")} доповнює загальні вимоги з ${workLaw.article("9", "art. 9")} до заяви про сезонний дозвіл. У заяві треба вказати дату в’їзду до держав Шенгенської зони, дані про перебування іноземця в Польщі на день подання та правову підставу цього перебування. Польський суб’єкт також заявляє, хто забезпечує житло, а до заяви вносять відомості про передбачувану оплачувану відпустку.`,
          sourceLocator: "Art. 47 pkt 1–3",
        },
      ],
      summary:
        "Сезонна заява (wniosek) потребує додаткових даних, бо орган має оцінити не лише майбутню роботу, а й спосіб в’їзду, актуальну підставу перебування, житло та передбачувану відпустку.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Зазначте дату в’їзду до держав Шенгенської зони, статус іноземця в Польщі на день подання заяви та точну правову підставу перебування.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Польський суб’єкт подає заяву (oświadczenie), що забезпечує іноземцеві житло або, за наявними в нього відомостями, іноземець забезпечує його самостійно.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Заява також містить інформацію про передбачувану оплачувану відпустку іноземця.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("47", "Art. 47")} визначає зміст заяви й потрібних відомостей, але її подання не створює законного перебування (legalny pobyt) і саме по собі не замінює дозволу на роботу.`,
      foreignersCase:
        "Звірте дату перетину кордону, документ і підставу перебування, дані про житло та відпустку з фактичними обставинами. Зберігайте підтвердження, але не вважайте заяву самостійним документом перебування.",
    },
  ],
})
