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
      article: "39",
      provisionId: "kpa-art-39",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає основний електронний спосіб doręczenia, умови інших способів та окремі винятки. Перехід до реєстрованої пошти залежить від неможливості способу з першого параграфа та публічної гібридної послуги.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Письмо доставляється на adres do doręczeń elektronicznych, якщо вручення не відбувається через konto системи organu або в його siedzibie.",
        },
        {
          locator: "§ 2–3",
          explanation: kpaLaw.text`За неможливості вручення способом із ${kpaLaw.article("39", "§ 1")} орган використовує публічну гібридну послугу або вручення працівниками чи іншими уповноваженими особами або органами. Для способів із ${kpaLaw.article("39", "§ 3")}, реєстрованої пошти або уповноваженого вручення, потрібна неможливість способу з першого параграфа та гібридної послуги з ${kpaLaw.article("39", "§ 2 pkt 1")}. Норма не вимагає перед цим вичерпати також спроби вручення працівниками.`,
        },
        {
          locator: "§ 4",
          explanation: kpaLaw.text`Для названих негайно виконуваних decyzji, визначених службових справ або важливого публічного інтересу organ може одразу використати способи з ${kpaLaw.article("39", "§ 3")}.`,
        },
      ],
      legalEffect:
        "Правильний спосіб вручення визначає, чи письмо було skutecznie doręczone і чи почалися пов’язані з ним строки.",
      foreignersCase: kpaLaw.text`У справі іноземця слід встановити фактично використаний канал doręczenia та перевірити, чи він відповідав послідовності ${kpaLaw.article("39", "art. 39")}.`,
    },
  ],
})
