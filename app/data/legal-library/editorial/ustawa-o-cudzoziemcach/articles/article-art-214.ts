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
      provisionId: "ustawa-o-cudzoziemcach-art-214",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Cudzoziemcowi відмовляють у наданні zezwolenia na pobyt rezydenta długoterminowego UE, якщо він не виконує вимоги ${foreignersLaw.article("211", "Art. 211")} ust. 1 або цього вимагають оборона, безпека держави чи безпека та porządek publiczny; на ці безпекові обставини не можна посилатися з економічних причин.`,
          sourceLocator: "Art. 214 ust. 1–2",
        },
      ],
      summary:
        "Стаття визначає дві групи матеріальних підстав відмови у статусі rezydent długoterminowy UE та забороняє економічну мотивацію безпекової підстави.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation: foreignersLaw.text`Спочатку перевірте сукупні вимоги ${foreignersLaw.article("211", "Art. 211")}, а не лише 5-річний строк.`,
        },
        {
          locator: "ust. 1 pkt 2, ust. 2",
          explanation:
            "Безпекова або public-order підстава має бути правовою, а не посиланням на економічний інтерес чи конкуренцію.",
        },
      ],
      legalEffect:
        "Виконання формальних умов не виключає відмову за доведеною безпековою підставою; економічна причина сама по собі не може замінити її.",
      foreignersCase: foreignersLaw.text`У рішенні розділіть невиконання умов ${foreignersLaw.article("211", "Art. 211")} і безпекову підставу, перевірте фактичні мотиви та не погоджуйтеся з чисто економічним обґрунтуванням під pkt 2.`,
    },
  ],
})
