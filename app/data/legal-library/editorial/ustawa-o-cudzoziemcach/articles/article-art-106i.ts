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
      provisionId: "ustawa-o-cudzoziemcach-art-106i",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("106i", "Art. 106i")} наказує wojewodzie umorzyć postępowanie, якщо заявник після належного wezwania не з’явився, не надав odcisków linii papilarnych або wzoru podpisu чи не показав належного документа тотожності. Закон одночасно виключає цей наслідок у прямо названих випадках з ${foreignersLaw.article("106b", "Art. 106b")}, ${foreignersLaw.article("106g", "Art. 106g")} і ${foreignersLaw.article("106h", "Art. 106h")}.`,
          sourceLocator: "Art. 106i ust. 1–2",
        },
      ],
      summary:
        "Це процесуальна санкція за невиконання особистого етапу, а не відмова через недоведення матеріальної умови zezwolenia na pobyt czasowy.",
      rules: [
        {
          locator: "Art. 106i ust. 1",
          explanation:
            "Перед umorzeniem organ має перевірити, чи немає ранішої підстави залишити заяву без розгляду, повернути її або відмовити у відкритті провадження, а також чи wezwanie було належним і яку саме дію не виконано.",
        },
        {
          locator: "Art. 106i ust. 2",
          explanation: foreignersLaw.text`Неявка не тягне цього наслідку для винятків з ${foreignersLaw.article("106h", "Art. 106h")}; відсутність відбитків або підпису оцінюється з урахуванням винятків ${foreignersLaw.article("106b", "Art. 106b")} та проблеми на боці organu з ${foreignersLaw.article("106g", "Art. 106g")}.`,
        },
      ],
      legalEffect:
        "Umorzenie закінчує це провадження без матеріального вирішення, але лише після встановлення всіх передумов і відсутності відповідного винятку.",
      foreignersCase:
        "Порівняйте wezwanie, підтвердження його doręczenia, доказ явки та фактично виконані дії. У скарзі важливо заперечувати конкретну передумову umorzenia, а не лише повторювати докази мети pobytu.",
    },
  ],
})
