import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-219f",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Wojewoda викликає іноземця подати документи, необхідні для підтвердження даних заяви та обставин, що обґрунтовують дозвіл, у строк не коротший ніж 14 днів від вручення wezwania.",
          sourceLocator: "Art. 219f zdanie pierwsze",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Визначаючи строк, wojewoda оцінює час, потрібний для отримання конкретного документа. Якщо докази були завантажені як електронні документи або цифрові копії за ${foreignersLaw.article("219d", "Art. 219d")} ust. 2, орган викликає подати їхні оригінали.`,
          sourceLocator: "Art. 219f zdanie drugie–trzecie",
        },
      ],
      summary:
        "Стаття встановлює спеціальне wezwanie для доказів у справі rezydenta długoterminowego UE та мінімальний строк на його виконання.",
      rules: [
        {
          locator: "zdanie pierwsze–drugie",
          explanation:
            "Мінімум становить 14 днів від doręczenia. Конкретний строк має враховувати реальний час отримання саме того документа, якого вимагає орган.",
        },
        {
          locator: "zdanie trzecie",
          explanation:
            "Завантажена копія допомагає розпочати доказування, але не усуває обов’язку подати оригінал, якщо wojewoda цього вимагає.",
        },
      ],
      legalEffect:
        "Wezwanie конкретизує, які факти ще не підтверджені, і відкриває строк на подання доказів або оригіналів.",
      foreignersCase:
        "Для кожного пункту wezwania зіставте факт, документ, установу-видавця й очікуваний строк отримання. Якщо 14 днів об’єктивно недостатньо, до спливу строку документально поясніть органу, скільки часу потрібно.",
    },
  ],
})
