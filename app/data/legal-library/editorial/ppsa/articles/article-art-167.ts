import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-167",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Приписи цього розділу відповідно застосовуються до zarządzenia przewodniczącego.",
          sourceLocator: "Art. 167",
        },
      ],
      summary:
        "Норма поширює правила цього розділу на zarządzenia przewodniczącego у відповідному обсязі.",
      rules: [
        {
          locator: "Art. 167",
          explanation:
            "Спершу встановіть, що документ є саме zarządzenie przewodniczącego; лише тоді перевіряйте відповідні правила розділу.",
        },
      ],
      legalEffect:
        "Відповідне застосування не означає, що кожне zarządzenie має ідентичний режим wyrok або postanowienie.",
      foreignersCase:
        "Якщо в судовій справі про pobyt отримано zarządzenie przewodniczącego, класифікуйте його окремо й не припускайте автоматичної наявності środka zaskarżenia.",
    },
  ],
})
