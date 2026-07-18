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
      provisionId: "ustawa-o-cudzoziemcach-art-344",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("344", "Art. 344")} визначає орган, який здійснює potrącenie витрат, вказує, що potrącenie оформлюється postanowienie, і надає zażalenie до Komendant Główny Straży Granicznej.`,
          sourceLocator: "Art. 344 ust. 1–4",
        },
      ],
      summary:
        "Списання витрат із депозиту здійснює орган, який встановив їх суму, окремим postanowienie, яке можна оскаржити zażalenie.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Potrącenie виконує орган Straż Graniczna, що видав рішення про суму витрат; воно оформлюється postanowienie, на яке можна подати zażalenie до Komendant Główny.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Якщо депозит у іноземній валюті, для potrącenie береться середній курс NBP за день перед виданням postanowienie.",
        },
      ],
      legalEffect:
        "Postanowienie про списання є окремим процесуальним актом; його не слід плутати з decyzja, яка первісно встановила розмір витрат.",
      foreignersCase:
        "Перевірте дату doręczenie postanowienie, валютний курс NBP і строк для zażalenie; збережіть виписку про депозит та розрахунок.",
    },
  ],
})
