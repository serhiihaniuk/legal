import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-165",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Проміжну ухвалу, яка не завершує справу, можна скасувати або змінити через зміну обставин, навіть коли її вже оскаржено або вона набула законної сили.",
          sourceLocator: "Art. 165",
        },
      ],
      summary:
        "Норма дозволяє суду пристосувати проміжне процесуальне рішення до нової ситуації.",
      rules: [
        {
          locator: "Art. 165",
          explanation:
            "Потрібно показати саме нову обставину та її значення для ухвали. Повторення старих аргументів або проста незгода не є зміною обставин.",
        },
      ],
      legalEffect:
        "Скасування чи зміна можливі лише для ухвали, що не завершує провадження.",
      foreignersCase:
        "У справі про перебування додайте документ, який підтверджує нову обставину, і поясніть, як вона змінює потребу в попередній процесуальній ухвалі.",
    },
  ],
})
