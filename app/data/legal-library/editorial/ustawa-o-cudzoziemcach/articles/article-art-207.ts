import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-207",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Перед decyzja про pobyt stały wojewoda запитує інформацію, чи в’їзд і pobyt cudzoziemca загрожують обороні, безпеці держави або безпеці й porządek publiczny, звертаючись до komendanta oddziału Straży Granicznej, komendanta wojewódzkiego Policji та Szefa ABW.",
          sourceLocator: "Art. 207 ust. 1–3",
        },
        {
          kind: "statute-text",
          text: "Інформація надається протягом 30 днів, у szczególnie uzasadniony przypadek строк може бути продовжено до 60 днів; за ненадання у строк вимога вважається виконаною. Для особи до 13 років ust. 1 не застосовується.",
          sourceLocator: "Art. 207 ust. 4–8",
        },
      ],
      summary:
        "Стаття регулює обов’язковий обмін інформацією про безпекові ризики перед рішенням щодо pobyt stały.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Запит до органів безпеки є етапом перевірки; у szczególnie uzasadniony przypadek його можна направити також іншим органам.",
        },
        {
          locator: "ust. 4–7",
          explanation:
            "Строк становить 30 днів або максимум 60 після продовження; пропуск строку означає виконання вимоги отримати інформацію, але не автоматичне надання zezwolenia.",
        },
        {
          locator: "ust. 8",
          explanation:
            "Особа, яка не досягла 13 років на день wniosku, звільнена саме від перевірки за ust. 1.",
        },
      ],
      legalEffect:
        "Норма організує міжвідомчу перевірку й строки, але сама не визначає, яким буде рішення про pobyt stały.",
      foreignersCase:
        "Відстежуйте дату запиту та можливого продовження, але не трактуйте відсутність відповіді органу як позитивний дозвіл; для дитини перевірте вік на дату wniosku.",
    },
  ],
})
