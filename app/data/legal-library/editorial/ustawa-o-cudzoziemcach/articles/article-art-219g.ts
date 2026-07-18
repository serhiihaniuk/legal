import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-219g",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо в день особистої явки відбитки пальців неможливо взяти з причин, залежних від wojewoda, орган призначає новий строк для їх подання — не менше 7 днів від вручення wezwania.",
          sourceLocator: "Art. 219g",
        },
      ],
      summary:
        "Стаття захищає заявника від наслідків технічної або організаційної перешкоди на боці органу під час взяття відбитків.",
      rules: [
        {
          locator: "zdanie pierwsze",
          explanation:
            "Потрібно встановити, що іноземець з’явився особисто, а відбитки не взяли саме з причин, залежних від wojewoda.",
        },
        {
          locator: "zdanie drugie",
          explanation:
            "Новий строк обчислюється від doręczenia нового wezwania і не може бути коротшим за 7 днів.",
        },
      ],
      legalEffect:
        "Невдале взяття відбитків з вини органу не завершує обов’язок: wojewoda має надати новий належний строк.",
      foreignersCase:
        "Збережіть доказ явки та причини, через яку відбитки не взяли. Після нового wezwania обчисліть строк від дати його вручення й з’явіться повторно.",
    },
  ],
})
