import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-153",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Ocena prawna і вказівки щодо подальшого postępowanie, викладені в рішенні суду, пов’язують у цій справі органи, чиї działanie, bezczynność або przewlekłość оскаржувалися, а також суди, якщо право не змінилося.",
          sourceLocator: "Art. 153",
        },
      ],
      summary:
        "Норма надає ocena prawna та вказівкам суду обов’язкове значення в тій самій справі за умови незмінності права.",
      rules: [
        {
          locator: "Art. 153",
          explanation:
            "Зіставте орган і суд із тією самою справою та перевірте, чи не змінилися przepisy prawa після рішення.",
        },
      ],
      legalEffect:
        "Зв’язаність стосується ocena prawna і вказівок у конкретній справі; вона не є гарантією будь-якого наперед визначеного рішення органу.",
      foreignersCase:
        "Якщо після skarga у справі про pobyt справу повернули органу, випишіть ocena prawna та wskazania з wyrok і звірте, чи орган діє в їх межах. Окремо перевірте можливі зміни права.",
    },
  ],
})
