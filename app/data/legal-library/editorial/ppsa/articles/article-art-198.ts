import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-198",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Правила розділу про окреме оскарження (zażalenie) відповідно застосовують до розпоряджень головуючого, якщо закон прямо дозволяє їх оскаржити в такий спосіб.",
          sourceLocator: "Art. 198",
        },
      ],
      summary:
        "Стаття поширює процедуру оскарження на визначені розпорядження головуючого (zarządzenia przewodniczącego).",
      rules: [
        {
          locator: "Art. 198",
          explanation:
            "Спершу знайдіть спеціальну норму, яка робить конкретне розпорядження (zarządzenie) оскаржуваним. Лише потім застосовуйте порядок цього розділу.",
        },
      ],
      legalEffect:
        "Сама назва «розпорядження» (zarządzenie) не створює права на окреме оскарження (zażalenie); потрібна пряма законна підстава.",
      foreignersCase:
        "У справі про перебування перевірте автора, предмет і підставу оскарження розпорядження, перш ніж рахувати семиденний строк.",
    },
  ],
})
