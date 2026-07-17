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
      article: "259",
      provisionId: "kpa-art-259",
      reviewStatus: "reviewed",
      summary:
        "Норма зобов'язує наглядові органи періодично оцінювати роботу зі skargami і wnioskami та використовувати результати для усунення причин скарг і покращення діяльності. Оцінювання має відбуватися щонайменше раз на два роки.",
      rules: [
        {
          locator: "§ 1",
          explanation: kpaLaw.text`Органи з ${kpaLaw.article("258", "art. 258")} проводять оцінку приймання й розгляду звернень не рідше одного разу на два роки.`,
        },
        {
          locator: "§ 2",
          explanation: "Параграф скасований і не містить чинного правила.",
        },
        {
          locator: "§ 3",
          explanation:
            "За результатами контролю органи прагнуть усунути причини skarg і використати wnioski для покращення роботи установ.",
        },
      ],
      legalEffect:
        "Нагляд не обмежується реєстрацією порушень: він має призводити до організаційних змін і усунення повторюваних причин звернень.",
      foreignersCase:
        "Повторювані skargi на роботу підрозділів у справах іноземців повинні враховуватися в таких оцінках. Стаття не дає окремій особі права вимагати певного результату її pobytowej sprawy.",
    },
  ],
})
