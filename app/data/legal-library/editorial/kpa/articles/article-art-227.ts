import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "227",
      provisionId: "kpa-art-227",
      reviewStatus: "reviewed",
      summary:
        "Стаття описує предмет skargi: неналежну роботу органу чи працівника, порушення законності або інтересу скаржника, а також затягування і бюрократичний спосіб ведення справ. Перелік відкритий, бо закон використовує формулу w szczególności.",
      rules: [
        {
          locator: "перша група",
          explanation:
            "Skarga може стосуватися занедбання або неналежного виконання завдань компетентним органом чи його працівниками.",
        },
        {
          locator: "друга група",
          explanation:
            "Предметом можуть бути порушення praworządności або інтересів скаржника.",
        },
        {
          locator: "третя група",
          explanation:
            "Skarga може вказувати на przewlekłe або biurokratyczne załatwianie spraw.",
        },
      ],
      legalEffect:
        "Звернення з таким предметом розглядається в режимі skargowym, але саме по собі не змінює рішення в індивідуальній справі.",
      foreignersCase:
        "Іноземець може скаржитися на організацію і спосіб роботи urzędu, зокрема przewlekłość або порушення законності. Для зміни decyzji чи реакції на bezczynność потрібно паралельно користуватися належним процесуальним засобом.",
    },
  ],
})
