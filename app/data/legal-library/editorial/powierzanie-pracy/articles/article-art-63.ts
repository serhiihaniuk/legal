import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-63",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 63 вимагає сплатити збір (opłata) під час подання заяви про доручення роботи. Стаття визначає розподіл надходження, правило неповернення та верхню межу збору, конкретний розмір якого встановлює розпорядження.",
          sourceLocator: "Art. 63 ust. 1–4",
        },
      ],
      summary:
        "Збір за заяву надходить порівну до державного бюджету та бюджету повіту. Зазвичай його не повертають; закон називає вузькі винятки, пов'язані з окремими підставами відмови.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Заяву подають разом зі збором, а надходження ділять порівну між державним бюджетом і бюджетом повіту.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Збір не повертається, крім випадків, прямо перелічених у зв'язку з art. 65 ust. 1 pkt 3 або pkt 5.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Міністр визначає розмір збору розпорядженням, але він не може перевищувати 10% мінімальної заробітної плати. Враховуються тривалість роботи та орієнтовна середня вартість провадження.",
        },
      ],
      legalEffect:
        "Платіж є умовою подання, але його внесення не гарантує запису в реєстрі. Повернення можливе лише за прямо визначеною законом винятковою підставою.",
      foreignersCase:
        "До подання перевірте актуальний розмір збору і призначення платежу. Збережіть підтвердження сплати, але не розглядайте його як доказ позитивного результату.",
    },
  ]),
})
