import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-89",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 89 є виконаною нормою про зміну art. 121 § 9a Kodeksu karnego wykonawczego. Вона замінила посилання на попередній закон про сприяння зайнятості посиланням на закон від 20 березня 2025 року про умови допустимості доручення роботи іноземцям.",
          sourceLocator: "Art. 89",
        },
      ],
      summary:
        "Це технічна зміна відсилання у Kodeks karny wykonawczy. Вона забезпечила застосування нового закону там, де раніше згадувався скасований закон про сприяння зайнятості.",
      rules: [
        {
          locator: "Art. 89; art. 121 § 9a KKW",
          explanation:
            "У визначеному місці KKW старе посилання замінено на закон від 20 березня 2025 року про умови допустимості доручення роботи іноземцям.",
        },
      ],
      legalEffect:
        "Сам art. 89 не створює дозволу на роботу і не визначає індивідуального статусу іноземця; він лише змінює нормативне відсилання.",
      foreignersCase:
        "Якщо документ посилається на art. 121 § 9a KKW, читайте його з актуальним відсиланням і перевіряйте зміст пов'язаних норм, а не лише назву старого закону.",
    },
  ]),
})
