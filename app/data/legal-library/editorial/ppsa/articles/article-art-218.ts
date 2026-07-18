import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-218",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Головуючий може перевірити вказану в документі вартість предмета оскарження й для цього розпорядитися провести перевірочні дії.",
          sourceLocator: "Art. 218",
        },
      ],
      summary:
        "Стаття не дозволяє стороні остаточно визначити базу збору лише власною заявою.",
      rules: [
        {
          locator: "Art. 218",
          explanation:
            "Підготуйте документи, що пояснюють суму: рішення органу, розрахунок основної вимоги та відокремлення відсотків і витрат.",
        },
      ],
      legalEffect:
        "Після перевірки суд може виходити з іншої вартості, що вплине на належний збір за подання (wpis).",
      foreignersCase:
        "Якщо у справі іноземця вартість спірна, не ігноруйте розпорядження про перевірку (zarządzenie): надайте розрахунок і джерела кожної цифри.",
    },
  ],
})
