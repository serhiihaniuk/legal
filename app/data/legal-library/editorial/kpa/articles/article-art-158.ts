import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "158",
      provisionId: "kpa-art-158",
      reviewStatus: "reviewed",
      summary:
        "Норма визначає форму завершення провадження щодо недійсності та наслідок, коли сама вада існує, але недійсність уже не можна встановити. Таке провадження не може завершитися мовчазно.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Питання nieważności вирішується decyzją; milczące załatwienie sprawy виключене.",
        },
        {
          locator: "§ 2",
          explanation: kpaLaw.text`Якщо перешкоди з ${kpaLaw.article("156", "art. 156 § 2")} не дозволяють визнати рішення недійсним, орган констатує, що рішення видане з порушенням права, і вказує причину відмови від недійсності.`,
        },
        {
          locator: "§ 3",
          explanation:
            "Після тридцяти років від вручення або оголошення рішення провадження щодо nieważności не відкривають.",
        },
      ],
      legalEffect:
        "Результатом є окреме рішення: про недійсність, про відсутність підстав або про видання з порушенням права; після 30 років діє заборона відкриття провадження.",
      foreignersCase:
        "У старій справі про дозвіл на pobyt потрібно розрізняти усунення рішення і лише констатацію його незаконності. Навіть доведена вада не завжди веде до stwierdzenia nieważności через часові або незворотні наслідки.",
    },
  ],
})
