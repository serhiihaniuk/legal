import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-167",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Правила цього розділу відповідно застосовують до розпоряджень головуючого (zarządzenia przewodniczącego).",
          sourceLocator: "Art. 167",
        },
      ],
      summary:
        "Стаття визначає допоміжне джерело правил для ще однієї форми процесуального документа.",
      rules: [
        {
          locator: "Art. 167",
          explanation:
            "Спочатку встановіть, що документ є саме розпорядженням головуючого (zarządzenie przewodniczącego), а потім доберіть правило розділу, сумісне з його функцією.",
        },
      ],
      legalEffect:
        "Відповідне застосування не перетворює розпорядження на ухвалу й не дає автоматичного права на оскарження.",
      foreignersCase:
        "У справі про перебування прочитайте підпис і назву документа: помилка в класифікації веде до помилки у виборі строку та засобу реакції.",
    },
  ],
})
