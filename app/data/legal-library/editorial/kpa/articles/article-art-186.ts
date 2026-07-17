import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "186",
      provisionId: "kpa-art-186",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає безпосередній процесуальний наслідок sprzeciwu prokuratora: орган відкриває справу з уряду та повідомляє сторони. Sprzeciw не є готовим новим рішенням по суті.",
      rules: [
        {
          locator: "одне речення",
          explanation:
            "Після sprzeciwu орган z urzędu wszczyna postępowanie і повідомляє про це сторони.",
        },
      ],
      legalEffect:
        "Відкривається відповідне надзвичайне провадження; сторони отримують статус учасників і повідомлення про його початок.",
      foreignersCase:
        "Іноземець, якого стосується оскаржене прокурором рішення, має отримати zawiadomienie і може брати участь у подальшому дослідженні підстав перегляду.",
    },
  ],
})
