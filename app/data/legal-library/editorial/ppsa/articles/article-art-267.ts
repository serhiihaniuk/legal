import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-267",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA може ухвалою відмовитися приймати правову постанову (uchwała), зокрема коли немає потреби роз’яснювати сумніви.",
          sourceLocator: "Art. 267",
        },
      ],
      summary:
        "Стаття дозволяє завершити спеціальну процедуру без відповіді на правове питання.",
      rules: [
        {
          locator: "Art. 267",
          explanation:
            "Суд оцінює, чи справді існує потреба в авторитетному роз’ясненні. Формою відмови є ухвала (postanowienie).",
        },
      ],
      legalEffect:
        "Відмова не вирішує правове питання в бажаному ініціатором напрямі й не є правовою постановою (uchwała).",
      foreignersCase:
        "Якщо у справі іноземця посилаються на відмову, не подавайте її як позитивне тлумачення NSA; прочитайте мотиви й подальший рух конкретної справи.",
    },
  ],
})
