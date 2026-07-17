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
      article: "62",
      provisionId: "kpa-art-62",
      reviewStatus: "reviewed",
      summary:
        "Стаття дозволяє вести одне спільне провадження щодо кількох сторін, коли їхні справи спираються на однаковий фактичний і правовий стан та належать одному organowi.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Połączenie spraw можливе лише за одночасної однаковості praw, tego samego stanu faktycznego, tej samej podstawy prawnej та właściwości tego samego organu.",
        },
      ],
      legalEffect:
        "За наявності всіх умов кілька індивідуальних справ можуть розглядатися в одному postępowaniu.",
      foreignersCase: kpaLaw.text`Це загальна процесуальна норма; у справах cudzoziemców спільний роботодавець або схожі документи самі по собі не виконують усіх умов ${kpaLaw.article("62", "art. 62")}.`,
    },
  ],
})
