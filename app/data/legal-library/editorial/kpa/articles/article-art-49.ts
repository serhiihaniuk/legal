import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "49",
      provisionId: "kpa-art-49",
      reviewStatus: "reviewed",
      summary:
        "Стаття дозволяє publiczne zawiadomienie через obwieszczenie, звично прийняте оголошення або BIP лише тоді, коли це передбачає спеціальний припис, і встановлює момент skuteczności.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Publiczna forma doręczenia допустима за прямою нормою спеціального закону і може стосуватися decyzji та інших дій organu.",
        },
        {
          locator: "§ 2",
          explanation:
            "Дата публікації зазначається в оголошенні, а zawiadomienie вважається здійсненим після чотирнадцяти днів від цієї дати.",
        },
      ],
      legalEffect:
        "Публічне оголошення може запустити процесуальні наслідки без індивідуального письма, але лише за законної підстави й після встановленого періоду.",
      foreignersCase:
        "У типовій індивідуальній справі про pobyt не слід припускати obwieszczenia автоматично; потрібна спеціальна норма, що його допускає.",
    },
  ],
})
