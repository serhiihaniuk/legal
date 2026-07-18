import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "113",
      provisionId: "kpa-art-113",
      reviewStatus: "reviewed",
      summary:
        "Орган може виправити очевидні письмові чи рахункові помилки та окремо роз’яснити сумнівний зміст власної decyzji.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Sprostowanie очевидної помилки відбувається postanowieniem з urzędu або на вимогу сторони.",
        },
        {
          locator: "§ 2",
          explanation:
            "Wyjaśnienie змісту видається postanowieniem на вимогу сторони або органу egzekucyjnego.",
        },
        {
          locator: "§ 3",
          explanation:
            "На postanowienie щодо sprostowania чи wyjaśnienia є zażalenie.",
        },
      ],
      legalEffect:
        "Технічний дефект або неясність усувається без нового вирішення суті справи.",
      foreignersCase:
        "У decyzji щодо іноземця цей режим не можна використовувати для прихованої зміни самого дозволу чи відмови; він стосується очевидних помилок і пояснення змісту.",
    },
  ],
})
