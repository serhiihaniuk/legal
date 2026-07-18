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
      provisionId: "ustawa-o-cudzoziemcach-art-456",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("456", "Art. 456")} дозволяє Szef Urzędu заблокувати доступ до krajowy zbiór rejestrów, ewidencji i wykazu w sprawach cudzoziemców до усунення nieprawidłowości, якщо в роботі або zabezpieczeniach zbioru виявлено порушення, що виникли з вини органів, які мають доступ через urządzenia telekomunikacyjne або systemy teleinformatyczne.`,
          sourceLocator: "Art. 456",
        },
      ],
      summary:
        "Стаття дає Szef Urzędu можливість тимчасово заблокувати доступ до національного zbiór, коли недоліки в роботі чи захисті пов’язані з виною органів, що мають дистанційний доступ.",
      rules: [
        {
          locator: "Art. 456",
          explanation:
            "Потрібні виявлені nieprawidłowości у функціонуванні або zabezpieczeniach zbioru, їхній зв’язок із виною органів-доступувачів та доступ через названі urządzenia або systemy.",
        },
        {
          locator: "Art. 456",
          explanation:
            "Szef Urzędu може заблокувати доступ на період до usunięcia stwierdzonych nieprawidłowości; текст не встановлює автоматичного блокування за самого факту перевірки.",
        },
      ],
      legalEffect: foreignersLaw.text`Це захід захисту системи та даних, прив’язаний до конкретних встановлених недоліків і вини органу. ${foreignersLaw.article("456", "Art. 456")} не визначає наперед тривалість блокування понад час, потрібний для усунення nieprawidłowości.`,
      foreignersCase:
        "У випадку блокування перевірте, які саме nieprawidłowości встановлено, кому вони приписані, яким доступом вони пов’язані та що вимагається для usunięcia; не робіть висновку про незаконність усіх даних лише з блокування.",
    },
  ],
})
