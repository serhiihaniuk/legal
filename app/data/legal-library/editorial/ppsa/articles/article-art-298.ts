import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-298",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 298 передбачає, що якщо akta неможливо відновити або відновлена частина недостатня для продовження postępowanie, skarga або środek odwoławczy можуть бути подані повторно протягом тридцяти днів від дня, коли postanowienie з цього питання стало prawomocne. В інших випадках суд продовжує postępowanie у можливому стані з урахуванням наявних і відновлених akt; на postanowienie щодо продовження доступне zażalenie.",
          sourceLocator: "Art. 298",
        },
      ],
      summary:
        "Наслідок неможливого або недостатнього odtworzenie різний: повторне подання skarga чи środka odwoławczego або продовження справи за наявними матеріалами.",
      rules: [
        {
          locator: "Art. 298 zdanie pierwsze",
          explanation:
            "Повторне подання можливе лише у названій ситуації і в тридцятиденний строк від prawomocność відповідного postanowienie.",
        },
        {
          locator: "Art. 298 zdanie drugie",
          explanation:
            "Якщо матеріалів достатньо для продовження, суд діє в стані, який можливо встановити, з урахуванням akt, що залишилися та були відновлені.",
        },
      ],
      legalEffect:
        "Стаття може відкрити шлях до повторного wniesienie, але лише після встановлення неможливості або недостатності akt; вона не поновлює автоматично всі попередні строки.",
      foreignersCase:
        "Якщо зникли akta справи іноземця про pobyt, зафіксуйте дату prawomocność postanowienie і його висновок про достатність матеріалів перед вирішенням між повторною skarga та продовженням.",
    },
  ]),
})
