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
      article: "39",
      provisionId: "kpa-art-39",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює послідовність способів doręczenia: електронний канал як основний, далі publiczna usługa hybrydowa або уповноважені особи, а за неможливості — реєстрована пошта чи інше вручення.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Письмо доставляється на adres do doręczeń elektronicznych, якщо вручення не відбувається через konto системи organu або в його siedzibie.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "За неможливості електронного вручення organ переходить до publicznej usługi hybrydowej або уповноваженого вручення, а далі — до przesyłki rejestrowanej чи уповноважених осіб.",
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
