import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-68",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У дні, вільні від роботи за законом, та в pora nocna doręczenia можливі лише у виняткових випадках за попереднім zarządzenie prezesa sąd; pora nocna триває від 21:00 до 7:00.",
          sourceLocator: "Art. 68 § 1–2",
        },
      ],
      summary:
        "Час вручення обмежений у святкові дні та вночі, якщо немає виняткового дозволу prezesa sąd.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Для doręczenie у святковий час або вночі потрібні виняткові обставини та попереднє розпорядження.",
        },
        {
          locator: "§ 2",
          explanation: "Закон визначає pora nocna як 21:00–7:00.",
        },
      ],
      legalEffect:
        "Норма регулює час вручення, але не встановлює автоматичної недійсності кожної спроби без аналізу обставин.",
      foreignersCase:
        "Якщо дата doręczenie судового pismo у справі pobyt припала на ніч або święto, збережіть доказ часу для перевірки за art. 68.",
    },
  ]),
})
