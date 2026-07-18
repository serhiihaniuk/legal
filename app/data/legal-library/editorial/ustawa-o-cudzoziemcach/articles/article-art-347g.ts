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
      provisionId: "ustawa-o-cudzoziemcach-art-347g",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("347g", "Art. 347g")} регулює wpis до SIS, коли рішення про повернення видав minister właściwy do spraw wewnętrznych за ${foreignersLaw.article("329a", "Art. 329a")} ust. 1, і відсилає до ${foreignersLaw.article("347c", "Art. 347c")} ust. 1 pkt 2 i 7 та ${foreignersLaw.article("347d", "Art. 347d")}–${foreignersLaw.article("347f", "347f")}.`,
          sourceLocator: "Art. 347g ust. 1–2",
        },
      ],
      summary:
        "Для спеціального рішення міністра у справах, пов’язаних із підозрою на терористичну або шпигунську діяльність, діють окремі правила внесення та подальшого опрацювання SIS.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Komendant Główny Straży Granicznej вносить дані до SIS на wniosek, якщо рішення про повернення видав міністр за ${foreignersLaw.article("329a", "Art. 329a")} ust. 1.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "До такого випадку відповідно застосовуються названі правила про актуалізацію, видалення та консультації.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("347g", "Art. 347g")} не розширює самі підстави ${foreignersLaw.article("329a", "Art. 329a")}; він визначає SIS-наслідки вже виданого рішення.`,
      foreignersCase: foreignersLaw.text`З’ясуйте, чи рішення видано міністром саме за ${foreignersLaw.article("329a", "Art. 329a")} ust. 1, і відокремте питання SIS від оскарження рішення про повернення.`,
    },
  ],
})
