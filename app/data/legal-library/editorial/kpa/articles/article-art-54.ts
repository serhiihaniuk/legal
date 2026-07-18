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
      article: "54",
      provisionId: "kpa-art-54",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює обов’язковий зміст wezwania та вимогу підпису працівника, який його видає.",
      rules: [
        {
          locator: "§ 1 pkt 1–3",
          explanation:
            "Wezwanie вказує organ, адресата, справу, процесуальну роль і мету виклику.",
        },
        {
          locator: "§ 1 pkt 4–6",
          explanation:
            "Письмо визначає спосіб виконання, строк або дату, час і місце явки та правові наслідки невиконання.",
        },
        {
          locator: "§ 1a–2",
          explanation:
            "Wezwanie містить належну інформацію RODO, якщо адресат її ще не має, і підпис працівника з ім’ям, прізвищем та посадою.",
        },
      ],
      legalEffect:
        "Адресат повинен отримати достатньо конкретне wezwanie, щоб знати, хто, навіщо, як і до якого моменту вимагає дії та який наслідок можливий.",
      foreignersCase: kpaLaw.text`У sprawie pobytowej кожну вимогу wezwania слід зіставити з цими елементами; нечіткий перелік без способу, строку або наслідку не відповідає повному змісту ${kpaLaw.article("54", "art. 54")}.`,
    },
  ],
})
