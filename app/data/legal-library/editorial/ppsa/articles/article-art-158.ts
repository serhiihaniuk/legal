import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-158",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Суд, який видав рішення, ухвалою усуває сумніви щодо змісту цього рішення; питання може бути розглянуте на закритому засіданні (posiedzenie niejawne).",
          sourceLocator: "Art. 158",
        },
      ],
      summary:
        "Це процедура офіційного роз’яснення неясного формулювання судового рішення.",
      rules: [
        {
          locator: "Art. 158",
          explanation:
            "Покажіть, яка саме фраза допускає різні прочитання. Заява про тлумачення (wykładnia) не служить для зміни результату чи додавання нової вимоги.",
        },
      ],
      legalEffect:
        "Ухвала пояснює зміст наявного рішення, але не замінює апеляційного контролю.",
      foreignersCase:
        "Якщо орган і сторона по-різному читають обов’язок після рішення у справі про перебування, спершу сформулюйте конкретну неясність, а не повторюйте аргументи скарги.",
    },
  ],
})
