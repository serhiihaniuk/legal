import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "10",
      provisionId: "kpa-art-10",
      reviewStatus: "reviewed",
      summary:
        "Стаття гарантує стороні активну участь у кожній стадії провадження та можливість висловитися щодо доказів, матеріалів і заявлених вимог до винесення decyzji.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Орган забезпечує стороні участь протягом провадження і можливість зайняти позицію перед рішенням.",
        },
        {
          locator: "§ 2",
          explanation:
            "Відступ можливий лише через невідкладність, пов’язану з небезпекою для життя чи здоров’я або загрозою непоправної матеріальної шкоди.",
        },
        {
          locator: "§ 3",
          explanation:
            "Причини відступу від участі сторони organ повинен зафіксувати в актах у формі adnotacji.",
        },
      ],
      legalEffect:
        "Рішення не повинно спиратися на матеріал, щодо якого сторона без законної причини не могла висловитися.",
      foreignersCase: kpaLaw.text`У справі іноземця це право охоплює можливість ознайомитися з доказовою ситуацією і подати пояснення перед негативною decyzją, крім вузького винятку ${kpaLaw.article("10", "§ 2")}.`,
    },
  ],
})
