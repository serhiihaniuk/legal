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
      provisionId: "ustawa-o-cudzoziemcach-art-25a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("25a", "Art. 25a")} дозволяє komendantowi placówki Straży Granicznej впустити до Польщі beneficjenta ochrony czasowej, навіть якщо особа не виконує умов ${foreignersLaw.article("23", "Art. 23")} або ${foreignersLaw.article("25", "Art. 25")} ust. 1.`,
          sourceLocator: "Art. 25a",
        },
      ],
      summary:
        "Це спеціальна можливість допустити на в’їзд beneficjenta ochrony czasowej попри відсутність звичайних документальних або матеріальних умов.",
      rules: [
        {
          locator: "Art. 25a",
          explanation:
            "Спочатку треба підтвердити саме статус beneficjenta ochrony czasowej. Далі рішення приймає komendant placówki Straży Granicznej; формула «może zezwolić» не означає автоматичного пропуску.",
        },
      ],
      legalEffect:
        "Позитивне рішення усуває перешкоду для конкретного в’їзду, але саме по собі не створює іншого статусу pobytowego або права на працю.",
      foreignersCase:
        "На кордоні відокремте доказ статусу ochrony czasowej від документів, яких бракує за загальними правилами, і зафіксуйте, що виняток застосував саме компетентний орган Straży Granicznej.",
    },
  ],
})
