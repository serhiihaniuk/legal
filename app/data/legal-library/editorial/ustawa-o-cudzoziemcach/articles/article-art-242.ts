import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-242",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У період чинності karta pobytu підтверджує tożsamość іноземця під час перебування в Польщі та разом із dokumentem podróży дає право багаторазово перетинати кордон без отримання wizy.",
          sourceLocator: "Art. 242",
        },
        {
          kind: "practical-inference",
          text: "Для поїздки за кордон треба мати обидва документи й окремо перевірити чинність підстави перебування та правила в’їзду.",
          sourceLocator: "Art. 242",
        },
      ],
      summary:
        "Чинна karta pobytu є документом ідентифікації та, разом із документом подорожі, пов’язана з багаторазовим перетином кордону без окремої візи.",
      rules: [
        {
          locator: "zdanie 1",
          explanation:
            "Картка підтверджує особу лише протягом строку її чинності.",
        },
        {
          locator: "zdanie 2",
          explanation:
            "Для перетину кордону потрібні karta pobytu і dokument podróży; сама картка не є документом подорожі.",
        },
      ],
      legalEffect:
        "Стаття визначає доказове та прикордонне значення картки, але не гарантує в’їзд за відсутності інших умов або чинного документа подорожі.",
      foreignersCase:
        "Перед виїздом зіставте строк дії karty pobytu, документа подорожі та дозволу. На кордоні пред’являйте їх разом і не робіть висновок про право на працю лише з наявності картки.",
    },
  ],
})
