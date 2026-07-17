import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-83",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 83 дозволяє створювати у powiatowych urzędach pracy спеціалізовані punkty wspierania cudzoziemców, якщо це виправдано ситуацією локального rynku pracy.",
          sourceLocator: "Art. 83 ust. 1–2",
        },
      ],
      summary:
        "Такі punkty можуть інформувати про умови legalna praca та надавати правову й адміністративну допомогу щодо доступу до rynku pracy. Стаття говорить про можливість створення, а не про обов'язкову мережу в кожному powiat.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Punkt може бути створений у powiatowy urząd pracy за обґрунтованої ситуації на місцевому ринку.",
        },
        {
          locator: "ust. 2 pkt 1–2",
          explanation:
            "Мета — інформація про legalna praca та юридично-адміністративна допомога у доступі до ринку.",
        },
      ],
      legalEffect:
        "Пункт підтримки надає інформацію і допомогу, але не видає автоматично zezwolenie і не замінює компетентний орган.",
      foreignersCase:
        "Зверніться до свого powiatowy urząd pracy, щоб дізнатися, чи створено такий punkt. Відокремлюйте консультаційну інформацію від рішення starosta або wojewoda.",
    },
  ]),
})
