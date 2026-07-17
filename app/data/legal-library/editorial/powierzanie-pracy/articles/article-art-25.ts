import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-25",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("25", "Art. 25")} ust. 1 встановлює, що обов'язок cudzoziemiec виконувати дії за umowa cywilnoprawna або обов'язок виконувати роботу в Польщі wygasa на період, коли cudzoziemiec не відповідає умовам ${workLaw.article("3", "art. 3")} ust. 1–3, 5 і 6. Ust. 2 зберігає сторонам право на odszkodowanie, якщо відмова або uchylenie zezwolenie спричинені незбереженням należyta staranność, якщо спеціальні приписи або umowa не передбачають іншого.`,
          sourceLocator: "Art. 25 ust. 1–2",
        },
      ],
      summary: workLaw.text`Стаття регулює наслідок втрати умов доступу до роботи для договірного обов'язку та передбачає можливу вимогу odszkodowanie. Вона прив'язує наслідок до конкретних умов ${workLaw.article("3", "art. 3")}, а не до будь-якої проблеми з документами.`,
      rules: [
        {
          locator: "ust. 1",
          explanation: workLaw.text`На період невідповідності умовам ${workLaw.article("3", "art. 3")} ust. 1–3, 5 і 6 припиняється обов'язок виконувати роботу або дії за umowa cywilnoprawna в Польщі. Потрібно встановити, яка саме умова втрачена і коли.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Сторони зберігають право на odszkodowanie, коли відмова у видачі або uchylenie zezwolenie є результатом відсутності należyta staranność; спеціальний закон або текст umowa можуть змінити цей результат.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("25", "Art. 25")} обмежує виконання трудового обов'язку в період відсутності умов роботи, але не є самостійною нормою про надання legalnego pobytu. Наявність pobyt без потрібного uprawnienie do pracy не усуває цього наслідку.`,
      foreignersCase: workLaw.text`Встановіть точну підставу ${workLaw.article("3", "art. 3")}, період її дії та момент відмови або uchylenie. Зберігайте umowa і докази należyta staranność сторін, але не продовжуйте роботу лише тому, що документ pobyt ще чинний.`,
    },
  ],
})
