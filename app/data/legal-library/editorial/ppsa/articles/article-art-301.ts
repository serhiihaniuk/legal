import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-301",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 301 відсилає питання набрання чинності PPSA до ustawa z dnia 30 sierpnia 2002 r. — Przepisy wprowadzające ustawę — Prawo o ustroju sądów administracyjnych i ustawę — Prawo o postępowaniu przed sądami administracyjnymi; примітка до джерельного тексту зазначає, що ustawa wchodziła w życie 1 stycznia 2004 r. на підставі Art. 2 цієї ustawa wprowadzająca.",
          sourceLocator: "Art. 301 та przypisy 63–64",
        },
      ],
      summary:
        "Це кінцеве положення про набрання чинності, яке відсилає до окремого перехідного закону; у джерелі наведено дату 1 stycznia 2004 r.",
      rules: [
        {
          locator: "Art. 301",
          explanation:
            "Для питання wejście w życie звертайтеся до названої ustawa wprowadzająca, а не виводьте дату лише з номера Art. 301.",
        },
        {
          locator: "Przypis 63",
          explanation:
            "Джерельна примітка вказує на 1 stycznia 2004 r.; для подій минулого періоду все одно звіряйте перехідні положення відповідної редакції.",
        },
      ],
      legalEffect:
        "Art. 301 має історичну функцію визначення wejście w życie і не є самостійною підставою для сучасної процесуальної дії.",
      foreignersCase:
        "У справі іноземця не використовуйте Art. 301 як відповідь на сучасний строк чи право на pobyt; посилайтеся на нього лише для питання wejście w życie та перевірки застосовної редакції.",
    },
  ]),
})
