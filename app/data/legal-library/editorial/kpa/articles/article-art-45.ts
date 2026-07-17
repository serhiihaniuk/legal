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
      article: "45",
      provisionId: "kpa-art-45",
      reviewStatus: "reviewed",
      summary:
        "Стаття регулює doręczenie організаційним одиницям і громадським організаціям у їхній siedzibie уповноваженій особі та відповідне застосування awizo.",
      rules: [
        {
          locator: "zd. 1",
          explanation:
            "Письмо вручається в siedzibie до рук особи, уповноваженої приймати кореспонденцію.",
        },
        {
          locator: "zd. 2",
          explanation: kpaLaw.text`До таких адресатів відповідно застосовується ${kpaLaw.article("44", "art. 44")} про зберігання й skutek doręczenia.`,
        },
      ],
      legalEffect:
        "Належне вручення юридичному чи організаційному адресату не вимагає особистого odbioru керівником.",
      foreignersCase:
        "Коли учасником справи іноземця є роботодавець-компанія, доручення їй оцінюється за правилами для організаційної одиниці.",
    },
  ],
})
