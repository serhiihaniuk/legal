import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "244",
      provisionId: "kpa-art-244",
      reviewStatus: "reviewed",
      summary:
        "Норма поширює на wnioski місячний строк, установлений для skarg, і вимагає повідомити заявника про результат. Вона не встановлює обов'язку прийняти запропоноване рішення.",
      rules: [
        {
          locator: "§ 1",
          explanation: kpaLaw.text`До строку розгляду wniosku застосовується ${kpaLaw.article("237", "art. 237 § 1")}: без зайвої затримки, не пізніше одного місяця.`,
        },
        {
          locator: "§ 2",
          explanation: "Про спосіб розгляду повідомляють wnioskodawcę.",
        },
      ],
      legalEffect:
        "Орган має в місячний строк опрацювати пропозицію й повідомити результат, навіть якщо її не приймає.",
      foreignersCase:
        "Місячний строк wniosku про покращення роботи urzędu не є строком видачі decyzji у справі про pobyt. Це два різні провадження.",
    },
  ],
})
