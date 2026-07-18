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
      article: "49a",
      provisionId: "kpa-art-49a",
      reviewStatus: "reviewed",
      summary: kpaLaw.text`Стаття дозволяє organowi використовувати publiczne zawiadomienie у провадженні з більш ніж двадцятьма сторонами, навіть поза прямими випадками ${kpaLaw.article("49", "art. 49")}, за умовою попередження сторін.`,
      rules: [
        {
          locator: "zd. 1",
          explanation: kpaLaw.text`Organ може застосувати форму з ${kpaLaw.article("49", "art. 49 § 1")}, якщо у справі бере участь понад двадцять сторін.`,
        },
        {
          locator: "zd. 2–3",
          explanation: kpaLaw.text`За відсутності іншого спеціального правила publiczne zawiadomienie діє лише щодо сторін, письмово попереджених про такий спосіб; skutek визначається за ${kpaLaw.article("49", "art. 49 § 2")}.`,
        },
      ],
      legalEffect:
        "Після належного попередження багатостороння справа може перейти від індивідуальних вручень до публічних повідомлень.",
      foreignersCase:
        "Для звичайної заяви одного іноземця норма не застосовується; вона має значення лише у провадженні з понад двадцятьма сторонами.",
    },
  ],
})
